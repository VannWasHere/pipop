import { FlowerField } from "@/components/flower-field";
import { LinkButton } from "@/components/link-button";
import { ProfileHeader } from "@/components/profile-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { socialLinks, supportLinks } from "@/lib/links";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center px-4 pt-[max(2rem,env(safe-area-inset-top))] pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-12">
      <FlowerField />
      <Card className="relative z-10 w-full max-w-md rounded-3xl">
        <CardHeader className="justify-items-center text-center">
          <ProfileHeader />
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <ul className="flex list-none flex-col gap-3">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <LinkButton link={link} />
              </li>
            ))}
          </ul>
          <Separator className="my-2" />
          <section className="flex flex-col gap-3" aria-labelledby="support-heading">
            <h2
              id="support-heading"
              className="text-center text-base font-semibold"
            >
              Support Me
            </h2>
            <ul className="flex list-none flex-col gap-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <LinkButton link={link} />
                </li>
              ))}
            </ul>
          </section>
        </CardContent>
      </Card>
    </main>
  );
}
