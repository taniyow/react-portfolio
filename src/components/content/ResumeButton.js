import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.secondary.main,
    '&:hover': {
      transform: 'scale(1.1)',
    },
    '&:focus': {
      transform: 'scale(1.1)',
    },
    transition: 'transform 0.15s cubic-bezier(0.2, 0, 0.13, 2)',
    transform: 'scale(1)',
    overflow: 'visible !important',
  },
}));

export const ResumeIcon = () => {
  const classes = useStyles();

  return (
    <svg 
      xmlns="https://img.icons8.com/material/24/null/user-female-circle.png"
      viewBox="0 0 24 24"
      width='24'
      height='24'
      className={classes.svgHover}
    >
      <path fillRule='evenodd' d="M4 4V20C4 21.1046 4.89543 22 6 22L18 22C19.1046 22 20 21.1046 20 20V8.34162C20 7.8034 19.7831 7.28789 19.3982 6.91161L14.9579 2.56999C14.5842 2.20459 14.0824 2 13.5597 2L6 2C4.89543 2 4 2.89543 4 4Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule='evenodd' d="M14 2V6C14 7.10457 14.8954 8 16 8H20" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );
};

export const HeartIcon = () => {
  const classes = useStyles();

  return (
    <svg
      xmlns='https://img.icons8.com/material/24/null/user-female-circle.png'
      viewBox='0 0 16 16'
      width='16'
      height='16'
      className={classes.svgHover}
    >
      <path fillRule='evenodd' d='M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z'></path>
    </svg>
  );
};
