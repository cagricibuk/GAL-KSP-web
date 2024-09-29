import React, { useState } from 'react';
import { companies } from '../data/companies';
import { completedTenders } from '../data/completedTenders';

const CompanyTable = () => {
  const [sortField, setSortField] = useState('reputation');
  const [sortOrder, setSortOrder] = useState('desc');

  const handleSort = (field) => {
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(order);
  };

  const sortedCompanies = [...companies].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1;
    }
    return a[sortField] < b[sortField] ? 1 : -1;
  });

  return (
    <div className="border border-white rounded-lg shadow-lg p-4 flex flex-col">
      {/* Şirketler Tablosu */}
      <table className="min-w-full bg-gray-800 bg-opacity-50 backdrop-blur-lg border border-gray-700">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b bg-gray-900 text-left">
              <button
                className="text-gray-300 hover:text-blue-400 font-bold hover:underline transition-colors duration-200"
                onClick={() => handleSort('name')}
              >
                Şirket
              </button>
            </th>
            <th className="py-2 px-4 border-b bg-gray-900 text-left">
              <button
                className="text-gray-300 hover:text-blue-400 font-bold hover:underline transition-colors duration-200"
                onClick={() => handleSort('budget')}
              >
                Bütçe
              </button>
            </th>
            <th className="py-2 px-4 border-b bg-gray-900 text-left">
              <button
                className="text-gray-300 hover:text-blue-400 font-bold hover:underline transition-colors duration-200"
                onClick={() => handleSort('reputation')}
              >
                İtibar Puanı
              </button>
            </th>
            <th className="py-2 px-4 border-b bg-gray-900 text-left">
              <button
                className="text-gray-300 hover:text-blue-400 font-bold hover:underline transition-colors duration-200"
                onClick={() => handleSort('activeProjects')}
              >
                Aktif Projeler
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedCompanies.map((company, index) => (
            <tr key={company.id} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'}>
              <td className="py-2 px-4 border-b text-gray-100">{company.name}</td>
              <td className="py-2 px-4 border-b text-gray-100">{company.budget.toLocaleString()} ₺</td>
              <td className="py-2 px-4 border-b text-gray-100">{company.reputation}</td>
              <td className="py-2 px-4 border-b text-gray-100">{company.activeProjects}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Sonuçlanan İhaleler */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-300 mb-4">Sonuçlanan İhaleler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {completedTenders.map((tender) => (
            <div
              key={tender.id}
              className="border border-blue-500 rounded-lg shadow-lg p-4 bg-gray-800 bg-opacity-50 backdrop-blur-lg"
            >
              <h3 className="text-lg font-bold text-blue-400 mb-2">{tender.name}</h3>
              <p className="text-gray-300">
                <span className="font-semibold text-gray-400">Zorluk Seviyesi:</span> {tender.difficulty}
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-gray-400">Fon Miktarı:</span> {tender.funding.toLocaleString()} ₺
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-gray-400">Teslim Tarihi:</span> {tender.deadline}
              </p>
              <p className="text-gray-300 mt-2">
                <span className="font-semibold text-gray-400">Kazanan Şirket:</span> {tender.winner}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyTable;
