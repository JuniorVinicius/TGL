import React from "react";
import { Conteiner } from "./../UI/Conteiner/Conteiner";
import {
  BoxForm,
  Form,
  BoxInput,
  Input,
  BoxForgetPassword,
  BoxButtonSubmit,
  BoxButton,
  Title,
} from "./../components/Form/Form";
import Footer from "../components/Footer";
import { Button } from "./../UI/Button/Button";
import { BoxText, Text, Span } from "./../components/AplicationTitle/index";

const LoginPage = () => {
  return (
    <>
      <Conteiner>
        <BoxText>
          <Text>The Geatest App</Text>
          <Span>for</Span>
          <Text fontSize="83px">LOTTERY</Text>
        </BoxText>

        <BoxForm>
          <Title>Authentication</Title>
          <Form>
            <BoxInput>
              <Input type="text" name="email" placeholder="Email" />
            </BoxInput>

            <BoxInput>
              <Input type="text" name="password" placeholder="Password" />
            </BoxInput>

            <BoxForgetPassword>
              <span>I forget my password</span>
            </BoxForgetPassword>

            <BoxButtonSubmit>
              <Button type="submit" color={"var(--main-green)"}>
                Log In
              </Button>
            </BoxButtonSubmit>
          </Form>

          <BoxButton>
            <Button>Sign Up</Button>
          </BoxButton>
        </BoxForm>
      </Conteiner>

      <Footer />
    </>
  );
};

export default LoginPage;
