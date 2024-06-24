import { Link2, Mail, Mails, Phone, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";


export default function Footer(){
    return(
        <div className="footer" style={{background:"rgba(100 100 100/ 30%)", width:"100%", fontSize:"0.8rem", display:"flex", justifyContent:'center', bottom:0, border:"", flexFlow:"column", padding:"", alignItems:"center"}}>

            <div className="items-container" style={{display:'flex', flexFlow:"column", border:"", padding:"2rem", gap:"3rem"}}>

                <div style={{display:"flex", border:"", justifyContent:"", flexWrap:"wrap", gap:"2.5rem", width:""}}>

                    {/* Get in Touch */}
                    <div style={{border:"", display:"flex", flexFlow:"column"}}>
                    <p style={{fontSize:"1rem", fontWeight:600}}>GET IN TOUCH</p>
                    <br/>

                    <div style={{display:'flex', flexFlow:"column", gap:"0.5rem", letterSpacing:"0.05rem"}}>

                        <Link style={{display:"flex", gap:"0.5rem", alignItems:"center", letterSpacing:"0.05rem"}} to=""><Smartphone color="crimson" width={"1rem"}/>92822305, 99440272</Link>
                        <Link style={{display:"flex", gap:"0.5rem", alignItems:"center"}} to=""><Phone color="crimson" width={"1rem"}/>26842701, Fax : 26844289</Link>
                        <Link style={{display:"flex", gap:"0.5rem", alignItems:"center"}} to=""><Mails color="crimson" width={"1rem"}/>soharstar2010@gmail.com</Link>
                        <Link style={{display:"flex", gap:"0.5rem", alignItems:"center"}} to=""><Mail color="crimson" width={"1rem"}/>info@soharstar.com</Link>

                    </div>
                    </div>

                    {/* Quick Links */}
                    <div style={{border:"", display:"flex", flexFlow:"column"}}>

                    <p style={{fontSize:"1rem", fontWeight:600, display:"flex", gap:"0.5rem"}}>QUICK LINKS <Link2/></p>
                    <br/>
                    <div style={{display:"flex", gap:"2.5rem", fontSize:"0.9rem"}}>
                        <div style={{display:"flex", flexFlow:"column", gap:"0.5rem"}}>
                            <Link className="link" to="">Our Team</Link>
                            <Link className="link" to="">Our Mission</Link>
                            <Link className="link" to="">Values & Culture</Link>
                            <Link className="link" to="">Quality Certifications</Link>
                        </div>
                        <div style={{display:"flex", flexFlow:"column",gap:"0.5rem"}}>
                            <Link to="">Projects</Link>
                            <Link to="">Careers</Link>
                            <Link to="">Contact Us</Link>
                        </div>
                    </div>



                    </div>


                    
                </div>

                

                

                <div style={{border:"", display:"flex", alignItems:'center'}}>
                    {/* <img src="/sohar_star_logo.png" width={"40rem"}/> */}
                    <br/>

                    <div>
                    <p style={{fontSize:"1rem", fontWeight:600}}>SOHAR STAR UNITED LLC</p>
                    

                    <div style={{display:'flex', flexFlow:"column", gap:"", letterSpacing:"0.05rem"}}>

                        <p style={{opacity:0.5, fontSize:"0.85rem"}}>P.O. Box: 153, PC: 322, Falaj Al-Qabail, Sultanate of Oman, CR No.:1079500</p>

                    </div>

                    </div>
                    
                </div>

                

                


                

            </div>

            <div style={{display:"flex",margin:"", wordSpacing:"0.1rem", border:"", padding:"1rem", background:"#1a1a1a", width:"100%", justifyContent:"center"}}>
                <div className="items-container" style={{display:"flex", border:"", justifyContent:"center"}}>
                <p>Copyrights Reserved 2024 &copy; <strong style={{fontWeight:500}}> SOHAR STAR UNITED LLC </strong></p>
                </div>
                
                </div>
            
            
        </div>
    )
}