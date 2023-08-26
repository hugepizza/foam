import { useClazzStore } from "@/app/store/clazz";
import { useStudentStore } from "@/app/store/student";
import { isTimestampInRange } from "@/app/tools/time";
import { Dialog, List } from "antd-mobile";
import dayjs from "dayjs";

export default function Summary() {
  const studentStore = useStudentStore();
  const clazzStore = useClazzStore();
  const rangeClazz = clazzStore.clazz.filter((ele) =>
    isTimestampInRange(
      ele.date,
      dayjs().subtract(7, "day").unix(),
      dayjs().add(7, "day").unix()
    )
  );
  const set = new Set<string>();
  rangeClazz.forEach((ele) => set.add(ele.student.name));
  return (
    <List mode="card" style={{ marginTop: "0px" }}>
      <List.Item>
        <div className="flex flex-col w-full text-center">
          <div className="flex flex-row">
            <div className="w-1/2 flex flex-col ml-8">
              <div className="h-1/3 text-sm">Sum</div>
              <div className="h-2/3  text-2xl">
                {studentStore.Students.length}
              </div>
            </div>
            <div
              className="w-1/2 flex flex-col mr-8"
              onClick={() => {
                Dialog.show({
                  title: (
                    <div>
                      <div>Tips</div>
                      <div className="font-thin">
                        The numner of  students you have classes within prev or next 7 days.
                      </div>
                    </div>
                  ),
                  closeOnMaskClick: true,
                });
              }}
            >
              <div className="h-1/3 text-sm">Actice</div>
              <div className="h-2/3 text-2xl">{set.size}</div>
            </div>
          </div>
        </div>
      </List.Item>
    </List>
  );
}
