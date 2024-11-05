import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router-dom";

export default function OurClientsSection() {
  const usenavigate = useNavigate();
  return (
    <>
      <div
        onClick={() => usenavigate("/clients")}
        className="page"
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          paddingTop: "",
          height: "15rem",
          border: "",
          alignItems: "center",
          flexFlow: "column",
          gap: "1.5rem",
          boxShadow: "1px 1px 20px rgba(0 0 0/ 50%)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "" }}>
          OUR
          <br /> <strong style={{ fontWeight: 600 }}>CLIENTS</strong>
        </h1>
        <Carousel
          className="clients"
          style={{ border: "" }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent style={{ display: "flex", alignItems: "center" }}>
            <CarouselItem className="basis-1/3 ">
              <img alt="vale" src="/vale.png" style={{ width: "6rem" }} />
            </CarouselItem>

            <CarouselItem className="basis-1/3 ">
              <img
                alt="jindal"
                src="/jindal_logo.png"
                style={{ width: "6rem" }}
              />
            </CarouselItem>

            <CarouselItem className="basis-1/3 ">
              <img alt="oarc" src="/oarc.png" style={{ width: "6rem" }} />
            </CarouselItem>

            <CarouselItem className="basis-1/3 ">
              <img alt="mak" src="/mak-logo.png" style={{ width: "6rem" }} />
            </CarouselItem>

            <CarouselItem className="basis-1/3 ">
              <img alt="odc" src="/odc.png" style={{ width: "6rem" }} />
            </CarouselItem>

            <CarouselItem className="basis-1/3 ">
              <img alt="majis" src="/majis_.png" style={{ width: "6rem" }} />
            </CarouselItem>

            <CarouselItem className="basis-1/3 ">
              <img alt="sts" src="/sts logo.png" style={{ width: "6rem" }} />
            </CarouselItem>

            <CarouselItem className="basis-1/3 ">
              <img alt="bec" src="/bec.png" style={{ width: "6rem" }} />
            </CarouselItem>

            <CarouselItem className="basis-1/3 ">
              <img alt="sanvira" src="/sanvira.png" style={{ width: "6rem" }} />
            </CarouselItem>

            <CarouselItem className="basis-1/3 ">
              <img alt="mhd" src="/mhd.png" style={{ width: "6rem" }} />
            </CarouselItem>

            <CarouselItem className="basis-1/3 ">
              <img
                alt="toshiba"
                src="/Toshiba_logo.svg.png"
                style={{ width: "6rem" }}
              />
            </CarouselItem>

            <CarouselItem className="basis-1/3 ">
              <img alt="ote" src="/ote.svg" style={{ width: "6rem" }} />
            </CarouselItem>

            <CarouselItem className="basis-1/3 ">
              <img alt="asian paints" src="/ap.png" style={{ width: "6rem" }} />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
