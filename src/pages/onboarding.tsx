import NewsBox from "@/components/news-box";
import ServiceBox from "@/components/service-box";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { BellElectric, Car, ChevronDown, DraftingCompass, Factory, Globe, Laptop2, PanelTopDashed, Pin, TreeDeciduous, UserCheck, Users, Wrench } from "lucide-react";
import CountUp from 'react-countup';


export default function OnBoarding(){

    

    return(
        <>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1, delay:0.25}}>
            
            <div style={{width:"100%", height:"100svh", display:"flex", alignItems:"center", justifyContent:"center", flexFlow:"column", gap:"1rem"}}>

                <video style={{opacity:0.25, objectFit:"cover", border:"", minHeight:"100%", minWidth:"100%"}} autoPlay muted loop controlsList="nofullscreen" playsInline>

                    <source src="/engineering_stock_video.mp4" type="video/mp4" />

                </video>

                

                <div style={{position:"absolute", justifyContent:"center", display:"flex", flexFlow:"column", alignItems:"center",marginTop:"2rem"}}>


                    <h1 className="heading" style={{ fontWeight:500, fontFamily:"", border:"", lineHeight:"4.25rem", padding:"1rem"}}>Explore Endless Possibilities.</h1>

                    <h1 className="mobile-heading" style={{ fontWeight:500, fontFamily:"", border:"", lineHeight:"3.25rem", padding:"1rem"}}>Build with us.<br/>Grow with us.</h1>
                    
                    <br/>
                    <p style={{opacity:"0.75", wordSpacing:"0.25rem"}}>Plan | Produce | Deliver</p>
                    <br style={{height:"2rem"}}/>
                
                    <a href="#news-and-updates" className="arrow" style={{position:"absolute", marginTop:"20rem"}}>
                        <button >
                            <ChevronDown color="crimson" width={"2.5rem"} height={"2.5rem"}/>
                        </button>
                    </a>
        
                </div>
                

            </div>


            {/* <div className="page" style={{alignItems:"center"}}>
                <div style={{display:"flex", border:"", width:"100%", height:"fit-content", margin:"2rem", justifyContent:"center"}}>
                    <h1 style={{fontWeight:600, fontSize:"1.25rem"}}>Our Services</h1>
                </div>
                
            </div> */}

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

<motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.25}}>

