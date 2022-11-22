import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
      const Theme = createTheme({
            palette: {
                  primary: {
                        main: '#0A5174',
                  },
            },
      });
      return (
            <>
                  <ThemeProvider theme={Theme}>

                        <Navbar />
                        {children}
                        <Footer />
                  </ThemeProvider>
            </>
      );
};

export default Layout;