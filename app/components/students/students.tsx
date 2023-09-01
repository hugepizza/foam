import { useState } from "react";
import Float from "../common/float";
import { CreateStudent } from "./createStudent";
import StudnentsList from "./search";
import Summary from "./summary";

export default function Students() {
  const [createVisible, setCreateVisible] = useState(false);
  return (
    <>
      <Summary />
      <StudnentsList />
      <Float to="/student/create" />
    </>
  );
}
