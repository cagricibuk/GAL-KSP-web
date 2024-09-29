import React, { useState } from 'react';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';
import Navbar from './components/Navbar';
import CompanyTable from './components/CompanyTable';
import TenderList from './components/TenderList';
import CompletedTenders from './components/CompletedTenders';

function App() {
  const [isAdmin, setIsAdmin] = useState(false); // Admin girişi durumu

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 mt-8">

        {/* Eğer admin girişi yapılmamışsa ana sayfayı göster, yapılmışsa admin paneli */}
        {!isAdmin ? (
          <div>
            {/* Flexbox ile yan yana dizme */}
            <div className="flex flex-col lg:flex-row gap-4">

              {/* İhaleler Listesi */}
              <div className="flex-1 border border-white rounded-lg shadow-lg p-4">
                <h2 className="text-2xl font-semibold text-gray-300 mb-4">Aktif İhaleler</h2>
                <TenderList />
              </div>

              {/* Şirketler Tablosu */}
              <div className="flex-1 border border-white rounded-lg shadow-lg p-4">
                <h2 className="text-2xl font-semibold text-gray-300 mb-4">Şirketler Listesi</h2>
                <CompanyTable />
              </div>
            </div>
          </div>
        ) : (
          // Eğer admin giriş yapmışsa admin panelini göster
          <AdminPanel />
        )}

        {/* Admin girişi yapılmadıysa giriş ekranı gösterilir */}
        {!isAdmin && <AdminLogin onLogin={setIsAdmin} />}

      </main>
    </div>
  );
}

export default App;
