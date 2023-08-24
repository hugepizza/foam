"use client";
import { useClazzStore } from "@/app/store/clazz";
import {
  Button,
  Calendar,
  Collapse,
  Input,
  List,
  PickerView,
  Popup,
  Toast,
} from "antd-mobile";
import dayjs from "dayjs";
import { useState } from "react";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export function CreateStudent({
  visible,
  setCreateInvisible,
}: {
  visible: boolean;
  setCreateInvisible: () => void;
}) {
  return (
    <Popup
      visible={visible}
      onMaskClick={() => {
        setCreateInvisible();
      }}
      position="bottom"
      bodyStyle={{
        display: "flex",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        minHeight: "90vh",
        background: "rgb(245, 245, 245)",
      }}
    ></Popup>
  );
}
