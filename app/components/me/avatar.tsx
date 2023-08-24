import { Avatar } from "antd-mobile";
import { useProfileStore } from "../../store/profile";
import { CSSProperties, useRef } from "react";
export default function ProfileAvatar({
  size,
  borderRadius,
  editable,
}: {
  size: number;
  borderRadius?: string;
  editable?: boolean;
}) {
  const profileStore = useProfileStore();
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        width: size,
        height: size,
        borderRadius: borderRadius || "25%",
        overflow: "hidden",
      }}
    >
      <Avatar
        src={profileStore.avatar}
        style={{ height: "100%", width: "100%" }}
      />
      {editable && (
        <div
          style={{
            display: "flex",
            zIndex: 20,
            height: size / 3,
            width: size,
            top: size - size / 3,
            position: "absolute",
            fontSize: "2rem",
            color: "rgb(255,255,255)",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.5)",
          }}
        >
          Edit
        </div>
      )}
    </div>
  );
}
