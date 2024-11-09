import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with backend URL if different

export const fetchTestMessage = async () => {
  try {
    const response = await axios.get(`${API_URL}/test`);
    return response.data;
  } catch (error) {
    console.error('Error fetching test message:', error);
    throw error;
  }
};
import React, { useEffect, useState } from 'react';
import { fetchTestMessage } from './services/apiService';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      const data = await fetchTestMessage();
      setMessage(data.message);
    };
    fetchMessage();
  }, []);

  return (
    <div className="App">
      <h1>Real Wealth App</h1>
      <p>Message from server: {message}</p>
    </div>
  );
}

export default App;

