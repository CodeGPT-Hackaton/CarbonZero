import { CodeGPTPlus } from 'judini';

const API_URL = 'https://api.codegpt.co/v1/agent/';
const API_KEY = 'c067e410-7f2e-4524-a2a9-fc5213a1714b'// Utilizamos el valor proporcionado
const AGENT_ID = '09af2cfb-3468-4762-ba9b-73059164e11c'; // Utilizamos el valor proporcionado

export const interactWithAgent = async (userInput) => {
    try {
      const codegpt = new CodeGPTPlus(API_KEY);
  
      // Define the message
      const messages = [{ role: 'user', content: userInput }];
  
      // Send the message and process the response
      const response = await codegpt.chatCompletion({
        messages: messages,
        agentId: AGENT_ID
      });
  
      // Verificar que response.choices exista y tenga al menos un elemento
      if (response.choices && response.choices.length > 0) {
        // Extraer el contenido después de los dos puntos
        const agentText = response.choices[0].message.content.split(': ')[1];
        return agentText;
      } else {
        console.warn('La respuesta del agente no contiene contenido válido:', response);
        return 'No hay respuesta válida del agente.';
      }
    } catch (error) {
      console.error('Error interacting with the agent:', error.message);
      throw error;
    }
  };

export const getAgentInfo = async () => {
  try {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        authorization: `Bearer ${API_KEY}`
      }
    };
    const response = await fetch(`${API_URL}${AGENT_ID}`, options);
    const agentInfo = await response.json();
    console.log(agentInfo)
    return agentInfo;
  } catch (error) {
    console.error('Error getting agent information:', error.message);
    throw error;
  }
};


