import Back from "@/components/back";
import { motion } from "framer-motion";

export default function CivilEngineering() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.25 }}
    >
      {/* <div style={{ height: "" }}></div> */}

      <div style={{ margin: "1rem", position: "absolute", padding: "0.75rem" }}>
        <Back />
      </div>

      <div
        style={{
          border: "",
          height: "90svh",
          paddingTop: "0",
          display: "flex",
          padding: "1rem",
          paddingBottom: "2rem",
        }}
      >
        <div
          style={{
            border: "",
            borderRadius: "1rem",
            height: "100%",
            margin: "",
            width: "100%",
            padding: "",
          }}
        >
          <div
            style={{
              objectFit: "cover",
              borderRadius: "0.5rem",

              background: " no-repeat center/100% url('pxfuel.jpg')",
              backgroundSize: "cover",
              width: "100%",
              backgroundRepeat: "no-repeat",
              height: "30ch",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: "white",
                fontSize: "2rem",
                fontWeight: "500",
                textAlign: "center",
                textShadow: "1px 1px 10px black",
              }}
            >
              Civil Department
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
