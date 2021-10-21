import React from "react";
import FooterSmall from "../components/Footers/FooterSmall";
// components
import Navbar from "../components/Navbars/AuthNavbar";


export default function Auth({ children }: anyOk) {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}
          ></div>
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
