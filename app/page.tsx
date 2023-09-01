"use client";
import enUS from "antd-mobile/es/locales/en-US";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";

import { ConfigProvider, SafeArea } from "antd-mobile";
import { BitTop } from "./components/layout/big_top";
import { SmallTop } from "./components/layout/small_top";
import { TabBarBottom } from "./components/layout/tabbar_bottom";
import Me from "./components/me/me";
import Payment from "./components/me/payment/payment";
import ProfileEdit from "./components/me/profile_edit";
import Schedule from "./components/schedule/schedule";
import Students from "./components/students/students";
import StudentDetail from "./components/students/student_detail";
import "./globals.css";
import { useMemo } from "react";
import { CreateStudent } from "./components/students/createStudent";
import { CreateScheul } from "./components/schedule/createScheul";
import { CreatePayment } from "./components/me/payment/createPayment";

function Content() {
  const routeElements = useMemo(() => {
    return (
      <>
        <Route path="/" element={<Schedule />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/schedule/create" element={<CreateScheul />} />
        <Route path="/students" element={<Students />} />
        <Route path="/student/create" element={<CreateStudent />} />
        <Route path="/student/detail/:name" element={<StudentDetail />} />
        <Route path="/me" element={<Me />} />
        <Route path="/me/payment" element={<Payment />} />
        <Route path="/me/payment/create" element={<CreatePayment />} />
        <Route path="/me/profile_edit" element={<ProfileEdit />} />
      </>
    );
  }, []); // 依赖项为空数组，确保只在组件挂载时计算一次

  return (
    <div className="flex flex-col flex-grow w-full">
      <Routes>{routeElements}</Routes>
    </div>
  );
}

function Frame() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="flex flex-col h-full w-full">
      <SafeArea position="top" />
      {pathname.split("/").length === 2 ? <BitTop /> : <SmallTop></SmallTop>}
      <Content />
      {pathname.split("/").length === 2 && <TabBarBottom />}
    </div>
  );
}
export default function Home() {
  // console.log(
  //   "%cSorry for my terrible code 😄",
  //   "font-size: 20px; color: blue; "
  // );
  return (
    <MemoryRouter>
      <ConfigProvider locale={enUS}>
        <Frame />
      </ConfigProvider>
    </MemoryRouter>
  );
}
