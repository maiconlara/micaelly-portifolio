export const SmallHero = () => {
  return (
    <div className="relative overflow-hidden py-20 w-full flex items-center justify-center bg-transparent">
      <div className="flex flex-col lg:flex-row w-full h-full max-w-[86vw] 2xl:max-w-[1420px] items-center justify-center gap-10">
        <div className="flex flex-col items-center w-full gap-8 select-none -mt-[72px]">
          <div className="flex flex-col w-full gap-0 items-center justify-center">
            <p className="text-green-secondary text-6xl lg:text-9xl font-light uppercase font-name select-none text-center">
              Micaelly
            </p>
            <p className="text-green-secondary text-6xl lg:text-9xl font-light uppercase font-name select-none text-center">
              da Rosa
            </p>
          </div>
          <p className="text-white text-8xl lg:text-[10rem] font-normal font-title select-none text-start -mt-18 lg:-mt-28">
            Portifólio
          </p>
        </div>
      </div>
    </div>
  );
};
