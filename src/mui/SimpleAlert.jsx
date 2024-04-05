import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function SimpleAlert() {
  return (
    <>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Here is a gentle confirmation that your action was successful.
      </Alert>
      <Alert variant="filled" severity="success">
        This is a filled success Alert.
      </Alert>
      <Alert variant="filled" severity="info">
        This is a filled info Alert.
      </Alert>
      <Alert variant="filled" severity="warning">
        This is a filled warning Alert.
      </Alert>
      <Alert variant="filled" severity="error">
        This is a filled error Alert.
      </Alert>
    </>
  );
}