import React from 'react';
import { Box, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Asegúrate de tener estos íconos instalados

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="header">
      <div className="container">
        <h1 className="title">Todo App</h1>
        <Box ml="auto">
          <IconButton
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            variant="ghost"
            aria-label="Toggle Dark Mode"
          />
        </Box>
      </div>
    </div>
  );
};

export default Header;



