"use client";
import { useState } from "react";
import Float from "../common/float";
import { Coming } from "./coming";
import { CreateScheul } from "./createScheul";
import { Overall } from "./overall";

export default function Schedule() {
  return (
    <div className="flex flex-col">
      <Overall />
      <Coming />
      <Float to="/schedule/create" />
    </div>
  );
}
