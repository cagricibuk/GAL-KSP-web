import React, { useState } from 'react';
import ActiveTenderForm from './ActiveTenderForm';
import ActiveTenderEditForm from './ActiveTenderEditForm';
import { tenders as initialTenders } from '../data/tenders'; // Mevcut ihaleler (başlangıç durumu)

const AdminPanel = () => {
  const [activeTenders, setActiveTenders] = useState(initialTenders); // Mevcut aktif ihaleler
  const [selectedTender, setSelectedTender] = useState(null); // Düzenlenecek ihale

  const handleAddTender = (newTender) => {
    setActiveTenders([...activeTenders, newTender]); // Yeni ihale ekle
  };

  const handleUpdateTender = (updatedTender) => {
    const updatedList = activeTenders.map((tender) =>
      tender.id === updatedTender.id ? updatedTender : tender
    );
    setActiveTenders(updatedList); // Güncellenen ihaleyi listeye ekle
    setSelectedTender(null); // Düzenleme tamamlandıktan sonra formu gizle
  };

  const handleDeleteTender = (tenderId) => {
    const updatedList = activeTenders.filter((tender) => tender.id !== tenderId);
    setActiveTenders(updatedList); // İhaleyi listeden çıkar
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Admin Paneli</h1>

      {/* Yeni aktif ihale ekleme formu */}
      <ActiveTenderForm onAddTender={handleAddTender} />

      {/* Eklenen aktif ihaleleri listele */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Eklenen Aktif İhaleler</h2>
        <ul className="space-y-4">
          {activeTenders.map((tender) => (
            <li
              key={tender.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <div className="flex justify-between items-center">
                <div onClick={() => setSelectedTender(tender)} className="cursor-pointer">
                  <h3 className="text-xl font-bold text-blue-400">{tender.name}</h3>
                  <p className="text-gray-300">Zorluk: {tender.difficulty}</p>
                  <p className="text-gray-300">Fon Miktarı: {tender.funding.toLocaleString()} ₺</p>
                  <p className="text-gray-300">Teslim Tarihi: {tender.deadline}</p>
                  <p className="text-gray-300">Aday Şirketler: {tender.candidates.join(', ')}</p>
                </div>

                {/* Silme butonu */}
                <button
                  onClick={() => handleDeleteTender(tender.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                  Sil
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* İhale düzenleme formu */}
        {selectedTender && (
          <ActiveTenderEditForm
            tender={selectedTender}
            onUpdateTender={handleUpdateTender}
          />
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
