

export default function TeamMember(){
    return(
        <div className="project" style={{background:"rgba(100 100 100/ 20%)", width:"100%", height:"12ch", borderRadius:"1.5rem", display:"flex", alignItems:"center"}}>
            <div style={{border:"", height:"100%", display:"flex", width:"14ch", justifyContent:"center", alignItems:'center'}}>
            <img src="pxfuel.jpg" style={{width:"6rem", height:"6rem", objectFit:"cover", borderRadius:"50%", border:"4px solid crimson"}}/>
            </div>
            <div style={{height:"100%",flex:1, border:"", display:"flex", justifyContent:"center", flexFlow:"column", paddingRight:"1rem"}}>
                <p>Managing Director</p>
                <p style={{opacity:"0.5", fontSize:"0.8rem"}}>Some information about the member</p>
            </div>
            
        </div>
    )
}