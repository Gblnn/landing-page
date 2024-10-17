interface Props {
  src?: string;
}

export default function TeamMember(props: Props) {
  return (
    <div
      className="team-member"
      style={{
        background: "rgba(100 100 100/ 20%)",
        width: "",
        height: "32ch",
        borderRadius: "0.75rem",
        display: "flex",
        alignItems: "center",
        flexFlow: "column",
      }}
    >
      <img
        style={{
          background: "midnightblue",
          height: "22ch",
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          objectFit: "cover",
        }}
      />
      {/* <img src="sohar_star_logo.png" style={{width:"6rem", height:"6rem", objectFit:"cover", borderRadius:"50%", border:""}}/> */}

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
        }}
      >
        <p>Name</p>

        {/* <div style={{display:"flex", flexFlow:"", gap:"0.25rem"}}>
                <LucideQuote fill="white" stroke="none" width={"1rem"}/>
                <p>Quote</p>
                </div> */}

        <p style={{ fontWeight: 600, color: "dodgerblue", fontSize: "0.8rem" }}>
          Designation of Member
        </p>
        <p style={{ opacity: "0.5", fontSize: "0.8rem" }}>
          Information about the member
        </p>
      </div>
    </div>
  );
}
