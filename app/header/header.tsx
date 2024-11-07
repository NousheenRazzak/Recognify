import Link from "next/link";

export default function Header(){
    return(
        <header>
            <div>
                <h1 className="logo"><Link href="#">RECOGNIFY</Link></h1>
            </div>
            <div>
                <ul>
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="/about">ABOUT</Link></li>
                    <li><Link href="/contact">CONTACT</Link></li>
                </ul>
            </div>
        </header>
    )
}