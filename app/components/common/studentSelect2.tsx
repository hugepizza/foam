import { Student, useStudentStore } from "@/app/store/student";
import {
  Card,
  CenterPopup,
  Collapse,
  Dialog,
  List,
  Mask,
  Modal,
  SearchBar,
} from "antd-mobile";
import { Input } from "postcss";
import { useEffect, useState } from "react";
import Avatar, {
  AvatarFullConfig,
  genConfig,
  HairStyle,
  Sex,
} from "react-nice-avatar";

export default function StudentSelect({
  visible,
  setInvisible,
  setSelected,
}: {
  visible: boolean;
  setInvisible: () => void;
  setSelected: (name: string) => void;
}) {
  const studentStore = useStudentStore();
  const [students, setStudents] = useState<Student[]>();
  const [filteredStudent, setfilteredStudent] = useState<Student[]>();
  useEffect(() => {
    const init = studentStore.Students.concat(studentStore.Students).concat(
      studentStore.Students
    );
    setStudents(init);
    setfilteredStudent(init);
  }, [studentStore.Students]);

  return (
    <Mask visible={visible} className="flex flex-col items-center py-24">
      <Card className="h-1/2 overflow-y-auto">
        <SearchBar
          className=""
          placeholder="input student name"
          onChange={(e) => {
            console.log(123);

            setfilteredStudent(
              students?.filter((ele) =>
                ele.name.toUpperCase().includes(e.toUpperCase())
              )
            );
          }}
        />
        <div className="w-full">
          <List>
            {filteredStudent?.map((ele, index) => (
              <List.Item
                onClick={() => {
                  setSelected(ele.name);
                  setInvisible();
                  setfilteredStudent(students);
                }}
                key={ele.name + index}
                prefix={
                  <Avatar
                    style={{ width: "36px", height: "36px" }}
                    {...ele.avatar}
                  />
                }
              >
                {ele.name}
              </List.Item>
            ))}
          </List>
        </div>
      </Card>
    </Mask>
  );
}
