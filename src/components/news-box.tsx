import { motion } from "framer-motion";

interface Props {
  img?: string;
  icon?: any;
  title?: string;
  desc?: string;
}

export default function NewsBox(props: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0 }}
    >
      <div
        className="project"
        style={{
          border: "1px solid rgba(100 100 100/ 40%)",
          borderRadius: "1.5rem",
          display: "flex",
          flexFlow: "row",
          padding: "0.5rem",
          background: "rgba(100 100 100/ 10%)",
          boxShadow: "1px 1px 10px rgba(0 0 0/ 50%)",
          width: "",
        }}
      >
        <img
          className=""
          src={props.img}
          style={{
            objectFit: "cover",
            borderRadius: "1rem",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            border: "",
            width: "10ch",
            height: "",
          }}
        />

        {/* <div style={{width:"100%", height:"16ch", background:"linear-gradient( 180deg, #0C2340, #002D62)", borderTopRightRadius:"1rem", borderTopLeftRadius:"1rem", display:"flex", justifyContent:"center", alignItems:"center", color:"crimson"}}>
                {props.icon}
                
            </div> */}

        {/* <div style={{border:"", background:"linear-gradient(red, red, red)", width:"0.15rem"}}></div> */}

        <div
          className="project-label"
          style={{
            border: "",
            borderBottomRightRadius: "1rem",
            borderTopRightRadius: "1rem",
            color: "white",
            background: "",
            height: "",
            width: "100%",
          }}
        >
          <div
            id="body"
            style={{
              margin: "1.5rem",
              display: "flex",
              flexFlow: "column",
              gap: "0.5rem",
            }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: "500",
                display: "flex",
                gap: "0.5rem",
              }}
            >
              {props.title}
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                opacity: 0.65,
                letterSpacing: "0.05rem",
              }}
            >
              {props.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
