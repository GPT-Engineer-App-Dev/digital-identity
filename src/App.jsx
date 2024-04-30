import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, Link, Button } from '@chakra-ui/react';
import Index from "./pages/Index.jsx";

const NavBar = () => (
  <Box bg="gray.900" px={4}>
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <Box>Logo</Box>
      <Flex alignItems={'center'}>
        <Link href="#about" px={2} color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>About</Link>
        <Link href="#portfolio" px={2} color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>Portfolio</Link>
        <Link href="#contact" px={2} color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>Contact</Link>
      </Flex>
    </Flex>
  </Box>
);

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;