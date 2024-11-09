import Back from "@/components/back";
import CoreValue from "@/components/value";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Handshake,
  HardHat,
  UserCheck,
  UsersRound,
} from "lucide-react";

export default function Values() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      style={{ display: "flex", height: "" }}
    >
      <div
        style={{
          display: "flex",
          border: "",
          width: "100%",
          marginTop: "",
          padding: "1.5rem",
          flexFlow: "column",
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

        <br />

        <div
          style={{
            border: "",
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <CoreValue
            icon={
              <UserCheck width={"3rem"} height={"3rem"} color="dodgerblue" />
            }
            title="Integrity"
            desc="From providing accurate estimates to communicating openly throughout the project, we prioritize building trust with our clients, partners, and team members. We take pride in upholding the highest ethical standards, ensuring that every decision we make is rooted in honesty, fairness, and respect."
          />
          <CoreValue
            icon={<HardHat width={"3rem"} height={"3rem"} color="dodgerblue" />}
            title="Safety"
            desc="The safety of our team and clients is non-negotiable. We are committed to maintaining a safe working environment on every project we undertake. By adhering to the strictest safety protocols and investing in ongoing training, we ensure that every job site is secure and that everyone involved goes home safe at the end of the day."
          />
          <CoreValue
            icon={
              <UsersRound width={"3rem"} height={"3rem"} color="dodgerblue" />
            }
            title="Teamwork"
            desc="Collaboration is the key to success. We foster a culture of teamwork where every member of our team is valued for their unique skills and contributions. By working together with a shared purpose and open communication, we can tackle even the most complex projects and deliver the best possible outcomes for our clients."
          />
          <CoreValue
            icon={
              <Handshake width={"3rem"} height={"3rem"} color="dodgerblue" />
            }
            title="Commitment"
            desc="We are dedicated to the success of every project and the satisfaction of our clients. Our team goes above and beyond to ensure that every job is completed on time, within budget, and to the highest level of craftsmanship. We remain committed to delivering results that meet—and exceed—expectations."
          />
        </div>
        <br />
        <br />
      </div>
    </motion.div>
  );
}
