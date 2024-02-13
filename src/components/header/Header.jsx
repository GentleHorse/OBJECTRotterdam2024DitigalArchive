import logoImage from "../../../public/logo.png";
import titleLogoImage from "../../../public/title-logo.png";

export default function Header() {
  return (
    <header className="fixed mt-5 ml-5 z-10">
      <section>
        <a
          className="no-underline flex flex-row"
          href="https://objectrotterdam.com/"
          target="_blank"
        >
          <img src={logoImage} className="w-[30px] h-[30px] mt-0 mr-[10px] mb-0 ml-0" />
          <img src={titleLogoImage} className="h-[30px] mt-0" />
        </a>
      </section>
      <section>
        <p className="font-roboto mt-[10px] text-stone-300">2-4 February, 2024</p>
      </section>
    </header>
  );
}
