import { Link } from "react-router-dom";
import { NavMenu } from "./nav-menu";


export default function MobileNav(){
    return(
        <>
        <div style={{display:"flex", fontWeight:500, gap:"0.45rem", fontSize:"0.85rem", justifyContent:"center"}}>
            
                <NavMenu trigger={<p style={{width:"5rem", textAlign:"center"}}>About Us</p>}/>
            

            <Link style={{border:"", width:"5rem", textAlign:"center"}} to="/projects">
                Projects
            </Link>

            <Link style={{border:"", width:"5rem", textAlign:"center"}} to="/careers">
                Careers
            </Link>

            <Link style={{border:"", width:"5rem", textAlign:"center"}} to="/contact-us">
                Contact
            </Link>
        </div>
        </>
    )
}