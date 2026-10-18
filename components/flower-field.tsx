import { HiSparkles } from "react-icons/hi2";
import {
  PiHeartStraightFill,
  PiMoonStarsFill,
  PiSparkleFill,
  PiStarFill,
  PiStarFourFill,
} from "react-icons/pi";

const pieces = [
  { Icon: PiStarFill, className: "top-[7%] left-[7%] size-8 sm:size-12" },
  { Icon: HiSparkles, className: "top-[12%] right-[8%] size-7 sm:size-11" },
  { Icon: PiMoonStarsFill, className: "bottom-[9%] left-[8%] size-9 sm:size-14" },
  { Icon: PiStarFourFill, className: "right-[7%] bottom-[11%] size-8 sm:size-12" },
  { Icon: PiHeartStraightFill, className: "top-[46%] left-[4%] size-6 sm:size-8" },
  { Icon: PiSparkleFill, className: "top-[42%] right-[4%] size-6 sm:size-8" },
];

export function FlowerField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden text-primary/35"
    >
      {pieces.map(({ Icon, className }, index) => (
        <span
          key={className}
          className={`${index % 2 === 0 ? "animate-orbit" : "animate-orbit-reverse"} absolute motion-reduce:animate-none ${className}`}
          style={{
            ["--orbit-radius" as string]: index % 2 === 0 ? "10px" : "14px",
            animationDuration: `${16 + index * 2}s`,
            animationDelay: `${-index * 1.5}s`,
          }}
        >
          <Icon className="size-full" />
        </span>
      ))}
    </div>
  );
}
