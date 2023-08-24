import { create } from "zustand";
import { persist } from "zustand/middleware";

const key = "Clazz";

export interface Student {
  name: string;
}

export interface Clazz {
  date: number;
  student: Student;
}

export interface ClazzStore {
  clazz: Clazz[];

  updateClazz: (_: number) => void;
  deleteClazz: (_: number) => void;
  createClazz: (_: Clazz) => string;
}

export const useClazzStore = create<ClazzStore>()(
  persist(
    (set, get) => ({
      clazz: new Array<Clazz>(),
      updateClazz(date: number) {
        set(() => ({}));
      },
      deleteClazz(date: number) {
        set(() => ({}));
      },
      createClazz(newClazz: Clazz) {
        if (
          this.clazz.find((ele) => {
            return ele.date === newClazz.date;
          })
        ) {
          return "have class at this time";
        }
        set((state) => ({
          clazz: [...state.clazz, newClazz],
        }));
        return "";
      },
    }),
    {
      name: key,
      version: 1,
    }
  )
);
