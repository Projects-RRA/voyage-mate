import React from "react";
import Header from "../components/header";
import Footer from "@/app/components/footer";
import SignupCard from "./components/signUpCard";

function Register() {
  return (
    <>
      <div className="RegisterPage">
        <header>
          <Header />
        </header>
        <main className="min-h-screen">
          <SignupCard />
        </main>
        <footer className="">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Register;
