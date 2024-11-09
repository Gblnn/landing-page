import { BriefcaseBusiness } from "lucide-react";

interface Props {
  date?: string;
  designation?: string;
  experience?: string;
}

export default function Work(props: Props) {
  return (
    <>
      <div
        className=""
        style={{
          display: "flex",
          border: "2px solid rgba(100 100 100/ 20%)",
          width: "30ch",
          height: "25ch",
          borderRadius: "1.25rem",
          padding: "0.35rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            border: "2px solid rgba(100 100 100/ 20%)",
            background: "rgba(100 100 100/ 10%)",
            //   " linear-gradient( rgba(100 100 100/ 10%), rgba(100 100 100/ 10%), crimson)",
            width: "100%",
            borderRadius: "0.8rem",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              border: "",
              justifyContent: "space-between",
            }}
          >
            {props.date && (
              <p
                style={{
                  fontSize: "0.8rem",
                  background: "rgba(100 100 100/ 20%)",
                  height: "fit-content",
                  padding: "0.25rem",
                  paddingLeft: "0.75rem",
                  paddingRight: "0.75rem",
                  borderRadius: "0.5rem",
                  margin: "0.5rem",
                  fontWeight: 500,
                }}
              >
                {props.date}
              </p>
            )}
          </div>

          <div
            style={{
              display: "flex",
              border: "",
              margin: "1rem",
              flexFlow: "column",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                lineHeight: "0.5rem",
                fontWeight: 800,
                color: "crimson",
              }}
            >
              FULL TIME
            </p>
            <p style={{ fontSize: "1.35rem", fontWeight: "400" }}>
              {props.designation}
            </p>
            {props.experience && (
              <p
                style={{
                  fontSize: "0.7rem",
                  background: "rgba(100 100 100/ 20%)",
                  width: "fit-content",
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                  borderRadius: "0.5rem",
                  color: "",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                }}
              >
                <BriefcaseBusiness width={"1rem"} color="crimson" />
                {props.experience} years
              </p>
            )}

            <div
              style={{
                display: "flex",
                // borderTop: "1px solid rgba(100 100 100/ 10%)",
                // paddingTop: "0.75rem",
                marginTop: "0.75rem",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: "1rem" }}>
                <b>OMR</b> 600/month
              </p>
              <button
                className="red"
                style={{
                  background: "crimson",
                  padding: "0.25rem",
                  paddingLeft: "0.75rem",
                  paddingRight: "0.75rem",
                  color: "white",
                  display: "flex",
                  borderRadius: "0.5rem",
                }}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
