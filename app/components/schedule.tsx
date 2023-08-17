import {
  Avatar,
  Button,
  Card,
  CheckList,
  List,
  Popup,
  SearchBar,
  Toast,
} from "antd-mobile";
import { EditFill } from "antd-mobile-icons";
import { Input } from "postcss";
import { useState } from "react";

export default function Schedule() {
  const [createVisible, setCreateVisible] = useState(false);
  const classes = [
    {
      date: "2023/01/20 12:00:00",
      student: {
        name: "Maui",
        avatar:
          "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?ssl\u003d1",
      },
    },
    {
      date: "2023/01/20 12:00:01",
      student: {
        name: "Maui",
        avatar:
          "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?ssl\u003d1",
      },
    },
  ];
  const classItems = classes.map((ele) => {
    return (
      <List.Item
        key={ele.date}
        prefix={<Avatar src={ele.student.avatar}></Avatar>}
        extra={<div>{ele.date}</div>}
      >
        {ele.student.name}
      </List.Item>
    );
  });
  return (
    <div className="flex  flex-col">
      <div className="mx-4 py-2">
        <div className="flex flex-row">
          <CardBlock title="Today" num={5} cn="mr-2"></CardBlock>
          <CardBlock title="This Week" num={5} cn="ml-2"></CardBlock>
        </div>
        <div className="flex flex-row">
          <CardBlock title="All" num={12} cn="mr-2 mt-4"></CardBlock>
          <CardBlock title="Complated" num={2} cn="ml-2 mt-4"></CardBlock>
        </div>
      </div>
      <List
        mode="card"
        header={
          <div className="flex flex-row justify-between">
            <div>Coming</div>
            <div
              className="flex flex-row"
              onClick={() => {
                setCreateVisible(true);
              }}
            >
              <div className="ml-2 text-black">
                <EditFill />
                Create
              </div>
            </div>
          </div>
        }
      >
        {classItems}
      </List>

      <Popup
        visible={createVisible}
        onMaskClick={() => {
          setCreateVisible(false);
        }}
        position="bottom"
        bodyStyle={{
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          minHeight: "90vh",
        }}
      >
        <CreateScheul />
      </Popup>
    </div>
  );
}

function CreateScheul() {
  const [studentListVisible, setStudentListVisible] = useState(false);
  const students = [{ name: "Maui" }, { name: "Doria" }, { name: "Lora" }];
  const [filteredStudents, setfilteredStudents] =
    useState<{ name: string }[]>(students);
  let studentItems = filteredStudents.map((ele) => {
    return (
      <CheckList.Item key={ele.name} value={ele.name}>
        {ele.name}
      </CheckList.Item>
    );
  });
  const search = (input: string) => {
    setfilteredStudents(
      students.filter((ele) => {
        return ele.name.toLowerCase().includes(input.toLowerCase());
      })
    );
  };
  return (
    <div className="flex flex-col mx-4 my-8 text-lg">
      <SearchBar
        onFocus={() => {
          setStudentListVisible(true);
        }}
        onCancel={() => {
          setStudentListVisible(false);
        }}
        onChange={search}
        style={{ "--height": "48px", "--border-radius": "16px" }}
        placeholder="Student Name"
      />
      {studentListVisible && (
        <CheckList onChange={(val) => {}}>{studentItems}</CheckList>
      )}

      <div className="flex justify-end flex-col">
        <Button type="submit">OK</Button>
      </div>
    </div>
  );
}

function CardBlock({
  title,
  num,
  cn,
}: {
  title: string;
  num: number;
  cn: string;
}) {
  return (
    <div
      className={`rounded-2xl  bg-white flex flex-col w-[calc(50%-4px)] w-max-[calc(50%-4px)] h-24 items-center justify-center text-center ${cn}`}
    >
      <div className="text-zinc-500 text-xl">{title}</div>
      <div className="text-3xl">{num}</div>
    </div>
  );
}
