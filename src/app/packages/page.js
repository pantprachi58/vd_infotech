import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import PackageHero from "@/components/packages/PackageHero";
import PackagesTableSection from "@/components/packages/PackagesTableSection";
import Footer from "@/components/Footer";
import { listPackages } from "@/lib/packages";

export const metadata = {
  title: "All-in-One 360° Business Growth Packages | VD Infotech",
  description:
    "Our growth packages are crafted to deliver complete, cross-channel solutions designed specifically for your industry and goals.",
  alternates: { canonical: "/packages" },
};

export default function PackagesPage() {
  const packages = listPackages();

  return (
    <>
      <TopBar />
      <Header />
      <main>
        <PackageHero />
        <PackagesTableSection packages={packages} />
      </main>
      <Footer />
    </>
  );
}
