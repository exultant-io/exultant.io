import React from 'react';
import { Flex, Box, Text } from 'rebass';

const Contact = () => {
  return (
    <Flex>
      <Box width={1 / 2}>
        <Text fontWeight={500} fontSize={36}>
          Let's create something beautiful
        </Text>
        <Text fontWeight={300} fontSize={24}>
          Do you have a creative challenge for us?
        </Text>
        <Text fontWeight={300} fontSize={24}>
          Get in touch with out crew
        </Text>
        <Text fontWeight={300} fontSize={24}>
          hello@exultant.io
        </Text>
      </Box>
      <Box width={1 / 2}>
        <Text>Logo here</Text>
      </Box>
    </Flex>
  );
};

export default Contact;
