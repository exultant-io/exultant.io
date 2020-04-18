import React from 'react';
import { Box, Flex, Text, Image } from 'rebass';
import BGImage from '../../images/background.svg';
import Logo from '../../images/logo.png';
import Header from '../header';
const Hero = () => {
  return (
    <Box
      height="700px"
      sx={{
        background: `url(${BGImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Header />
      <Flex
        justifyContent="space-between"
        sx={{
          maxWidth: '1024px',
          margin: '0 auto',
        }}
      >
        <Box width={1 / 2} mt={200}>
          <Text>Exultant</Text>
          <Text>Lorem</Text>
        </Box>
        <Box
          width={1 / 2}
          mt={200}
          sx={{
            textAlign: 'right',
          }}
        >
          <Image
            sx={{
              width: 150,
            }}
            src={Logo}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
