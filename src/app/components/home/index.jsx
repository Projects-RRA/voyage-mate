import HomeBanner from "@/app/components/home/banner";
import BookNow from "@/app/components/home/bookNow";
import PackageGallery from "@/app/components/home/packageGallery";
import ServicesSection from "./servicesSection";
import ImageGallery from "./gallerySection";
import AboutUs from "./aboutUsSection";

export default function Home() {
  return (
    <div className="">
        <HomeBanner />
        <BookNow />
        <PackageGallery />
        <ServicesSection />
        <ImageGallery />
        <AboutUs />
    </div>
  );
}
