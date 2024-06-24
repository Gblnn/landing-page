import { LucideQuote } from "lucide-react";


export default function TeamMember(){
    return(
        <div className="" style={{background:"rgba(100 100 100/ 20%)", width:"100%", height:"12ch", borderRadius:"1.5rem", display:"flex", alignItems:"center"}}>
            <div style={{border:"", height:"100%", display:"flex", width:"14ch", justifyContent:"center", alignItems:'center'}}>
            <img src="sohar_star_logo.png" style={{width:"6rem", height:"6rem", objectFit:"cover", borderRadius:"50%", border:""}}/>
            </div>
            <div style={{height:"100%",flex:1, border:"", display:"flex", justifyContent:"center", flexFlow:"column", paddingRight:"1rem"}}>
                <p>Name of Member</p>
                <div style={{display:"flex", flexFlow:"", gap:"0.25rem"}}>
                <LucideQuote fill="white" stroke="none" width={"1rem"}/>
                <p>Quote</p>
                </div>
                
                <p style={{fontWeight:600, color:"crimson", fontSize:"0.8rem"}}>Designation of Member</p>
                <p style={{opacity:"0.5", fontSize:"0.8rem"}}>Information about the member</p>
                
                
            </div>
            
        </div>
    )
}