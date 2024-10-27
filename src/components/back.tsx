import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  absolute?: boolean;
}

export default function Back(props: Props) {
  const usenavigate = useNavigate();

  return (
    <>
      <button
        style={{ position: props.absolute ? "absolute" : "inherit" }}
        className="btn"
        onClick={() => usenavigate(-1)}
      >
        <ChevronLeft />
      </button>
    </>
  );
}
