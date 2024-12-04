import DefaultDialog from "../components/default-dialog";

interface Props {
  open?: boolean;
  title?: string;
  src?: any;
  onCancel?: any;
  img?: string;
  desc?: string;
  date?: string;
}

export default function ImageDialog(props: Props) {
  return (
    <DefaultDialog
      title={props.title}
      dialogHeight={"20rem"}
      dialogBackground={"rgba(0 0 0/0%)"}
      close
      desc={props.desc}
      date={props.date}
      img={props.img}
      open={props.open}
      onCancel={props.onCancel}
      extra={<div style={{ height: "22rem", width: "100%" }}></div>}
    />
  );
}
