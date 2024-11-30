import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Props {
  img?: string;
  title?: string;
  desc?: string;
}

export default function Project(props: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.15 }}
    >
      <div
        className="project"
        style={{
          border: "2px solid rgba(100 100 100/ 25%)",
          borderRadius: "1.5rem",
          display: "flex",
          flexFlow: "column",
          padding: "0.4rem",
          background: "rgba(100 100 100/ 0%)",
          boxShadow: "1px 1px 10px rgba(0 0 0/ 50%)",
        }}
      >
        {props.img ? (
          <img
            loading="lazy"
            alt="project"
            className="project-img"
            src={props.img}
            style={{
              filter: "contrast(100%)",
              objectFit: "cover",
              borderRadius: "1rem",
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 0,
              border: "",
              background: "",
            }}
          />
        ) : (
          // <LazyLoadImage
          //   useIntersectionObserver
          //   threshold={100}
          //   effect="blur"
          //   style={{
          //     height: "",

          //     borderRadius: "",
          //     borderBottomRightRadius: 0,
          //     borderBottomLeftRadius: 0,
          //     border: "",
          //     background: "",
          //   }}
          //   src={props.img}
          // />
          <div
            className="project-img"
            style={{
              objectFit: "cover",
              borderRadius: "1rem",
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 0,
              border: "",
              background: "no-repeat center/50% url('/log.png')",
            }}
          ></div>
        )}

        <div
          className="project-label"
          style={{
            border: "",
            borderBottomRightRadius: "1rem",
            borderBottomLeftRadius: "1rem",
            color: "white",
          }}
        >
          <div id="body" style={{ margin: "1rem" }}>
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: "500",
                display: "flex",
                gap: "0.5rem",
              }}
            >
              {props.title} <ChevronRight color="crimson" width={"1rem"} />
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
