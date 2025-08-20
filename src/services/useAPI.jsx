import { useEffect, useState } from 'react';

const useAPI = (url) => {
  const [result, setResult] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isCancelled = false;
    
    fetch(url)
      .then(async response => {
        if (!response.ok) {
          throw new Error(`Ошибка сервера: ${response.status}`);
        }
        
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          const text = await response.text();
          console.log('Received non-JSON response:', text.substring(0, 200));
          throw new Error('Получен не-JSON ответ от сервера');
        }
        
        return await response.json();
      })
      .then(data => {
        if (!isCancelled) {
          setResult(data);
          setLoading(false);
        }
      })
      .catch(err => {
        console.error('API Error:', err);
        if (!isCancelled) {
          setError(`Возникла проблема с загрузкой данных: ${err.message}`);
          setLoading(false);
        }
      });
      
    return () => {
      isCancelled = true;
    };
  }, [url]);

  return { result, isLoading, error };
};

export default useAPI;