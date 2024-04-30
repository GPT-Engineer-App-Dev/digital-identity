import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Flex, Link, Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="blue.500" color="white">
        <Box>
          <Link as={RouterLink} to="/" px={2}>Home</Link>
          <Link as={RouterLink} to="/about" px={2}>About</Link>
          <Link as={RouterLink} to="/portfolio" px={2}>Portfolio</Link>
          <Link as={RouterLink} to="/contact" px={2}>Contact</Link>
        </Box>
      </Flex>
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;