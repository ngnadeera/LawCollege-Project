import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const SliderButton = () => {
    const buttonStyle = {
      color: '#CBB58B',
      borderColor: '#CBB58B',
      fontFamily: 'Lora',
      '&:hover': {
        borderColor: '#CBB58B',
      },
      '&:active': {
        borderColor: '#CBB58B',
      },
    };

  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" sx={buttonStyle}>
        REGISTER NOW
      </Button>
      <Button variant="outlined" sx={buttonStyle}>
        LEARN MORE
      </Button>
    </Stack>
  );
};

export default SliderButton;
