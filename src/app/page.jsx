import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Home from "@/app/components/home";

export default function Page() {
  return (
    <div className="">
      <header>
        <Header />
      </header>
      <main className="min-h-screen">
        <Home />
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
