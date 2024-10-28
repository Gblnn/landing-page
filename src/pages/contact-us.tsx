import Back from "@/components/back";
import MapLocation from "@/components/map-location";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Mail,
  Mails,
  MailsIcon,
  MapPin,
  MapPinned,
  Phone,
  Smartphone,
} from "lucide-react";

export default function ContactUs() {
  // const usenavigate = useNavigate()

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div
        id="projects"
        className="page"
        style={{
          border: "",
          height: "auto",
          paddingTop: "1.5rem",
          background: "rgba(100 100 100/ 5%)",
        }}
      >
        <div
          style={{
            margin: "1.5rem",
            marginTop: "6rem",
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
            }}
          >
            <Back />
            Contact Us <ChevronRight color="crimson" />
          </h1>

          <div
            style={{
              border: "",
              width: "100%",
              display: "flex",
              marginTop: "2rem",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexFlow: "column",
                border: "",
                width: "100%",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <h1
                style={{
                  fontSize: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <MapPin color="crimson" />
                Address
              </h1>

              <div
                style={{
                  display: "flex",
                  flexFlow: "column",
                  padding: "1rem",
                  border: "",
                  borderRadius: "0.5rem",
                  background: "rgba(100 100 100/ 10%)",
                  gap: "0.5rem",
                  paddingLeft: "1.25rem",
                }}
              >
                {/* <div style={{display:"flex", flexFlow:"column"}}>
                            <h1 style={{fontWeight:500, fontSize:"1.1rem", textTransform:"uppercase", letterSpacing:"0.025rem"}}>Sohar Star United LLC</h1>
                        </div>

                        <br/> */}

                <p
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    fontSize: "0.8rem",
                    alignItems: "center",
                  }}
                >
                  <MailsIcon color="dodgerblue" width={"1rem"} />
                  P.O. Box: 153, PC: 322 CR No.:1079500
                </p>

                <p
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    fontSize: "0.8rem",
                    alignItems: "center",
                  }}
                >
                  <MapPinned color="dodgerblue" width={"1rem"} />
                  Falaj Al-Qabail Sultanate of Oman
                </p>

                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <p
                    className="ghost"
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      fontSize: "0.8rem",
                      alignItems: "center",
                      width: "6.5rem",
                      justifyContent: "center",
                    }}
                  >
                    <Phone color="dodgerblue" width={"1rem"} />
                    26842701
                  </p>

                  <div
                    className=""
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      fontSize: "0.8rem",
                      alignItems: "center",
                      width: "7rem",
                      justifyContent: "center",
                    }}
                  >
                    {/* <p
                      style={{
                        width: "1.25rem",
                        color: "dodgerblue",
                        fontWeight: "600",
                      }}
                    >
                      Fax
                    </p> */}
                    {/* <p className="ghost">
                      <b style={{ color: "dodgerblue", fontWeight: 500 }}> </b>{" "}
                      26842701
                    </p> */}
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <a
                    href="tel:92822305"
                    className="ghost"
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      fontSize: "0.8rem",
                      alignItems: "center",
                      width: "6.5rem",
                      justifyContent: "center",
                    }}
                  >
                    <Smartphone color="dodgerblue" width={"1rem"} />
                    92822305
                  </a>

                  <a
                    href="tel:99440272"
                    className="ghost"
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      fontSize: "0.8rem",
                      alignItems: "center",
                      width: "6.5rem",
                      justifyContent: "center",
                    }}
                  >
                    <Smartphone color="dodgerblue" width={"1rem"} />
                    <p>99440272</p>
                  </a>
                </div>

                <div
                  style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
                >
                  <a
                    href="mailto:info@soharstar.com"
                    className="ghost"
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      fontSize: "0.8rem",
                      alignItems: "center",
                      width: "10rem",
                      justifyContent: "center",
                    }}
                  >
                    <Mails color="dodgerblue" width={"1rem"} />
                    <p>info@soharstar.com</p>
                  </a>

                  <a
                    href="tel:92822305"
                    className="ghost"
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      fontSize: "0.8rem",
                      alignItems: "center",
                      width: "13rem",
                      justifyContent: "center",
                    }}
                  >
                    <Mail color="dodgerblue" width={"1rem"} />
                    soharstar2010@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <MapLocation />

            {/* <Project img="https://static6.depositphotos.com/1000292/649/i/450/depositphotos_6490033-stock-photo-water-recycling-on-sewage-treatment.jpg" title="Project 1" desc="Brief description of project 1"/>

                <Project img="/pxfuel.jpg" title="Project 2" desc="Brief description of project 2"/>

                <Project img="https://st4.depositphotos.com/5797516/24306/i/450/depositphotos_243067188-stock-photo-landscape-oil-gas-refinery-manufacturing.jpg" title="Project 3" desc="Brief description of project 3"/>

                <Project img="https://motionarray.imgix.net/motion-array-1096692-auDdGLclkD-high_0009.jpg?w=660&q=60&fit=max&auto=format" title="Project 4" desc="Brief description of project 4"/> */}
          </div>

          {/* <br/><br/>
                <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
                <Button onClick={()=>usenavigate("/projects")} variant={"ghost"} style={{width:"32ch", display:"flex", gap:"0.5rem", alignItems:"center", alignSelf:"center", background:"rgba(100 100 100/ 10%)", boxShadow:"1px 1px 10px rgba(0 0 0/ 10%)"}}>See more Projects <ChevronRight width={"1rem"} color="crimson"/></Button>
                </div>
                
                <br/><br/> */}
        </div>
      </div>
    </motion.div>
  );
}
