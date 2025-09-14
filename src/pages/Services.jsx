export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-heading font-bold mb-8 text-center">Our Services</h1>
      
      <div className="space-y-12">
        <section>
          <img src="/service1.jpeg" alt="Home from Hospital" className="rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold">Home from Hospital</h2>
          <p className="mt-2 text-gray-700">
            Returning home after a hospital stay can feel overwhelming. Our carers provide gentle,
            reassuring support to ease your transition back to independence. We help with medication reminders,
            personal care, meal preparation, and keeping you comfortable while you recover.
          </p>
        </section>

        <section>
          <img src="/service2.jpeg" alt="Sitting & Respite" className="rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold">Sitting & Respite</h2>
          <p className="mt-2 text-gray-700">
            Family carers deserve rest too. Our sitting and respite service ensures your loved one has
            compassionate supervision while you take time for yourself. Whether for a few hours or longer,
            we provide peace of mind and continuity of care.
          </p>
        </section>

        <section>
          <img src="/service3.jpeg" alt="Companionship" className="rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold">Companionship</h2>
          <p className="mt-2 text-gray-700">
            Loneliness can affect wellbeing. Our carers offer genuine companionship — sharing
            conversations, hobbies, or simply a friendly presence. We focus on emotional support
            and meaningful human connection alongside practical assistance.
          </p>
        </section>

        <section>
          <img src="/service4.jpeg" alt="Practical Help at Home" className="rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold">Practical Help at Home</h2>
          <p className="mt-2 text-gray-700">
            From shopping to light housekeeping, our carers lend a helping hand to make daily life easier.
            We tailor support around your needs, ensuring comfort, safety, and dignity at home.
          </p>
        </section>

        <section>
          <img src="/service5.jpeg" alt="Rapid Response" className="rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold">Rapid Response</h2>
          <p className="mt-2 text-gray-700">
            Life can be unpredictable. When unexpected care is needed, our rapid response service provides
            immediate support. Whether after a sudden illness, hospital discharge, or emergency, we are here
            to step in quickly with reliable assistance.
          </p>
        </section>
      </div>
    </div>
  );
}
