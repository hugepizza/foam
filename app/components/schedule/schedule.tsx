"use client";
import { useState } from "react";
import Float from "../common/float";
import { Coming } from "./coming";
import { CreateScheul } from "./createScheul";
import { Overall } from "./overall";

export default function Schedule() {
  const [createVisible, setCreateVisible] = useState(false);

  return (
    <div className="flex  flex-col">
      <Overall />
      <Coming
        setCreateVisible={() => {
          setCreateVisible(true);
        }}
      />
      <CreateScheul
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
    </div>
  );
}
