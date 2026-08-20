import { notFound } from "next/navigation";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SinglePackageHero from "@/components/packages/SinglePackageHero";
import SinglePackageSection from "@/components/packages/SinglePackageSection";
import { getPackage, listPackageSlugs } from "@/lib/packages";

export function generateStaticParams() {
  return listPackageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) return {};

  return {
    title: pkg.seo.title,
    description: pkg.seo.description,
    alternates: { canonical: `/packages/${pkg.slug}` },
  };
}

export default async function PackagePage({ params }) {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) notFound();

  return (
    <>
      <TopBar />
      <Header />
      <main>
        <SinglePackageHero pkg={pkg} />
        <SinglePackageSection pkg={pkg} />
      </main>
      <Footer />
    </>
  );
}
