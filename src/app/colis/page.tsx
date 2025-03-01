import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ColisPage = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Mes Colis</h1>
        <p className="mt-4">Voici la liste de vos colis envoyés.</p>
        {/* Liste des colis */}
      </main>
      <Footer />
    </div>
  );
};

export default ColisPage;
