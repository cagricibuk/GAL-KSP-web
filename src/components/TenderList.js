import React from 'react';
import { tenders } from '../data/tenders';

const TenderList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tenders.map((tender) => (
        <div
          key={tender.id}
          className="border border-blue-500 rounded-lg shadow-lg p-2 bg-gray-800 bg-opacity-50 backdrop-blur-lg"
        >
          <h3 className="text-sm font-bold text-blue-400 mb-1">{tender.name}</h3>
          <p className="text-xs">
            <span className="font-semibold text-gray-400">Zorluk:</span> <span className="text-white">{tender.difficulty}</span>
          </p>
          <p className="text-xs">
            <span className="font-semibold text-gray-400">Fon:</span> <span className="text-white">{tender.funding.toLocaleString()} ₺</span>
          </p>
          <p className="text-xs">
            <span className="font-semibold text-gray-400">Tarih:</span><span className="text-white"> {tender.deadline}</span>
          </p>
          <div className="mt-1">
            <span className="font-semibold text-gray-400">Adaylar:</span>
            <ul className="list-disc list-inside text-gray-300 text-xs mt-1">
              {tender.candidates.map((candidate, index) => (
                <li key={index}>{candidate}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TenderList;
