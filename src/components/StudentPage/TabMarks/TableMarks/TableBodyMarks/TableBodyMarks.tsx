import React, { useEffect, useState } from "react";
import {
  TypeDateRange,
  TypeDatesStudent,
  TypeDisciplinesStudent,
  TypeMarksStudent,
  TypeMiddleMarksStudent,
} from "@type/types";
import {
  getDates,
  getDisciplines,
  getMarks,
  getMiddleMarks,
} from "@utils/studentNetwork";
import { useAuth } from "@hooks/useAuth";
import { TableBody, TableRow, TableCell } from "@mui/material";

type TypeMarks = {
  name: string;
  mark: TypeMarksStudent[];
};

const TableBodyMarks: React.FC<TypeDateRange> = ({ startDate, endDate }) => {
  const { group, id } = useAuth();
  const [disciplines, setDisciplines] = useState<TypeDisciplinesStudent[]>([]);
  const [dates, setDates] = useState<TypeDatesStudent[]>([]);
  const [marks, setMarks] = useState<TypeMarks[]>([]);
  const [middleMarks, setMiddleMarks] = useState<TypeMiddleMarksStudent[]>([]);

  useEffect(() => {
    getDisciplines(group).then((res) => setDisciplines(res));
  }, []);

  useEffect(() => {
    getDates(startDate, endDate).then((res) => setDates(res));
  }, [startDate, endDate]);

  useEffect(() => {
    const arr: TypeMarks[] = [];
    disciplines.map((discipline) => {
      getMarks(id, startDate, endDate, discipline.discipline_id).then(
        (itemMark) => {
          console.log(itemMark);
          arr.push({ name: discipline.name, mark: itemMark });
          arr.reduce((el: TypeMarks[], i) => {
            if (!el.find((it) => it.name === i.name)) {
              el.push(i);
            }
            return el;
          }, []);

          setMarks([...arr]);
        }
      );
    });

    getMiddleMarks(id, startDate, endDate).then((res) => setMiddleMarks(res));
  }, [disciplines, startDate, endDate]);

  return (
    <TableBody>
      {marks.map((item, i) => {
        return (
          <TableRow key={i} hover tabIndex={-1}>
            <TableCell>{item.name}</TableCell>
            {dates.map((date) => {
              if (item.mark.find((el) => el.cur_date === date.cur_date)) {
                return item.mark.map((el) => {
                  if (el.cur_date === date.cur_date) {
                    return (
                      <TableCell key={date.id}>
                        {el.mark
                          .split(",")
                          .map((it) => {
                            return Number(it) !== 0 ? it : "";
                          })
                          .join(",")
                          .replace(/,\s*$/, "")}
                      </TableCell>
                    );
                  }
                });
              } else {
                return <TableCell key={date.id}></TableCell>;
              }
            })}

            {middleMarks.map((el) => {
              if (el.name === item.name) {
                return (
                  <TableCell
                    sx={{ borderLeft: "1px solid #ccc" }}
                    key={el.name}
                  >
                    {Number(el.mark) !== 0 ? Number(el.mark).toFixed(2) : 2}
                  </TableCell>
                );
              }
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default TableBodyMarks;
