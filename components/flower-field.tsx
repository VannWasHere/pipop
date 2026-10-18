import { GiFlowerEmblem, GiFlowerStar } from "react-icons/gi";
import {
  PiFlowerFill,
  PiFlowerLotusFill,
  PiFlowerTulipFill,
} from "react-icons/pi";

const blooms = [
  { Icon: PiFlowerFill, className: "top-[7%] left-[7%] size-8 -rotate-12 sm:size-12" },
  { Icon: PiFlowerTulipFill, className: "top-[12%] right-[8%] size-7 rotate-12 sm:size-11" },
  { Icon: PiFlowerLotusFill, className: "bottom-[9%] left-[8%] size-9 rotate-6 sm:size-14" },
  { Icon: GiFlowerEmblem, className: "right-[7%] bottom-[11%] size-8 -rotate-6 sm:size-12" },
  { Icon: GiFlowerStar, className: "top-[46%] left-[4%] size-6 sm:size-8" },
  { Icon: PiFlowerFill, className: "top-[42%] right-[4%] size-6 -rotate-12 sm:size-8" },
];

export function FlowerField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden text-primary/35"
    >
      {blooms.map(({ Icon, className }) => (
        <Icon key={className} className={`absolute ${className}`} />
      ))}
    </div>
  );
}
