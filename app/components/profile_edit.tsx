import {
  Avatar,
  ImageUploadItem,
  ImageUploader,
  SpinLoading,
} from "antd-mobile";
import { useProfileStore } from "../store/profile";
import Upload from "../upload";
import { useRef, useState } from "react";

export default function ProfileEdit() {
  const profileStore = useProfileStore();
  const [uploading, setUploading] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="relative">
          {uploading && (
            <div
              className="flex justify-center items-center relative"
              style={{ height: "120px", width: "120px" }}
            >
              <SpinLoading />
            </div>
          )}
          {!uploading && (
            <>
              <Avatar
                src={profileStore.avatar}
                style={{ "--size": "120px", position: "relative" }}
              ></Avatar>
              <form>
                <Upload
                  afterUploaded={({ url }: { url: string }) => {
                    profileStore.updateAvatar(url);
                  }}
                  setUploading={(loading: boolean) => {
                    setUploading(loading);
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      zIndex: 20,
                      height: "40px",
                      width: "120px",
                      top: "80px",
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
                </Upload>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
