export default function Schedule() {
  const defaultSingle = new Date();

  return (
    <div className="flex mx-4 py-2 flex-col">
      <div className="flex flex-row">
        <Card title="Today" num={5} cn="mr-2"></Card>
        <Card title="This Week" num={5} cn="ml-2"></Card>
      </div>
      <div className="flex flex-row">
        <Card title="All" num={12} cn="mr-2 mt-4"></Card>
        <Card title="Complated" num={2} cn="ml-2 mt-4"></Card>
      </div>

      {/* <Calendar
        selectionMode="single"
        defaultValue={defaultSingle}
        onChange={(val) => {
          console.log(val);
        }}
      /> */}
    </div>
  );
}

function Card({ title, num, cn }: { title: string; num: number; cn: string }) {
  return (
    <div
      className={`rounded-2xl  bg-white flex flex-col w-[calc(50%-4px)] w-max-[calc(50%-4px)] h-24 items-center justify-center text-center ${cn}`}
    >
      <div className="text-zinc-500 text-xl">{title}</div>
      <div className="text-3xl">{num}</div>
    </div>
  );
}
