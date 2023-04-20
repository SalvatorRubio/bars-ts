import React, { useState } from "react";
import { Box, Button, Fade, Modal, Typography } from "@mui/material";
import styled from "styled-components";
import ModalSelect from "@components/TeacherPage/TableMarks/TableHeader/ModalTypeLesson/ModalSelect";
import ModalTextarea from "@components/TeacherPage/TableMarks/TableHeader/ModalTypeLesson/ModalTextarea";
import { setTopic } from "@utils/teacherNetwork";
import { useAuth } from "@hooks/useAuth";

const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  height: 250px;
  background-color: #fff;
  padding: 30px;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

type props = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  idSchedule: number;
  date: string;
};

const ModalTypeLesson: React.FC<props> = ({
  isModalOpen,
  setIsModalOpen,
  idSchedule,
  date,
}) => {
  const [lessonType, setLessonType] = useState<string>("");
  const [text, setText] = useState<string>("");
  const { id, group } = useAuth();

  const createTopic = () => {
    setTopic(date, idSchedule, id, group, text, lessonType).then(() => {
      setIsModalOpen(false);
      setLessonType("");
      setText("");
    });
  };
  return (
    <Modal
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      closeAfterTransition
    >
      <Fade in={isModalOpen}>
        <StyledBox>
          <Typography variant="h6" color="initial">
            Выбранная дата {date}
          </Typography>
          <ModalSelect lessonType={lessonType} setLessonType={setLessonType} />
          <ModalTextarea text={text} setText={setText} />
          <StyledButton variant="contained" onClick={createTopic}>
            Создать
          </StyledButton>
        </StyledBox>
      </Fade>
    </Modal>
  );
};

export default ModalTypeLesson;
