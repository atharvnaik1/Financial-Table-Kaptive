import { Box } from '@mui/material';
import Sidebar from '../components/Sidebar';
import { CashflowTable } from '../components/CashflowTable';
import { Bars } from '../components/Bars';

export const Table = () => {
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
          padding: '20px'
        }}
      >
        <Bars/>
        <CashflowTable />
      </Box>
    </>
  );
};
