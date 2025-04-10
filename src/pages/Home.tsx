import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Icon,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MdOutlineSpeed, MdPerson, MdHeight, MdAccessibility } from 'react-icons/md';

export default function Home() {
  return (
    <Box bg="gray.900" color="gray.100" minH="100vh" py={16}>
      <Container maxW="6xl">
        {/* Hero */}
        <Flex
          direction={['column', 'row']}
          align="center"
          justify="space-between"
          gap={12}
          mb={24}
        >
          <Box flex="1">
            <Heading
              as="h1"
              size="2xl"
              mb={4}
              fontWeight="bold"
              lineHeight="shorter"
              color="white"
            >
              Daniel Oliveira
            </Heading>
            <Text fontSize="lg" color="gray.300" mb={6}>
              Atacante de velocidade, talento e visão de jogo. Jogador das categorias de base do DF,
              sonhando alto e jogando mais alto ainda.
            </Text>
            <Button as={Link} to="/contato" size="lg" colorScheme="teal">
              Entrar em contato
            </Button>
          </Box>
          <Image
            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740"
            alt="Daniel em campo"
            borderRadius="xl"
            objectFit="cover"
            maxW="400px"
            shadow="lg"
          />
        </Flex>

        {/* Sobre o atleta */}
        <Flex direction={['column', 'row']} gap={12} align="center" mb={24}>
          <Image
            src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
            alt="Daniel jogando"
            borderRadius="xl"
            objectFit="cover"
            maxW="400px"
            shadow="lg"
          />
          <Box flex="1">
            <Heading as="h2" size="xl" mb={4} color="white">
              Sobre o atleta
            </Heading>
            <Text fontSize="md" color="gray.300">
              Daniel começou a jogar futebol aos 7 anos e nunca mais parou. Hoje atua como atacante
              em uma equipe de base do Distrito Federal, conhecido por sua movimentação, finalização
              e inteligência tática. Está em constante evolução, focado no sonho de jogar
              profissionalmente.
            </Text>
          </Box>
        </Flex>

        {/* Estatísticas */}
        <Box mb={24}>
          <Heading as="h2" size="lg" mb={8} textAlign="center" color="white">
            Informações Rápidas
          </Heading>
          <SimpleGrid columns={[2, 4]} spacing={10}>
            <Stat icon={MdPerson} label="Idade" value="15 anos" />
            <Stat icon={MdHeight} label="Altura" value="1,72m" />
            <Stat icon={MdOutlineSpeed} label="Posição" value="Atacante" />
            <Stat icon={MdAccessibility} label="Dominância" value="Destro" />
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}

function Stat({ icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <Flex direction="column" align="center">
      <Icon as={icon} boxSize={8} color="teal.400" mb={2} />
      <Text fontSize="lg" fontWeight="bold" color="white">
        {value}
      </Text>
      <Text fontSize="sm" color="gray.400">
        {label}
      </Text>
    </Flex>
  );
}
