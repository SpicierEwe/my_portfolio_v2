import { DiFirebase, DiGoogleAnalytics } from "react-icons/di";
import { MdDesignServices, MdOutlineAndroid } from "react-icons/md";
import { FaTools, FaApple } from "react-icons/fa";
import { LuConstruction } from "react-icons/lu";
import { SiNextdotjs, SiFlutter, SiDart } from "react-icons/si";
import { FaReact, FaHtml5, FaPython, FaUserShield } from "react-icons/fa";
import { IoLogoCss3, IoLogoFirebase } from "react-icons/io5";
import {
  SiJavascript,
  SiGit,
  SiVercel,
  SiAdobexd,
  SiTypescript,
} from "react-icons/si";
import { GoBrowser } from "react-icons/go";
import { BiLogoTailwindCss } from "react-icons/bi";

const iconSize = 19;

export const CustomIcons = {
  roles: {
    dataanalyst: <DiGoogleAnalytics size={iconSize} color="#3366CC" />,
    designer: <MdDesignServices size={iconSize} color="#FF9900" />,
    developer: <FaTools size={iconSize} color="#7CB342" />,
    maintainer: <LuConstruction size={iconSize} color="#006699" />,
  },
  techStack: {
    nextjs: <SiNextdotjs size={iconSize} color="black" />,
    react: <FaReact size={iconSize} color="#e91e63" />,
    tailwind: <BiLogoTailwindCss size={iconSize} color="#38bdf8" />,
    tailwind: <BiLogoTailwindCss size={iconSize} color="#38bdf8" />,
    html: <FaHtml5 size={iconSize} color="#dd4b25" />,
    css: <IoLogoCss3 size={iconSize} color="#254bdd" />,
    javascript: <SiJavascript size={iconSize} color="#e8d44d" />,
    git: <SiGit size={iconSize} color="#e84d31" />,
    vercel: <SiVercel size={iconSize} color="#000000" />,
    python: <FaPython size={iconSize} color="#306998" />,
    firebase: <IoLogoFirebase size={iconSize} color="#f7c52b" />,
    firebaseauth: <FaUserShield size={iconSize} color="#4dc274" />,
    flutter: <SiFlutter size={iconSize} color="#51bff0" />,
    dart: <SiDart size={iconSize} color="#015496" />,
    adobexd: <SiAdobexd size={iconSize} color="#f75eee" />,
  },

  platforms: {
    android: <MdOutlineAndroid size={iconSize} color="#a4c639" />,
    ios: <FaApple size={iconSize} color="#000000" />,
  },

  navIcons: {
    websites: <GoBrowser />,
    apps: <MdOutlineAndroid />,
    ux: <div>UX</div>,
    mockups: <MdDesignServices />,
  },
};
