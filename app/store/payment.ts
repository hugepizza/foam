import { create } from "zustand";
import { persist } from "zustand/middleware";

const key = "Payment";

export interface Student {
  name: string;
}

export interface Payment {
  date: number;
  student: Student;
  amount: number;
  remark?: string;
}

export interface PaymentStore {
  payment: Payment[];

  updatePayment: (_: number) => void;
  deletePayment: (_: number) => void;
  createPayment: (_: Payment) => string;
}

export const usePaymentStore = create<PaymentStore>()(
  persist(
    (set, get) => ({
      payment: new Array<Payment>(),
      updatePayment(date: number) {
        set(() => ({}));
      },
      deletePayment(date: number) {
        set(() => ({}));
      },
      createPayment(newPayment: Payment) {
        if (
          this.payment.find((ele) => {
            return ele.date === newPayment.date;
          })
        ) {
          return "have class at this time";
        }
        set((state) => ({
          payment: [...state.payment, newPayment],
        }));
        return "";
      },
    }),
    {
      name: key,
      version: 1,
    },
  ),
);
