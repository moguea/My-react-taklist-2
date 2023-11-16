import React from 'react';
import { Box, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="header">
      <div className="container">
        <Menu />
        <h1 className="title" style={{ fontSize: '3.5rem', background: '#3498db', color: 'black', padding: '0px' }}>
          TASKLIST APP
        </h1>
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