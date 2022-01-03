import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import styles from './Charts.module.css';

const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();
      setDailyData(initialDailyData);
    };
    fetchMyAPI();
  }, []);
  return (
    <div className={styles.container}>
    
    </div>
  );
};

export default Charts;
