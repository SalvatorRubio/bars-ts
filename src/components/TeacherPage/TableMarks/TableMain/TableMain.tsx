import React, { useEffect, useState } from "react";
import {
  TypeAbsoluteKnowledge,
  TypeQualityKnowledge,
  TypeMarksAndStudents,
  TypeTableMarks,
} from "@type/types";
import { useAuth } from "@hooks/useAuth";
import { getKnowledgeStatistics, getMarks } from "@utils/teacherNetwork";
import { GET_ABSOLUTE_KNOWLEDGE, GET_QUALITY_KNOWLEDGE } from "@constants/api";
import MarksList from "@components/TeacherPage/TableMarks/TableMain/MarksList";
import { TableBody, TableCell, TableRow } from "@mui/material";

const TableMain: React.FC<TypeTableMarks> = (props) => {
  const { discipline, lessonType, startDate, endDate } = props;
  const { id, group } = useAuth();

  const [marks, setMarks] = useState<TypeMarksAndStudents[]>([]);
  const [selectedMark, setSelectedMark] = useState<number | string>(0);

  const [qualityKnowledge, setQualityKnowledge] =
    useState<TypeQualityKnowledge>({ quality: 0 });
  const [absoluteKnowledge, setAbsoluteKnowledge] =
    useState<TypeAbsoluteKnowledge>({ absolute: 0 });

  const getApiMarks = () => {
    getMarks(discipline, lessonType, startDate, endDate, id, group).then(
      (res) => setMarks(res)
    );
  };

  const getApiKnowledge = <T extends any>(link: string): Promise<T> => {
    return getKnowledgeStatistics<T>(
      link,
      discipline,
      lessonType,
      startDate,
      endDate,
      group
    ).then((res) => res);
  };

  useEffect(() => {
    getApiMarks();

    getApiKnowledge<TypeAbsoluteKnowledge[]>(GET_ABSOLUTE_KNOWLEDGE).then(
      (res) => setAbsoluteKnowledge(res[0])
    );

    getApiKnowledge<TypeQualityKnowledge[]>(GET_QUALITY_KNOWLEDGE).then(
      (res) => {
        setQualityKnowledge(res[0]);
      }
    );
  }, [discipline, lessonType, startDate, endDate]);

  useEffect(() => {
    getApiMarks();
  }, [selectedMark]);

  return (
    <TableBody>
      {marks.map((item, index) => {
        return (
          <TableRow hover tabIndex={-1} key={item.student_id}>
            <TableCell sx={{ maxWidth: "300px", height: "20px" }}>
              {index + 1}.{item.surname} {item.name}
            </TableCell>
            <MarksList
              marks={item.mark}
              scheduleId={item.shedule_id}
              studentId={item.student_id}
              selectedMark={selectedMark}
              setSelectedMark={setSelectedMark}
            />
            <TableCell align="center">
              {item.middle_mark > 2 ? Number(item.middle_mark).toFixed(2) : 2}
            </TableCell>
          </TableRow>
        );
      })}

      <TableRow>
        <TableCell>Качество знаний</TableCell>
        <TableCell sx={{ textAlign: "center", borderRight: "1px solid #ccc" }}>
          {qualityKnowledge.quality > 0
            ? Number(qualityKnowledge.quality).toFixed(2) + "%"
            : "0%"}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Абсолютная успеваемость</TableCell>
        <TableCell sx={{ textAlign: "center", borderRight: "1px solid #ccc" }}>
          {absoluteKnowledge.absolute > 0
            ? Number(absoluteKnowledge.absolute).toFixed(2) + "%"
            : "0%"}
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default TableMain;
