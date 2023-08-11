"use client";
import {
  useLocation,
  Routes,
  Route,
  useNavigate,
  MemoryRouter,
} from "react-router-dom";
import enUS from "antd-mobile/es/locales/en-US";

import { ConfigProvider, NavBar, TabBar } from "antd-mobile";
import { CalendarOutline, TeamOutline, UserOutline } from "antd-mobile-icons";
import Me from "./components/me";
import Income from "./components/income";
import Students from "./components/students";
import StudentDetail from "./components/student_detail";
import Schedule from "./components/schedule";
import "./globals.css";
import { SmallTop } from "./components/layout/small_top";
import { BitTop } from "./components/layout/big_top";
import { TabBarBottom } from "./components/layout/tabbar_bottom";

function Content() {
  return (
    <div className="flex-grow">
      <Routes>
        <Route path="/" element={<Schedule />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/students" element={<Students />} />
        <Route path="/student/detail" element={<StudentDetail />} />
        <Route path="/me" element={<Me />} />
        <Route path="/me/income" element={<Income />} />
      </Routes>
    </div>
  );
}

function Frame() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="flex flex-col h-full">
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
