import hakaBuildingIconImage from "../../../public/haka-building-logo.png";

export default function Footer() {
  return (
    <footer className="fixed z-10 w-[100vw] bottom-0 mb-[20px] flex flex-row justify-between items-end">
      <a
        href="https://www.google.com/maps/place/HAKA-gebouw/@51.9080966,4.4345377,17z/data=!3m1!4b1!4m6!3m5!1s0x47c434ef92035e57:0x463a2e51eb7c5f28!8m2!3d51.9080966!4d4.4371126!16s%2Fg%2F1tczzplv?entry=ttu"
        target="_blank"
        className="no-underline text-[#161616] mt-[2px]"
      >
        <img src={hakaBuildingIconImage} className="h-[40px] ml-[12px]" />
        <p className="font-roboto ml-[20px] mt-[3px] mb-0 text-sm text-stone-300">
          Friday - Sunday 11 - 18 hrs
        </p>
        <p className="font-roboto ml-[20px] mt-[3px] mb-0 text-sm text-stone-300">
          HAKA, Vierhavenstraat 38 - 42
        </p>
      </a>
      <section className="mr-5 flex flex-col items-end">
        <a href="https://jeroenvdbogaert.com/" target="_blank">
          <button className="bg-none border-none outline-none shadow-none font-roboto text-sm text-stone-300 hover:text-[#4b4ee3]">
            Jeroen van den Bogaert
          </button>
        </a>
        <a href="https://www.satomiminoshima.com/" target="_blank">
          <button className="bg-none border-none outline-none shadow-none font-roboto text-sm text-stone-300 hover:text-[#4b4ee3]">
            Satomi Minoshima
          </button>
        </a>
        <a href="https://www.toshihito.design/" target="_blank">
          <button className="bg-none border-none outline-none shadow-none font-roboto text-sm text-stone-300 hover:text-[#4b4ee3]">
            Toshihito Endo
          </button>
        </a>
      </section>
    </footer>
  );
}
