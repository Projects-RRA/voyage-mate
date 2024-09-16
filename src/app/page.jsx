import Image from "next/image";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import HomeBanner from "@/app/components/home/banner";

export default function Home() {
  return (
    <div className="">
      <header>
        <Header />
      </header>
      <main className="min-h-screen">
        <HomeBanner />
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
