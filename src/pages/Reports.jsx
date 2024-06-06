import React from 'react';
import { Box } from '@mui/material';
import Sidebar from '../components/Sidebar';
import { Report } from '../components/Visualizatn';
import { ReportBar } from '../components/Reports';

export const Reports = () => {
  return (
    <>
      <Sidebar />
      <Box
        sx={{
          minHeight: '550px',
          width: '70%',
          marginLeft: '30%',
          marginTop: '-690px',
          flexDirection: 'column',
          display: 'flex',
        }}
      >
        <ReportBar />

        <Box sx={{ paddingTop: '10px' }}>
          <Report />
        </Box>
      </Box>
    </>
  );
};
