import React, { useEffect, useState } from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";
import { TypeDates, TypeTableMarks, TypeTopic } from "@type/types";
import { useAuth } from "@hooks/useAuth";
import { getDates, getTopic } from "@utils/teacherNetwork";
import ModalTypeLesson from "@components/TeacherPage/TableMarks/TableHeader/ModalTypeLesson";
import PopoverLessonType from "@components/TeacherPage/TableMarks/TableHeader/PopoverLessonType";
import styled from "styled-components";

type InputProps = {
  width?: string;
  cursor?: string;
  border?: string;
  p?: string;
};

const StyledTableCell = styled(TableCell)<InputProps>(
  ({ width, cursor, border, p }) => ({
    width: width,
    cursor: cursor,
    borderLeft: border,
    p: p,
  })
);

const TableHeader: React.FC<TypeTableMarks> = (props) => {
  const { discipline, lessonType, startDate, endDate } = props;
  const { id, group } = useAuth();
  const [dates, setDates] = useState<TypeDates[]>([]);

  // Стэйты для модального окна
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [idSchedule, setIdSchedule] = useState<number>();
  const [dateSchedule, setDateSchedule] = useState<string>();

  // Стэйты для просмотра вида урока и темы урока
  const [popover, setPopover] = useState<HTMLElement | null>(null);
  const [topic, setTopic] = useState<TypeTopic>({
    lesson_type: "",
    topic: "",
  });

  useEffect(() => {
    getDates(props, group, id).then((res) => setDates(res));
  }, [discipline, lessonType, startDate, endDate]);

  const openPopover = (event: React.MouseEvent<HTMLElement>, id: number) => {
    setPopover(event.currentTarget);
    getTopic(id).then((res) => setTopic(res));
  };

  const closePopover = () => setPopover(null);

  const openModal = (date: string, id: number) => {
    setIsModalOpen(true);
    setIdSchedule(id);
    setDateSchedule(date);
  };

  return (
    <>
      <TableHead>
        <TableRow>
          <StyledTableCell width="215px">Учащийся</StyledTableCell>
          {dates.map(({ shedule_id, cur_date }) => {
            return (
              <StyledTableCell
                onClick={() => openModal(cur_date, shedule_id)}
                onMouseEnter={(e) => openPopover(e, shedule_id)}
                onMouseLeave={closePopover}
                cursor="pointer"
                align="center"
                key={shedule_id}
              >
                {cur_date.slice(0, -5)}
              </StyledTableCell>
            );
          })}
          <PopoverLessonType
            popover={popover}
            closePopover={closePopover}
            text={topic}
          />
          <StyledTableCell
            border="1px solid #ccc"
            p="0px"
            width="150px"
            align="center"
          >
            Средняя оценка
          </StyledTableCell>
        </TableRow>
      </TableHead>

      <ModalTypeLesson
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        idSchedule={idSchedule!}
        date={dateSchedule!}
      />
    </>
  );
};

export default TableHeader;
