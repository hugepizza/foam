import { Student, useStudentStore } from "@/app/store/student";
import {
  Card,
  Collapse,
  Form,
  Input,
  List,
  SearchBar,
  SearchBarRef,
} from "antd-mobile";
import { Ref, useEffect, useRef, useState } from "react";
import Avatar, {
  AvatarFullConfig,
  genConfig,
  HairStyle,
  Sex,
} from "react-nice-avatar";

export default function StudentSelect({
  kw,
  v,
  setResult,
  close,
}: {
  kw?: string;
  v: boolean;
  setResult: (result: string) => void;
  close: () => void;
}) {
  const studentStore = useStudentStore();
  const [students, setStudents] = useState<Student[]>();
  useEffect(() => {
    let f = studentStore.Students.concat(studentStore.Students);
    if (kw) {
      f = f.filter((ele) => ele.name.toUpperCase().includes(kw.toUpperCase()));
    }
    setStudents(f);
  }, [studentStore.Students, kw]);

  return (
    <div>
      {v && (
        <div
          style={{
            position: "absolute",
            borderRadius: "8px",
            left: 14,
            right: 14,
            maxHeight: "350px", // 控制列表最大高度
            overflowY: "auto", // 显示滚动条
            zIndex: 1000, // 可根据需要调整z-index
          }}
        >
          <List>
            {students?.map((ele, index) => (
              <List.Item
                className="bg-gray-200"
                key={index}
                // arrow={false}
                prefix={
                  <Avatar
                    style={{ width: "36px", height: "36px" }}
                    {...ele.avatar}
                  />
                }
                onClick={() => {
                  console.log(ele.name);
                  setResult(ele.name);
                  close();
                }}
              >
                {ele.name}
              </List.Item>
            ))}
          </List>
        </div>
      )}
    </div>
  );
}
