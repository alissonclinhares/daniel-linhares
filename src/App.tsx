import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
} from '@chakra-ui/react';
import { MdWhatsapp } from 'react-icons/md';
import { FaBirthdayCake, FaRulerVertical, FaFutbol, FaShoePrints } from 'react-icons/fa';
import React, { useState } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';

export default function App() {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const t = translations[language];

  return (
    <Box bg="gray.900" color="gray.100" fontFamily="'Poppins', sans-serif">
      <Box as="header" position="sticky" top="0" zIndex="1000" bg="gray.900" py={4} borderBottom="1px solid" borderColor="gray.700">
        <Container maxW="6xl">
          <Flex justify="space-between" align="center">
            <Heading size="md">Daniel Linhares</Heading>

            {/* Menu para telas médias e grandes */}
            <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
              <NavLink href="#inicio" label={t.menu.inicio} />
              <NavLink href="#sobre" label={t.menu.sobre} />
              <NavLink href="#estatisticas" label={t.menu.estatisticas} />
              <NavLink href="#carreira" label={t.menu.carreira} />
              <NavLink href="#galeria" label={t.menu.galeria} />
              <NavLink href="#contato" label={t.menu.contato} />
              <HStack spacing={1}>
                <Button variant="ghost" size="sm" onClick={() => setLanguage('pt')}>🇧🇷</Button>
                <Button variant="ghost" size="sm" onClick={() => setLanguage('en')}>🇬🇧</Button>
              </HStack>
            </HStack>

            {/* Botão hambúrguer para mobile */}
            <IconButton
              aria-label="Abrir menu"
              icon={<HamburgerIcon />}
              variant="ghost"
              display={{ base: 'flex', md: 'none' }}
              onClick={onOpen}
              colorScheme={'teal'}
            />
          </Flex>
        </Container>

        {/* Drawer para mobile */}
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent bg="gray.900" color="gray.100">
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="start">
                <NavLink href="#inicio" label={t.menu.inicio} />
                <NavLink href="#sobre" label={t.menu.sobre} />
                <NavLink href="#estatisticas" label={t.menu.estatisticas} />
                <NavLink href="#carreira" label={t.menu.carreira} />
                <NavLink href="#galeria" label={t.menu.galeria} />
                <NavLink href="#contato" label={t.menu.contato} />
                <HStack spacing={2}>
                  <Button onClick={() => { setLanguage('pt'); onClose(); }}>🇧🇷</Button>
                  <Button onClick={() => { setLanguage('en'); onClose(); }}>🇬🇧</Button>
                </HStack>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      {/* Hero */}
      <Box as="section" id="inicio" position="relative">
        <Image
          src={`${import.meta.env.BASE_URL}daniel/foto1.jpeg`}
          alt="Hero"
          w="100%"
          maxH="100vh"
          objectFit="cover"
          opacity={0.6}
        />
        <Container
          maxW="6xl"
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          display="flex"
          alignItems="center"
        >
          <Box>
            <Heading fontSize={['3xl', '5xl']} mb={4} fontWeight="bold">
              {t.heroTitle}
            </Heading>
            <Text fontSize="xl" mb={6} color="gray.300">
              {t.heroSubtitle}
            </Text>
            <Button size="lg" colorScheme="teal" as="a" href="#contato">
              {t.menu.contato}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Sobre */}
      <Box as="section" id="sobre" py={24} bgGradient="linear(to-br, gray.800, gray.900)">
        <Container maxW="6xl">
          <Flex direction={['column', 'row']} gap={12} align="center">
            <Image
              src={`${import.meta.env.BASE_URL}daniel/foto6.jpeg`}
              alt="Hero"
              borderRadius="lg"
              boxShadow="lg"
              maxW="400px"
              objectFit="cover"
            />
            <Box flex={1}>
              <Heading size="2xl" mb={6}>
                {t.sobre.titulo}
              </Heading>
              <Text fontSize="lg" color="gray.300" lineHeight="tall">
                {t.sobre.texto1}
              </Text>
              <Text fontSize="lg" color="gray.400" mt={4}>
                {t.sobre.texto2}
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Estatísticas */}
      <Box as="section" id="estatisticas" py={20} bg="gray.900">
        <Container maxW="6xl">
          <Heading size="xl" mb={10} textAlign="center">
            {t.estatisticas.titulo}
          </Heading>
          <SimpleGrid columns={[2, 4]} spacing={8}>
            <StatBox icon={FaBirthdayCake} value="15" label={t.estatisticas.idade} />
            <StatBox icon={FaRulerVertical} value="1,64 m" label={t.estatisticas.altura} />
            <StatBox
              icon={FaFutbol}
              value={t.estatisticas.posicaoValor}
              label={t.estatisticas.posicao}
            />
            <StatBox
              icon={FaShoePrints}
              value={t.estatisticas.pernaValor}
              label={t.estatisticas.perna}
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Carreira */}
      <Box as="section" id="carreira" py={24} bg="gray.800">
        <Container maxW="6xl">
          <Heading size="xl" mb={12} textAlign="center">
            {t.carreira.titulo}
          </Heading>
          <SimpleGrid columns={[1, 1, 3]} spacing={10}>
            <VStack spacing={4} align="start">
              <Heading size="md" color="teal.300">
                {t.carreira.trajetoria.titulo}
              </Heading>
              <Text color="gray.300">{t.carreira.trajetoria.texto1}</Text>
              <Text color="gray.400" fontSize="sm">
                {t.carreira.trajetoria.texto2}
              </Text>
            </VStack>
            <VStack spacing={4} align="start">
              <Heading size="md" color="teal.300">
                {t.carreira.malmo.titulo}
              </Heading>
              <Text color="gray.300">{t.carreira.malmo.texto}</Text>
              <Text fontSize="2xl">🇸🇪</Text>
            </VStack>
            <VStack spacing={4} align="start">
              <Heading size="md" color="teal.300">
                {t.carreira.conquista.titulo}
              </Heading>
              <Text color="gray.300">{t.carreira.conquista.texto}</Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Galeria */}
      <Box as="section" id="galeria" py={24} bg="gray.900">
        <Container maxW="6xl">
          <Heading size="2xl" mb={10} textAlign="center">
            {t.galeria.titulo}
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {[
              'foto1.jpeg',
              'foto6.jpeg',
              'foto7.jpeg',
              'foto4.jpeg',
              'foto5.jpeg',
              'foto11.jpeg',
              'foto9.jpeg',
              'foto8.jpeg',
              'foto10.jpeg',
              'foto12.jpeg',
              'foto13.jpeg',
              'foto14.jpeg',
            ].map((img, i) => (
              <Image
                key={i}
                src={`${import.meta.env.BASE_URL}daniel/${img}`}
                alt={`Daniel ${i + 1}`}
                borderRadius="md"
                objectFit="cover"
                shadow="md"
              />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contato */}
      <Box as="section" id="contato" py={24} bg="gray.800">
        <Container maxW="lg" textAlign="center">
          <Heading size="2xl" mb={6}>
            {t.contato.titulo}
          </Heading>
          <Text fontSize="lg" color="gray.300" mb={6}>
            {t.contato.texto}
          </Text>
          <Button
            as="a"
            href="https://wa.me/5561996836648"
            target="_blank"
            leftIcon={<Icon as={MdWhatsapp} />}
            size="lg"
            colorScheme="green"
          >
            WhatsApp
          </Button>
        </Container>
      </Box>

      <Box as="footer" py={8} textAlign="center" bg="gray.900" color="gray.500">
        <Text fontSize="sm">
          © {new Date().getFullYear()} Daniel Linhares. Todos os direitos reservados.
        </Text>
      </Box>
    </Box>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} fontWeight="medium" _hover={{ textDecoration: 'none', color: 'teal.300' }}>
      {label}
    </Link>
  );
}

