import type { IconType } from "react-icons";
import {
  FaDiscord,
  FaGift,
  FaHandHoldingHeart,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

export type LinkItem = {
  label: string;
  href: string;
  icon: IconType;
};

export const socialLinks: LinkItem[] = [
  {
    label: "Discord Server",
    href: "https://discord.com/invite/Zka7B4h3gR",
    icon: FaDiscord,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/j.v.aa",
    icon: FaInstagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@jejengHan",
    icon: FaYoutube,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@.hijeje",
    icon: FaTiktok,
  },
];

export const supportLinks: LinkItem[] = [
  {
    label: "Bagi Bagi",
    href: "https://bagibagi.co/jejengg",
    icon: FaGift,
  },
  {
    label: "Sociabuzz",
    href: "https://sociabuzz.com/inijeje",
    icon: FaHandHoldingHeart,
  },
];
