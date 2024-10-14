export default function TeamMember() {
  return (
    <div
      className="project"
      style={{
        // background: "rgba(100 100 100/ 20%)",
        width: "",
        height: "12ch",
        borderRadius: "1.5rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "5px solid crimson",
          height: "100%",
          display: "flex",
          width: "",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <img src="sohar_star_logo.png" style={{width:"6rem", height:"6rem", objectFit:"cover", borderRadius:"50%", border:""}}/> */}
      </div>
      <div
        style={{
          height: "100%",
          flex: 1,
          border: "solid #4a4a4a",
          borderLeft: "none",
          display: "flex",
          justifyContent: "center",
          flexFlow: "column",
          paddingRight: "1rem",
          paddingLeft: "1.5rem",
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
