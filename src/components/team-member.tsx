interface Props {
  src?: string;
  name?: string;
  designation?: string;
  info?: string;
}

export default function TeamMember(props: Props) {
  return (
    <div
      className="team-member"
      style={{
        background: "rgba(100 100 100/ 5%)",
        width: "",

        borderRadius: "0.75rem",
        display: "flex",
        alignItems: "center",
        flexFlow: "column",
        boxShadow: "",
        border: "2px solid rgba(100 100 100/ 70%)",
      }}
    >
      <img
        style={{
          opacity: "0.25",
          background: "rgba(100 100 100/ 20%)",
          height: "20ch",
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          objectFit: "contain",
        }}
        src="sohar_star_logo.png"
      />
      {/* <img
        src="sohar_star_logo.png"
        style={{
          width: "6rem",
          height: "6rem",
          objectFit: "cover",
          borderRadius: "50%",
          border: "",
        }}
      /> */}

      <div
        style={{
          height: "100%",
          flex: 1,
          border: "",
          borderLeft: "none",
          display: "flex",
          justifyContent: "center",
          flexFlow: "column",
          paddingRight: "1rem",
          paddingLeft: "1.5rem",
          width: "100%",
          padding: "1rem",
          borderBottomLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
          // boxShadow: "1px 1px 10px rgba(0 0 0/ 20%)",
        }}
      >
        <p>{props.name}</p>

        {/* <div style={{display:"flex", flexFlow:"", gap:"0.25rem"}}>
                <LucideQuote fill="white" stroke="none" width={"1rem"}/>
                <p>Quote</p>
                </div> */}

        <p
          style={{
            fontWeight: 600,
            color: "crimson",
            fontSize: "0.8rem",
          }}
        >
          {props.designation}
        </p>
        <p style={{ opacity: "0.5", fontSize: "0.8rem" }}>{props.info}</p>
      </div>
    </div>
  );
}
