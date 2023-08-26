export function CardBlock({
  title,
  num,
  cn,
}: {
  title: string;
  num: number;
  cn: string;
}) {
  return (
    <div
      className={`rounded-2xl  bg-white flex flex-col w-[calc(50%-4px)] w-max-[calc(50%-4px)] h-24 items-center justify-center text-center ${cn}`}
    >
      <div className="text-zinc-500 text-xl">{title}</div>
      <div className="text-3xl">{num}</div>
    </div>
  );
}
