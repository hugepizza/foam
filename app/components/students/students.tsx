import { Avatar, List, Popover, Dialog, FloatingBubble } from "antd-mobile";
import { MessageFill } from "antd-mobile-icons";
import { useNavigate } from "react-router-dom";
import Float from "../common/float";
import { CreateStudent } from "./createStudent";
import { useState } from "react";
import StudnentsList from "./search";
import Summary from "./summary";

export default function Students() {
  const [createVisible, setCreateVisible] = useState(false);
  return (
    <>
      <Summary />
      <StudnentsList />
      <CreateStudent
        visible={createVisible}
        setCreateInvisible={() => {
          setCreateVisible(false);
        }}
      />
      <Float
        onClick={() => {
          setCreateVisible(true);
        }}
      />
    </>
  );
}
