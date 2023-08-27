import { Clazz, useClazzStore } from "@/app/store/clazz";
import { Student, useStudentStore } from "@/app/store/student";
import { List, Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Avatar from "react-nice-avatar";
import { FileOutline } from "antd-mobile-icons";
import dayjs from "dayjs";

export default function StudentDetail() {
  const { name } = useParams();
  console.log("name", name);

  const studentStore = useStudentStore();
  const clazzStore = useClazzStore();
  const [student, setStudnet] = useState<Student | undefined>();
  const [clazz, setClazz] = useState<Clazz[] | undefined>();
  useEffect(() => {
    const student = studentStore.Students.find((ele) => ele.name === name);
    setStudnet(student);
  }, [studentStore.Students, name]);

  useEffect(() => {
    const clazz = clazzStore.clazz.filter((ele) => ele.student.name == name);
    setClazz(clazz);
  }, [clazzStore.clazz, name]);

  const c = clazz
    ?.filter((ele) => ele.date > dayjs().unix())
    .map((ele) => (
      <List.Item key={ele.date.toString()}>
        <div>{dayjs.unix(ele.date).format("DD/MM/YYYY hh:mm A")}</div>
      </List.Item>
    ));

  const finished = clazz?.filter((ele) => ele.date > dayjs().unix()).length;
  return (
    <>
      <List mode="card">
        <List.Item
          extra={
            <div className="bg-zinc-300p-2 mx-2">
              <div className="flex flex-col my-4">
                <span className="flex justify-center text-2xl text-[#2ECC71]">
                  {finished}
                </span>
                <span className="flex justify-center">finished</span>
              </div>

              <div className="flex flex-col my-4">
                <span className="flex justify-center text-2xl text-[#2ECC71]">
                  1
                </span>
                <span className="flex justify-center">payment</span>
              </div>
            </div>
          }
        >
          {student && <Information student={student}></Information>}
        </List.Item>
      </List>
      <List mode="card" header={clazz?.length + " class is coming"}>
        {c}
      </List>
      <List mode="card" header="4 payment in 30 days"></List>
    </>
  );
}

function Information({
  student: { name, gender, avatar, age, from, occupation, email, wechat },
}: {
  student: Student;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row pl-2">
        <div className="pr-2">
          <Avatar
            style={{ width: "64px", height: "64px" }}
            {...avatar}
          ></Avatar>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center">
            <span className="text-2xl self-center">{name}</span>
            <span className="text-base text-zinc-500">
              {gender === "female" ? "(she/her)" : "male" ? "(he/his)" : "(?)"}
            </span>
          </div>
          <div>
            {from && (
              <span>
                <span className="text-sm text-zinc-500">From</span> {from}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="px-2 py-2 w-full">
        <div className="flex flex-row">
          {age && (
            <span>
              {age}
              <span className="text-sm text-zinc-500"> years</span>
            </span>
          )}
          {occupation && <span className="pl-2">{occupation}</span>}
        </div>

        {email && (
          <CopyToClipboard
            text={email}
            onCopy={() => {
              Toast.show("Copied!");
            }}
          >
            <span className="flex items-center">
              {email}
              <span className="text-xs text-zinc-500 ml-1">{"copy"}</span>
            </span>
          </CopyToClipboard>
        )}

        {wechat && <div className="flex flex-row">wechat @{email}</div>}
      </div>
    </div>
  );
}
