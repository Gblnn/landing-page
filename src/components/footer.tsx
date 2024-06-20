import { Mail, Phone, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";


export default function Footer(){
    return(
        <div style={{background:"rgba(100 100 100/ 30%)", width:"100%", fontSize:"0.8rem", display:"flex", justifyContent:'center', bottom:0, border:"", flexFlow:"column", padding:"1.5rem"}}>


            <div style={{border:"", display:"flex", flexFlow:"column"}}>

                <p style={{fontSize:"1rem", fontWeight:600}}>QUICK LINKS</p>
                <br/>
                <div style={{display:"flex", gap:"2.5rem"}}>
                    <div style={{display:"flex", flexFlow:"column", gap:"0.5rem"}}>
                        <Link to="">Our Team</Link>
                        <Link to="">Our Mission</Link>
                        <Link to="">Values & Culture</Link>
                    </div>
                    <div style={{display:"flex", flexFlow:"column",gap:"0.5rem"}}>
                        <Link to="">Projects</Link>
                        <Link to="">Careers</Link>
                        <Link to="">Contact Us</Link>
                    </div>
                </div>
                
                

            </div>

            <br/><br/>

            <div style={{border:"", display:"flex", flexFlow:"column"}}>
                <p style={{fontSize:"1rem", fontWeight:600}}>GET IN TOUCH</p>
                <br/>
                
                <div style={{display:'flex', flexFlow:"column", gap:"0.5rem", letterSpacing:"0.05rem"}}>
                <Link style={{display:"flex", gap:"0.5rem", alignItems:"center", letterSpacing:"0.05rem"}} to=""><Smartphone color="crimson" width={"1rem"}/>92822305, 99440272</Link>
                <Link style={{display:"flex", gap:"0.5rem", alignItems:"center"}} to=""><Phone color="crimson" width={"1rem"}/>26842701, Fax : 26844289</Link>
                <Link style={{display:"flex", gap:"0.5rem", alignItems:"center"}} to=""><Mail color="crimson" width={"1rem"}/>soharstar2010@gmail.com, info@soharstar.com</Link>
                </div>
                

            </div>

            <br/><br/><br/>


            <div style={{margin:"", wordSpacing:"0.1rem", border:""}}>
                <p>All Copyrights Reserved 2024 &copy; <strong style={{fontWeight:500}}> SOHAR STAR UNITED LLC </strong></p>
            </div>
            
        </div>
    )
}