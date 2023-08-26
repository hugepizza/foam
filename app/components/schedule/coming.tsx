"use client";
import { useClazzStore } from "@/app/store/clazz";
import { isTimestampAfterNow } from "@/app/tools/time";
import { List } from "antd-mobile";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export function Coming({ setCreateVisible }: { setCreateVisible: () => void }) {
  const [classItems, setClassItems] = useState<JSX.Element[]>();
  const clazzStore = useClazzStore();
  useEffect(() => {
    setClassItems(
      clazzStore.clazz
        .filter((ele) => isTimestampAfterNow(ele.date))
        .map((ele) => {
          return (
            <List.Item
              key={ele.date.toString()}
              // prefix={<Avatar src={ele.student.name}></Avatar>}
              extra={
                <div>{dayjs.unix(ele.date).format("DD/MM/YYYY hh:mm A")}</div>
              }
            >
              {ele.student.name}
            </List.Item>
          );
        }),
    );
  }, [clazzStore.clazz]);

  return (
    <List
      mode="card"
      header={
        <div className="flex flex-row justify-between">
          <div>Coming</div>
          <div
            className="flex flex-row"
            onClick={() => {
              setCreateVisible();
            }}
          ></div>
        </div>
      }
    >
      {classItems}
    </List>
  );
}
