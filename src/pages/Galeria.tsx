import { Box, Heading, SimpleGrid, Image } from '@chakra-ui/react';

export default function Galeria() {
  return (
    <Box>
      <Heading>Galeria</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={4}>
        <Image
          src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740"
          alt="Daniel jogando"
          borderRadius="md"
        />
        <Image
          src="https://images.unsplash.com/photo-1574623454034-3a2f5b3a9081"
          alt="Chute a gol"
          borderRadius="md"
        />
        <Image
          src="https://images.unsplash.com/photo-1606857191391-b4f6ff44c9ba"
          alt="Comemoração"
          borderRadius="md"
        />
      </SimpleGrid>
    </Box>
  );
}