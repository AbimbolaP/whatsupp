'use client'

import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../../../firebase";

export default function Login () {

  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert)
  }

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo src= 'https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png' />
        <Button onClick={signIn} variant='outlined'> Sign In With Google</Button>
      </LoginContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const LoginContainer = styled.div`
padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7)
`; 

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;