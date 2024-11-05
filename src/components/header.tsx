import { Cog } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileNav from "./mobile-nav";
import { Nav } from "./navigation-menu";

export default function Header() {
  const usenavigate = useNavigate();

  return (
    <>
      <div
        style={{
          border: "",
          height: "2rem",
          background: "midnightblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
          color: "white",
        }}
      >
        <Cog width={"1rem"} color="crimson" />
        <p style={{ fontSize: "0.8rem" }}>Site is under maintainence.</p>
      </div>
      <div
        className="nav-bar"
        style={{
          display: "flex",
          height: "6rem",
          alignItems: "center",
          position: "sticky",
          top: 0,
          width: "100%",
          zIndex: 15,
          boxShadow: "1px 1px 20px rgba(0 0 0/ 50%)",
          border: "",
        }}
      >
        <div
          className="title"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            zIndex: 10,
            background: "rgba(100 100 100/ 10%)",
            borderRadius: "0.5rem",
            padding: "0.25rem",
            paddingRight: "1rem",
            paddingLeft: "0.75rem",
            cursor: "pointer",
          }}
          onClick={() => usenavigate("/")}
        >
          <img
            src="/sohar_star_logo.png"
            width="40rem"
            height="40rem"
            alt="Logo"
          />

          <h1
            style={{
              fontWeight: 500,
              fontSize: "1.75rem",
              fontFamily: "Tanker-Regular, sans-serif",
              letterSpacing: "0.075rem",
            }}
          >
            Sohar Star United{" "}
            <strong style={{ fontWeight: 400, letterSpacing: "0.1rem" }}>
              LLC
            </strong>{" "}
          </h1>
        </div>

        <div className="nav" style={{ marginRight: "4rem" }}>
          <Nav fontsize="1rem" />
        </div>
      </div>
      <div
        className="mobile-nav nav-bar"
        style={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          justifyContent: "center",
          zIndex: 10,
          fontSize: "1rem",
          height: "4.5rem",
          alignItems: "center",
          boxShadow: "1px 1px 20px rgba(0 0 0/ 50%)",
        }}
      >
        <MobileNav />
      </div>
    </>
  );
}
