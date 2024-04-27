import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" p={4} bg="gray.100" textAlign="center">
      <Text fontSize="sm">© 2024 My Company. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;