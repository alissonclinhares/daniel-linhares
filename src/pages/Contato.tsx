import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function Contato() {
  return (
    <Box>
      <Heading>Contato</Heading>
      <Text mt={4} mb={4}>
        Para entrar em contato com o responsável pelo Daniel, use o botão abaixo:
      </Text>
      <Button
        as="a"
        href="https://wa.me/5599999999999"
        target="_blank"
        colorScheme="whatsapp"
      >
        Fale via WhatsApp
      </Button>
    </Box>
  );
}
