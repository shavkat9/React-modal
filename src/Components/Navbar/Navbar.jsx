import * as React from 'react';
import './Navbar.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius: 3,
    bgcolor: 'background.paper',
    border: '1px solid #fff',
    boxShadow: 24,
    backgroundColor: 'purple',
    textAlign: 'center',
    p: 4,
};
const style1 = {
    textAlign: 'center',
    paddingTop: 34,
}

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Box sx={style1}>
        <Button onClick={handleOpen}>Open modal</Button>
        </Box>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Welcome to our amazing modal tutorial
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}