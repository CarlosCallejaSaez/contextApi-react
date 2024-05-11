import React from 'react';
import { useMyContext } from './MyContext';

const MyConsumer = () => {
  const { data, setData } = useMyContext();

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card">
        <div className="card-body text-center">
          <p>{data}</p>
          <button className="btn btn-primary" onClick={() => setData('Updated data from consumer')}>Update Data</button>
        </div>
      </div>
    </div>
  );
};

export default MyConsumer;
