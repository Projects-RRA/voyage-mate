import HomeBanner from "@/app/components/home/banner";
import BookNow from "@/app/components/home/bookNow";
import PackageGallery from "@/app/components/home/packageGallery";

export default function Home() {
  return (
    <div className="">
        <HomeBanner />
        <BookNow />
        <PackageGallery />
    </div>
  );
}
