"use client";
import enUS from "antd-mobile/es/locales/en-US";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";

import { ConfigProvider, SafeArea } from "antd-mobile";
import { BitTop } from "./components/layout/big_top";
import { SmallTop } from "./components/layout/small_top";
import { TabBarBottom } from "./components/layout/tabbar_bottom";
import Income from "./components/me/income/income";
import Me from "./components/me/me";
import ProfileEdit from "./components/me/profile_edit";
import Schedule from "./components/schedule/schedule";
import Students from "./components/students/students";
import StudentDetail from "./components/students/student_detail";
import "./globals.css";

function Content() {
  return (
    <div className="flex-grow w-screen">
      <Routes>
        <Route path="/" element={<Schedule />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/students" element={<Students />} />
        <Route path="/student/detail/:name" element={<StudentDetail/>} />
        <Route path="/me" element={<Me />} />
        <Route path="/me/income" element={<Income />} />
        <Route path="/me/profile_edit" element={<ProfileEdit />} />
      </Routes>
    </div>
  );
}

function Frame() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="flex flex-col h-screen w-screen" id="frame">
      <SafeArea position="top" />
      {pathname.split("/").length === 2 ? <BitTop /> : <SmallTop></SmallTop>}
      <Content />
      {pathname.split("/").length === 2 && <TabBarBottom />}
    </div>
  );
}
export default function Home() {
  console.log(
    "%cSorry for my terrible code 😄",
    "font-size: 20px; color: blue; ",
  );
  return (
    <MemoryRouter>
      <ConfigProvider locale={enUS}>
        <Frame />
      </ConfigProvider>
    </MemoryRouter>
  );
}
