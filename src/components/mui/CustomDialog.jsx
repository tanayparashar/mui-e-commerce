import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
export default function CustomDialog({title,  isDraggable, maxWidth, isFullScreenButtonVisible, children }) {
  const [open, setOpen] = React.useState(false);
  const [isFullScreen, setIsFullScreen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFullscreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open max-width dialog
      </Button>
      <Box>
        <Dialog
          fullScreen={isFullScreen}
          fullWidth={true}
          maxWidth={maxWidth} // xs, sm, md, lg, xl
          open={open}
          onClose={handleClose}
          PaperComponent={isDraggable ? PaperComponent : undefined} // Conditionally apply PaperComponent
          aria-labelledby="draggable-dialog-title"
        >
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 3 }}>

            <DialogTitle style={{ cursor: 'move', padding: '0' }} id="draggable-dialog-title">{title}</DialogTitle>

            <Box>
              {isFullScreenButtonVisible && (
                <IconButton
                  aria-label="close"
                  onClick={handleFullscreen}
                  sx={{

                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <FullscreenIcon />
                </IconButton>
              )}
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{

                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>

          <DialogContent>
            {children}
          </DialogContent>
        </Dialog>
      </Box>
    </React.Fragment>
  );
}
