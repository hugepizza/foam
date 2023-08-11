import { Avatar, Card, List, Switch } from "antd-mobile";
import { PayCircleOutline } from "antd-mobile-icons";
import { useLocation, useNavigate } from "react-router-dom";

export default function Me() {
  return (
    <div className="w-full h-full">
      <Profile></Profile>
      <FunctionList></FunctionList>
    </div>
  );
}

function FunctionList() {
  const navigate = useNavigate();
  return (
    <List mode="card">
      <List.Item
        onClick={() => {
          navigate("/me/income");
        }}
        prefix={<PayCircleOutline />}
      >
        My Imcome
      </List.Item>
      <List.Item prefix={<PayCircleOutline />}>Passed Classes</List.Item>
    </List>
  );
}
function Profile() {
  return (
    <List mode="card" style={{ marginTop: "0px" }}>
      <List.Item>
        <div className="flex flex-row w-full h-full">
          <Avatar
            src={
              "https://www.dolldivine.com/rinmaru/rinmaru-anime-avatar-creator.jpg"
            }
            style={{ "--size": "68px" }}
          />
          <div className="flex flex-grow items-center  ml-6 my-3 text-3xl">
            Lora
          </div>
        </div>
      </List.Item>
    </List>
  );
}
