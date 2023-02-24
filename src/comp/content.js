import "./content.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"
import Spline from "@splinetool/react-spline"

export default function Content() {
    return(
        <div className="main-main-div">
            <div className="line-div"></div>
            <div className="main-content">
                <h1>Create and Customize <br/><span className="qr-span">QR Codes</span> for Your Business<br/>and Personal Use in Seconds!</h1>
                <p>With QRinfo you can Easily Create and Download QR Codes for Your Products, Services, and Marketing Campaigns with Our User-Friendly Tool.</p>
                <button className="main-btn">Generate QR Code</button>
                <div className="icons-div">
                    <a href="/"><FontAwesomeIcon className="main-icon" icon={faTwitter} /></a>   
                    <a href="/"><FontAwesomeIcon className="main-icon" icon={faGithub} /> </a>
                </div>
            </div>
            <div className="element-d">
                <Spline className="spline" scene="https://prod.spline.design/d8O54ldC5I6dpCNN/scene.splinecode" />
            </div>
        </div >
    )
}