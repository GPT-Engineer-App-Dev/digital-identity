import { Box, Flex, Text, Heading, VStack, Button, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={8} maxW="1200px" mx="auto">
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <VStack spacing={8}>
          <Heading as="h1" size="2xl" fontWeight="bold">John Doe</Heading>
          <Text fontSize="xl" color="gray.500">Frontend Developer | UI/UX Enthusiast</Text>
          <Flex gap={4}>
            <Link href="https://github.com" isExternal><Button leftIcon={<FaGithub />}>GitHub</Button></Link>
            <Link href="https://linkedin.com" isExternal><Button leftIcon={<FaLinkedin />}>LinkedIn</Button></Link>
            <Link href="mailto:example@example.com"><Button leftIcon={<FaEnvelope />}>Contact</Button></Link>
          </Flex>
        </VStack>
      </Flex>
      <Flex id="about" direction="column" mt={10} mb={20}>
        <Heading as="h2" size="xl" mb={5}>About Me</Heading>
        <Text fontSize="lg">
          I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces.
          With a background in graphic design and a keen eye for detail, I strive to bridge the gap between design and technical implementation.
        </Text>
      </Flex>
      <Flex id="portfolio" direction="column" mt={10} mb={20}>
        <Heading as="h2" size="xl" mb={5}>Portfolio</Heading>
        <Text fontSize="lg">
          My portfolio showcases a range of projects that highlight my skills in web development and design.
          Each project is a testament to my ability to create engaging and user-friendly experiences.
        </Text>
      </Flex>
      <Flex id="contact" direction="column" mt={10} mb={20}>
        <Heading as="h2" size="xl" mb={5}>Contact</Heading>
        <Text fontSize="lg">
          Interested in collaborating or learning more about my work? Feel free to reach out via email or connect with me on LinkedIn.
        </Text>
      </Flex>
    </Box>
  );
};

export default Index;