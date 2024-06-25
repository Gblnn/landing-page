import NewsBox from "@/components/news-box";

export default function NewsAndUpdatesSection(){
    return(
        <>
        <div id="news-and-updates" className="page" style={{background:"url(https://i.pinimg.com/736x/92/70/c1/9270c19eb7d37366c20da05e28844248.jpg)", border:"", height:"auto", paddingTop:"3rem", paddingBottom:"4rem",  backgroundRepeat:"no-repeat", backgroundSize:"cover", display:"flex", justifyContent:'center'}}>

            <div style={{margin:"1.5rem", marginTop:"6rem", border:"", width:"fit-content"}}>

                <h1 style={{fontSize:"1.5rem", fontWeight:500, display:'flex', gap:"0.5rem", alignItems:'center', marginLeft:"1rem"}}>
                    Latest News <strong style={{color:"crimson", fontWeight:"500"}}>&</strong> Updates
                </h1>

                <div className="items-container" style={{border:"", display:"flex", marginTop:"2rem", justifyContent:"center", gap:"2rem", flexWrap:"wrap"}}>

                    <NewsBox img="https://static6.depositphotos.com/1000292/649/i/450/depositphotos_6490033-stock-photo-water-recycling-on-sewage-treatment.jpg" title="News & Update 1" desc="Brief description of update in very few words"/>
                    <NewsBox img="/pxfuel.jpg" title="News & Update 2" desc="Brief description of update in very few words"/>
                    <NewsBox img="https://st4.depositphotos.com/5797516/24306/i/450/depositphotos_243067188-stock-photo-landscape-oil-gas-refinery-manufacturing.jpg" title="News & Update 3" desc="Brief description of update in very few words"/>
                    <NewsBox img="https://motionarray.imgix.net/motion-array-1096692-auDdGLclkD-high_0009.jpg?w=660&q=60&fit=max&auto=format" title="News & Update 4" desc="Brief description of update in very few words"/>

                </div>

                {/* <br/><br/>
                <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
                <Button onClick={()=>usenavigate("/projects")} variant={"ghost"} style={{width:"32ch", display:"flex", gap:"0.5rem", alignItems:"center", alignSelf:"center", background:"rgba(100 100 100/ 10%)", boxShadow:"1px 1px 10px rgba(0 0 0/ 10%)"}}>See more Projects <ChevronRight width={"1rem"} color="crimson"/></Button>
                </div> */}
                
                <br/>

            </div>

        </div>
        </>
    )
}