// ** MUI Imports
import Box from '@mui/material/Box';

// ** Types
import { BlankLayoutProps } from './types';

const BlankLayout = ({ children }: BlankLayoutProps) => {
  return (
    <div>
      <Box
        className="app-content"
        sx={{ minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}
      >
        {children}
      </Box>
    </div>
  );
};

export default BlankLayout;
