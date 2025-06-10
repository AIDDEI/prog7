import { useState, useEffect } from 'react';

export const useDataFetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://stud.hosted.hr.nl/1025660/webservice_prog7.json'
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  return data;
};