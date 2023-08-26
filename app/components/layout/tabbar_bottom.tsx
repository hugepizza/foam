"use client";
import { SafeArea, TabBar } from "antd-mobile";
import { CalendarOutline, TeamOutline, UserOutline } from "antd-mobile-icons";
import { useLocation, useNavigate } from "react-router-dom";

export function TabBarBottom() {
  const tabs = [
    {
      key: "/schedule",
      title: "Schedule",
      icon: <CalendarOutline />,
    },
    {
      key: "/students",
      title: "Students",
      icon: <TeamOutline />,
    },
    {
      key: "/me",
      title: "Me",
      icon: <UserOutline />,
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = location;
  const setRouteActive = (value: string) => {
    navigate(value);
  };

  // use safe area to fill blank
  return (
    <div className="" id="bottom">
      <TabBar
        defaultActiveKey={"/schedule"}
        activeKey={pathname === "/" ? "/schedule" : pathname}
        onChange={(value) => setRouteActive(value)}
      >
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
      <SafeArea
        position="bottom"
        style={{ background: "rgb(var(--foreground-rgb))" }}
      />
    </div>
  );
}
