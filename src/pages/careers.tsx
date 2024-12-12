import Back from "@/components/back";
import Work from "@/components/work";
import { db } from "@/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { motion } from "framer-motion";
import { ChevronRight, LoaderCircle } from "lucide-react";
import moment from "moment";
import { useEffect, useState } from "react";
// import { Opening } from "@/components/opening";

export default function Careers() {
  const [fetchingData, setfetchingData] = useState(false);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setfetchingData(true);
      const RecordCollection = collection(db, "openings");
      const recordQuery = query(RecordCollection);
      const querySnapshot = await getDocs(recordQuery);
      const fetchedData: any = [];

      querySnapshot.forEach((doc: any) => {
        fetchedData.push({ id: doc.id, ...doc.data() });
      });
      setRecords(fetchedData);

      setfetchingData(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div
        id="projects"
        className="page"
        style={{
          border: "",
          height: "",
          paddingTop: "1.5rem",
          background: "rgba(100 100 100/ 10%)",
        }}
      >
        <div
          style={{
            margin: "1.5rem",
            marginTop: "",
            border: "",
            width: "100%",
          }}
        >
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: 500,
              display: "flex",
              gap: "0.75rem",
              alignItems: "center",
            }}
          >
            <Back />
            Careers <ChevronRight color="crimson" />
          </h1>

          <br />

          {fetchingData ? (
            <div
              style={{
                width: "100%",
                border: "",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "36ch",
              }}
            >
              <LoaderCircle
                color="dodgerblue"
                className="animate-spin"
                width={"3rem"}
                height={"3rem"}
              />
            </div>
          ) : records.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              style={{
                display: "flex",
                border: "",
                height: "",
                padding: "",
                flexWrap: "wrap",
                gap: "1.25rem",
                justifyContent: "",
              }}
            >
              <Work
                date={moment().format("LL")}
                designation="Project Manager"
                experience="5"
              />
              <Work designation="Finance Manager" />
            </motion.div>
          ) : (
            <div
              style={{
                // border: "solid rgba(100 100 100/ 20%)",
                display: "flex",
                height: "36ch",
                justifyContent: "center",
                alignItems: "center",
                opacity: "0.5",
              }}
            >
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <div
                  style={{
                    display: "flex",
                    flexFlow: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <Inbox width={"3rem"} height={"3rem"} opacity={"0.5"} /> */}
                  {/* <p>No Openings Found</p> */}
                  <p>No Openings Found</p>
                  {/* <p style={{ fontSize: "0.6rem" }}>Please check back later</p> */}
                  <p style={{ fontSize: "0.6rem" }}>
                    Feel free to mail us your CV
                  </p>

                  {/* <p
                style={{
                  padding: "1rem",
                  // paddingLeft: "1rem",
                  // paddingRight: "1rem",
                  // border: "solid rgba(100 100 100/ 40%)",
                  textAlign: "center",
                  position: "absolute",
                  bottom: 0,
                  marginBottom: "6rem",
                  fontSize: "0.7rem",
                  borderRadius: "0.75rem",
                }}
              >
                Feel free to mail us your CV and we will get back to you
              </p> */}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
