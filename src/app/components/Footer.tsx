import Image from "next/image";
import logo from '../assets/footer-logo.png'
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="container mx-auto footer sm:footer-horizontal text-neutral-content items-center p-4">
            <aside className="grid-flow-col items-center">
                <Image
                    src={logo}
                    alt="Picture of the Footer"
                    width={30}
                    height={30}
                    />
                    <Link href="" className="btn btn-ghost text-xl">FITLOG</Link>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </nav>
        </footer>
       
    );
};

export default Footer;