import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ChakraProvider,
  CSSReset,
  ColorModeScript,
  ColorModeProvider,
} from '@chakra-ui/react';
import { theme } from './theme'; // Asegúrate de tener un archivo theme.js con tu configuración de tema
import Header from './Header';
import Tareas from './Tareas';
import Home from './Home';
import SobreNosotros from './SobreNosotros';
import Menu from './Menu';
import useTaskManager from './useTaskManager'; // Importa useTaskManager

const App = () => {
  const { tasks, addTask, deleteTask, updateTask } = useTaskManager(); // Inicializa el hook useTaskManager

  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <CSSReset />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Router>
          <div className="app-container">
            <Header />
            <Menu />
            <Routes>
              <Route
                path="/tareas"
                element={<Tareas tasks={tasks} addTask={addTask} deleteTask={deleteTask} updateTask={updateTask} />}
              />
              <Route path="/sobre-nosotros" element={<SobreNosotros />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default App;










