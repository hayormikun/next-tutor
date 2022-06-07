import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/ninjas.svg" width={128} height={77} />
      </div>
      <Link href='/'><a>home</a></Link>
      
      <Link href='/about'><a>about</a></Link>
      <Link href='/ninjas'><a>ninja listing</a></Link>
    </nav>
  );
};

export default Navbar;