function StatBox({ icon, value, label }: { icon: any; value: string; label: string }) {
  return (
    <VStack spacing={3} p={6} borderRadius="lg" bg="gray.800" textAlign="center" boxShadow="lg">
      <Icon as={icon} boxSize={8} color="teal.300" />
      <Text fontSize="xl" fontWeight="bold">
        {value}
      </Text>
      <Text fontSize="sm" color="gray.400">
        {label}
      </Text>
    </VStack>
  );
}

const translations = {
  pt: {
    menu: {
      inicio: 'Início',
      sobre: 'Sobre',
      estatisticas: 'Estatísticas',
      carreira: 'Carreira',
      galeria: 'Galeria',
      contato: 'Contato',
    },
    heroTitle: 'Daniel Linhares',
    heroSubtitle: 'Atacante técnico, veloz e objetivo nas categorias de base do DF.',
    sobre: {
      titulo: 'Sobre o atleta',
      texto1:
        'Me chamo Daniel Linhares de Alvarenga, tenho 15 anos, 1,64m e 60kg. Jogo como meia e ponta esquerda, e sou destro. Comecei no futebol aos 7 anos e venho me dedicando para crescer dentro e fora de campo.',
      texto2:
        'Sou um jogador ofensivo, técnico e objetivo. Minhas principais qualidades são o passe, a visão de jogo, a velocidade e o drible curto.',
    },
    estatisticas: {
      titulo: 'Estatísticas',
      idade: 'Idade',
      altura: 'Altura',
      posicao: 'Posição',
      posicaoValor: 'Meia / Ponta',
      perna: 'Perna dominante',
      pernaValor: 'Destro',
    },
    carreira: {
      titulo: 'Carreira',
      trajetoria: {
        titulo: 'Trajetória',
        texto1: 'Cruzeiro-DF (Sub-17, técnico Paulo)\nSantos-DF (atual)',
        texto2: 'Competições: Dani Cup, Caldas Cup, Novos Talentos, APB, Liberta Cup',
      },
      malmo: {
        titulo: 'Malmö Trophy 2024',
        texto:
          'Participei do torneio internacional na Suécia contra equipes da Espanha, Dinamarca, Jamaica e Suécia, atuando fora da minha posição de origem. Foi uma experiência desafiadora e enriquecedora para meu desenvolvimento como atleta.',
      },
      conquista: {
        titulo: 'Conquista recente',
        texto:
          'Campeão da Copa das Franquias 2024 pelo Santos-DF, com 6 gols marcados na competição.',
      },
    },
    galeria: {
      titulo: 'Galeria de Fotos',
    },
    contato: {
      titulo: 'Fale comigo',
      texto: 'Entre em contato pelo WhatsApp para avaliações, informações ou agendamento.',
    },
  },
  en: {
    menu: {
      inicio: 'Home',
      sobre: 'About',
      estatisticas: 'Stats',
      carreira: 'Career',
      galeria: 'Gallery',
      contato: 'Contact',
    },
    heroTitle: 'Daniel Linhares',
    heroSubtitle: 'Fast, skillful and sharp forward playing in Brasília youth leagues.',
    sobre: {
      titulo: 'About the athlete',
      texto1:
        "My name is Daniel Linhares de Alvarenga, I'm 15 years old, 1.64m tall and weigh 60kg. I play as a midfielder and left winger, and I'm right-footed. I started playing football at the age of 7 and have been committed to growing on and off the field.",
      texto2:
        'I am an offensive, technical, and direct player. My main strengths are passing, vision, speed and short dribbles.',
    },
    estatisticas: {
      titulo: 'Stats',
      idade: 'Age',
      altura: 'Height',
      posicao: 'Position',
      posicaoValor: 'Midfielder / Winger',
      perna: 'Strong foot',
      pernaValor: 'Right',
    },
    carreira: {
      titulo: 'Career',
      trajetoria: {
        titulo: 'Path',
        texto1: 'Cruzeiro-DF (U-17, coach Paulo)\nSantos-DF (current)',
        texto2: 'Tournaments: Dani Cup, Caldas Cup, Novos Talentos, APB, Liberta Cup',
      },
      malmo: {
        titulo: 'Malmö Trophy 2024',
        texto:
          'I played in the international tournament held in Sweden, facing teams from Spain, Denmark, Jamaica, and Sweden. I played out of my natural position, which was a challenge that contributed a lot to my growth as an athlete.',
      },
      conquista: {
        titulo: 'Recent achievement',
        texto:
          'Champion of the Copa das Franquias 2024 with Santos-DF, scoring 6 goals in the competition.',
      },
    },
    galeria: {
      titulo: 'Photo Gallery',
    },
    contato: {
      titulo: 'Get in touch',
      texto: 'Reach me on WhatsApp for evaluations, information or scheduling.',
    },
  },
};
