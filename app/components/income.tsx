import { DatePicker, Input, List, Modal, TextArea } from "antd-mobile";
import { useState } from "react";
import { AddOutline } from "antd-mobile-icons";

export default function Income() {
  const income = [
    { from: "Linda", amount: 12321, date: "08/09/2023", remark: "10 classes" },
    {
      from: "Linda",
      amount: 12321,
      date: "08/09/2023",
      remark: "a trail class",
    },
    { from: "Linda", amount: 12321, date: "08/09/2023", remark: "123" },
    { from: "Linda", amount: 12321, date: "08/09/2023", remark: "123" },
    { from: "Linda", amount: 12321, date: "08/09/2023", remark: "123" },
    { from: "Linda", amount: 12321, date: "08/09/2023", remark: "123" },
    { from: "Linda", amount: 12321, date: "08/09/2023", remark: "123" },
    { from: "Linda", amount: 12321, date: "08/09/2023", remark: "123" },
    { from: "Linda", amount: 12321, date: "08/09/2023", remark: "123" },
    { from: "Linda", amount: 12321, date: "08/09/2023", remark: "123" },
    { from: "Linda", amount: 12321, date: "08/09/2023", remark: "123" },
    { from: "Linda", amount: 12321, date: "08/09/2023", remark: "123" },
  ];

  const items = income.map((ele) => (
    <List.Item
      key={ele.amount}
      prefix={`💰 ${ele.from}`}
      extra={ele.date}
      arrow={false}
      onClick={() => {
        Modal.show({
          title: "Remark",
          content: ele.remark,
          showCloseButton: true,
          actions: [],
          closeOnMaskClick: true,
        });
      }}
    >
      {ele.amount}
    </List.Item>
  ));

  const formatDate = (date: Date) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${year % 100}`;
  };

  const [date, setDate] = useState(formatDate(new Date()));
  const [dateVisible, setDateVisible] = useState(false);
  const [addFormVisible, setAddFormVisible] = useState(false);

  return (
    <>
      <Summary
        date={date}
        datePickerOn={() => setDateVisible(true)}
        addFormOn={() => setAddFormVisible(true)}
      ></Summary>
      <List mode="card">{items}</List>

      <DatePicker
        title="Date"
        visible={dateVisible}
        onClose={() => {
          setDateVisible(false);
        }}
        precision="month"
        onConfirm={(val) => {
          setDate(formatDate(val));
        }}
      />
    </>
  );
}
function Add() {
  const [amount, setAmount] = useState(0);
  return (
    <div
      onClick={() => {
        Modal.show({
          closeOnMaskClick: true,
          // TODO choose student
          content: (
            <>
              <Input
                placeholder="Input Amount"
                value={""}
                onChange={(val) => {
                  setAmount(parseInt(val, 10));
                }}
              />
              <TextArea></TextArea>
            </>
          ),
        });
      }}
      className="p-1"
    >
      <AddOutline />
    </div>
  );
}

function Summary({
  date,
  datePickerOn,
  addFormOn,
}: {
  date: string;
  datePickerOn: () => void;
  addFormOn: () => void;
}) {
  return (
    <List mode="card">
      <List.Item>
        <div className="flex flex-col w-full h-[80px] text-center">
          <div className="flex flex-row justify-between">
            <div
              className="text-sm p-1 bg-indigo-100 rounded-md"
              onClick={datePickerOn}
            >
              {date}
            </div>
            <Add />
          </div>
          <div className="flex flex-row">
            <div className="w-1/2 flex flex-col ml-8">
              <div className="h-1/3 text-sm">Amount</div>
              <div className="h-2/3  text-2xl">23200P</div>
            </div>
            <div className="w-1/2 flex flex-col mr-8">
              <div className="h-1/3 text-sm">Count</div>
              <div className="h-2/3 text-2xl">12</div>
            </div>
          </div>
        </div>
      </List.Item>
    </List>
  );
}
