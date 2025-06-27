import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      await AsyncStorage.setItem('locations', JSON.stringify(jsonData));
    } catch (error) {
      try {
        const localData = await AsyncStorage.getItem('locations');
        if (localData !== null) {
          setData(JSON.parse(localData));
        }
      } catch (storageError) {
        console.error(storageError);
      }
    }
  };

  return data;
};