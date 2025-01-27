interface Props {
  src?: string;
  to?: string;
}

export default function Client(props: Props) {
  return (
    <>
      <a target="_blank" href={props.to}>
        <div
          style={{
            //   border: "1px solid rgba(100 100 100/ 40%)",
            background: "rgba(100 100 100/ 10%)",
            display: "flex",
            height: "10ch",
            width: "15ch",
            justifyContent: "center",
            borderRadius: "1rem",
            alignItems: "center",
            //   boxShadow: "1px 1px 8px rgba(50 50 50/ 30%)",
          }}
        >
          <img
            src={props.src}
            style={{
              // filter: "grayscale(100%) ",
              width: "8ch",
            }}
          />
          {/* <ExternalLink
            className="hover:opacity-10"
            style={{ position: "absolute" }}
          /> */}
        </div>
      </a>
    </>
  );
}
