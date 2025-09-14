export default function Careers() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-heading font-bold mb-6">Careers with Comfort Circle Care</h1>
      <img src="/careers.jpeg" alt="Careers" className="rounded-lg mb-6" />
      <p className="text-gray-700 mb-6">
        Join our compassionate team and make a difference in people’s lives. We’re always looking for
        caring, reliable individuals to provide companionship and support across Colchester and Essex.
      </p>

      <form
        action="mailto:info@comfortcirclecare.co.uk"
        method="post"
        encType="text/plain"
        className="space-y-4 max-w-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Tell us about yourself"
          required
          rows="5"
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-brand text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Send Application
        </button>
      </form>
    </div>
  );
}
