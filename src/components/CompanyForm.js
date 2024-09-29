import React, { useState } from 'react';

const CompanyForm = ({ company, onUpdateCompany }) => {
  const [name, setName] = useState(company.name);
  const [budget, setBudget] = useState(company.budget);
  const [reputation, setReputation] = useState(company.reputation);
  const [activeProjects, setActiveProjects] = useState(company.activeProjects);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCompany = {
      ...company,
      name,
      budget: parseFloat(budget),
      reputation: parseInt(reputation, 10),
      activeProjects: parseInt(activeProjects, 10),
    };
    onUpdateCompany(updatedCompany); // Güncellenen şirketi üst bileşene gönderiyoruz
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-100 mb-4">Şirket Bilgilerini Düzenle</h2>
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Şirket Adı</label>
        <input
          type="text"
          className="w-full p-2 rounded bg-gray-700 text-gray-300"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Bütçe</label>
        <input
          type="number"
          className="w-full p-2 rounded bg-gray-700 text-gray-300"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">İtibar Puanı</label>
        <input
          type="number"
          className="w-full p-2 rounded bg-gray-700 text-gray-300"
          value={reputation}
          onChange={(e) => setReputation(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Aktif Projeler</label>
        <input
          type="number"
          className="w-full p-2 rounded bg-gray-700 text-gray-300"
          value={activeProjects}
          onChange={(e) => setActiveProjects(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Güncelle
      </button>
    </form>
  );
};

export default CompanyForm;
