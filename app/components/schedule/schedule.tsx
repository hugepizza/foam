"use client";
import { Ref, useRef, useState } from "react";
import { Overall } from "./overall";
import { CreateScheul } from "./createScheul";
import { Coming } from "./coming";
import Float from "../common/float";

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
