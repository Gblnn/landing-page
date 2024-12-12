import ImageDialog from "@/components/image-dialog";
import NewsBox from "@/components/news-box";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { news } from "../../components/news-list";

export default function NewsAndUpdatesSection() {
  const usenavigate = useNavigate();
  const [id, setId] = useState("");
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
            marginTop: "6rem",
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
              gap: "0.5rem",
              alignItems: "center",
              marginLeft: "1rem",
              color: "white",
            }}
          >
            Latest News{" "}
            <strong style={{ color: "crimson", fontWeight: "500" }}>&</strong>{" "}
            Updates
            <ChevronRight color="crimson" />
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
                  setId(item.id);
                }}
                key={item.id}
                img={item.img}
                title={item.title}
                desc={item.desc}
              />
            ))}
            {/* <NewsBox
              onClick={() => setDialog(true)}
              img="/swc.jpg"
              title="Staff Welfare Commitee - Launch 2024"
              desc="A dedicated initiative focused on enhancing the well-being our team. This committee will play a key role in fostering a positive, supportive work environment by addressing the needs, concerns, and aspirations of our employees. "
            />
            <NewsBox
              img="/ayoe.jpg"
              title="Another Year of Excellence"
              desc="As we look back on the past year, we are proud to celebrate the milestones that have defined our continued commitment to excellence. From innovative solutions to exceptional customer experiences, all made possible by our amazing team."
            />
            <NewsBox
              img="/holo_touch.jpg"
              title="SSU Accelerates Digital Adoption"
              desc="With a strong focus on innovation, we are accelerating the adoption of cutting-edge technologies to enhance operational efficiency, improve customer experiences, and supercharge our team."
            />
            <NewsBox
              img="/team.jpg"
              title="Vale rainwater harvesting Project"
              desc="We are excited to announce the launch of another impactful project in collaboration with our esteemed client, M/s Vale. This rainwater harvesting initiative marks a significant step toward building a more sustainable future together."
            /> */}
          </div>

          <ImageDialog
            id={id}
            list={news}
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
