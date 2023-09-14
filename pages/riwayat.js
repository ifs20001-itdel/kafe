import React, { useEffect, useState } from 'react';

const Riwayat = () => {
  const [riwayatData, setRiwayatData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the riwayat data from your API endpoint
    fetch('http://localhost:3000/api/riwayats')
      .then((response) => response.json())
      .then((data) => {
        setRiwayatData(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching riwayat data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Riwayat Pesanan</h1>
      <ul>
        {riwayatData.map((riwayat) => (
          <li key={riwayat._id}>
            <h2>ID: {riwayat._id}</h2>
            <p>Total: Rp.{riwayat.total}</p>
            <p>Lokasi: {riwayat.lokasi}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Riwayat;
