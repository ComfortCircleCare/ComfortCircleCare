import React from "react";
import hero from "/public/images/hero.jpg";

export default function Home() {
  return (
    <div>
      <section className="text-center">
        <img src={hero} alt="Comfort Circle Care" className="w-full rounded-lg mb-6" />
        <h2 className="text-2xl font-bold">Welcome to Comfort Circle Care</h2>
        <p className="mt-2">
          Battling loneliness? Want your loved one to stay independent with the right support?
          We’re here to provide companionship and lifestyle support that brings peace of mind.
        </p>
      </section>
    </div>
  );
}