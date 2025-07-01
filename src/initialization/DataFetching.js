import { useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useDataFetching = () => {
  const [data, setData] = useState([]);
  const lastDataRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://stud.hosted.hr.nl/1025660/webservice_prog7.json'
      );
      const jsonData = await response.json();

      if (JSON.stringify(lastDataRef.current) !== JSON.stringify(jsonData)) {
        setData(jsonData);
        lastDataRef.current = jsonData;
        await AsyncStorage.setItem('locations', JSON.stringify(jsonData));
      }
    } catch (error) {
      try {
        const localData = await AsyncStorage.getItem('locations');

        if (localData !== null) {
          const parsed = JSON.parse(localData);
          
          if (JSON.stringify(lastDataRef.current) !== JSON.stringify(parsed)) {
            setData(parsed);
            lastDataRef.current = parsed;
          }
        }
      } catch (storageError) {
        console.error(storageError);
      }
    }
  };

  return data;
};