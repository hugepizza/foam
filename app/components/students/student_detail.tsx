import { Avatar, List } from "antd-mobile";

export default function StudentDetail() {
  return (
    <List mode="card">
      <List.Item>
        <div className="flex justify-center items-center flex-col">
          <Avatar
            style={{ "--size": "128px" }}
            src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?ssl\u003d1"
          ></Avatar>

          <div className="my-2">
            <p className="text-2xl"> Lisa </p>
          </div>
          <div className="px-8">
            <ul style={{ display: "grid", gridTemplateColumns: "subgrid" }}>
              <li>From: 🇨🇳</li>
              <li>Age: 25 </li>
              <li>vocation: Editor </li>
              <li>Phone: 18921869247 </li>
              <li>Email: lias@gmail.com </li>
            </ul>
          </div>
        </div>
      </List.Item>
    </List>
  );
}
