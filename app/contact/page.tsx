import Header from "@/app/header/header";

export default function Contact(){
    return(
        <>
        <div className="main">
            <div className="about-section">
            <Header />

            <div className="about">
                <p>CONTACT US</p>
                <h1>GET IN TOUCH</h1>
                <div className="form">
                    <form>
                    <input type="text" placeholder="FIRST NAME"></input>
                    <input type="text" placeholder="LAST NAME"></input>
                    <input type="email" placeholder="EMAIL ADDRESS"></input>
                    <input type="text" placeholder="MESSAGE" className="message"></input>
                    <button>SUBMIT</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}