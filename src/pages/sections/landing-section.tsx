import { ChevronDown } from "lucide-react";

interface Props{
    title?:string
    subtitle?:string
    videoSource?:string
    footerText?:string
}

export default function LandingSection(props:Props){
    return(
        <>
        <div style={{width:"100%", height:"100svh", display:"flex", alignItems:"center", justifyContent:"center", flexFlow:"column", gap:"1rem"}}>

            <video style={{opacity:0.25, objectFit:"cover", border:"", minHeight:"100%", minWidth:"100%"}} autoPlay muted loop controlsList="nofullscreen" playsInline>

                <source src={props.videoSource} type="video/mp4" />

            </video>



            <div style={{position:"absolute", justifyContent:"center", display:"flex", flexFlow:"column", alignItems:"center",marginTop:"2rem"}}>


                <h1 className="heading" style={{ fontWeight:500, fontFamily:"", border:"", lineHeight:"4.25rem", padding:"1rem"}}>{props.title}</h1>

                <h1 className="mobile-heading" style={{ fontWeight:500, fontFamily:"", border:"", lineHeight:"3.25rem", padding:"1rem"}}>Build with us.<br/>Grow with us.</h1>
                
                <br/>
                <p style={{opacity:"0.75", wordSpacing:"0.25rem"}}>{props.subtitle}</p>
                <br style={{height:"2rem"}}/>

                <a href="#services" className="arrow" style={{position:"absolute", marginTop:"20rem"}}>
                    <button >
                        <ChevronDown color="crimson" width={"2.5rem"} height={"2.5rem"}/>
                    </button>
                </a>

            </div>

            <p style={{position:"absolute", bottom:0, margin:"1.5rem", fontSize:"0.8rem", opacity:0.5}}>{props.footerText}</p>


            </div>
        </>
    )
}