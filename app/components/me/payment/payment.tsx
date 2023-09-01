import { List, Modal, Selector } from "antd-mobile";
import { HandPayCircleOutline } from "antd-mobile-icons";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Payment, usePaymentStore } from "../../../store/payment";
import Float from "../../common/float";
import { CreatePayment } from "./createPayment";

export default function Payment() {
  const [payment, setPayment] = useState<Payment[]>();
  const [range, setRange] = useState(0);
  const paymentStore = usePaymentStore();
  useEffect(() => {
    const payment = paymentStore.payment;
    setPayment(
      payment
        ?.filter((ele) => {
          if (range > 0) {
            return ele.date >= dayjs().unix() - range * 86400;
          }
          return true;
        })
        .sort((a, b) => a.date - b.date)
    );
  }, [paymentStore.payment, range]);

  const items = payment?.map((ele) => (
    <List.Item
      key={ele.date + ele.student.name}
      prefix={<HandPayCircleOutline />}
      extra={
        <>
          <span className="text-slate-500 mr-1">{"from"}</span>
          <span className="text-lg mr-2 text-black">{ele.student.name}</span>
          <span>{dayjs.unix(ele.date).format("DD/MM/YY")}</span>
        </>
      }
      arrow={false}
      onClick={() => {
        Modal.show({
          title: "Remark",
          content: ele.remark,
          showCloseButton: true,
          closeOnMaskClick: true,
        });
      }}
    >
      <span className="text-2xl mr-4">{ele.amount}</span>
    </List.Item>
  ));

  return (
    <>
      <DateSelect setRange={setRange} />
      <Summary payment={payment} />
      <List mode="card">{items}</List>
      <Float to="/me/payment/create" />
    </>
  );
}

function DateSelect({ setRange }: { setRange: (r: number) => void }) {
  return (
    <div className="mx-3">
      <Selector
        multiple={false}
        options={[
          {
            label: "All",
            value: "0",
          },
          {
            label: "7 Days",
            value: "7",
          },
          {
            label: "30Days",
            value: "30",
          },
        ]}
        defaultValue={["0"]}
        onChange={(arr) => setRange(parseInt(arr[0], 10))}
      />
    </div>
  );
}

function Summary({ payment }: { payment?: Payment[] }) {
  return (
    <List mode="card">
      <List.Item>
        <div className="flex flex-col w-full h-[80px] text-center justify-center">
          <div className="flex flex-row">
            <div className="w-1/2 flex flex-col ml-8">
              <div className="h-1/3 text-sm">Amount</div>
              <div className="h-2/3  text-2xl">
                {payment &&
                  payment
                    ?.map((ele) => ele.amount)
                    ?.reduce((acc, current) => acc + current)}
              </div>
            </div>
            <div className="w-1/2 flex flex-col mr-8">
              <div className="h-1/3 text-sm">Count</div>
              <div className="h-2/3 text-2xl">{payment?.length}</div>
            </div>
          </div>
        </div>
      </List.Item>
    </List>
  );
}
