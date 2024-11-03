import Back from "@/components/back";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Mission() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div
        id="projects"
        className="page"
        style={{
          border: "",
          height: "unset",
          paddingTop: "1.5rem",
          background: "rgba(100 100 100/ 10%)",
        }}
      >
        <div
          style={{
            margin: "",
            padding: "1.75rem",
            paddingTop: "",
            border: "",
            width: "100%",
          }}
        >
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: 500,
              display: "flex",
              gap: "0.75rem",
              alignItems: "center",
            }}
          >
            <Back />
            Our Mission <ChevronRight color="crimson" />
          </h1>
          <br />
          <div
            style={{
              height: "",
              width: "100%",
              border: "",
              padding: "4rem",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              fontSize: "3rem",
              fontWeight: "500",
              background: "center no-repeat url('array.jpg')",
              backgroundColor: "black",
              backgroundPosition: "cover",
              lineHeight: "3rem",
              borderRadius: "1rem",
            }}
          >
            <h1 style={{ color: "white", textShadow: "1px 1px 50px red" }}>
              We are driven by the vision of a sustainable future.
            </h1>
          </div>
          <br />
          <p style={{ opacity: "0.75" }}>
            {/* <Quote color="crimson" width={"3rem"} height={"3rem"} /> */}
            At <b className="red-glow">Sohar Star United</b>, our mission is to
            build and deliver high-quality, sustainable, and innovative
            solutions that exceed expectations. We are dedicated to enhancing
            the infrastructure and communities we serve by upholding the highest
            standards of safety, reliability, and professionalism. Our
            commitment to excellence drives us to foster strong partnerships and
            contribute to the economic growth of our region. We aim to be a
            leading force in the contracting industry, recognized for our
            integrity, craftsmanship, and dedication to transformative projects.
            We aim to shape the future of construction by embracing cutting-edge
            technology, championing sustainable practices, and empowering our
            team to create lasting value for our clients and communities.
          </p>
          <br />
        </div>
      </div>
    </motion.div>
  );
}
