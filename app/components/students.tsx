import { Avatar, List, Popover, Dialog } from "antd-mobile";
import { use, useState } from "react";
import {
  AddOutline,
  AntOutline,
  QuestionCircleOutline,
} from "antd-mobile-icons";
import { useNavigate } from "react-router-dom";

export default function Students() {
  return (
    <>
      <Summary />
      <StudnentsList />
    </>
  );
}

function StudnentsList() {
  const navigate = useNavigate();
  const income = [
    {
      name: "Linda",
      avatar:
        "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?ssl\u003d1",
      age: 24,
      createdAt: "08/09/2023",
      vacation: "HR",
      nationality: "Chine",
      gender: "female",
    },
    {
      name: "Linda",
      avatar:
        "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?ssl\u003d1",
      age: 24,
      createdAt: "08/09/2023",
      vacation: "HR",
      nationality: "Chine",
      gender: "female",
    },
    {
      name: "Linda",
      avatar:
        "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?ssl\u003d1",
      age: 24,
      createdAt: "08/09/2023",
      vacation: "HR",
      nationality: "Chine",
      gender: "female",
    },
    {
      name: "Linda",
      avatar:
        "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?ssl\u003d1",
      age: 24,
      createdAt: "08/09/2023",
      vacation: "HR",
      nationality: "Chine",
      gender: "female",
    },
    {
      name: "Linda",
      avatar:
        "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?ssl\u003d1",
      age: 24,
      createdAt: "08/09/2023",
      vacation: "HR",
      nationality: "Chine",
      gender: "female",
    },
    {
      name: "Linda",
      avatar:
        "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?ssl\u003d1",
      age: 24,
      createdAt: "08/09/2023",
      vacation: "HR",
      nationality: "Chine",
      gender: "female",
    },
    {
      name: "Linda",
      avatar:
        "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?ssl\u003d1",
      age: 24,
      createdAt: "08/09/2023",
      vacation: "HR",
      nationality: "Chine",
      gender: "female",
    },
    {
      name: "Linda",
      avatar:
        "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?ssl\u003d1",
      age: 24,
      createdAt: "08/09/2023",
      vacation: "HR",
      nationality: "Chine",
      gender: "female",
    },
    {
      name: "Linda",
      avatar:
        "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?ssl\u003d1",
      age: 24,
      createdAt: "08/09/2023",
      vacation: "HR",
      nationality: "Chine",
      gender: "female",
    },
  ];

  const items = income.map((ele) => (
    <List.Item
      onClick={() => {
        navigate("/student/detail");
      }}
      key={ele.name}
      prefix={<Avatar src={ele.avatar}></Avatar>}
      description={`${ele.nationality} ${ele.age}yrs ${ele.vacation}`}
      extra={
        <div className="flex flex-col">
          <div>next class at</div>
          <div className="text-end">20/12/23</div>
        </div>
      }
    >
      {ele.name} {ele.gender === "female" ? "♀" : "♂"}
    </List.Item>
  ));

  return <List mode="card">{items}</List>;
}

function Summary() {
  return (
    <List mode="card" style={{ marginTop: "0px" }}>
      <List.Item>
        <div className="flex flex-col w-full h-[80px] text-center">
          <div className="flex flex-row justify-between">
            <Add />
          </div>
          <div className="flex flex-row">
            <div className="w-1/2 flex flex-col ml-8">
              <div className="h-1/3 text-sm">Sum</div>
              <div className="h-2/3  text-2xl">10</div>
            </div>
            <div
              className="w-1/2 flex flex-col mr-8"
              onClick={() => {
                Dialog.show({
                  title: (
                    <div>
                      <div>Tips</div>
                      <div className="font-thin">
                        It means how many student you have classes with in the
                        feature.
                      </div>
                    </div>
                  ),
                  closeOnMaskClick: true,
                });
              }}
            >
              <div className="h-1/3 text-sm">Actice</div>
              <div className="h-2/3 text-2xl">6</div>
            </div>
          </div>
        </div>
      </List.Item>
    </List>
  );
}

function Add() {
  const [amount, setAmount] = useState(0);
  return (
    <div className="p-1">
      <AddOutline />
    </div>
  );
}
