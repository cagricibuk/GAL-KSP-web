import React from 'react';
import { completedTenders } from '../data/completedTenders';

const CompletedTenders = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {completedTenders.map((tender) => (
        <div
          key={tender.id}
          className="border border-blue-500 rounded-lg shadow-lg p-2 bg-gray-800 bg-opacity-50 backdrop-blur-lg"
        >
          <h3 className="text-sm font-bold text-blue-400 mb-1">{tender.name}</h3>
          <p className="text-xs">
            <span className="font-semibold text-gray-400">Zorluk:</span> {tender.difficulty}
          </p>
          <p className="text-xs">
            <span className="font-semibold text-gray-400">Fon:</span> {tender.funding.toLocaleString()} ₺
          </p>
          <p className="text-xs">
            <span className="font-semibold text-gray-400">Tarih:</span> {tender.deadline}
          </p>
          <p className="text-xs mt-1">
            <span className="font-semibold text-gray-400">Kazanan:</span> {tender.winner}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CompletedTenders;
