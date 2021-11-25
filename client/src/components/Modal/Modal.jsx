import * as React from 'react';
import Box from '@mui/material/Box';
import { useEffect } from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { delModal, setModal } from '../redux/ac/ac';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  // const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch()

  const modalState = useSelector((state) => state.modalState)
  const handleOpen = () => dispatch(setModal(true));
  const handleClose = () => dispatch(delModal(false));
 
  useEffect(() => {
    setTimeout(handleClose, 2500)
  }, [modalState])

  

  return (

    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={modalState}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Успешно
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Контент добавлен!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
