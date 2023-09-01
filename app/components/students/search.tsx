import { Student, useStudentStore } from "@/app/store/student";
import { List, Tag } from "antd-mobile";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useClazzStore } from "@/app/store/clazz";
import dayjs from "dayjs";
import Avatar from "react-nice-avatar";

export default function StudnentsList() {
  const navigate = useNavigate();
  const [students, setStudents] = useState<Student[]>([]);
  const studentStore = useStudentStore();
  const clazzStore = useClazzStore();
  const nextClazzAt = (name: string) => {
    const now = dayjs().unix();
    const clazz = clazzStore.clazz.filter(
      (ele) => ele.student.name === name && ele.date >= now,
    );
    if (clazz.length === 0) {
      return "-";
    }
    let next = clazz[0].date;
    clazz.forEach((ele) => {
      if (ele.date < next) {
        next = ele.date;
      }
    });

    return dayjs.unix(next).format("DD/MM/YY");
  };
  useEffect(() => {
    setStudents(studentStore.Students);
  }, [studentStore]);
  const items = students.map((ele) => (
    <List.Item
      className=""
      onClick={() => {
        navigate("/student/detail/" + ele.name);
      }}
      key={ele.name}
      prefix={
        <div className="py-1">
          <Avatar style={{ width: "64px", height: "64px" }} {...ele.avatar} />
        </div>
      }
      description=<div>
        {ele.gender && (
          <Tag className="px-[5px]">
            {ele.gender === "female" ? "♀" : "♂"}
          </Tag>
        )}
        {ele.from && <Tag className="mx-[1px]">{ele.from}</Tag>}
        {ele.age && <Tag className="mx-[1px]">{ele.age + "Y"}</Tag>}
        {ele.occupation && <Tag className="mx-[1px]">{ele.occupation}</Tag>}
      </div>
      extra={
        <div className="flex flex-col">
          <div>next class at</div>
          <div className="text-end">{nextClazzAt(ele.name)}</div>
        </div>
      }
    >
      {ele.name}
    </List.Item>
  ));

  return <List mode="card">{items}</List>;
}
