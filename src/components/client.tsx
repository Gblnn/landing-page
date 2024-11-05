interface Props {
  src?: string;
}

export default function Client(props: Props) {
  return (
    <>
      <div
        style={{
          //   border: "1px solid rgba(100 100 100/ 50%)",
          background: "rgba(100 100 100/ 10%)",
          display: "flex",
          height: "10ch",
          width: "15ch",
          justifyContent: "center",
          borderRadius: "1rem",
          alignItems: "center",
        }}
      >
        <img
          src={props.src}
          style={{
            // filter: "grayscale(100%)",
            width: "8ch",
          }}
        />
      </div>
    </>
  );
}
