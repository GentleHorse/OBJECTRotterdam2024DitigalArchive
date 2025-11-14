import logoImage from "../../../public/logo.png";
import titleLogoImage from "../../../public/title-logo.png";

export default function Header() {
  return (
    <header className="w-screen fixed p-5 z-10 flex justify-between box-border">
      <div>
        <div>
          <a
            className="no-underline flex flex-row"
            href="https://objectrotterdam.com/"
            target="_blank"
          >
            <img
              src={logoImage}
              className="w-[30px] h-[30px] mt-0 mr-[10px] mb-0 ml-0"
            />
            <img src={titleLogoImage} className="h-[30px] mt-0" />
          </a>
        </div>
        <div>
          <p className="font-roboto mt-[10px] text-xs text-stone-300">
            2-4 February, 2024
          </p>
        </div>
      </div>

      <div>
        <a
          href="https://object-rotterdam-2024-floor-plan.vercel.app/"
          className="
            relative flex items-center justify-center
            w-[150px] h-[150px]
            rounded-[5px] overflow-hidden
            no-underline
            transition-transform duration-200 ease-linear
            hover:scale-[1.02]
            will-change-transform
          "
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <img
            src="/floor-planning.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-[5px]"
          />
          <div
            className="
        absolute inset-0
        bg-black/40
        rounded-[5px]
        pointer-events-none
      "
          />
          <p
            className="
        relative z-[2]
        font-bold text-[11px]
        text-white text-center whitespace-nowrap
      "
            style={{ 
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              transform: 'translateZ(0)'
            }}
          >
            Floor Planning
          </p>
        </a>
      </div>
    </header>
  );
}
