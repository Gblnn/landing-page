import Back from "@/components/back";
import Work from "@/components/work";
import { db } from "@/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { motion } from "framer-motion";
import { ChevronRight, LoaderCircle } from "lucide-react";
import moment from "moment";
import { useEffect, useState } from "react";
import JobApplicationDialog from "@/components/JobApplicationDialog";
// import { Opening } from "@/components/opening";

export default function Careers() {
  const [fetchingData, setfetchingData] = useState(false);
  const [records, setRecords] = useState([]);
  const [applicationDialog, setApplicationDialog] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);

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
        className="page"
        style={{
          minHeight: "90vh",
          paddingTop: "1rem",
          background: "rgba(100 100 100/ 10%)",
        }}
      >
        <div
          style={{
            padding: "1.5rem",
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: 500,
              display: "flex",
              gap: "0.75rem",
              alignItems: "center",
              marginBottom: "1.5rem",
            }}
          >
            <Back />
            Careers <ChevronRight color="crimson" />
          </h1>

          {fetchingData ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh",
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
              className="careers-grid"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "2rem",
                padding: "0.5rem",
              }}
            >
              {records.map((record: any) => (
                <Work
                  key={record.id}
                  date={moment(record.created_at.toDate()).format("LL")}
                  designation={record.jobTitle}
                  mailto={record.mailto}
                  desc={record.description}
                  actively_hiring={record.activelyHiring}
                  onApply={() => {
                    setSelectedJob(record);
                    setApplicationDialog(true);
                  }}
                  jobType={record.jobType}
                />
              ))}
            </motion.div>
          ) : (
            <div
              style={{
                display: "flex",
                height: "36ch",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                opacity: "0.5",
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexFlow: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <p>No Openings Found</p>
                  <p style={{ fontSize: "0.6rem" }}>
                    Feel free to mail us your CV
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
      <JobApplicationDialog
        open={applicationDialog}
        onClose={() => setApplicationDialog(false)}
        jobId={selectedJob?.id ?? null}
        jobTitle={selectedJob?.jobTitle}
      />
    </motion.div>
  );
}
