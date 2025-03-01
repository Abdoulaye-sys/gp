import Navbar from './components/Navbar'; // ou l'importation du chemin correct

export default function Home() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Navbar /> {/* Ajout de la navbar ici */}

      {/* Hero Section */}
      <section className="bg-blue-700 text-white text-center py-20 mt-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Transportez vos colis de la France vers le Sénégal, rapidement et en toute sécurité</h1>
          <p className="text-xl mb-6">Nous offrons un service fiable pour l'envoi de vos bagages, avec une équipe dédiée pour gérer chaque étape de votre envoi.</p>
          <a href="/vols" className="bg-yellow-500 text-blue-700 px-6 py-3 text-lg font-semibold rounded-full hover:bg-yellow-400 transition duration-300">
            Découvrez nos Vols
          </a>
        </div>
      </section>

      {/* Concept et Services */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Notre Concept</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Fiabilité</h3>
              <p className="text-lg">Nous nous assurons que vos colis arrivent à destination en toute sécurité et dans les meilleurs délais.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Efficacité</h3>
              <p className="text-lg">Notre équipe travaille en étroite collaboration avec les compagnies aériennes pour garantir une livraison rapide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Nos Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">Envoi de Bagages</h3>
              <p className="text-lg">Envoyez vos bagages en toute sécurité et suivez-les en temps réel.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">Suivi en Temps Réel</h3>
              <p className="text-lg">Suivez votre colis de l'envoi à la réception avec notre service de tracking en ligne.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">Assurance</h3>
              <p className="text-lg">Protégez vos colis contre les risques pendant le transport avec notre option d'assurance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Ce que disent nos clients</h2>
          <div className="space-y-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg">"Un service exceptionnel ! Mes bagages sont arrivés à Dakar en toute sécurité et dans les délais." - Jean D.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg">"Le suivi en temps réel m'a permis de suivre chaque étape de l'envoi, une tranquillité d'esprit totale." - Marie L.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-yellow-500 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Prêt à envoyer vos bagages ?</h2>
          <p className="text-lg mb-6">Rejoignez notre plateforme et commencez à envoyer vos colis en toute sécurité.</p>
          <a href="/vols" className="bg-blue-700 text-white px-6 py-3 text-lg font-semibold rounded-full hover:bg-blue-600 transition duration-300">
            Voir les Vols Disponibles
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">© 2025 GP Djoni Djoni. Tous droits réservés.</p>
          <div className="space-x-4 mt-4">
            <a href="/privacy" className="hover:text-gray-300">Politique de confidentialité</a>
            <a href="/terms" className="hover:text-gray-300">Conditions d'utilisation</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
