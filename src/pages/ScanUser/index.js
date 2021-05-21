import React, { useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import { Button } from 'reactstrap';
import QrReader from 'react-qr-reader';

const ScanUser = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  const toggleScan = () => {
    setIsScanning(!isScanning);
  };

  const handleScan = (data) => {
    if (data) {
      console.log(data);
      setScannedData(data);
      setIsScanning(false);
    }
  };
  const handleError = (err) => {
    if (err) {
      console.log('[QR_READER_ERROR]: ' + err);
    }
  };

  return (
    <div>
      <NavigationBar />
      <h1>ScanUser</h1>
      <div style={{ width: '280px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Button onClick={toggleScan} className='btn btn-dark mb-2'>
            {isScanning ? 'Cerrar Escáner' : 'Iniciar Escáner'}
          </Button>
          {isScanning && (
            <QrReader delay={1000} onError={handleError} onScan={handleScan} />
          )}
          {scannedData}
        </div>
      </div>
    </div>
  );
};
export default ScanUser;
