import React, { useState } from 'react';
import Cropper from 'react-cropper';
import DragAndDrop from './DragAndDrop';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, ThemeProvider, Typography} from "@mui/material";

function CropperDialog({
    okLabel = 'Edit',
    cancelLabel = 'Cancel',
    show,
    dismiss,
    cancel,
    onCropped,
    onSelected,
    src,
    aspectRatio,
}) {
    const [cropper, setCropper] = useState();
    const cropImage = () => {
        if (typeof cropper.getCroppedCanvas() === 'undefined' || !cropper.getCroppedCanvas()) {
            return;
        }
        onCropped(cropper.getCroppedCanvas().toDataURL());
    };

    const handleDrop = (files) => {
        const reader = new FileReader();
        reader.onload = () => {
            onSelected(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };

    return (
        // <ThemeProvider theme={theme}>
            <Dialog fullWidth maxWidth="xs" onClose={dismiss} open={show}>
                <DialogTitle>
                    <Typography color={'secondary'} variant={'h3'}>
                        Upload Photo
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <div style={{ width: '100%' }}>
                        {!src ? (
                            <DragAndDrop handleDrop={handleDrop}>
                                <div style={{ height: 400, width: 400 }}/>
                            </DragAndDrop>
                        ) : (
                            <Cropper
                                aspectRatio={aspectRatio ? aspectRatio : ''}
                                guides={true}
                                preview=".img-preview"
                                ref={(c) => {
                                    setCropper(c);
                                }}
                                src={src}
                                style={{ height: 400, width: '100%' }}
                            />
                        )}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={cancel}>
                        {cancelLabel}
                    </Button>
                    {src ? (
                        <Button color="secondary" onClick={() => cropImage()} variant="contained">
                            {okLabel}
                        </Button>
                    ) : (
                        <Button color="secondary" disabled variant="contained">
                            {okLabel}
                        </Button>
                    )}
                </DialogActions>
            </Dialog>
        // </ThemeProvider>
    );
}

export default CropperDialog;
