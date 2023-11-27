// AgentInfo.js
import React from 'react';
import { useChatContext } from '../Context/ChatContext';

const AgentInfo = () => {
  const { agentInfo } = useChatContext();

  if (!agentInfo) {
    return <p>Cargando información del agente...</p>;
  }

  return (
    <div className="bg-gradient-to-br m-5 from-fuchsia-500 via-purple-500 to-indigo-500 p-4 md:p-6 lg:p-8 rounded-lg shadow-lg w-full md:w-4/5 lg:w-1/2 xl:w-1/4 mx-auto md:mx-auto lg:mx-auto xl:mx-auto">
      <h2 className="text-white text-lg md:text-xl lg:text-2xl mb-4">Información del Agente</h2>
      <div className="bg-opacity-50 bg-pink-300 p-3 rounded-md mb-2">
        <p className="text-white font-bold text-sm md:text-base lg:text-lg">ID:</p>
        <p className="text-white text-sm md:text-base lg:text-lg md:overflow-x-auto lg:overflow-x-auto">
          {agentInfo.id}
        </p>
      </div>
      <div className="bg-opacity-50 bg-purple-300 p-3 rounded-md">
        <p className="text-white font-bold text-sm md:text-base lg:text-lg">Nombre:</p>
        <p className="text-white text-sm md:text-base lg:text-lg md:overflow-x-auto lg:overflow-x-auto">
          {agentInfo.name}
        </p>
      </div>
      {/* Agrega más detalles según la estructura de datos del agente */}
    </div>
  );
};

export default AgentInfo;
