import Image from "next/image";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

export default function Home() {
  return (
    <div className="">
      <header>
        <Header />
      </header>
      <main className="min-h-screen">
        <h1 className="decoration-slate-600">Body</h1>
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
