import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './modals.css';

const Modals = ({ title, icon, conteudo, nomeButton, tamanhoModal }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: tamanhoModal,
    backgroundColor: 'white',
    borderRadius: 3,
    p: 4,
  };

  return (
    <div>
      <div className='botao-modal'>
        <button onClick={handleOpen}>{icon}{nomeButton}</button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ background: 'rgba(0, 0, 0, 0.5)' }}
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className='icones-nome'>
              <label>{icon}{title}</label>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              {conteudo}
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Modals;
