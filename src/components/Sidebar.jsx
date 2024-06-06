import styled from "@emotion/styled";
import { Box, Typography, Avatar, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import BarChartIcon from '@mui/icons-material/BarChart';
import TableChartIcon from '@mui/icons-material/TableChart';
import WebIcon from '@mui/icons-material/Web';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const SidebarContainer = styled(Box)`
  background-color: #5D72E9;
  color: white;
  width: 20%;
  min-height: 100vh;
  padding: 16px;
`;

const NavigationStack = styled(Stack)`
  margin-left: 10px;
`;

const UserProfile = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2 px;
`;

const BlurredContainer = styled(Box)`
  background-color: rgba(173, 216, 230, 0.6); /* light blue with opacity */
  backdrop-filter: blur(80px);
  border-radius: 10px;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Sidebar = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const navigationChartHandler = () => {
    navigate("/chartSection");
  };
  const navigationTablesHandler = () => {
    navigate("/table");
  };
  const navigationReportHandler = () => {
    navigate("/reports");
  };
  const navigationForeCaseHandler = () => {
    navigate("/forecast");
  };

  const logoutHandle = () => {
    

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <SidebarContainer>
      <Stack spacing={4}>
        <Typography variant="h4" fontWeight="bold">
          PLSE
        </Typography>
        <NavigationStack spacing={4}>
          <Button
            fullWidth
            onClick={navigationChartHandler}
            variant="contained"
            sx={{ backgroundColor: '#B69EF3', color: 'white' }}
            startIcon={<BarChartIcon/>}
          >
            Charts
          </Button>
          <Button
            fullWidth
            onClick={navigationTablesHandler}
            variant="contained"
            sx={{ backgroundColor: '#B69EF3', color: 'white' }}
            startIcon={<TableChartIcon />}
          >
            Tables
          </Button>
          <Button
            fullWidth
            onClick={navigationReportHandler}
            variant="contained"
            sx={{ backgroundColor: '#B69EF3', color: 'white' }}
            startIcon={<WebIcon />}
          >
            Reports
          </Button>
          <Button
            fullWidth
            onClick={navigationForeCaseHandler}
            variant="contained"
            sx={{ backgroundColor: '#B69EF3', color: 'white' }}
            startIcon={<QueryStatsIcon />}
          >
            Forecast
          </Button>
        </NavigationStack>

        <BlurredContainer sx={{ padding: '16px', borderRadius: '8px' }}>
  <Box display="flex" justifyContent="space-around" alignItems="center" width="100%">
    <Avatar sx={{ padding: '20px', bgcolor: "white", width: 10, height: 10, color: "black" }}>A</Avatar>
    <Typography variant="h6" mb="2px">
      Abhishek Lohia
    </Typography>
  </Box>
</BlurredContainer>

<BlurredContainer sx={{ padding: '20px', height: 'fit-content' }}>
  <UserProfile >
    <Button
      variant="contained"
      sx={{ backgroundColor: 'white', color: 'black' }}
      onClick={logoutHandle}
    >
      Logout
    </Button>
  </UserProfile>
</BlurredContainer>

      </Stack>
    </SidebarContainer>
  );
};

export default Sidebar;
