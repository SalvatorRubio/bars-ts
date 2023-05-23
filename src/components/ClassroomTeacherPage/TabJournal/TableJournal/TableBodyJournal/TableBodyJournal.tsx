import React, { useEffect, useState } from "react";
import { getStudents, getStudentsInfo } from "@utils/classroomTeacherNetwork";
import { useAuth } from "@hooks/useAuth";
import {
  TypeDisciplines,
  TypeInfoStudentsClassroomTeacher,
  TypeStudentsClassroomTeacher,
} from "@type/types";
import { Dayjs } from "dayjs";
import { TableBody, TableCell, TableRow } from "@mui/material";

type props = {
  disciplines: TypeDisciplines[];
  startDate: Dayjs | null;
  endDate: Dayjs | null;
};

type TypeStudents = TypeStudentsClassroomTeacher & {
  disciplines: TypeDisciplines[];
};

const TableBodyJournal: React.FC<props> = ({
  disciplines,
  startDate,
  endDate,
}) => {
  const { group } = useAuth();
  const [students, setStudents] = useState<TypeStudents[]>([]);
  const [statistics, setStatistics] = useState<
    TypeInfoStudentsClassroomTeacher[]
  >([]);

  useEffect(() => {
    setStudents([]);
    getStudents(group).then((res) => {
      setStudents(
        res.map((item) => {
          return { ...item, disciplines: disciplines };
        })
      );
    });
  }, [group]);

  useEffect(() => {
    setStatistics([]);
    getStudentsInfo(startDate, endDate, group).then((res) => {
      setStatistics(res);
    });
  }, [group, startDate, endDate, disciplines]);

  return (
    <TableBody>
      {students.map((item, i) => {
        return (
          <TableRow
            sx={{
              background: i % 2 !== 0 ? "rgba(240, 240, 240, 0.5)" : "#fff",
            }}
            key={item.student_id}
          >
            <TableCell sx={{ width: "250px" }}>
              {i + 1}. {item.surname} {item.name} {item.father_name}
            </TableCell>

            {disciplines.map((discipline) => {
              if (statistics.find((el) => el.name === discipline.name)) {
                return statistics.map((marks, idx) => {
                  if (
                    marks.name === discipline.name &&
                    item.student_id === marks.student_id
                  ) {
                    return (
                      <TableCell key={idx} align="center">
                        "н" - {marks.missing} / "2" - {marks.deuces}
                      </TableCell>
                    );
                  }
                });
              }
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default TableBodyJournal;
