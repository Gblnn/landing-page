import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projectlist } from "@/components/projects";
import Project from "@/components/project";
import { useEffect, useState } from "react";
import ImageDialog from "@/components/image-dialog";

export default function FeaturedProjects() {
  const usenavigate = useNavigate();
  const [id, setId] = useState<any>("");
  const [dialog, setDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogImg, setDialogImg] = useState("");
  const [dialogDesc, setDialogDesc] = useState("");

  useEffect(() => {}, []);

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div
        id="projects-page"
        className="page"
        style={{
          border: "",
          height: "auto",
          paddingTop: "1.5rem",
          background: "rgba(100 100 100/ 10%)",
          display: "flex",
          justifyContent: "flex-start",
          flexFlow: "column",
        }}
      >
        <div
          style={{
            margin: "1.25rem",
            marginTop: "6rem",
            border: "",
            width: "",
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
          }}
        >
          <h1
            onClick={() => usenavigate("/projects")}
            className="items-container"
            style={{
              fontSize: "1.5rem",
              fontWeight: 500,
              display: "flex",
              gap: "0.75rem",
              alignItems: "center",
              marginLeft: "1rem",
              border: "",
            }}
          >
            <p style={{ cursor: "pointer" }}>Featured Projects</p>

            <ChevronRight color="crimson" />
          </h1>

          <div
            className="items-container"
            style={{
              border: "",
              display: "flex",
              marginTop: "2rem",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            {projectlist
              .filter((e: any) => {
                return e.featured == true;
              })
              .map((project: any) => (
                <Project
                  onClick={() => {
                    setDialog(true);
                    setDialogTitle(project.title);
                    setDialogImg(project.img);
                    setDialogDesc(project.desc);
                    setId(project.id);
                  }}
                  key={project.id}
                  img={project.img}
                  title={project.title}
                  desc={project.desc}
                  picCount={project.images.length}
                />
              ))}
          </div>

          <br />
          <br />
          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <Button
              onClick={() => usenavigate("/projects")}
              variant={"ghost"}
              style={{
                width: "32ch",
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                alignSelf: "center",
                background: "rgba(100 100 100/ 10%)",
                boxShadow: "1px 1px 10px rgba(0 0 0/ 10%)",
              }}
            >
              See More <ChevronRight width={"1rem"} color="crimson" />
            </Button>
          </div>

          <br />
          <br />
        </div>
      </div>
      <ImageDialog
        id={id}
        list={projectlist}
        title={dialogTitle}
        img={dialogImg}
        desc={dialogDesc}
        open={dialog}
        onCancel={() => setDialog(false)}
      />
    </motion.div>
  );
}
