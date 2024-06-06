import { Box, Typography } from '@mui/material';
import Sidebar from '../components/Sidebar.jsx';
import { Charts } from '../components/Charts.jsx';
// import { Piechart } from '../components/Piechart.jsx';
import { Linechart } from "../components/Linechart.jsx";

export const ChartSection = () => {
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
          alignItems: 'center', 
          padding: '20px', 
        }}
      >
       
        <Box width="100%" mb={4}>
          <Typography variant="h6" mb={4} p={2}>
            Comprehensive Year-End Financial Summary: Revenue, COGS, and Gross Profit :-
          </Typography>
          <Linechart />
        </Box>

       
        <Box width="100%" mb={4}>
          <Charts />
        </Box>

      </Box>
    </>
  );
};
