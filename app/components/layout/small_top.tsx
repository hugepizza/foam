import { NavBar, SafeArea } from "antd-mobile";
import { useLocation, useNavigate } from "react-router-dom";

export function SmallTop() {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  return (
    <div>
      <div className="" id="top">
        <SafeArea
          position="top"
          style={{ background: "rgb(var(--background-start-rgb))" }}
        />
        <NavBar
          backArrow={true}
          onBack={() => {
            navigate(-1);
          }}
        >
          <div className="w-full text-left">{pathname.replaceAll("/", "")}</div>
        </NavBar>
      </div>
      <div id="toppayload"></div>
    </div>
  );
}
