import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import prismadb from "@/prisma/prismadb";
import { inter } from "@/lib/fonts";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Skeleton from "react-loading-skeleton";

export const metadata = {
  title: "Home",
};

export default async function Page() {
  // get the session of logged in user
  const { getUser } = getKindeServerSession();

  // Check if the user is already logged in the browser
  const user = await getUser();
  if (!user || !user.id) {
    redirect("/auth-callback?origin=dashboard");
  }

  // If logged in browser, also check the database for the user
  const dbUser = await prismadb.user.findUnique({
    where: {
      kindeId: user?.id,
    },
  });
  if (!dbUser) {
    redirect("/auth-callback?origin=dashboard");
  }

  return (
    <section className={`${inter.className}`}>
      <MaxWidthWrapper>
        {/* Todo: Replace the BreadcrumNav and Skeleton with DashboardPage later */}
        <BreadcrumbNav />
        <Skeleton height={60} className="my-2" count={6} enableAnimation />
      </MaxWidthWrapper>
    </section>
  );
}
