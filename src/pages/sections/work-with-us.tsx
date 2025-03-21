import { ChevronRight, Handshake } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function WorkWithUs() {
  const usenavigate = useNavigate();
  return (
    <div
      style={{
        border: "",
        height: "22ch",
        background: "linear-gradient(90deg, crimson, midnightblue)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        boxShadow: "1px 1px 20px black",
      }}
    >
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          gap: "0.25rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "1.75rem",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Work with us
        </p>
        <p style={{ opacity: "0.75" }}>Build your next big project with us.</p>
        <br />
        <button
          onClick={() => usenavigate("/contact-us")}
          className="glow"
          style={{
            transition: "0.3s",
            display: "flex",
            gap: "0.5rem",
            background: "white",
            color: "darkslateblue",
            padding: "0.25rem",
            borderRadius: "0.5rem",
            paddingRight: "1rem",
            paddingLeft: "1rem",
            textTransform: "uppercase",
            fontWeight: "600",
            fontSize: "0.9rem",
            alignItems: "center",
          }}
        >
          <Handshake width={"1rem"} />
          Get in touch
          <ChevronRight width={"1rem"} />
        </button>
      </div>
    </div>
  );
}
