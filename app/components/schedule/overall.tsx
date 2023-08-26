import { useClazzStore } from "@/app/store/clazz";
import {
  isTimestampAfterNow,
  isTimestampBeforeNow,
  isTimestampInThisWeek,
  isTimestampInTodayRange,
} from "@/app/tools/time";
import { useEffect, useState } from "react";
import { CardBlock } from "./cardBlock";

export function Overall() {
  const [sum, setSum] = useState<{
    today: number;
    week: number;
    coming: number;
    complated: number;
  }>({ today: 0, week: 0, coming: 0, complated: 0 });
  const clazzStore = useClazzStore();

  useEffect(() => {
    setSum({
      today: clazzStore.clazz.filter((ele) => isTimestampInTodayRange(ele.date))
        .length,
      week: clazzStore.clazz.filter((ele) => isTimestampInThisWeek(ele.date))
        .length,
      coming: clazzStore.clazz.filter((ele) => isTimestampAfterNow(ele.date))
        .length,
      complated: clazzStore.clazz.filter((ele) =>
        isTimestampBeforeNow(ele.date),
      ).length,
    });
  }, [clazzStore.clazz]);
  return (
    <div className="mx-4 py-2">
      <div className="flex flex-row">
        <CardBlock title="Today" num={sum?.today} cn="mr-2"></CardBlock>
        <CardBlock title="This Week" num={sum?.week} cn="ml-2"></CardBlock>
      </div>
      <div className="flex flex-row">
        <CardBlock title="Coming" num={sum.coming} cn="mr-2 mt-4"></CardBlock>
        <CardBlock
          title="Complated"
          num={sum.complated}
          cn="ml-2 mt-4"
        ></CardBlock>
      </div>
    </div>
  );
}
