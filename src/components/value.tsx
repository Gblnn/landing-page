interface Props {
  title?: string;
  desc?: string;
  icon?: any;
}

export default function CoreValue(props: Props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          //   border: "1px solid rgba(100 100 100/ 50%)",
          background:
            " linear-gradient(rgba(0 0 0/ 0%), rgba(100 100 100/ 20%))",
          width: "30ch",
          borderRadius: "2rem",
          padding: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            // border: "5px solid crimson",
            width: "10ch",
            height: "10ch",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.icon}
        </div>
        <br />
        <p style={{ fontSize: "1.5rem", fontWeight: 600 }}>{props.title}</p>
        <br />
        <p style={{ fontSize: "0.8rem", opacity: 0.5, textAlign: "center" }}>
          {props.desc}
        </p>
      </div>
    </>
  );
}
