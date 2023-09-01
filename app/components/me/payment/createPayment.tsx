"use client";
import { usePaymentStore } from "@/app/store/payment";
import { useStudentStore } from "@/app/store/student";
import {
  Button,
  Calendar,
  Card,
  Collapse,
  Form,
  Input,
  Popup,
  TextArea,
  Toast,
} from "antd-mobile";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useState } from "react";
import StudentSelect from "../../common/studentSelect";
import StudentSelect2 from "../../common/studentSelect2";

dayjs.extend(customParseFormat);

export function CreatePayment() {
  const [searchVisible, setsearchVisible] = useState(false);

  const studentStore = useStudentStore();
  const paymentStore = usePaymentStore();
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(dayjs().unix());
  const [remark, setRemark] = useState<string | undefined>();

  const checkStudent = () => {
    if (!name || !amount || !date) {
      return "inputs are required";
    }
    return "";
  };
  const resetForm = () => {
    setName("");
    setAmount(0);
    setDate(dayjs().unix());
    setRemark("");
  };
  const createPayment = () => {
    if (checkStudent()) {
      Toast.show(checkStudent());
      return;
    }
    const err = paymentStore.createPayment({
      student: { name: name },
      amount: amount,
      date: date,
      remark: remark,
    });
    if (err) {
      Toast.show(err);
      return;
    }
    Toast.show("success");
    resetForm();
  };
  return (
    <div className="flex flex-col text-lg w-full h-full">
      <div className="flex flex-col flex-grow w-full h-full">
        <Form mode="card">
          <Form.Header>Create a new payment</Form.Header>

          <Collapse accordion>
            <Collapse.Panel
              key="date"
              title={
                <div className="flex justify-between">
                  <span>select payment date</span>
                  <span>{dayjs.unix(date).format("DD/MM/YY")}</span>
                </div>
              }
            >
              <Calendar
                selectionMode="single"
                onChange={(d) => {
                  setDate(dayjs(d).unix());
                }}
                nextYearButton=<></>
                prevYearButton=<></>
              />
            </Collapse.Panel>
          </Collapse>
          <Form.Item label="name">
            <Input
              onFocus={() => setsearchVisible(true)}
              onChange={(e) => setName(e)}
              value={name}
            />
          </Form.Item>

          <StudentSelect
            close={() => setsearchVisible(false)}
            setResult={(e) => {
              setName(e);
            }}
            kw={name}
            v={searchVisible}
          />

          <Form.Item label="amount">
            <Input
              type="number"
              onChange={(e) => {
                setAmount(parseInt(e, 10));
              }}
            ></Input>
          </Form.Item>

          <Form.Item label="remark">
            <TextArea
              placeholder="put some remark here... "
              onChange={(e) => {
                setRemark(e);
              }}
            ></TextArea>
          </Form.Item>
          <Form.Header />
        </Form>
      </div>

      <div className="flex flex-col  grow-0 mx-3">
        <Button
          type="submit"
          size="large"
          block
          onClick={() => {
            createPayment();
          }}
        >
          OK
        </Button>
      </div>
    </div>
  );
}
