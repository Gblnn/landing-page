import { Factory, UserCheck, Users } from "lucide-react";
import CountUp from "react-countup";

export default function CountupSection() {
  return (
    <>
      <div
        style={{
          border: "",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "12rem",
          gap: "1.25rem",
          boxShadow: "1px 1px 20px rgba(0 0 0/ 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            width: "6rem",
            border: "",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <UserCheck color="crimson" />

          <div
            style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
          >
            <CountUp
              enableScrollSpy
              duration={1.5}
              start={0}
              end={750}
              useEasing={true}
              style={{ fontSize: "2rem", fontWeight: 600 }}
            />
            <p style={{ fontSize: "1.5rem" }}>+</p>
          </div>

          <p style={{ opacity: "0.75", textAlign: "center" }}>Clients</p>
        </div>

        <div
          style={{
            display: "flex",
            flexFlow: "column",
            width: "6rem",
            border: "",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Factory color="crimson" />

          <div
            style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
          >
            <CountUp
              enableScrollSpy
              duration={1.5}
              start={0}
              end={850}
              useEasing={true}
              style={{ fontSize: "2rem", fontWeight: 600 }}
            />
            <p style={{ fontSize: "1.5rem" }}>+</p>
          </div>

          <p style={{ opacity: 0.75, textAlign: "center" }}>Projects</p>
        </div>

        <div
          style={{
            display: "flex",
            flexFlow: "column",
            width: "6rem",
            border: "",
            alignItems: "center",
          }}
        >
          <Users color="crimson" />

          <div
            style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
          >
            <CountUp
              enableScrollSpy
              duration={1.5}
              start={0}
              end={1100}
              useEasing={true}
              style={{ fontSize: "2rem", fontWeight: 600 }}
            />
            <p style={{ fontSize: "1.5rem" }}>+</p>
          </div>

          <p style={{ opacity: 0.75, textAlign: "center" }}>Workers</p>
        </div>
      </div>
    </>
  );
}
