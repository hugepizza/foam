import { FloatingBubble } from "antd-mobile";
import { EditFill } from "antd-mobile-icons";
import { useNavigate } from "react-router-dom";

export default function Float({ to }: { to: string }) {
  const navigate = useNavigate();
  return (
    <FloatingBubble
      axis="lock"
      style={{
        "--background": "#000000",
        "--initial-position-bottom": "10%",
        "--initial-position-right": "24px",
        "--size": "48px",
        "--z-index": "100",
      }}
    >
      <EditFill
        fontSize={24}
        onClick={() => {
          navigate(to);
        }}
      />
    </FloatingBubble>
  );
}
