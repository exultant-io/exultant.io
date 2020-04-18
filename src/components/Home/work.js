import React from 'react';
import { Text, Flex, Box } from 'rebass';

const Motto = () => {
  return (
    <Box>
      <Text
        my="200px"
        fontSize="48px"
        color="#C40E0E"
        fontWeight={[500]}
        lineHeight={'1em'}
        letterSpacing={0.5}
        maxWidth="1024px"
        mx={[4, 4, 'auto']}
        sx={{
          textAlign: 'center',
          textDecoration: 'line-through',
        }}
      >
        OUR WORK
      </Text>
      <Flex>
        <Box p={3} height={300} width={1 / 2} color="white" bg="#C40E0E">
          Flex
        </Box>
        <Box p={3} height={300} width={1 / 2} color="white" bg="#EF601F">
          Box
        </Box>
      </Flex>
      <Flex>
        <Box p={3} height={300} width={1 / 2} color="white" bg="#C40E0E">
          Flex
        </Box>
        <Box p={3} height={300} width={1 / 2} color="white" bg="#EF601F">
          Box
        </Box>
      </Flex>
    </Box>
  );
};

export default Motto;
