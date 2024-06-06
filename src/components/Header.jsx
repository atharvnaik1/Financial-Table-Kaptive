import { Container,Stack, Button } from '@mui/material';

export const Header = () => {
  return (
    <Container sx={{ backgroundColor: 'white', boxShadow: 2, padding: 2, marginBottom: 2 }}>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">Summary</Button>
        <Button variant="contained">Balance Sheet</Button>
        <Button variant="contained">Income Statement</Button>
        <Button variant="contained">Cashflow</Button>
      </Stack>
    </Container>
  );
};

