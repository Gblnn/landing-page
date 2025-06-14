import { AnimatePresence, motion } from "framer-motion";
import { SquareArrowUpRight, X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  jobTitle: string;
  description: string;
  jobType: string;
  date: string;
  onApply: () => void;
}

export default function JobDescriptionDialog({
  open,
  onClose,
  jobTitle,
  description,
  jobType,
  date,
  onApply,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(10,12,20,0.85)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(2px)",
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{
              type: "spring",
              duration: 0.5,
              bounce: 0.2,
            }}
            style={{
              background: "linear-gradient(120deg, #002244, midnightblue)",
              borderRadius: "1.25rem",
              width: "100%",
              maxWidth: "420px",
              maxHeight: "90vh",
              boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
              color: "#fff",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "none",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                fontSize: "1.1rem",
                opacity: 0.7,
                transition: "opacity 0.2s",
                zIndex: 1,
              }}
              aria-label="Close dialog"
            >
              <X />
            </button>

            <div style={{ padding: "2rem" }}>
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
                {jobType}
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
                {jobTitle}
              </p>

              <p
                style={{
                  fontSize: "0.8rem",
                  opacity: 0.5,
                  marginBottom: "1.5rem",
                }}
              >
                Posted on {date}
              </p>

              <div
                style={{
                  maxHeight: "40vh",
                  overflowY: "auto",
                  paddingRight: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.85rem",
                    opacity: 0.7,
                    lineHeight: "1.6",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {description}
                </p>
              </div>

              <button
                onClick={onApply}
                style={{
                  width: "100%",
                  background: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  border: "none",
                  cursor: "pointer",
                  color: "black",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                }}
              >
                Apply Now
                <SquareArrowUpRight width={"1rem"} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
