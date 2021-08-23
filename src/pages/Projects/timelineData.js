import phlippy from "../../assets/phlippy_icon.png";
import clock from "../../assets/clock.svg"
import {
  typescriptIcon,
  reactIcon,
  nodeIcon,
  mongoIcon,
  webpackIcon,
} from "../AboutMe/iconindex";

const stack = [
  {
    name: "TypeScript",
    logo: typescriptIcon,
  },
  {
    name: "React",
    logo: reactIcon,
  },
  {
    name: "Node",
    logo: nodeIcon,
  },
  {
    name: "MongoDB",
    logo: mongoIcon,
  }, 
  {
    name: "Parcel",
    logo: webpackIcon,
  },
];

const desc = `Currently building a daily event tracker, a full stack web app meant to help organize all the clutter that comes with life (demo in the works)`;

const contributors = [
  "Louis Sheid (Myself)",
];

export const timelineData = {
  title: "Timeline (name TBA)",
  subTitle: "Daily event tracker/planner",
  logo: clock,
  description: desc,
  stack: stack,
  contributors: contributors,
  repoLink: "https://github.com/louisxsheid/timeline",
};
