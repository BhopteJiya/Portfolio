import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
     setOpen(false);
  };

  return (
    <nav className=" ">
      <div className="flex flex-row justify-between px-6 md:justify-around py-5 m-0 text-2xl cursor-pointer " >

        <h2 style={{ fontFamily: '"Courier New", monospace' }} className="font-extrabold text-gray-500 text-5xl  ">JB </h2>

        <ul className="hidden md:flex flex-row justify-around gap-5  " >
          <li className="relative group cursor-pointer  text-white hover:text-violet-700" onClick={() => scrollToSection("Hero")}>Home
            <span className="absolute left-0 -bottom-0 h-[4px] w-0 bg-violet-700 transition-all duration-300 ease-out group-hover:w-full" ></span>
          </li>

          <li className="relative group cursor-pointer  text-white hover:text-violet-700" onClick={() => scrollToSection("About")}>About <span className="absolute left-0 -bottom-0 h-[4px] w-0 bg-violet-700 transition-all duration-300 ease-out group-hover:w-full" ></span> </li>

          <li className="relative group cursor-pointer  text-white hover:text-violet-700" onClick={() => scrollToSection("Skill")}>Skills <span className="absolute left-0 -bottom-0 h-[4px] w-0 bg-violet-700 transition-all duration-300 ease-out group-hover:w-full" ></span> </li>

          <li className="relative group cursor-pointer  text-white hover:text-violet-700" onClick={() => scrollToSection("Education")}>Education  <span className="absolute left-0 -bottom-0 h-[4px] w-0 bg-violet-700 transition-all duration-300 ease-out group-hover:w-full" ></span></li>

          <li className="relative group cursor-pointer  text-white hover:text-violet-700" onClick={() => scrollToSection("Projects")}>Projects <span className="absolute left-0 -bottom-0 h-[4px] w-0 bg-violet-700 transition-all duration-300 ease-out group-hover:w-full" ></span> </li>

          <li className="relative group cursor-pointer  text-white hover:text-violet-700" onClick={() => scrollToSection("Contact")}>Contact  <span className="absolute left-0 -bottom-0 h-[4px] w-0 bg-violet-700 transition-all duration-300 ease-out group-hover:w-full" ></span></li>
        </ul>
       <div
          className="md:hidden text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </div>
</div>
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-white/20 backdrop-blur-md text-xl">
          {["Hero","About","Skill","Education","Projects","Contact"].map(item => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative group font-medium text-white hover:text-violet-700 cursor-pointer" 
            >
              {item === "Hero" ? "Home" : item}
            </li>
          ))}
        </ul>
      )}

    </nav>
  );
};

export default Navbar;
