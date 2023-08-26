import { AvatarFullConfig } from "react-nice-avatar";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Student {
  name: string;
  from?: string;
  occupation?: string;
  age?: number;
  gender?: string;
  email?: string;
  wechat?: string;
  avatar?: AvatarFullConfig;
}

const key = "Student";

export interface StudentStore {
  Students: Student[];

  updateStudent: (_: number) => void;
  deleteStudent: (_: number) => void;
  createStudent: (_: Student) => string;
}

export const useStudentStore = create<StudentStore>()(
  persist(
    (set, get) => ({
      Students: new Array<Student>(),
      updateStudent(date: number) {
        set(() => ({}));
      },
      deleteStudent(date: number) {
        set(() => ({}));
      },
      createStudent(newStudent: Student) {
        if (
          this.Students.find((ele) => {
            return ele.name === newStudent.name;
          })
        ) {
          return "repeat student name";
        }
        set((state) => ({
          Students: [...state.Students, newStudent],
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
