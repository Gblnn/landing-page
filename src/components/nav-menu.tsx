import {
  BellElectric,
  Car,
  DraftingCompass,
  Earth,
  Factory,
  Handshake,
  Lightbulb,
  PanelTopDashed,
  TreePine,
  Users,
  Wrench,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

interface Props {
  trigger?: any;
}

export function NavMenu(props: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{props.trigger}</DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56"
        style={{
          marginLeft: "0.5rem",
          marginBottom: "1.75rem",
          width: "10rem",
        }}
      >
        <DropdownMenuLabel>About Us</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Lightbulb color="crimson" className="mr-2 h-4 w-4" />
              <span>Who we are</span>
            </DropdownMenuSubTrigger>

            <DropdownMenuPortal>
              <DropdownMenuSubContent
                style={{
                  margin: "0.75rem",
                  width: "12rem",
                  marginBottom: "4.65rem",
                }}
              >
                <DropdownMenuItem>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/onboarding"
                    style={{ background: "linear-gradient(#002244, #800020)" }}
                  >
                    <img src="/sohar_star_logo.png" width={"35rem"} />

                    <div
                      className="mb-2 mt-4 text-lg font-medium"
                      style={{ color: "white" }}
                    >
                      Sohar Star United LLC
                    </div>
                    <p
                      className="text-sm leading-tight text-muted-foreground"
                      style={{ color: "white", opacity: "0.5" }}
                    >
                      A company focussed on quality & excellence
                    </p>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <Link to="/our-team">
                  <DropdownMenuItem>
                    <Users color="dodgerblue" className="mr-2 h-4 w-4" />
                    <span>Our Team</span>
                  </DropdownMenuItem>
                </Link>

                <Link to="/our-mission">
                  <DropdownMenuItem>
                    <Earth color="dodgerblue" className="mr-2 h-4 w-4" />
                    <span>Our Mission</span>
                  </DropdownMenuItem>
                </Link>

                <DropdownMenuItem>
                  <Handshake color="dodgerblue" className="mr-2 h-4 w-4" />
                  <span>Our Values & Culture</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <DraftingCompass color="crimson" className="mr-2 h-4 w-4" />
              <span>What we do</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent
                style={{
                  margin: "0.75rem",
                  width: "12rem",
                  marginBottom: "4.65rem",
                }}
              >
                <DropdownMenuItem>
                  <Factory color="dodgerblue" className="mr-2 h-4 w-4" />
                  <span>Civil</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Wrench color="dodgerblue" className="mr-2 h-4 w-4" />
                  <span>Mechanical</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Car color="dodgerblue" className="mr-2 h-4 w-4" />
                  <span>Automobile</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <PanelTopDashed color="dodgerblue" className="mr-2 h-4 w-4" />
                  <span>Road & Earth Work</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <BellElectric color="dodgerblue" className="mr-2 h-4 w-4" />
                  <span>Electrical</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <TreePine color="dodgerblue" className="mr-2 h-4 w-4" />
                  <span>Landscaping</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
