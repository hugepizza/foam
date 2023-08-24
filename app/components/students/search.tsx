import { Avatar, List } from "antd-mobile";
import { useNavigate } from "react-router-dom";

export default function StudnentsList() {
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
      key={ele.name + crypto.randomUUID()}
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
