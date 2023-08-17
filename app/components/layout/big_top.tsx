import { useLocation } from "react-router-dom";

export function BitTop() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div
      style={{
        height: "8vh",
      }}
      className="px-4 pb-2 flex flex-col justify-start items-start"
    >
      <p className="font-bold text-4xl ">
        {pathname.replaceAll("/", "") || "Schedule"}
      </p>
    </div>
  );
}
