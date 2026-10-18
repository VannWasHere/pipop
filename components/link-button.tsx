import { Button } from "@/components/ui/button";
import type { LinkItem } from "@/lib/links";

export function LinkButton({ link }: { link: LinkItem }) {
  const Icon = link.icon;
  const Flower = link.flower;

  return (
    <Button
      nativeButton={false}
      role="link"
      variant="outline"
      className="h-12 w-full rounded-full bg-secondary px-4 text-base font-medium shadow-none hover:bg-accent"
      render={
        <a href={link.href} target="_blank" rel="noopener noreferrer" />
      }
    >
      <span className="flex w-full items-center">
        <Flower className="size-4 shrink-0 text-primary" aria-hidden />
        <span className="flex flex-1 items-center justify-center gap-2">
          <Icon className="size-5 shrink-0" aria-hidden />
          {link.label}
        </span>
        <Flower className="size-4 shrink-0 text-primary" aria-hidden />
      </span>
    </Button>
  );
}
