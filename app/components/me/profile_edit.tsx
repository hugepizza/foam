import { Button, Form, Input, SpinLoading, Toast } from "antd-mobile";
import { useProfileStore } from "../../store/profile";
import Upload from "../../upload";

import { useState } from "react";
import ProfileAvatar from "./avatar";
export default function ProfileEdit() {
  return (
    <div>
      <AvatarEdit />
      <InfoEdit />
    </div>
  );
}
function InfoEdit() {
  const profileStore = useProfileStore();
  const [profile, setProfile] = useState<{
    userName: string;
    subject: string;
    from?: string;
  }>({
    userName: profileStore.userName,
    subject: profileStore.subject,
    from: profileStore.from,
  });
  const updateProfile = () => {
    profileStore.updateUserName(profile.userName || "Foam User");
    profileStore.updateSubject(profile.subject || "None");
    profileStore.updateFrom(profile.from);
    Toast.show({ content: "success" });
  };
  return (
    <div>
      <Form
        layout="horizontal"
        footer={
          <Button
            block
            type="submit"
            color="default"
            size="large"
            onClick={() => {
              updateProfile();
            }}
          >
            Submit
          </Button>
        }
      >
        <Form.Header>Edit your infomation</Form.Header>
        <Form.Item name="name" label="Name">
          <Input
            defaultValue={profile.userName}
            placeholder={"Your Name"}
            onChange={(e) => {
              setProfile({
                ...profile,
                userName: e,
              });
            }}
          />
        </Form.Item>

        <Form.Item name="subject" label="Suject">
          <Input
            defaultValue={profile.subject}
            placeholder={"Your Teaching Subject"}
            onChange={(e) => {
              setProfile({
                ...profile,
                subject: e,
              });
            }}
          />
        </Form.Item>

        <Form.Item name="from" label="From">
          <Input
            defaultValue={profile.from}
            placeholder={"The country you come from"}
            onChange={(e) => {
              setProfile({
                ...profile,
                from: e,
              });
            }}
          />
        </Form.Item>
      </Form>
    </div>
  );
}
function AvatarEdit() {
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
              <form>
                <Upload
                  afterUploaded={({ url }: { url: string }) => {
                    profileStore.updateAvatar(url);
                  }}
                  setUploading={(loading: boolean) => {
                    setUploading(loading);
                  }}
                >
                  <ProfileAvatar size={120} editable></ProfileAvatar>
                </Upload>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
