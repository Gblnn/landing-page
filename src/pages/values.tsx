import Back from "@/components/back";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Values() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      style={{ display: "flex", height: "100svh" }}
    >
      <div
        style={{
          display: "flex",
          border: "",
          width: "100%",
          marginTop: "",
          padding: "1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            border: "",
            height: "fit-content",
            gap: "0.75rem",
            alignItems: "center",
            fontSize: "1.5rem",
            fontWeight: "500",
          }}
        >
          <Back />
          <p>Our Values</p>
          <ChevronRight color="crimson" />
        </div>
      </div>
    </motion.div>
  );
}
