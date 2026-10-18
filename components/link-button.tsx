import { Button } from "@/components/ui/button";
import type { LinkItem } from "@/lib/links";
import type { IconType } from "react-icons";
import { HiSparkles } from "react-icons/hi2";
import {
  PiHeartStraightFill,
  PiLightningFill,
  PiMoonStarsFill,
  PiMusicNotesFill,
  PiPlanetFill,
  PiSparkleFill,
  PiStarFill,
  PiStarFourFill,
} from "react-icons/pi";

const decorIcons: IconType[] = [
  PiStarFill,
  PiSparkleFill,
  PiHeartStraightFill,
  PiStarFourFill,
  HiSparkles,
  PiMoonStarsFill,
  PiLightningFill,
  PiMusicNotesFill,
  PiPlanetFill,
];

const spots = [
  { top: "-18%", left: "1%", size: 30, rotate: -18, opacity: 0.32 },
  { top: "46%", left: "10%", size: 18, rotate: 32, opacity: 0.2 },
  { top: "-22%", left: "26%", size: 22, rotate: 10, opacity: 0.24 },
  { top: "40%", left: "40%", size: 16, rotate: -26, opacity: 0.16 },
  { top: "-12%", left: "58%", size: 26, rotate: 16, opacity: 0.26 },
  { top: "34%", left: "74%", size: 32, rotate: -12, opacity: 0.22 },
  { top: "4%", left: "88%", size: 20, rotate: 38, opacity: 0.18 },
];

function hash(value: string) {
  let total = 0;
  for (let index = 0; index < value.length; index++) {
    total = Math.imul(total, 31) + value.charCodeAt(index);
  }
  return total >>> 0;
}

export function LinkButton({ link }: { link: LinkItem }) {
  const Icon = link.icon;
  const seed = hash(link.href);

  return (
    <Button
      nativeButton={false}
      role="link"
      variant="outline"
      className="relative h-14 w-full rounded-full border-primary/20 bg-card px-5 text-base font-semibold shadow-sm hover:bg-secondary"
      render={
        <a href={link.href} target="_blank" rel="noopener noreferrer" />
      }
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
      >
        {spots.map((spot, index) => {
          const Decor = decorIcons[(seed + index) % decorIcons.length];
          const roll = (seed >> (index * 3)) & 255;
          const shiftX = (roll % 31) - 15;
          const shiftY = ((roll >> 3) % 17) - 8;
          const rotate = spot.rotate + (roll % 50) - 25;
          const orbitClass =
            index % 2 === 0 ? "animate-orbit" : "animate-orbit-reverse";

          return (
            <span
              key={`${link.href}-${index}`}
              className={`${orbitClass} absolute motion-reduce:animate-none`}
              style={{
                top: `calc(${spot.top} + ${shiftY * 3}px)`,
                left: `calc(${spot.left} + ${shiftX * 5}px)`,
                ["--orbit-radius" as string]: `${4 + (roll % 5)}px`,
                animationDuration: `${12 + (roll % 8)}s`,
                animationDelay: `${-((roll % 120) / 10)}s`,
              }}
            >
              <Decor
                className="text-primary"
                style={{
                  width: spot.size + (roll % 10) - 4,
                  height: spot.size + (roll % 10) - 4,
                  opacity: Math.min(0.38, spot.opacity + (roll % 4) * 0.03),
                  transform: `rotate(${rotate}deg)`,
                }}
              />
            </span>
          );
        })}
      </span>
      <span className="relative z-10 flex items-center justify-center gap-2">
        <Icon className="size-5 shrink-0" aria-hidden />
        {link.label}
      </span>
    </Button>
  );
}
