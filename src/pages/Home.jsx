import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative">
        <img
          src="/hero.jpg"
          alt="Compassionate care"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-heading font-bold text-center">
            Comfort Circle Care  
          </h1>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-heading font-bold mb-8 text-center">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="shadow-lg rounded-lg overflow-hidden">
            <img src="/service1.jpeg" alt="Home from Hospital" className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Home from Hospital</h3>
              <p className="text-gray-600">Gentle support after discharge, helping you recover comfortably at home.</p>
              <Link to="/services" className="text-brand mt-2 inline-block">Learn more →</Link>
            </div>
          </div>

          <div className="shadow-lg rounded-lg overflow-hidden">
            <img src="/service2.jpeg" alt="Sitting & Respite" className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Sitting & Respite</h3>
              <p className="text-gray-600">Peace of mind for families, with kind carers who stay and support your loved one.</p>
              <Link to="/services" className="text-brand mt-2 inline-block">Learn more →</Link>
            </div>
          </div>

          <div className="shadow-lg rounded-lg overflow-hidden">
            <img src="/service3.jpeg" alt="Companionship" className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Companionship</h3>
              <p className="text-gray-600">Meaningful company for those who need more than just care – someone to talk to and trust.</p>
              <Link to="/services" className="text-brand mt-2 inline-block">Learn more →</Link>
            </div>
          </div>

          <div className="shadow-lg rounded-lg overflow-hidden">
            <img src="/service4.jpeg" alt="Practical Help" className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Practical Help at Home</h3>
              <p className="text-gray-600">Daily assistance with meals, shopping, and household tasks that keep life running smoothly.</p>
              <Link to="/services" className="text-brand mt-2 inline-block">Learn more →</Link>
            </div>
          </div>

          <div className="shadow-lg rounded-lg overflow-hidden md:col-span-3">
            <img src="/service5.jpeg" alt="Rapid Response" className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Rapid Response</h3>
              <p className="text-gray-600">Immediate help when urgent care or support is needed, ensuring safety and comfort quickly.</p>
              <Link to="/services" className="text-brand mt-2 inline-block">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
