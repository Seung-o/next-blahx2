import { NextPage } from 'next';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { ServiceLayout } from '@/components/service-layout';
import { GoogleLoginButton } from '@/components/google-login-button';
import FirebaseClient from '@/models/firebase-client';

const provider = new GoogleAuthProvider();

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
        <GoogleLoginButton
          onClick={() => {
            signInWithPopup(FirebaseClient.getInstance().Auth, provider)
              .then((result) => {
                console.info(result.user);
              })
              .catch((error) => console.log(error));
          }}
        />
      </Center>
    </ServiceLayout>
  );
};

export default IndexPage;
