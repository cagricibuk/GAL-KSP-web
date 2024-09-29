import React, { useState } from 'react';

const ActiveTenderEditForm = ({ tender, onUpdateTender }) => {
  const [name, setName] = useState(tender.name);
  const [difficulty, setDifficulty] = useState(tender.difficulty);
  const [funding, setFunding] = useState(tender.funding);
  const [deadline, setDeadline] = useState(tender.deadline);
  const [candidates, setCandidates] = useState(tender.candidates.join(', '));

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTender = {
      ...tender,
      name,
      difficulty,
      funding: parseFloat(funding),
      deadline,
      candidates: candidates.split(',').map(candidate => candidate.trim()), // Adayları virgülle ayırarak liste yap
    };
    onUpdateTender(updatedTender); // Güncellenen ihaleyi üst bileşene gönder
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-100 mb-4">İhale Bilgilerini Düzenle</h2>
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
        Güncelle
      </button>
    </form>
  );
};

export default ActiveTenderEditForm;
