import HomeBanner from "@/app/components/home/banner";
import BookNow from "@/app/components/home/bookNow";
import PackageGallery from "@/app/components/home/packageGallery";
import ServicesSection from "./servicesSection";

export default function Home() {
  return (
    <div className="">
        <HomeBanner />
        <BookNow />
        <PackageGallery />
        <ServicesSection />
    </div>
  );
}
