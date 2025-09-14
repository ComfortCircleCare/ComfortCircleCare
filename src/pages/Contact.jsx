import React from "react";

export default function Contact() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p>Email: info@comfortcirclecare.co.uk</p>
      <p>Phone: 07481259386</p>
      <p>
        <a
          href="https://calendly.com/comfortcirclecare-info/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand underline"
        >
          Book a free consultation
        </a>
      </p>
    </div>
  );
}