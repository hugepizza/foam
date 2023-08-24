"use client";
import {
  useLocation,
  Routes,
  Route,
  useNavigate,
  MemoryRouter,
} from "react-router-dom";
import enUS from "antd-mobile/es/locales/en-US";

import { ConfigProvider, NavBar, SafeArea, TabBar } from "antd-mobile";
import { CalendarOutline, TeamOutline, UserOutline } from "antd-mobile-icons";
import Me from "./components/me/me";
import Income from "./components/me/income/income";
import Students from "./components/students/students";
import StudentDetail from "./components/students/student_detail";
import Schedule from "./components/schedule/schedule";
import "./globals.css";
import { SmallTop } from "./components/layout/small_top";
import { BitTop } from "./components/layout/big_top";
import { TabBarBottom } from "./components/layout/tabbar_bottom";
import ProfileEdit from "./components/me/profile_edit";

function Content() {
  return (
    <div className="flex-grow w-screen">
      <Routes>
        <Route path="/" element={<Schedule />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/students" element={<Students />} />
        <Route path="/student/detail" element={<StudentDetail />} />
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
  return (
    <MemoryRouter>
      <ConfigProvider locale={enUS}>
        <Frame />
      </ConfigProvider>
    </MemoryRouter>
  );
}
