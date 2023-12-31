"use client";
import { useStudentStore } from "@/app/store/student";
import { Button, Form, Input, Popup, Selector, Toast } from "antd-mobile";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useState } from "react";
import { AvatarFullConfig } from "react-nice-avatar";
import CuteAvatarList from "../common/cute_avatar_generate";

dayjs.extend(customParseFormat);

export function CreateStudent({}: {}) {
  const studentStore = useStudentStore();
  const [name, setName] = useState<string>("");
  const [from, setFrom] = useState<string | undefined>();
  const [occupation, setOccupation] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string | undefined>();
  const [wechat, setWechat] = useState<string | undefined>();
  const [avatar, setAvatar] = useState<AvatarFullConfig | undefined>();

  const checkStudent = () => {
    if (!name) {
      return "name is required";
    }
    return "";
  };
  const resetForm = () => {
    setName("");
    setFrom(undefined);
    setOccupation(undefined);
    setEmail(undefined);
    setAge("");
    setGender(undefined);
    setWechat(undefined);
  };
  const createStudent = () => {
    if (checkStudent()) {
      Toast.show(checkStudent());
      return;
    }
    const err = studentStore.createStudent({
      name: name,
      from: from,
      occupation: occupation,
      age: age ? parseInt(age, 10) : undefined,
      gender: gender,
      email: email,
      wechat: wechat,
      avatar: avatar,
    });
    if (err) {
      Toast.show(err);
      return;
    }
    Toast.show("success");
    resetForm();
  };
  return (
    <div className="flex flex-col  text-lg w-full">
      <div className="flex flex-col flex-grow w-full relative">
        <Form mode="card">
          <Form.Header>Create a new student</Form.Header>
          <Form.Item className="overflow-x-auto">
            <CuteAvatarList setSelectedConfig={setAvatar} />
          </Form.Item>
          <Form.Item
            label="student name"
            rules={[
              { required: true, message: "Name is required", type: "email" },
            ]}
          >
            <Input
              onChange={(e) => {
                setName(e);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Selector
              options={[
                {
                  label: "female",
                  value: "female",
                },
                {
                  label: "male",
                  value: "male",
                },
                {
                  label: "others",
                  value: "others",
                },
              ]}
              defaultValue={["female"]}
              multiple={false}
              onChange={(e) => {
                setGender(e[0]);
              }}
            />
          </Form.Item>
          <Form.Item label="age">
            <Input
              type="number"
              onChange={(e) => {
                setAge(e);
              }}
            ></Input>
          </Form.Item>
          <Form.Item label="from">
            <Input
              clearable
              onChange={(e) => {
                setFrom(e);
              }}
            ></Input>
          </Form.Item>
          <Form.Item label="occupation">
            <Input
              onChange={(e) => {
                setOccupation(e);
              }}
            ></Input>
          </Form.Item>
          <Form.Header />
          <Form.Item label="email">
            <Input
              clearable
              onChange={(e) => {
                setEmail(e);
              }}
            ></Input>
          </Form.Item>
        </Form>
      </div>

      <div className="flex flex-col  grow-0 mx-3">
        <Button
          type="submit"
          size="large"
          block
          onClick={() => {
            createStudent();
          }}
        >
          OK
        </Button>
      </div>
    </div>
  );
}
