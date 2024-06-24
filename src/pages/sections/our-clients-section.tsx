import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function OurClientsSection(){
    return(
        <>
        <div className="page" style={{display:"flex", justifyContent:"center", paddingTop:"", height:"15rem",border:'', background:"#1a1a1a", alignItems:"center", flexFlow:"column", gap:'1.5rem', boxShadow:"1px 1px 20px rgba(0 0 0/ 50%)"}}>
            <h1 style={{textAlign:'center', color:""}}>OUR<br/> <strong style={{fontWeight:600}}>CLIENTS</strong></h1>
            <Carousel
            
            className="clients"
             style={{border:""}}
             plugins={[
                Autoplay({
                    delay:2000
                })
                
             ]}
             >
                
                <CarouselContent style={{display:"flex", alignItems:"center"}}>
                    

                    <CarouselItem className="basis-1/3 ">
                        <img src="/ote.svg" style={{width:"6rem"}}/>
                    </CarouselItem>

                    <CarouselItem className="basis-1/3 ">
                        <img src="/ap.png" style={{width:"6rem"}}/>
                    </CarouselItem>

                    <CarouselItem className="basis-1/3 ">
                        <img src="/mhd.png" style={{width:"6rem"}}/>
                    </CarouselItem>

                    <CarouselItem className="basis-1/3 ">
                        <img src="/vale.png" style={{width:"6rem"}}/>
                    </CarouselItem>

                    <CarouselItem className="basis-1/3 ">
                        <img src="/oarc.png" style={{width:"6rem"}}/>
                    </CarouselItem>
                    
                </CarouselContent>
                
            </Carousel>
        </div>
        </>
    )
}