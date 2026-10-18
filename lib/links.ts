import type { IconType } from "react-icons";
import {
  FaDiscord,
  FaGift,
  FaHandHoldingHeart,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { GiFlowerEmblem, GiFlowerStar, GiFlowerTwirl } from "react-icons/gi";
import {
  PiFlowerFill,
  PiFlowerLotusFill,
  PiFlowerTulipFill,
} from "react-icons/pi";

export type LinkItem = {
  label: string;
  href: string;
  icon: IconType;
  flower: IconType;
};

export const socialLinks: LinkItem[] = [
  {
    label: "Discord Server",
    href: "https://discord.com/invite/Zka7B4h3gR",
    icon: FaDiscord,
    flower: PiFlowerFill,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/j.v.aa",
    icon: FaInstagram,
    flower: PiFlowerTulipFill,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@jejengHan",
    icon: FaYoutube,
    flower: PiFlowerLotusFill,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@.hijeje",
    icon: FaTiktok,
    flower: GiFlowerEmblem,
  },
];

export const supportLinks: LinkItem[] = [
  {
    label: "Bagi Bagi",
    href: "https://bagibagi.co/jejengg",
    icon: FaGift,
    flower: GiFlowerStar,
  },
  {
    label: "Sociabuzz",
    href: "https://sociabuzz.com/inijeje",
    icon: FaHandHoldingHeart,
    flower: GiFlowerTwirl,
  },
];
