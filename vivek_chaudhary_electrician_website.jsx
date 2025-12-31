export default function Website() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="bg-emerald-600 text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h1 className="text-3xl font-bold">Vivek Chaudhary — Electrician Services</h1>
          <nav className="flex gap-6 text-lg">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Professional & Reliable Electrical Work</h2>
            <p className="text-slate-300 mb-6">
              Trusted electrical services for homes, offices, and shops. Fast service, expert work,
              and affordable prices — all handled by certified electrician <strong>Vivek Chaudhary</strong>.
            </p>
            <a
              href="#contact"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-6 py-3 rounded-2xl shadow"
            >
              Get a Free Quote
            </a>
          </div>
          <img
            className="rounded-3xl shadow-2xl"
            src="https://images.unsplash.com/photo-1581091012184-5c8b67f80b2b?q=80&w=1200"
            alt="Electrician at work"
          />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-10">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[{
              title: 'Wiring & Installation',
              icon: '🔌',
              text: 'Complete house/office wiring, new connections, and upgrades.'
            }, {
              title: 'Repair & Maintenance',
              icon: '⚡',
              text: 'Fan, light, switchboard, meter, and appliance repairs.'
            }, {
              title: 'Emergency Service',
              icon: '🛠️',
              text: '24/7 breakdown assistance and fault fixing.'
            }].map((card) => (
              <div key={card.title} className="bg-slate-800 p-6 rounded-3xl shadow-xl">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h4 className="text-2xl font-semibold mb-2">{card.title}</h4>
                <p className="text-slate-300">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-8">Contact</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 p-8 rounded-3xl shadow-xl">
            <p className="mb-4">Have a project or issue? Get in touch:</p>
            <ul className="space-y-2 text-slate-300">
              <li>👤 Name: <strong className="text-white">Vivek Chaudhary</strong></li>
              <li>📍 Location: Bhopal, karod</li>
              <li>📞 Phone: <strong>+917987787846</strong></li>
              <li>📧 Email: <strong>vive2kumar91652@gmail.com</strong></li>
            </ul>
          </div>
          <img
            className="rounded-3xl shadow-2xl"
            src="https://images.unsplash.com/photo-1601084881623-cdf9a8e8ff94?q=80&w=1200"
            alt="Electric tools"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-center py-6">
        © {new Date().getFullYear()} Vivek Chaudhary — Electrician Services
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white font-bold rounded-full shadow-2xl w-16 h-16 flex items-center justify-center text-3xl"
      >
        💬
      </a>
    </div>
  );
}
