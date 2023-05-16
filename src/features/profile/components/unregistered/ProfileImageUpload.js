import React, { useState } from 'react';
import { storage } from '../../../../utils/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

// MUI
import { Button, Box, Grid, Paper, Typography } from '@mui/material';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploaded(false);
  };

  // Preview the selected image
  if (selectedFile) {
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  }

  const handleUpload = (event) => {
    event.preventDefault();

    if (!selectedFile) {
      return;
    }

    const storageRef = ref(storage, `/profileImages/${selectedFile.name}`);
    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, selectedFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // update progress
        setUploadProgress(percent);
      },
      (err) => {
        setUploadError(err);
        console.log(err);
      },
      () => {
        setUploaded(true);
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  };

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
      <Grid item xs={12}>
        <Paper
          variant='outlined'
          sx={{
            height: '10rem',
            width: '20rem',
            backgroundColor: '#eee',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {previewUrl && (
            <img
              src={previewUrl}
              alt='Preview'
              style={{
                width: '10rem',
                height: '10rem',
                borderRadius: '.25rem',
              }}
            />
          )}
        </Paper>
        <Box height={'2rem'} sx={{ mt: '1rem' }}>
          <Typography variant='body2'>
            {!selectedFile ? null : selectedFile.name}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ minWidth: '100%', my: '1rem' }}>
        <Button
          variant='outlined'
          component='label'
          fullWidth
          sx={{ textTransform: 'none' }}
        >
          Choose File
          <input type='file' onChange={handleFileChange} hidden />
        </Button>
      </Grid>

      <Grid item xs={12} sx={{ minWidth: '100%', mb: '1rem' }}>
        <Button
          variant='outlined'
          fullWidth
          onClick={handleUpload}
          disabled={!selectedFile || uploaded}
          sx={{ textTransform: 'none' }}
        >
          Upload
        </Button>
      </Grid>
      {uploadError && <p>Error uploading file: {uploadError}</p>}
    </Grid>
  );
};

export default FileUpload;
