import React from "react";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer flex justify-between p-8 text-[var(--black)] bg-[var(--white)] h-[10%]">
      <p className="hidden sm:block  logo md:text-xl font-bold " onClick={() => topFunction()}>
        Financely<span className="text-[var(--blue)]">.</span>
      </p>

      <p className="hidden sm:block md:text-xl font-semibold">Made By Abhiraj kumar </p>
    </div>
  );
}

export default Footer;