import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue
} from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" mx="auto" px="6" maxWidth={1480}>
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuarios
            </Heading>
            <Link href={'/users/create'}>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          <Table colorScheme={'whiteAlpha'}>
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color="gray.300" w="8">
                  <Checkbox color="pink" />
                </Th>
                <Th>Usuario</Th>
                {isWideVersion && <Th>Data de cadastros</Th>}
                <Th w="8" />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox color="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Carlos henrique</Text>
                    <Text fontSize="small" color="gray.300">
                      caiquemoa@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>28 maio 2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox color="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Carlos henrique</Text>
                    <Text fontSize="small" color="gray.300">
                      caiquemoa@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>28 maio 2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox color="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Carlos henrique</Text>
                    <Text fontSize="small" color="gray.300">
                      caiquemoa@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>28 maio 2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox color="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Carlos henrique</Text>
                    <Text fontSize="small" color="gray.300">
                      caiquemoa@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>28 maio 2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
