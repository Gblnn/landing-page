import Back from "@/components/back";
import Client from "@/components/client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

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
          <Client to="https://vale.com" src="/vale.png" />
          <Client to="https://jindalshadeed.com" src="/jindal_logo.png" />
          <Client to="https://oman-arc.com" src="/oarc.png" />
          <Client to="https://makg.de/" src="/mak-logo.png" />
          <Client src="/odc.png" />
          <Client to="https://majis.om/" src="/majis_.png" />
          <Client to="https://www.stsoman.com/en" src="/sts logo.png" />
          <Client to="https://www.bahwanengineering.com/" src="/bec.png" />
          <Client to="https://sanvira.com/" src="/sanvira.png" />
          <Client to="https://mhdoman.com/" src="/mhd.png" />
          <Client
            to="https://www.toshiba.com/tai/"
            src="/Toshiba_logo.svg.png"
          />
          <Client to="https://www.otegroup.com/en" src="/ote.svg" />
          <Client to="https://www.asianpaints.com/" src="/ap.png" />
        </div>
        <br />
      </motion.div>
    </>
  );
}
