import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 bg-opacity-75 backdrop-blur-lg p-4">
      <div className="container mx-auto px-4 flex justify-between">
        <div className="text-white font-semibold">Space Operations</div>
        <div className="flex space-x-4">
          <a href="/" className="text-gray-300 hover:text-blue-400">Anasayfa</a>
          <a href="/tenders" className="text-gray-300 hover:text-blue-400">Açık İhaleler</a>
          <a href="/companies" className="text-gray-300 hover:text-blue-400">Şirketler</a>
          <a href="/projects" className="text-gray-300 hover:text-blue-400">Geçmiş Projeler</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
