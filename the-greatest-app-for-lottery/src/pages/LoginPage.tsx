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


const LoginPage = () => {
  return (
    <>
      <Conteiner>
        <div
          style={{
            width: "340px",
          }}
        >
          <h1
            style={{
              fontSize: "65px",
              textAlign: "center",
              color: "var(--text)",
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            The Geatest App
            <br />
            <span
              style={{
                fontSize: "22px",
                background: "var(--main-green)",
                color: "#fff",
                padding: "7px 60px",
                borderRadius: "100px",
              }}
            >
              for
            </span>
            <br />
            <span style={{ fontSize: "83px" }}>LOTTERY</span>
          </h1>
        </div>

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
