import { assets } from "@/public";
import { RxLinkedinLogo, RxInstagramLogo } from "react-icons/rx";
import { FaTwitter } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

export const brands = [
  {
    imgSrc: assets.img.lenonEnterprise1,
    heading: "Lenon Enterprise",
    subheading: "Brand design, mobile app, Website",
    headingColor: "text-[#FFFFFF]",
    subheadingColor: "text-[#EAEAEA]",
  },
  {
    imgSrc: assets.img.lenonEnterprise2,
    heading: "Lenon Enterprise",
    subheading: "Brand design, mobile app, Website",
    headingColor: "text-[#FFD193]",
    subheadingColor: "text-[#FFBB60]",
  },
  {
    imgSrc: assets.img.supreme,
    heading: "Theo Crave",
    subheading: "Brand design, brand guide, package design",
    headingColor: "text-[#FFFFFF]",
    subheadingColor: "text-[#E7E7E7]",
  },
  {
    imgSrc: assets.img.theoCrave,
    heading: "Supreme",
    subheading: "Website, Mobile app",
    headingColor: "text-[#FFFFFF]",
    subheadingColor: "text-[#EAEAEA]",
  },
  {
    imgSrc: assets.img.packhelp,
    heading: "Packhelp",
    subheading: "Brand guide, Package design",
    headingColor: "text-[#D84545]",
    subheadingColor: "text-[#D79191]",
  },
];

export const projects = [
  {
    heading: "Software Development",
    subheading: "UI/UX, No-code, Front-End, Back-End, Android",
    imgSrc: "/imgs/software-development.avif",
  },
  {
    heading: "Branding",
    subheading:
      "Identity, Strategy, Messaging, Experience, Assets, Communication, Management.",
    imgSrc: "/imgs/branding.avif",
  },
  {
    heading: "Marketing",
    subheading:
      "Strategy, Digital marketing, Market analysis, Promotion Design.",
    imgSrc: "/imgs/marketing.avif",
  },
  {
    heading: "Design",
    subheading:
      "Graphic design, proposals, Flyers, Animation, Illustration, Packaging, Company Profiles.",
    imgSrc: "/imgs/design.avif",
  },
  {
    heading: "Communication",
    subheading:
      "Public Relations, Digital Comms, Event & Corporate comms, Audits, Surveys, Analytics.",
    imgSrc: "/imgs/communication.avif",
  },
  {
    heading: "3D Visualization",
    subheading:
      "Concept Development, 3D Modelling, Texture and Materials, Animation.",
    imgSrc: "/imgs/3d-visualization.avif",
  },
  {
    heading: "Consultancy",
    subheading:
      "Structural Development, Knowledge Sharing, Domain Expertise, Risk management, SWOT.",
    imgSrc: "/imgs/consultancy.avif",
  },
];

export const possibilities = [
  {
    title: "Cutting Edge Solutions",
    description:
      "We stay ahead of the curve, ensuring we deliver effectively. Let us leverage our knowledge to give you a competitive edge.",
    alignment: "start",
    img: "/imgs/cutting-edge-solutions.jpeg",
  },
  {
    title: "Amplifying your voice",
    description:
      "We're not just developers and marketers; We'll ensure your message reaches your target audience through the most impactful channels.",
    alignment: "end",
    img: "/imgs/amplifying-your-voice.jpeg",
  },
  {
    title: "Fresh Perspectives",
    description:
      "Bringing a wealth of experience from various industries to the table. We're creative problem solvers, we see your project from unique angles, setting you ahead of competition.",
    alignment: "start",
    img: "/imgs/fresh-perspectives.jpeg",
  },
  {
    title: "Empowering your vision",
    description:
      "We become an extension of your team and not just execute projects. We take the time to understand your goals and aspirations. Together, let's create something truly remarkable.",
    alignment: "end",
    img: "/imgs/empowering-your-vision.jpeg",
  },
];

export const navMenuLinks = [
  {
    label: "Our Expertise",
    sublabel: "What we do",
    path: "/",
  },
  {
    label: "Our Initiatives",
    sublabel: "See our personal projects",
    path: "/",
  },
  {
    label: "Behind the work",
    sublabel: "Meet the crew",
    path: "/",
  },
  {
    label: "Portfolio",
    sublabel: "Past work for our clients",
    path: "/",
  },
  {
    label: "Reach Out",
    path: "/",
  },
];

export const footerSocials = [
  {
    path: "/",
    label: "LinkedIn",
    icon: RxLinkedinLogo,
  },
  {
    path: "/",
    label: "x (Twitter)",
    icon: FaTwitter,
  },
  {
    path: "/",
    label: "Instagram",
    icon: RxInstagramLogo,
  },
  {
    path: "/",
    label: "Facebook",
    icon: SiFacebook,
  },
];