<div id="services" className="" style={{display:"flex", height:"fit-content", paddingTop:"4rem", boxShadow:"1px 1px 20px rgba(0 0 0/ 50%)",background:"url(https://img.freepik.com/free-vector/gradient-dark-dynamic-lines-background_23-2148995950.jpg)", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>



    <div style={{margin:"1.5rem", marginTop:"5rem",marginBottom:"8rem", border:"", width:"100%"}}>

        <h1 style={{fontSize:"1.5rem", fontWeight:500, display:'flex', gap:"0.5rem", alignItems:'center', marginLeft:"", justifyContent:"center"}}>
            <Pin color="crimson"/>
            Our Services
        </h1>

        

        <div style={{border:"", width:"100%", display:"flex", marginTop:"2rem", justifyContent:"center", flexWrap:"wrap", gap:"2rem"}}>


        <Carousel
        plugins={[
            Autoplay({
                delay:3000
            })
            
         ]}
         className="carousel" style={{border:"", padding:"", width:"105ch"}}>
            <CarouselPrevious style={{}}/>
        <CarouselContent style={{gap:"0rem", width:"auto", border:"", padding:"1rem"}}>

            <CarouselItem className="sm:basis-1/1 lg:basis-1/3">
                <ServiceBox title="Civil Engineering" desc="We translate the architectural concepts from clients into concrete realities" icon={<DraftingCompass width={"2.5rem"} height={"2.5rem"}/>}/>
            </CarouselItem>

            <CarouselItem className="sm:basis-1/1 lg:basis-1/3">
                <ServiceBox title="Mechanical" desc="We specialize in works like welding, fitting, fabrication and erection of structures and pipelines" icon={<Wrench width={"2.5rem"} height={"2.5rem"}/>}/>
            </CarouselItem>

            <CarouselItem className="sm:basis-1/1 lg:basis-1/3">
                <ServiceBox title="Logistics" desc="We offer effective and accessible prospective distributors and supply chains at your disposal" icon={<Globe width={"2.5rem"} height={"2.5rem"}/>}/>
            </CarouselItem>

            <CarouselItem className="sm:basis-1/1 lg:basis-1/3">
                <ServiceBox title="Automobile" desc="Our automotive engineers can cater to repair and maintainence of automobiles and heavy equipment" icon={<Car width={"2.5rem"} height={"2.5rem"}/>}/>
            </CarouselItem>

            <CarouselItem className="sm:basis-1/1 lg:basis-1/3">
                <ServiceBox title="Landscaping" desc="Our experts deliver world class landscaping, horticulture & irrigation works" icon={<TreeDeciduous width={"2.5rem"} height={"2.5rem"}/>}/>
            </CarouselItem>

            <CarouselItem className="sm:basis-1/1 lg:basis-1/3">
                <ServiceBox title="IT Division" desc="We are equipped with highly experienced professionals who provide reliable IT solutions" icon={<Laptop2 width={"2.5rem"} height={"2.5rem"}/>}/>
            </CarouselItem>

            <CarouselItem className="sm:basis-1/1 lg:basis-1/3">
                <ServiceBox title="MEP Division" desc="We ensure that all Mechanical, electrical, and plumbing aspects are properly installed and commisioned" icon={<BellElectric width={"2.5rem"} height={"2.5rem"}/>}/>
            </CarouselItem>

            <CarouselItem className="sm:basis-1/1 lg:basis-1/3">
                <ServiceBox title="Road & Earthworks" desc="Our automotive engineers can cater to repair and maintainence of automobiles and heavy equipment" icon={<PanelTopDashed width={"2.5rem"} height={"2.5rem"}/>}/>
            </CarouselItem>

            <CarouselItem className="sm:basis-1/1 lg:basis-1/3">
                <ServiceBox title="Manufacturing" desc="Our automotive engineers can cater to repair and maintainence of automobiles and heavy equipment" icon={<Factory width={"2.5rem"} height={"2.5rem"}/>}/>
            </CarouselItem>


        </CarouselContent>
        <CarouselNext/>
        {/* <div style={{border:"", display:'flex', justifyContent:"center", padding:"1.5rem"}}>
        <p style={{display:'flex', alignItems:'center', fontSize:"0.85rem", gap:"0.5rem"}}>
            Scroll to see more <ChevronRight width={"1.25rem"} color="crimson"/>
        </p>
        </div> */}
        
        </Carousel>

        <div className="sm-services" style={{border:"", width:"", marginTop:"2rem", justifyContent:"center", flexWrap:"wrap", gap:"2rem"}}>

        <ServiceBox title="Civil Engineering" desc="We translate the architectural concepts from our clients into concrete realities" icon={<DraftingCompass width={"2.5rem"} height={"2.5rem"}/>}/>

        <ServiceBox title="Mechanical" desc="We specialize in works like welding, fitting, fabrication and erection of structures and pipelines" icon={<Wrench width={"2.5rem"} height={"2.5rem"}/>}/>

        <ServiceBox title="Logistics" desc="We offer effective and accessible prospective distributors and supply chains at your disposal" icon={<Globe width={"2.5rem"} height={"2.5rem"}/>}/>

        <ServiceBox title="Automobile" desc="Our automotive engineers can cater to repair and maintainence of automobiles and heavy equipment" icon={<Car width={"2.5rem"} height={"2.5rem"}/>}/>

        {/* <ServiceBox title="Landscaping" desc="Our experts deliver world class landscaping, horticulture & irrigation works" icon={<TreeDeciduous width={"2.5rem"} height={"2.5rem"}/>}/> */}

        </div>

        <div className="sm-services" style={{ width:"100%", justifyContent:"center"}}>

                <Button variant={"ghost"} style={{width:"32ch", display:"flex", gap:"0.5rem", alignItems:"center", alignSelf:"center", background:"rgba(100 100 100/ 10%)", boxShadow:"1px 1px 10px rgba(0 0 0/ 10%)"}}>Expand <ChevronDown width={"1rem"} color="crimson"/></Button>
        </div>
        

        

        
        </div>

        

        {/* <a href="#page" className="arrow" style={{marginTop:""}}>
                        <button >
                            <ChevronDown color="crimson" width={"2.5rem"} height={"2.5rem"}/>
                        </button>
                    </a> */} 

        
        
        {/* <br/><br/>
        <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
        <Button onClick={()=>usenavigate("/projects")} variant={"ghost"} style={{width:"32ch", display:"flex", gap:"0.5rem", alignItems:"center", alignSelf:"center", background:"rgba(100 100 100/ 10%)", boxShadow:"1px 1px 10px rgba(0 0 0/ 10%)"}}>See more Projects <ChevronRight width={"1rem"} color="crimson"/></Button>
        </div>
        
        <br/><br/> */}

        

    </div>
    
</div>
</motion.div>


<div style={{border:"", display:'flex', justifyContent:"center", alignItems:"center", height:"12rem", gap:"1.25rem", boxShadow:"1px 1px 20px rgba(0 0 0/ 50%)"}}>

            <div style={{display:"flex", flexFlow:"column", width:"6rem", border:"",alignItems:"center", justifyContent:"center"}}>

                <UserCheck color="crimson"/>
        
                <div style={{display:"flex", alignItems:'center', gap:"0.25rem"}}>
                    <CountUp duration={1} enableScrollSpy start={0} end={750} onEnd={()=>{}} useEasing={false} style={{fontSize:"2rem", fontWeight:600}}/>
                    <p style={{fontSize:"1.5rem"}}>+</p>
                    
                </div>
                
                <p style={{opacity:"0.75", textAlign:"center"}}>Clients</p>
            </div>

            <div style={{display:"flex", flexFlow:"column", width:"6rem", border:"",alignItems:"center", justifyContent:"center"}}>

                <Factory color="crimson"/>
                
                <div style={{display:"flex", alignItems:'center', gap:"0.25rem"}}>
                    <CountUp duration={1} enableScrollSpy start={0} end={850} useEasing={false} style={{fontSize:"2rem", fontWeight:600}}/>
                    <p style={{fontSize:"1.5rem"}}>+</p>
                    
                </div>
                
                <p style={{opacity:0.75, textAlign:"center"}}>Projects</p>
            </div>

            <div style={{display:"flex", flexFlow:"column", width:"6rem", border:"",alignItems:"center"}}>

                <Users color="crimson"/>
                
                <div style={{display:"flex", alignItems:'center', gap:"0.25rem"}}>
                <CountUp duration={1} enableScrollSpy start={0} end={1100} useEasing={false} style={{fontSize:"2rem", fontWeight:600}}/>
                <p style={{fontSize:"1.5rem"}}>+</p>
                </div>
                
                <p style={{opacity:0.75, textAlign:"center"}}>Workers</p>
            </div>
            
        </div>

            <div className="page" id="page" style={{display:"flex" , alignItems:"center"}}>

                <img src="/blue-bg.jpg" style={{position:"absolute", zIndex:-1, width:"100%", height:"100svh", objectFit:"cover"}}/>


        <motion.div
        variants={{
            hidden:{opacity:0, y:35},
            visible:{opacity:1, y:0},
        }}
        transition={{duration:0.5, delay:0.25}}
        initial="hidden"
        whileInView="visible"
        style={{zIndex:1,width:"100%", border:"", display:'flex', alignItems:"center", justifyContent:"center", flexFlow:"column", margin:""}}>

  
        <div style={{border:"", display:"flex"}}>

        
  
            <div className="" style={{border:"", margin:"2.75rem", display:"flex"}}>

                

                <div className="flexer" style={{ flex:1, justifyContent:"center", left:""}}>
                    <img src="/constr.jpg" style={{borderRadius:"50%", objectFit:"cover", width:"28ch", height:"28ch", border:"0.5rem solid crimson"}}/>

                    {/* <div style={{position:"absolute", width:"85%",left:"5%", height:"42ch", border:"2px solid rgba(100 100 100/ 20%)", transform:"translateY(-3.5rem)", background:"#002244",borderRadius:"3rem", zIndex:-1, backdropFilter:""}}></div> */}

                    
                </div>

                
    
                <div style={{display:"flex", alignItems:'space-between',justifyContent:"center", border:"", flexFlow:"column", flex:1.5, gap:"2.25rem"}}>

                
            

                    <h1 style={{fontSize:"1.75rem", fontWeight:600, textShadow:"1px 1px 10px rgba(255 255 255/ 50%)", lineHeight:"2rem", textDecoration:"underline",textUnderlineOffset:"0.25rem", textDecorationColor:"crimson"}}>Why Choose Us?</h1>

                    

                    <p className="desc" style={{opacity:0.75, border:""}}>Sohar Star offers the highest quality products and best in class service and support. Our customer focus begins at the initial point of purchase and extends throughout installation, set up and any ongoing maintainence. Our staff is professional, trained and skilled. We understand the value of time and provide all the right tools and assistance to get the job done quickly and effectively. Rest assured you can be sure that you are getting superior quality products at the most reasonable rates. We assure client satisfaction and free lifetime technical services. 
                    {/* <a style={{color:"crimson", fontWeight:600, textDecoration:"underline"}}> Read More</a> */}
                    </p>

                    
                    {/* <a href="#projects" style={{position:"absolute", alignSelf:"center", marginTop:"22rem", display:"flex", flexFlow:"column", alignItems:"center"}}>
                        <p style={{fontSize:"0.8rem", opacity:0.5}}>View Our Projects</p>
                        <br/>
                        <button className="arrow">
                            <ChevronDown color="crimson" width={"2.5rem"} height={"2.5rem"}/>
                        </button>
                    </a> */}

                    {/* <a href="#projects" style={{width:"fit-content"}}>
                        <Button style={{background:"crimson", color:"white"}}>View Our Projects <ChevronDown width={"1rem"}/></Button>
                    </a> */}


                </div>

                
            
            
            
            </div>
  </div>
            

            </motion.div>

            
            
        </div>

        


        {/* <div id="projects" className="page" style={{border:"", height:"auto", paddingTop:"1.5rem", background:"rgba(100 100 100/ 10%)", paddingBottom:""}}>

            <div style={{margin:"1.5rem", marginTop:"6rem", border:"", width:"100%"}}>

                <h1 style={{fontSize:"1.5rem", fontWeight:500, display:'flex', gap:"0.5rem", alignItems:'center', marginLeft:"1rem"}}>
                    Featured Projects <ChevronRight color="crimson"/>
                </h1>

                <div style={{border:"", width:"100%", display:"flex", marginTop:"2rem", justifyContent:"center", flexWrap:"wrap", gap:"2rem"}}>
                <Project img="https://static6.depositphotos.com/1000292/649/i/450/depositphotos_6490033-stock-photo-water-recycling-on-sewage-treatment.jpg" title="Project 1" desc="Brief description of project 1"/>

                <Project img="/pxfuel.jpg" title="Project 2" desc="Brief description of project 2"/>

                <Project img="https://st4.depositphotos.com/5797516/24306/i/450/depositphotos_243067188-stock-photo-landscape-oil-gas-refinery-manufacturing.jpg" title="Project 3" desc="Brief description of project 3"/>

                <Project img="https://motionarray.imgix.net/motion-array-1096692-auDdGLclkD-high_0009.jpg?w=660&q=60&fit=max&auto=format" title="Project 4" desc="Brief description of project 4"/>
                </div>

                
                
                <br/><br/>

                <div style={{display:"flex", width:"100%", justifyContent:"center"}}>

                <Button onClick={()=>usenavigate("/projects")} variant={"ghost"} style={{width:"32ch", display:"flex", gap:"0.5rem", alignItems:"center", alignSelf:"center", background:"rgba(100 100 100/ 10%)", boxShadow:"1px 1px 10px rgba(0 0 0/ 10%)"}}>See all Projects <ChevronRight width={"1rem"} color="crimson"/></Button>
                </div>
                <br/>
                

            </div>
            
        </div>

        <hr/> */}
        

        


        

        <div className="page" style={{display:"flex", justifyContent:"center", paddingTop:"", height:"15rem",border:'', background:"rgba(100 100 100/ 2%)", alignItems:"center", flexFlow:"column", gap:'1.5rem', boxShadow:"1px 1px 20px rgba(0 0 0/ 50%)"}}>
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

        <div className="page" style={{height:"25rem", display:"flex", alignItems:"center", background:"rgba(100 100 100/ 20%)"}}>
            <div style={{display:"flex", border:"", height:"fit-content", marginLeft:"2rem", fontSize:"1.5rem", flexFlow:"column", gap:"0.5rem"}}>

                <img src="/sohar_star_logo.png" style={{width:"4rem"}}/>
                <h1 style={{ fontFamily:"Tanker"}}>Sohar Star United <strong style={{fontWeight:400, fontSize:"1.5rem", letterSpacing:"0.1rem"}}>LLC</strong> </h1>
                <p style={{fontSize:"0.8rem", opacity:0.75}}>P.O. Box: 153, PC: 322, Falaj Al-Qabail, Sultanate of Oman, CR No.:1079500</p>
            </div>
        </div>
        </motion.div>
        </>
        
    )
}