import React from "react";
import Header from "../components/header";
import Footer from "@/app/components/footer";
import LoginScreen from "./components";

function Register() {
  return (
    <>
      <div className="RegisterPage">
        <header>
          <Header />
        </header>
        <main className="min-h-screen">
         <LoginScreen />
        </main>
        <footer className="">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Register;
