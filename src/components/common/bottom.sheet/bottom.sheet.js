import React, { useState } from 'react';
import { Button, Collapse, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const RightToLeftCollapse = styled(Collapse)(({ theme }) => ({
  '& .MuiCollapse-wrapper': {
    transformOrigin: 'right',
  },
  '& .MuiCollapse-wrapperInner': {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const VerticalTextButton = styled(Button)(({ theme }) => ({
  writingMode: 'vertical-rl', // Rotates the text to vertical
  textOrientation: 'mixed',
  transform: 'rotate(180deg)', // Flips the text to read top-to-bottom
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '150px', // Adjust height as needed
  minWidth: '50px', // Adjust width as needed
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main,
  borderRadius: 0,
  border: `1px solid ${theme.palette.divider}`,
  "&:hover": {
    backgroundColor: '#d7d7d7',
    color: theme.palette.primary.main,
  }
}));

const BottomSheet = (props) => {
  const { title, isBottomSheetOpen, classNames } = props;
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {!open && <VerticalTextButton onClick={handleToggle}>
        <div>
          {title}
          <LazyLoadImage
            onClick={handleToggle}
            effect="blur"
            className='d-flex justify-content-center align-items-center pt-2'
            height='22px'
            width='22px'
            alt="arrow-icon2"
            src={`${process.env.PUBLIC_URL}/assets/images/chevron-right-solid.svg`}
          />
        </div>
      </VerticalTextButton>}
      <RightToLeftCollapse in={open} timeout="auto" orientation="horizontal">
        <Box
          sx={{
            width: '300px',
            // height: '200px',
            bgcolor: 'background.paper',
            color: '#000',
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          <div>
            {open && <div className='cursor-pointer text-right position-absolute pr-3' style={{ right: 0 }}>
              <LazyLoadImage
                onClick={handleToggle}
                effect="blur"
                className='d-flex justify-content-center align-items-center'
                height='22px'
                width='22px'
                alt="arrow-icon2"
                src={`${process.env.PUBLIC_URL}/assets/images/chevron-right-solid.svg`}
              />
            </div>}
            {props.children}
          </div>
        </Box>
      </RightToLeftCollapse>
    </div>
  );
};

export default BottomSheet;
