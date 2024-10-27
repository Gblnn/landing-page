import Back from "@/components/back";
import { motion } from "framer-motion";

export default function CivilEngineering() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.25 }}
    >
      <Back absolute />
      <div style={{ height: "6rem" }}></div>
      <div
        style={{
          border: "",
          height: "90svh",
          paddingTop: "",
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
              background:
                "linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) ), url('pxfuel.jpg')",
              backgroundSize: "cover",
              width: "100%",
              backgroundRepeat: "no-repeat",
              height: "18ch",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ color: "white", fontSize: "2rem", fontWeight: "500" }}>
              Civil Department
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
