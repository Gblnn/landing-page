import { motion } from "framer-motion";
import { SquareArrowUpRight, Zap } from "lucide-react";
import { useState } from "react";
import JobDescriptionDialog from "./JobDescriptionDialog";

interface Props {
  date?: string;
  designation?: string;
  experience?: string;
  desc?: string;
  mailto?: string;
  actively_hiring?: boolean;
  onApply?: any;
  jobType?: any;
}

export default function Work(props: Props) {
  const [showDescription, setShowDescription] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          opacity: { duration: 0.6 },
          y: { duration: 0.4 },
        }}
        viewport={{ once: true }}
        className="work-card"
        style={{
          width: "32ch",
          height: "",
          borderRadius: "0.75rem",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          onClick={() => setShowDescription(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            background: "linear-gradient(120deg, #002244, midnightblue)",
            padding: "2rem",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            cursor: "pointer",
            transition: "opacity 0.2s",
            opacity: isHovered ? 0.9 : 1,
          }}
        >
          <div style={{ marginBottom: "1.75rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: "800",
                color: "white",
                background: "rgba(220,20,60)",
                padding: "0.25rem 0.75rem",
                borderRadius: "1rem",
                width: "fit-content",
                marginBottom: "1rem",
                textTransform: "uppercase",
              }}
            >
              {props.jobType}
            </p>

            <p
              style={{
                fontSize: "1.35rem",
                fontWeight: "500",
                color: "white",
                lineHeight: "1.3",
                marginBottom: "0.5rem",
              }}
            >
              {props.designation}
            </p>

            <p style={{ fontSize: "0.8rem", opacity: 0.5 }}>
              Posted on {props.date}
            </p>
          </div>

          <p
            style={{
              fontSize: "0.85rem",
              opacity: 0.7,
              lineHeight: "1.6",
              height: "2.5rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {props.desc}
          </p>
        </div>

        <div
          style={{
            padding: "1rem 1.5rem",
            background: "rgba(0,0,0,0.2)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "",
          }}
        >
          <div>
            {props.actively_hiring && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Zap width="1rem" color="crimson" />
                <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                  Actively Hiring
                </p>
              </div>
            )}
          </div>

          <a>
            <motion.button
              onClick={props.onApply}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "crimson",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                border: "none",
                cursor: "pointer",
                color: "white",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              Apply
              <SquareArrowUpRight width={"1rem"} />
            </motion.button>
          </a>
        </div>
      </motion.div>

      <JobDescriptionDialog
        open={showDescription}
        onClose={() => setShowDescription(false)}
        jobTitle={props.designation || ""}
        description={props.desc || ""}
        jobType={props.jobType || ""}
        date={props.date || ""}
        onApply={() => {
          setShowDescription(false);
          props.onApply();
        }}
      />
    </>
  );
}
