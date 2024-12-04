import { DialogDescription } from "@radix-ui/react-dialog";

import { X } from "lucide-react";

import { Button } from "../components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "../components/ui/dialog";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
  open?: boolean;
  title?: any;
  titleIcon?: any;
  desc?: string;
  OkButtonText?: string;
  CancelButtonText?: string;
  onOk?: any;
  onCancel?: any;
  destructive?: boolean;
  extra?: any;
  close?: boolean;
  title_extra?: any;
  disabled?: boolean;
  back?: boolean;
  sendmail?: boolean;
  updating?: boolean;
  created_on?: any;
  progress?: string;
  footerExtra?: any;
  progressItem?: string;
  bigDate?: any;
  subtitle?: string;
  code?: string;
  codeIcon?: any;
  tags?: boolean;
  tag1OnClick?: any;
  tag2OnClick?: any;
  tag3OnClick?: any;
  tag4OnClick?: any;
  tag1Text?: any;
  tag2Text?: any;
  tag3Text?: any;
  tag4Text?: any;
  tag1Alert?: boolean;
  onBottomTagClick?: any;
  bottomValueLoading?: boolean;
  bottomTagValue?: any;
  codeTooltip?: string;
  renumeration?: boolean;
  remarksOnClick?: any;
  remarksValue?: string;
  dialogBackground?: any;
  dialogHeight?: any;
  creation_date?: string;
  contact?: string;
  titleinfo?: boolean;
  onTitleClick?: any;
  img?: string;
}

export default function DefaultDialog(props: Props) {
  return (
    <>
      <Dialog open={props.open}>
        <DialogContent
          style={{
            background: props.dialogBackground,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            border: "none",
          }}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <div
            style={{
              borderRadius: "0.75rem",
              padding: "1.25rem",
              position: "absolute",
              width: "100%",
            }}
          >
            <button
              onClick={props.onCancel}
              style={{
                position: "absolute",
                zIndex: "10",
                right: 0,
                margin: "1",
                marginRight: "2.25rem",
                marginTop: "1rem",
                background: "rgba(200 200 200/ 50%)",
                padding: "0.25rem",
                borderRadius: "0.5rem",
              }}
            >
              <X />
            </button>
            {/* <img
              loading="lazy"
              src="/swc.jpg"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "28ch",
                background: "#1a1a1a",
                objectFit: "cover",
                overflowClipMargin: "unset",
                borderRadius: "0.75rem",
              }}
            /> */}

            <LazyLoadImage
              width={"100%"}
              useIntersectionObserver
              threshold={100}
              effect="opacity"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "28ch",
                background: "#1a1a1a",
                objectFit: "cover",
                overflowClipMargin: "unset",
                borderRadius: "0.75rem",
              }}
              src={props.img}
            />

            <div
              style={{
                // background: "linear-gradient(90deg, #172554, midnightblue)",
                padding: "0.5rem",

                width: "100%",
                borderBottomLeftRadius: "0.75rem",
                borderBottomRightRadius: "0.75rem",
              }}
            >
              <br />
              <p style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                {props.title}
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "indianred",
                  fontWeight: "600",
                }}
              >
                25th October 2024
              </p>
              <div style={{ height: "0.75rem" }}></div>
              <p style={{ fontSize: "0.8rem" }}>{props.desc}</p>
              <div style={{ height: "0.75rem" }}></div>
            </div>
          </div>
          <div
            style={{
              //   border: "solid red",
              height: "42ch",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <p style={{ fontSize: "0.8rem" }}>
              <div style={{ height: "" }}></div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              harum neque iste accusantium omnis expedita, ea provident
              quibusdam nihil eius eos recusandae eveniet. Qui aliquam, iure
              velit deserunt similique assumenda.Qui aliquam, iure velit
              deserunt similique assumenda.
            </p> */}
            {/* <LoaderCircle
              className="animate-spin"
              style={{ position: "absolute" }}
            /> */}
          </div>

          {/* <div
            style={{
              border: "",
              height: "28svh",
            }}
          >
            <p style={{ fontSize: "0.8rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              labore, repellendus voluptatem architecto dignissimos molestiae
              quis commodi dolore modi, obcaecati fugit consectetur totam ipsam
              veritatis sequi? Repellat esse rem totam!
            </p>
          </div> */}

          <DialogDescription style={{ display: "none" }} />

          <DialogFooter>
            <div
              style={{
                display: "flex",
                flexFlow: "column",
                width: "100%",
                gap: "0.5rem",
              }}
            >
              {props.footerExtra ? props.footerExtra : null}
              {props.close ? (
                ""
              ) : (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    gap: "0.5rem",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    className={props.disabled ? "disabled" : ""}
                    variant={props.destructive ? "destructive" : "default"}
                    id="okBtn"
                    onClick={props.updating ? null : props.onOk}
                    style={{ flex: 1 }}
                  >
                    {props.sendmail ? (
                      <a
                        href="mailto:Gokul.nathiel2305@gmail.com"
                        target="_blank"
                        rel="noopener noreferer"
                      >
                        {props.OkButtonText}
                      </a>
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          alignItems: "center",
                        }}
                      ></div>
                    )}
                  </Button>

                  <Button
                    variant={"ghost"}
                    id="cancelBtn"
                    onClick={props.updating ? null : props.onCancel}
                    style={{ flex: 1 }}
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
