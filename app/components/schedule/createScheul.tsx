"use client";
import { useClazzStore } from "@/app/store/clazz";
import {
  Button,
  Calendar,
  Collapse,
  Form,
  Input,
  List,
  PickerView,
  Popup,
  Toast,
} from "antd-mobile";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useState } from "react";
import CuteAvatarList from "../common/cute_avatar_generate";
import StudentSelect from "../common/studentSelect";

dayjs.extend(customParseFormat);

export function CreateScheul({}: {}) {
  const clazzStore = useClazzStore();

  const [selectName, setSlectName] = useState("");
  const [searchVisible, setsearchVisible] = useState(false);

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
    <div className="flex flex-col  text-lg w-full">
      <div className="flex flex-col flex-grow w-full relative">
        <Form mode="card">
          <Form.Header>Create a new student</Form.Header>
          <Form.Item
            label="student name"
            rules={[
              { required: true, message: "Name is required", type: "email" },
            ]}
          >
            <Input
              onFocus={() => setsearchVisible(true)}
              onChange={(e) => setSlectName(e)}
              value={selectName}
            />
          </Form.Item>
          <StudentSelect
            close={() => setsearchVisible(false)}
            setResult={(e) => {
              setSlectName(e);
            }}
            kw={selectName}
            v={searchVisible}
          />
        </Form>
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
              return;
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
            }
          }}
        >
          OK
        </Button>
      </div>
    </div>
  );
}
