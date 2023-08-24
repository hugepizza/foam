import { FloatingBubble } from "antd-mobile";
import { EditFill } from "antd-mobile-icons";

export default function Float({ onClick }: { onClick: () => void }) {
  return (
    <FloatingBubble
      axis="lock"
      style={{
        "--background": "#000000",
        "--initial-position-top": "84vh",
        "--initial-position-right": "24px",
        "--size": "48px",
        "--z-index": "100",
      }}
    >
      <EditFill
        fontSize={24}
        onClick={() => {
          onClick();
        }}
      />
    </FloatingBubble>
  );
}
