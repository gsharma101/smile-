import { navLinks } from "../constants";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
export default function navbar() {
  return (
    <div className="padding-x py-8">
      <nav className="flex justify-between items-center">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-10 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex shadow-md gap-2 px-5 rounded-full donate text-lg leading-normal font-small font-montserrat max-lg:hidden wide:mr-24">
          <a href="#">Donate</a>
        </div>
        <div className="hidden max-lg:block">
          <img src={menu} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </div>
  );
}
