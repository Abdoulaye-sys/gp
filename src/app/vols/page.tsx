import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const VolsPage = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Vols à Venir</h1>
        <p className="mt-4">Voici les vols disponibles pour l'envoi de vos colis.</p>
        {/* Liste des vols */}
      </main>
      <Footer />
    </div>
  );
};

export default VolsPage;
