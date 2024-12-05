import Back from "@/components/back";
import ImageDialog from "@/components/image-dialog";
import NewsBox from "@/components/news-box";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { news } from "@/components/news-list";

export default function News() {
  const usenavigate = useNavigate();
  const [dialog, setDialog] = useState(false);
  const [dialogImg, setDialogImg] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogDesc, setDialogDesc] = useState("");
  const [dialogDate, setDialogDate] = useState("");
  return (
    <>
      <div
        id="news-and-updates"
        className="page"
        style={{
          background:
            "url(https://cdn.svgator.com/images/2022/06/use-svg-as-background-image-particle-strokes.svg)",
          border: "",
          height: "auto",
          paddingTop: "3rem",
          paddingBottom: "4rem",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            margin: "1.5rem",
            marginTop: "",
            border: "",
            width: "fit-content",
          }}
        >
          <div
            onClick={() => usenavigate("/news")}
            style={{
              cursor: "pointer",
              fontSize: "1.5rem",
              fontWeight: 500,
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              marginLeft: "0.25rem",
              color: "white",
            }}
          >
            <Back />
            Latest News{" "}
            {/* <strong style={{ color: "crimson", fontWeight: "500" }}>
              &
            </strong>{" "}
            Updates */}
          </div>

          <div
            className="items-container"
            style={{
              border: "",
              display: "flex",
              marginTop: "2rem",
              justifyContent: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            {news.map((item: any) => (
              <NewsBox
                onClick={() => {
                  setDialog(true);
                  setDialogTitle(item.title);
                  setDialogImg(item.img);
                  setDialogDesc(item.desc);
                  setDialogDate(item.date);
                }}
                key={item.id}
                img={item.img}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>

          <ImageDialog
            title={dialogTitle}
            img={dialogImg}
            desc={dialogDesc}
            open={dialog}
            date={dialogDate}
            onCancel={() => setDialog(false)}
          />

          {/* <br/><br/>
                <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
                <Button onClick={()=>usenavigate("/projects")} variant={"ghost"} style={{width:"32ch", display:"flex", gap:"0.5rem", alignItems:"center", alignSelf:"center", background:"rgba(100 100 100/ 10%)", boxShadow:"1px 1px 10px rgba(0 0 0/ 10%)"}}>See more Projects <ChevronRight width={"1rem"} color="crimson"/></Button>
                </div> */}

          <br />
        </div>
      </div>
    </>
  );
}
