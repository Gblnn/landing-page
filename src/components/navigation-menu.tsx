"use client";

import * as React from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface Props {
  fontsize?: string;
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Civil",
    href: "/docs/primitives/alert-dialog",
    description: "Construction of non-commercial buildings ",
  },
  {
    title: "Mechanical",
    href: "/docs/primitives/hover-card",
    description: "Mechanical Division.",
  },
  {
    title: "Automobile",
    href: "/docs/primitives/--",
    description: "Repair and maintainence of light and heavy vehicles",
  },
  {
    title: "MEP",
    href: "/docs/primitives/scroll-area",
    description: "Mechanical, Electrical and Plumbing works.",
  },
  {
    title: "Electrical",
    href: "/docs/primitives/tabs",
    description: "Electrical Works dealing with installation and maintainence.",
  },
  {
    title: "Landscaping",
    href: "/docs/primitives/tooltip",
    description: "Transforming Barren lands to beautiful landscapes",
  },
];

export function Nav(props: Props) {
  return (
    <NavigationMenu>
      <NavigationMenuList style={{ display: "flex", gap: "" }}>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            style={{ fontSize: props.fontsize, background: "none" }}
          >
            Who we are
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/onboarding"
                    style={{
                      background: "linear-gradient(#002244, #800020)",
                      boxShadow: "1px 1px 10px rgba(0 0 0/ 70%)",
                    }}
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
                      style={{ color: "white", opacity: 0.75 }}
                    >
                      A company focussed on quality & excellence
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <Link to="our-team">
                <ListItem href="/our-team" title="Our Team">
                  A team commited to excellence.
                </ListItem>
              </Link>

              <Link to="our-mission">
                <ListItem title="Our Mission">
                  Learn more about our mission.
                </ListItem>
              </Link>

              <ListItem
                href="/docs/primitives/typography"
                title="Our Values & Culture"
              >
                Learn more about our core values.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            style={{ fontSize: props.fontsize, background: "none" }}
          >
            What we do
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/projects">
            <NavigationMenuLink
              style={{ fontSize: props.fontsize, background: "none" }}
              className={navigationMenuTriggerStyle()}
            >
              <p className="hoverable">Projects</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/careers">
            <NavigationMenuLink
              style={{ fontSize: props.fontsize, background: "none" }}
              className={navigationMenuTriggerStyle()}
            >
              <p className="hoverable">Careers</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/contact-us">
            <NavigationMenuLink
              style={{ fontSize: props.fontsize, background: "none" }}
              className={navigationMenuTriggerStyle()}
            >
              <p className="hoverable">Contact Us</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
