import React, { useState } from 'react';

const TenderForm = ({ onAddTender }) => {
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [funding, setFunding] = useState('');
  const [deadline, setDeadline] = useState('');
  const [candidates, setCandidates] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yeni ihale verisini oluştur
    const newTender = {
      id: Date.now(), // Benzersiz bir ID üretmek için timestamp kullanıyoruz
      name,
      difficulty,
      funding: parseFloat(funding), // Fon miktarını sayıya dönüştürüyoruz
      deadline,
      candidates: candidates.split(',').map(candidate => candidate.trim()) // Adayları virgülle ayırıp listeye çeviriyoruz
    };
    onAddTender(newTender); // Yeni ihaleyi eklemek için parent component'e gönderiyoruz
    // Formu temizle
    setName('');
    setDifficulty('');
    setFunding('');
    setDeadline('');
    setCandidates('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-100 mb-4">Yeni İhale Ekle</h2>
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">İhale Adı</label>
        <input
          type="text"
          className="w-full p-2 rounded bg-gray-700 text-gray-300"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Zorluk Seviyesi</label>
        <input
          type="text"
          className="w-full p-2 rounded bg-gray-700 text-gray-300"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Fon Miktarı</label>
        <input
          type="number"
          className="w-full p-2 rounded bg-gray-700 text-gray-300"
          value={funding}
          onChange={(e) => setFunding(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Teslim Tarihi</label>
        <input
          type="date"
          className="w-full p-2 rounded bg-gray-700 text-gray-300"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Aday Şirketler (Virgülle ayırarak giriniz)</label>
        <input
          type="text"
          className="w-full p-2 rounded bg-gray-700 text-gray-300"
          value={candidates}
          onChange={(e) => setCandidates(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        İhale Ekle
      </button>
    </form>
  );
};

export default TenderForm;
