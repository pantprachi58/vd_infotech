import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import PackageHero from "@/components/packages/PackageHero";
import PackageTable from "@/components/packages/PackageTable";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export const metadata = {
  title: "All-in-One 360° Business Growth Packages | VD Infotech",
  description:
    "Our growth packages are crafted to deliver complete, cross-channel solutions designed specifically for your industry and goals.",
};

export default function PackagesPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <PackageHero />
        <PackageTable />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
