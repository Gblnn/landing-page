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
        height: "",
        background: "rgba(100 100 100/ 1%)",
        width: "",
        padding: "0.35rem",
        borderRadius: "1.15rem",
        display: "flex",
        alignItems: "center",
        flexFlow: "column",
        boxShadow: "",
        border: "2px solid rgba(100 100 100/ 50%)",
      }}
    >
      <img
        style={{
          background: "rgba(100 100 100/ 20%)",
          height: "20ch",
          borderTopLeftRadius: "0.75rem",
          borderTopRightRadius: "0.75rem",
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          objectFit: "cover",
        }}
        src={props.src ? props.src : "/log.png"}
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
          height: "",
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
          borderBottomLeftRadius: "0.75rem",
          borderBottomRightRadius: "0.75rem",
          background: "midnightblue",
          boxShadow: "1px 1px 30px rgba(0 0 0/ 100%)",
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
