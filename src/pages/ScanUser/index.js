import React, { useContext, useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import QrReader from 'react-qr-reader';
import { Context as UserContext } from '../../context/UserDataContext';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ScanUser = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [uid, setUid] = React.useState('');
  const [pts, setPts] = React.useState(0);
  const [nestedError, setNestedError] = React.useState('');

  const {
    queryByID,
    updatePoints,
    state: { points, email },
  } = useContext(UserContext);

  const toggleNested = () => {
    setNestedModal(!nestedModal);
  };

  const toggleScan = () => {
    setIsScanning(!isScanning);
  };

  const handleScan = (data) => {
    if (data) {
      console.log(data);
      setUid(data);
      queryByID(data);
      setOpen(true);
      setIsScanning(false);
    }
  };

  const handleError = (err) => {
    if (err) {
      console.log('[QR_READER_ERROR]: ' + err);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    let change = parseInt(points) + parseInt(pts);
    if (change < 0) {
      setNestedError(
        'El usuario no cuenta con los suficientes puntos para descontar.'
      );
      toggleNested();
    } else {
      updatePoints({ change, uid });
      setOpen(false);
    }
  };

  const handleChange = (event) => {
    let val = event.target.value;
    setPts(val);
  };

  return (
    <div>
      <NavigationBar />
      <div
        style={{
          width: '100%',
          marginTop: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '280px', marginTop: '10px' }}>
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
              <QrReader
                delay={1000}
                onError={handleError}
                onScan={handleScan}
              />
            )}
            <Modal isOpen={open} toggle={handleClose} centered={true}>
              <ModalHeader>Agregar/Quitar Puntos del Usuario</ModalHeader>
              <ModalBody>
                Usuario: {email} Puntos: {points}
                <input
                  type={'number'}
                  placeholder={'Puntos'}
                  onChange={handleChange}
                />
                <Modal isOpen={nestedModal} toggle={toggleNested}>
                  <ModalHeader>ERROR</ModalHeader>
                  <ModalBody>{nestedError}</ModalBody>
                  <ModalFooter>
                    <Button color='primary' onClick={toggleNested}>
                      OK
                    </Button>
                  </ModalFooter>
                </Modal>
              </ModalBody>
              <ModalFooter>
                <Button color='secondary' onClick={handleClose}>
                  Cancelar
                </Button>{' '}
                <Button color='primary' onClick={handleSubmit}>
                  Agregar/Quitar
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScanUser;
