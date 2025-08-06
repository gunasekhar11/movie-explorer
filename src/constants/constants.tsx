import { FaHome, FaEnvelope } from "react-icons/fa";
import { IconType } from "react-icons";

export const SITE_NAME = "Movie Explorer";

export const LOGO_URL =
  "https://i.ibb.co/6Jt4TDYm/Movie-icon-aesthetic-black-and-white.jpg";

export interface NavLink {
  label: string;
  path: string;
  icon: IconType;
}

export const NAV_LINKS: NavLink[] = [
  {
    label: "Home",
    path: "/",
    icon: FaHome,
  },
  {
    label: "Contact",
    path: "/contact",
    icon: FaEnvelope,
  },
];

export const END_POINT = "https://www.omdbapi.com/";
export const API_KEY = "3f3d1a20";
