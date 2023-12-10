import { CssBaseline, Stack, Typography } from '@mui/material';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Stack
        minHeight="100vh"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4" fontWeight="bold">
          Maintenance
        </Typography>
        <Typography>
          Sorry, this is website currently under maintenance
        </Typography>
      </Stack>
    </>
  );
}
