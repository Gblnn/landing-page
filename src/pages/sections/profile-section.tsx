import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProfileSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {
        // Why Choose Us Section
        mounted ? (
          <div
            className="page"
            id="page"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src="/blue-bg.jpg"
              style={{
                position: "absolute",
                zIndex: -1,
                width: "100%",
                height: "100svh",
                objectFit: "cover",
              }}
            />

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 35 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.25 }}
              initial="hidden"
              whileInView="visible"
              style={{
                zIndex: 1,
                width: "100%",
                border: "",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexFlow: "column",
                margin: "",
              }}
            >
              <div style={{ border: "", display: "flex" }}>
                <div
                  className="items-container"
                  style={{ border: "", margin: "2.75rem", display: "flex" }}
                >
                  <div
                    className="flexer"
                    style={{ flex: 1, justifyContent: "center", left: "" }}
                  >
                    <img
                      src="/constr.jpg"
                      style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                        width: "28ch",
                        height: "28ch",
                        border: "0.5rem solid crimson",
                      }}
                    />

                    {/* <div style={{position:"absolute", width:"85%",left:"5%", height:"42ch", border:"2px solid rgba(100 100 100/ 20%)", transform:"translateY(-3.5rem)", background:"#002244",borderRadius:"3rem", zIndex:-1, backdropFilter:""}}></div> */}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "space-between",
                      justifyContent: "center",
                      border: "",
                      flexFlow: "column",
                      flex: 1.5,
                      gap: "2.25rem",
                      color: "white",
                    }}
                  >
                    <h1
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: 600,
                        textShadow: "1px 1px 10px rgba(255 255 255/ 50%)",
                        lineHeight: "2rem",
                        textDecoration: "",
                        textUnderlineOffset: "0.25rem",
                        textDecorationColor: "crimson",
                      }}
                    >
                      Why Choose Us
                    </h1>

                    <p className="desc" style={{ opacity: 0.75, border: "" }}>
                      Sohar Star is committed to offering top-quality products
                      and exceptional service and support. Our customer-focused
                      approach starts from the moment of purchase and extends
                      through installation, setup, and ongoing maintenance. Our
                      professional team is highly trained and skilled, ensuring
                      efficient and effective service. We value your time and
                      provide the right tools and assistance to complete the job
                      quickly. With Sohar Star, you can trust that you’re
                      receiving premium products at competitive prices. We
                      guarantee customer satisfaction and offer free lifetime
                      technical support.
                      {/* <a style={{color:"crimson", fontWeight:600, textDecoration:"underline"}}> Read More</a> */}
                    </p>

                    {/* <a href="#projects" style={{position:"absolute", alignSelf:"center", marginTop:"22rem", display:"flex", flexFlow:"column", alignItems:"center"}}>
                            <p style={{fontSize:"0.8rem", opacity:0.5}}>View Our Projects</p>
                            <br/>
                            <button className="arrow">
                                <ChevronDown color="crimson" width={"2.5rem"} height={"2.5rem"}/>
                            </button>
                        </a> */}

                    <div
                      href="#projects"
                      style={{
                        width: "fit-content",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        className="skewed-button"
                        style={{
                          background: "white",
                          display: "flex",
                          width: "10rem",
                        }}
                      ></Button>
                      <div
                        style={{
                          display: "flex",
                          position: "absolute",
                          color: "crimson",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          fontSize: "0.9rem",
                        }}
                      >
                        <p>Read More</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null
      }
    </>
  );
}
