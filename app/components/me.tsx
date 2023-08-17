import { Avatar, Card, List, Switch } from "antd-mobile";
import { PayCircleOutline } from "antd-mobile-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useProfileStore } from "../store/profile";
import ProfileAvatar from "./avatar";

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
  const navigate = useNavigate();
  const profileStore = useProfileStore();
  return (
    <List mode="card" style={{ marginTop: "0px" }}>
      <List.Item
        onClick={() => {
          navigate("/me/profile_edit");
        }}
      >
        <div className="flex flex-row w-full h-full">
          <ProfileAvatar size={68} />
          <div className="flex flex-grow items-center  ml-6 my-3 text-3xl">
            {profileStore.userName}
          </div>
        </div>
      </List.Item>
    </List>
  );
}
