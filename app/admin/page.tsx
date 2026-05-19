import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { AdminDashboard } from "@/components/admin/admin-dashboard";

export default async function Admin() {
  const user = await currentUser();

  // user is not logged in
  if (!user) redirect("/");

  const adminEmail = process.env.ADMIN_EMAIL;
  const userEmail = user.emailAddresses[0]?.emailAddress;

  // user is not the admin
  if (!adminEmail || userEmail !== adminEmail) redirect("/dashboard");

  return <AdminDashboard />;
}
