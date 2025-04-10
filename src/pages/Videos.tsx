import { Box, Heading, AspectRatio } from '@chakra-ui/react';

export default function Videos() {
  return (
    <Box>
      <Heading>Vídeos</Heading>
      <AspectRatio ratio={16 / 9} maxW="560px" mx="auto" mt={6}>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Melhores momentos"
          allowFullScreen
        />
      </AspectRatio>
    </Box>
  );
}
