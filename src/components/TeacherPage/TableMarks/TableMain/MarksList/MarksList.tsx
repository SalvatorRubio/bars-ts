import React, { useState } from "react";
import SelectMark from "@components/TeacherPage/TableMarks/TableMain/MarksList/SelectMark";
import { SelectChangeEvent, TableCell } from "@mui/material";
import { updateMark } from "@utils/teacherNetwork";

type props = {
  marks: string;
  scheduleId: string;
  studentId: number;
  selectedMark: number | string;
  setSelectedMark: React.Dispatch<React.SetStateAction<number | string>>;
};

const MarksList: React.FC<props> = ({
  marks,
  scheduleId,
  studentId,
  selectedMark,
  setSelectedMark,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [itemEdit, setItemEdit] = useState<string>();
  let marksList: string[] = marks.split(",");
  let splitSchedule: string[] = scheduleId.split(",");

  const changeMark = (e: SelectChangeEvent<number | string>, i: number) => {
    setIsEdit(false);
    setSelectedMark(e.target.value);
    updateMark(studentId, splitSchedule[i], e.target.value);
  };

  const handleClick = (id: string, mark: string) => {
    setItemEdit(id);
    setIsEdit(true);
    setSelectedMark(mark);
  };
  return (
    <>
      {marksList.map((mark, i) => {
        if (isEdit && itemEdit === `student_${studentId}${i}`) {
          return (
            <SelectMark
              mark={selectedMark}
              changeMark={changeMark}
              key={i}
              index={i}
            />
          );
        } else {
          return (
            <TableCell
              id={`student_${studentId}${i}`}
              sx={{ cursor: "pointer" }}
              align="center"
              key={i}
              onClick={() => handleClick(`student_${studentId}${i}`, mark)}
            >
              {mark !== "0" ? mark : ""}
            </TableCell>
          );
        }
      })}
    </>
  );
};

export default MarksList;
