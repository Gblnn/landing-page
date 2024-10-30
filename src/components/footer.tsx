import { LinkIcon, Mail, Mails, Phone, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function Footer() {
  return (
    <div
      className="footer"
      style={{
        background: "rgba(100 100 100/ 15%)",
        width: "100%",
        fontSize: "0.8rem",
        display: "flex",
        justifyContent: "center",
        bottom: 0,
        border: "",
        flexFlow: "column",
        padding: "",
        alignItems: "center",
      }}
    >
      <div
        className="items-container"
        style={{
          display: "flex",
          flexFlow: "column",
          border: "",
          padding: "2rem",
          gap: "3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            border: "",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2.5rem",
            width: "",
          }}
        >
          <div
            style={{
              display: "flex",
              border: "",
              justifyContent: "",
              flexWrap: "wrap",
              gap: "2.5rem",
              width: "",
            }}
          >
            {/* Get in Touch */}
            <div style={{ border: "", display: "flex", flexFlow: "column" }}>
              <p style={{ fontSize: "1rem", fontWeight: 600 }}>GET IN TOUCH</p>
              <br />

              <div
                style={{
                  display: "flex",
                  flexFlow: "column",
                  gap: "0.5rem",
                  letterSpacing: "0.05rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                    letterSpacing: "0.05rem",
                  }}
                >
                  <Smartphone color="crimson" width={"1rem"} />
                  <a href="tel:92822305" className="ghost">
                    92822305
                  </a>
                  <a href="tel:99440272" className="ghost">
                    99440272
                  </a>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <Phone color="crimson" width={"1rem"} />
                  <a href="tel:26842701" className="ghost">
                    26842701
                  </a>
                  Fax :<a className="ghost">{"26844289"}</a>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <Mails color="crimson" width={"1rem"} />
                  <a
                    href="mailto:soharstar2010@gmail.com"
                    className="ghost"
                    style={{ width: "12rem" }}
                  >
                    soharstar2010@gmail.com
                  </a>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <Mail color="crimson" width={"1rem"} />
                  <a
                    href="mailto:info@soharstar.com"
                    style={{ width: "9rem" }}
                    className="ghost"
                  >
                    info@soharstar.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div style={{ border: "", display: "flex", flexFlow: "column" }}>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  display: "flex",
                  gap: "0.5rem",
                }}
              >
                <LinkIcon width={"1rem"} />
                QUICK LINKS{" "}
              </p>
              <br />
              <div
                style={{
                  display: "flex",
                  gap: "2.5rem",
                  fontSize: "0.9rem",
                  border: "",
                  height: "",
                }}
              >
                <div
                  style={{ display: "flex", flexFlow: "column", gap: "0.7rem" }}
                >
                  <Link className="link" to="/our-team">
                    Our Team
                  </Link>
                  <Link className="link" to="/our-mission">
                    Our Mission
                  </Link>
                  <Link className="link" to="">
                    Values & Culture
                  </Link>
                  {/* <Link className="link" to="">
                  Quality Certifications
                </Link> */}
                </div>
                <div
                  style={{ display: "flex", flexFlow: "column", gap: "0.7rem" }}
                >
                  {/* <Link className="link" to="">
                  About Us
                </Link> */}
                  <Link className="link" to="/projects">
                    Projects
                  </Link>
                  <Link className="link" to="/careers">
                    Careers
                  </Link>
                  <Link className="link" to="/contact-us">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="cert"
            style={{
              border: "",
              justifyContent: "center",

              display: "flex",
              gap: "0.75rem",
              background: "",
              color: "",
              fontWeight: "500",
              padding: "0.5rem",
              fontSize: "0.8rem",
            }}
          >
            <div
              style={{
                border: "",
                width: "10ch",
                display: "flex",
                flexFlow: "column",
                alignItems: "center",
                padding: "0.25rem",
                gap: "0.35rem",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <img
                src="/tve_logo-removebg-preview.png"
                style={{ width: "5rem" }}
              />
              <p style={{ opacity: 0.5 }}>
                ISO 9001 QMS
                {/* QMS */}
              </p>
            </div>

            <div
              style={{
                border: "",
                display: "flex",
                width: "10ch",
                flexFlow: "column",
                alignItems: "center",
                padding: "0.25rem",
                gap: "0.35rem",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <img
                src="/tve_logo-removebg-preview.png"
                style={{ width: "5rem" }}
              />
              <p style={{ opacity: 0.5 }}>
                ISO 14001 EMS
                {/* EMS */}
              </p>
            </div>

            <div
              style={{
                border: "",
                display: "flex",
                flexFlow: "column",
                alignItems: "center",
                padding: "0.25rem",
                gap: "0.35rem",
                justifyContent: "center",
                textAlign: "center",
                width: "10ch",
              }}
            >
              <img
                src="/tve_logo-removebg-preview.png"
                style={{ width: "5rem" }}
              />
              <p style={{ opacity: 0.5 }}>
                ISO 45001 OHSMS
                {/* OHSMS */}
              </p>
            </div>

            {/* <div
              style={{
                border: "",
                display: "flex",
                flexFlow: "column",
                alignItems: "center",
                padding: "0.25rem",
                gap: "0.35rem",
                justifyContent: "center",
              }}
            >
              <img src="/iaf_logo-.png" style={{ width: "4rem" }} />
              
            </div> */}
          </div>
        </div>

        <div
          style={{
            border: "",
            paddingBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "3rem",
          }}
        >
          {/* <img src="/sohar_star_logo.png" width={"40rem"}/> */}
          {/* <br /> */}

          <div>
            <p style={{ fontSize: "1rem", fontWeight: 600 }}>
              SOHAR STAR UNITED LLC
            </p>

            <div
              style={{
                display: "flex",
                flexFlow: "column",
                gap: "",
                letterSpacing: "0.05rem",
              }}
            >
              <p style={{ opacity: 0.5, fontSize: "0.85rem" }}>
                P.O. Box: 153, PC: 322, Falaj Al-Qabail, Sultanate of Oman, CR
                No.:1079500
              </p>
            </div>
          </div>
          <div
            style={{
              border: "",
              paddingRight: "2rem",
              display: "flex",
              gap: "1.5rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ border: "" }}>
              <img src="/iaf.png" style={{ width: "6rem" }} />
            </div>

            <div style={{ border: "" }}>
              <img src="/ias.png" style={{ width: "3rem" }} />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          margin: "",
          wordSpacing: "0.1rem",
          border: "",
          padding: "1rem",
          background: "rgba(100 100 100/ 10%)",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div
          className="items-container"
          style={{ display: "flex", border: "", justifyContent: "center" }}
        >
          <p>
            Copyrights Reserved {String(moment().year())} &copy;{" "}
            <strong style={{ fontWeight: 500 }}> SOHAR STAR UNITED LLC </strong>
          </p>
        </div>
      </div>
    </div>
  );
}
