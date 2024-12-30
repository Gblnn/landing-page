import Back from "@/components/back";
import Project from "@/components/project";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { projectlist } from "@/components/projects";
import { useState } from "react";
import ImageDialog from "@/components/image-dialog";

export default function Projects() {
  const [id, setId] = useState<any>("");
  const [dialog, setDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogImg, setDialogImg] = useState("");
  const [dialogDesc, setDialogDesc] = useState("");

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
            marginTop: "",
            border: "",
            width: "",
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
          }}
        >
          <h1
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
            <Back />

            <p style={{ fontSize: "1.25rem" }}>Projects</p>

            <ChevronRight color="crimson" />

            {/* <Select defaultValue="civil-projects">
              <SelectTrigger
                style={{
                  background: "rgba(100 100 100/ 10%)",
                  border: "none",
                  fontSize: "1.25rem",
                  outline: "none",
                  padding: "1rem",
                }}
                className="w-[200px]"
              >
                <SelectValue defaultValue={"civil-projects"} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    style={{ fontSize: "1rem" }}
                    defaultChecked
                    value="civil-projects"
                  >
                    Civil Projects
                  </SelectItem>
                  <SelectItem style={{ fontSize: "1rem" }} value="mep-projects">
                    MEP Projects
                  </SelectItem>
                  <SelectItem
                    style={{ fontSize: "1rem" }}
                    value="manufacturing"
                  >
                    Manufacturing
                  </SelectItem>
                  <SelectItem style={{ fontSize: "1rem" }} value="landscaping">
                    Landscaping
                  </SelectItem>
                  <SelectItem
                    style={{ fontSize: "1rem" }}
                    value="road-and-earthworks"
                  >
                    Road & Earthwork
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select> */}
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
            {projectlist.map((project: any) => (
              <Project
                onClick={() => {
                  setDialog(true);
                  setDialogTitle(project.title);
                  setDialogImg(project.img);
                  setDialogDesc(project.desc);
                  setId(project.id);
                }}
                key={project.id}
                title={project.title}
                img={project.img}
                desc={project.desc}
                picCount={project.images.length}
              />
            ))}
          </div>

          <br />
          <br />
          {/* <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
                <Button onClick={()=>usenavigate("/projects")} variant={"ghost"} style={{width:"32ch", display:"flex", gap:"0.5rem", alignItems:"center", alignSelf:"center", background:"rgba(100 100 100/ 10%)", boxShadow:"1px 1px 10px rgba(0 0 0/ 10%)"}}>See more Projects <ChevronRight width={"1rem"} color="crimson"/></Button>
                </div> */}

          <br />
          <br />
          <ImageDialog
            id={id}
            list={projectlist}
            title={dialogTitle}
            img={dialogImg}
            desc={dialogDesc}
            open={dialog}
            onCancel={() => setDialog(false)}
          />
        </div>
      </div>
    </motion.div>
  );
}
