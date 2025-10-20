// // useFetchDataWithRetry.js
// import { useState, useEffect } from "react";
// import axios from "axios";

// const useFetchDataWithRetry = (url) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(url);
//       setData(response.data);
//       setError(null); // Очищуємо помилку, якщо запит успішний
//     } catch (err) {
//       console.error("Error fetching data:", err);
//       setError(err);
//     }
//   };

//   useEffect(() => {
//     fetchData();

//     // Якщо виникла помилка, встановлюємо інтервал для повторного запиту кожні 2 хвилини
//     if (error) {
//       const retryInterval = setInterval(() => {
//         fetchData();
//       }, 10 * 60 * 1000);
//      // 2 хвилини у мілісекундах

//       // Очищаємо інтервал при оновленні компонента або успішному запиті
//       return () => clearInterval(retryInterval);
//     }
//   }, [error, url]); // Перезапускаємо useEffect при зміні URL або помилки

//   return { data, error };
// };

// export default useFetchDataWithRetry;
// useFetchDataWithRetry.js


import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useFetchDataWithRetry = (url, maxRetries = 5) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const retryCount = useRef(0);
  const timeoutId = useRef(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url, { timeout: 10000 });
      setData(response.data);
      setError(null);
      retryCount.current = 0; // скидаємо лічильник при успіху
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err);

      if (retryCount.current < maxRetries) {
        retryCount.current++;
        const delay = Math.min(30000, 2000 * retryCount.current); // максимум 30с
        console.log(`Retrying in ${delay / 1000}s...`);

        timeoutId.current = setTimeout(fetchData, delay);
      }
    }
  };

  useEffect(() => {
    fetchData();

    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, [url]);

  return { data, error };
};

export default useFetchDataWithRetry;
