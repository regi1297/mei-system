// src/pages/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      {/* Adicione seus gráficos e indicadores aqui */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold">Indicador 1</h2>
          <p className="mt-2 text-gray-600">Descrição do indicador 1</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold">Indicador 2</h2>
          <p className="mt-2 text-gray-600">Descrição do indicador 2</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold">Indicador 3</h2>
          <p className="mt-2 text-gray-600">Descrição do indicador 3</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
