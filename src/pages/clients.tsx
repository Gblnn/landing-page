import Back from "@/components/back";
import Client from "@/components/client";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Clients() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{ padding: "1.5rem" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Back />
          <p style={{ fontSize: "1.5rem", fontWeight: 500 }}>Our Clients</p>
          <ChevronRight color="crimson" />
        </div>

        <br />
        <div
          style={{
            border: "",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            height: "",
            width: "",
            padding: "",
            justifyContent: "center",
          }}
        >
          <Client src="/vale.png" />
          <Client src="/jindal_logo.png" />
          <Client src="/oarc.png" />
          <Client src="/mak-logo.png" />
          <Client src="/odc.png" />
          <Client src="/majis_.png" />
          <Client src="/sts logo.png" />
          <Client src="/bec.png" />
          <Client src="/sanvira.png" />
          <Client src="/mhd.png" />
          <Client src="/Toshiba_logo.svg.png" />
          <Client src="/ote.svg" />
          <Client src="/ap.png" />
        </div>
        <br />
      </motion.div>
    </>
  );
}
