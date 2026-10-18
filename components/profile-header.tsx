import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { CardTitle } from "@/components/ui/card";

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center gap-3">
      <Avatar className="size-24! text-2xl">
        <AvatarImage
          src="/ee1a3c3a-1dc3-41cb-831a-29f404c7ad25.jfif"
          alt="JEJENG"
        />
        <AvatarFallback className="bg-secondary text-2xl font-semibold text-primary">
          J
        </AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <CardTitle>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            JEJENG
          </h1>
        </CardTitle>
      </div>
    </div>
  );
}
