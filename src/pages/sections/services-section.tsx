import ServiceBox from "@/components/service-box";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import {
  BellElectric,
  Car,
  ChevronDown,
  ChevronUp,
  DraftingCompass,
  Pin,
  TreeDeciduous,
  Truck,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ServicesSection() {
  const [expand, setExpand] = useState(true);
  const usenavigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        <div
          id="services"
          className=""
          style={{
            display: "flex",
            height: "",
            paddingTop: "4rem",
            boxShadow: "",
            background:
              "no-repeat center/100% center fixed url(https://wallpaperset.com/w/full/c/7/9/60274.jpg)",
          }}
        >
          <div
            style={{
              margin: "1.5rem",
              marginTop: "5rem",
              marginBottom: "8rem",
              border: "",
              width: "100%",
            }}
          >
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: 500,
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                marginLeft: "",
                justifyContent: "center",
              }}
            >
              <Pin color="crimson" />
              Our Services
            </h1>

            <div
              style={{
                border: "",
                width: "100%",
                display: "flex",
                marginTop: "2rem",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "2rem",
              }}
            >
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
                className="carousel"
                style={{ border: "", padding: "", width: "105ch" }}
              >
                <CarouselPrevious style={{}} />
                <CarouselContent
                  style={{
                    gap: "0rem",
                    width: "auto",
                    border: "",
                    padding: "1rem",
                  }}
                >
                  <CarouselItem className="sm:basis-1/1 lg:basis-1/3">
                    <ServiceBox
                      onClick={() => usenavigate("/civil-engineering")}
                      title="Civil Engineering"
                      desc="We translate the architectural concepts from clients into concrete realities"
                      icon={
                        // <DraftingCompass width={"2.5rem"} height={"2.5rem"} />
                        <img
                          src="/civil_works.png"
                          style={{ height: "80%", objectFit: "cover" }}
                        />
                      }
                    />
                  </CarouselItem>

                  <CarouselItem className="sm:basis-1/1 lg:basis-1/3">
                    <ServiceBox
                      title="Mechanical"
                      desc="We specialize in works like welding, fitting, fabrication and erection of structures and pipelines"
                      icon={
                        // <Wrench width={"2.5rem"} height={"2.5rem"} />
                        <img
                          src="/mechanical_work.png"
                          style={{ objectFit: "cover", height: "80%" }}
                        />
                      }
                    />
                  </CarouselItem>

                  <CarouselItem className="sm:basis-1/1 lg:basis-1/3">
                    <ServiceBox
                      title="Automobile"
                      desc="Our automotive engineers can cater to repair and maintainence of automobiles and heavy equipment"
                      icon={
                        // <Car width={"2.5rem"} height={"2.5rem"} />
                        <img
                          src="/automobile_workshop.png"
                          style={{ objectFit: "contain", height: "80%" }}
                        />
                      }
                    />
                  </CarouselItem>

                  <CarouselItem className="sm:basis-1/1 lg:basis-1/3">
                    <ServiceBox
                      title="Landscaping"
                      desc="Our experts deliver world class landscaping, horticulture & irrigation works"
                      icon={
                        // <TreeDeciduous width={"2.5rem"} height={"2.5rem"} />
                        <img
                          src="/landscaping_works.png"
                          style={{ objectFit: "cover", height: "80%" }}
                        />
                      }
                    />
                  </CarouselItem>

                  <CarouselItem className="sm:basis-1/1 lg:basis-1/3">
                    <ServiceBox
                      title="MEP Division"
                      desc="We ensure that all Mechanical, electrical, and plumbing aspects are properly installed and commisioned"
                      icon={
                        // <BellElectric width={"2.5rem"} height={"2.5rem"} />
                        <img
                          src={"/mep_works.png"}
                          style={{ objectFit: "cover", height: "80%" }}
                        />
                      }
                    />
                  </CarouselItem>

                  <CarouselItem className="sm:basis-1/1 lg:basis-1/3">
                    <ServiceBox
                      title="Heavy Machinery"
                      desc="We offer heavy construction equipment and machinery at your disposal at the best market rates."
                      icon={
                        // <Truck width={"2.5rem"} height={"2.5rem"} />
                        <img
                          src={"heavy-machinery.png"}
                          style={{ objectFit: "cover", height: "80%" }}
                        />
                      }
                    />
                  </CarouselItem>

                  {/* <CarouselItem className="sm:basis-1/1 lg:basis-1/3">
                                    <ServiceBox title="Manufacturing" desc="Our automotive engineers can cater to repair and maintainence of automobiles and heavy equipment" icon={<Factory width={"2.5rem"} height={"2.5rem"}/>}/>
                                </CarouselItem> */}
                </CarouselContent>
                <CarouselNext />

                {/* <div style={{border:"", display:'flex', justifyContent:"center", padding:"1.5rem"}}>
                        <p style={{display:'flex', alignItems:'center', fontSize:"0.85rem", gap:"0.5rem"}}>
                            Scroll to see more <ChevronRight width={"1.25rem"} color="crimson"/>
                        </p>
                        </div> */}
              </Carousel>

              <div
                className="sm-services"
                style={{
                  border: "",
                  width: "",
                  marginTop: "2rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: "2rem",
                }}
              >
                <ServiceBox
                  onClick={() => usenavigate("/civil-engineering")}
                  title="Civil Engineering"
                  desc="We translate the architectural concepts from our clients into concrete realities"
                  icon={
                    // <DraftingCompass width={"2.5rem"} height={"2.5rem"} />
                    <img
                      src="/civil_works.png"
                      style={{ height: "80%", objectFit: "cover" }}
                    />
                  }
                />

                <ServiceBox
                  title="Mechanical"
                  desc="We specialize in works like welding, fitting, fabrication and erection of structures and pipelines"
                  icon={
                    // <Wrench width={"2.5rem"} height={"2.5rem"} />
                    <img
                      src="/mechanical_work.png"
                      style={{ objectFit: "cover", height: "80%" }}
                    />
                  }
                />

                <ServiceBox
                  title="Automobile"
                  desc="Our automotive engineers can cater to repair and maintainence of automobiles and heavy equipment"
                  icon={
                    // <Car width={"2.5rem"} height={"2.5rem"} />
                    <img
                      src="/automobile_workshop.png"
                      style={{ objectFit: "contain", height: "80%" }}
                    />
                  }
                />

                {expand ? (
                  <>
                    <ServiceBox
                      title="Landscaping"
                      desc="Our experts deliver world class landscaping, horticulture & irrigation works"
                      icon={
                        // <TreeDeciduous width={"2.5rem"} height={"2.5rem"} />
                        <img
                          src="/landscaping_works.png"
                          style={{ objectFit: "cover", height: "80%" }}
                        />
                      }
                    />

                    <ServiceBox
                      title="MEP Division"
                      desc="We ensure that all Mechanical, electrical, and plumbing aspects are properly installed and commisioned"
                      icon={
                        // <BellElectric width={"2.5rem"} height={"2.5rem"} />
                        <img
                          src={"/mep_works.png"}
                          style={{ objectFit: "cover", height: "80%" }}
                        />
                      }
                    />

                    <ServiceBox
                      title="Heavy Machinery"
                      desc="We offer heavy construction equipment and machinery at your disposal at the best market rates."
                      icon={
                        // <Truck width={"2.5rem"} height={"2.5rem"} />
                        <img
                          src={"heavy-machinery.png"}
                          style={{ objectFit: "cover", height: "80%" }}
                        />
                      }
                    />

                    {/* <ServiceBox title="Manufacturing" desc="Our automotive engineers can cater to repair and maintainence of automobiles and heavy equipment" icon={<Factory width={"2.5rem"} height={"2.5rem"}/>}/> */}
                  </>
                ) : null}
              </div>

              <div
                className="sm-services"
                style={{ width: "100%", justifyContent: "center" }}
              >
                {/* <Button
                  onClick={() => {
                    setExpand(!expand);
                  }}
                  variant={"ghost"}
                  style={{
                    width: "32ch",
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                    alignSelf: "center",
                    background: "rgba(100 100 100/ 10%)",
                    boxShadow: "1px 1px 10px rgba(0 0 0/ 10%)",
                  }}
                >
                  {expand ? (
                    <>
                      Collapse
                      <ChevronUp width={"1rem"} color="crimson" />
                    </>
                  ) : (
                    <>
                      Show More
                      <ChevronDown width={"1rem"} color="crimson" />
                    </>
                  )}
                </Button> */}
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
    </>
  );
}
