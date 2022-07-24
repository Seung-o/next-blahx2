import { NextPage } from 'next';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { ServiceLayout } from '@/components/service-layout';
import { GoogleLoginButton } from '@/components/google-login-button';

const IndexPage: NextPage = function () {
  return (
    <ServiceLayout title="test">
      <Flex justify="center">
        <Box maxW="md" mx="auto">
          <img src="/main-logo.svg" alt="main_logo" />
          <Heading>#Blahbla</Heading>
        </Box>
      </Flex>
      <Center mt="20">
        <GoogleLoginButton />
      </Center>
    </ServiceLayout>
  );
};

export default IndexPage;
