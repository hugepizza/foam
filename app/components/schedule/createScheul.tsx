"use client";
import { useClazzStore } from "@/app/store/clazz";
import {
  Button,
  Calendar,
  Collapse,
  Input,
  List,
  PickerView,
  Popup,
  Toast,
} from "antd-mobile";
import dayjs from "dayjs";
import { useState } from "react";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export function CreateScheul({
  visible,
  setCreateInvisible,
}: {
  visible: boolean;
  setCreateInvisible: () => void;
}) {
  const clazzStore = useClazzStore();

  const [selectName, setSlectName] = useState("");
  const [studentListVisible, setStudentListVisible] = useState(false);

  const students = [{ name: "Maui" }, { name: "Doria" }, { name: "Lora" }];
  const [filteredStudents, setfilteredStudents] =
    useState<{ name: string }[]>(students);

  const search = (input: string) => {
    setSlectName(input);
    setfilteredStudents(
      students.filter((ele) => {
        return ele.name.toLowerCase().includes(input.toLowerCase());
      })
    );
  };

  const [selectDate, setSeletDate] = useState(dayjs().format("DD/MM/YYYY"));
  const [selectTime, setSeletTime] = useState("00:00 am");

  const zeroPad = (number: number, length: number) => {
    return number.toString().padStart(length, "0");
  };
  const timeColums = [
    [
      { label: "am", value: "am" },
      { label: "pm", value: "pm" },
    ],
    Array.from({ length: 12 }, (_, index) => index).map((element) => {
      return { label: zeroPad(element, 2), value: zeroPad(element, 2) };
    }),
    Array.from({ length: 60 }, (_, index) => index).map((element) => {
      return { label: zeroPad(element, 2), value: zeroPad(element, 2) };
    }),
  ];
  const parseTime = (a: string, h: string, m: string) => {
    return `${h}:${m} ${a}`;
  };

  return (
    <Popup
      visible={visible}
      onMaskClick={() => {
        setCreateInvisible();
        setSlectName("");
        setStudentListVisible(false);
      }}
      position="bottom"
      bodyStyle={{
        display: "flex",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        minHeight: "90vh",
        background: "rgb(245, 245, 245)",
      }}
    >
      <div className="flex flex-col my-8 text-lg w-full">
        <div className="flex flex-col flex-grow w-full relative">
          <List mode="card">
            <List.Item>
              <Input
                style={{
                  borderStyle: "hidden",
                  outline: "none",
                  boxShadow: "none",
                }}
                onFocus={() => {
                  setStudentListVisible(true);
                }}
                onChange={search}
                placeholder="Student Name"
                value={selectName}
              />
            </List.Item>
          </List>
          {studentListVisible && (
            <List mode="card" className="absolute mt-12  z-50">
              {" "}
              {/* 使用mt-12来设置与SearchBar的距离 */}
              {filteredStudents.map((item, index) => (
                <List.Item
                  key={index}
                  onClick={() => {
                    setSlectName(item.name);
                    setStudentListVisible(false);
                  }}
                >
                  {item.name}
                </List.Item>
              ))}
            </List>
          )}
          <List mode="card">
            <Collapse accordion>
              <Collapse.Panel
                key="date"
                title={
                  <div className="flex justify-between">
                    Data <span>{selectDate}</span>
                  </div>
                }
              >
                <Calendar
                  selectionMode="single"
                  onChange={(d) => {
                    console.log(d);

                    setSeletDate(dayjs(d).format("DD/MM/YYYY"));
                    console.log(dayjs(d).format("DD/MM/YYYY"));
                  }}
                  nextYearButton=<></>
                  prevYearButton=<></>
                />
              </Collapse.Panel>
              <Collapse.Panel
                key="time"
                title={
                  <div className="flex justify-between">
                    Time <span>{selectTime}</span>
                  </div>
                }
              >
                <PickerView
                  className="h-48"
                  columns={timeColums}
                  onChange={(value) => {
                    setSeletTime(
                      parseTime(
                        value[0]?.toString() || "am",
                        value[1]?.toString() || "0",
                        value[2]?.toString() || "0"
                      )
                    );
                  }}
                />
              </Collapse.Panel>
            </Collapse>
          </List>
        </div>

        <div className="flex flex-col  grow-0 mx-3">
          <Button
            type="submit"
            size="large"
            block
            onClick={() => {
              if (!selectName) {
                Toast.show("choose a student");
                return
              }
              const s = dayjs(
                selectDate + " " + selectTime,
                "DD/MM/YYYY hh:mm a"
              );
              const res = clazzStore.createClazz({
                student: { name: selectName },
                date: s.unix(),
              });
              if (res) {
                Toast.show(res);
              } else {
                Toast.show("success");
                setCreateInvisible()
              }
            }}
          >
            OK
          </Button>
        </div>
      </div>
    </Popup>
  );
}
