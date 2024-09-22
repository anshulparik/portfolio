import Image from "next/image";
import Link from "next/link";
import NavbarInteraction from "./NavbarInteraction";

const Navbar = () => {
  return (
    <nav id="nav" className="py-4 lg:py-6 flex items-center justify-between">
      <div
        className="cursor-pointer
        ml-1 lg:ml-6 relative w-[100px] h-[45px] lg:w-[140px] lg:h-[55px]"
      >
        <Link href="/">
          <Image src="/images/anshul25.png" alt="ANSHUL" quality={100} fill />
        </Link>
      </div>
      <NavbarInteraction />
    </nav>
  );
};

export default Navbar;
