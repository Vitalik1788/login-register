import React from "react";

import { Formik } from "formik";
import { BoxInput, Error, FormField, FormLabel, FormStyled, FormTitle, Image, LoginButton, LoginContainer, SingUp } from './login.styled';
import { FiLogIn } from "react-icons/fi";

import * as Yup from 'yup';

import IMG from "../../img/login_goose.jpg";

const Login = () => {
  let userSchema = Yup.object().shape({
    email: Yup.string()
      // eslint-disable-next-line no-useless-escape
      .matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        'Invalid email. Valid email contain xxx@xxx.xxx'
      )
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password is too short - should be 6 chars minimum.')
      .max(20, 'Password is too long - should be 20 chars maximum')
      .required('Password is required')
      .matches(/[a-zA-Z]/, 'Password must contain Latin letters.'),
  });

  return (
    <>
      <LoginContainer>
        <FormTitle>Log In</FormTitle>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={userSchema}
          onSubmit={async values => {
            console.log(values);
          }}
        >
          {({ errors, values, touched }) => (
            <FormStyled>
              <BoxInput>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormField
                  id="email"
                  type="email"
                  name="email"
                  placeholder="nadiia@gmail.com"
                />
                {errors.email && touched.email ? (
                  <Error>{errors.email}</Error>
                ) : null}{' '}
              </BoxInput>
              <BoxInput>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormField
                  id="password"
                  type="password"
                  name="password"
                  placeholder="******"
                />
                {errors.password && touched.password ? (
                  <Error>{errors.password}</Error>
                ) : null}{' '}
              </BoxInput>
              <LoginButton type="submit">
                Log in <FiLogIn style={{ marginLeft: 11 }} />
              </LoginButton>
            </FormStyled>
          )}
        </Formik>
      </LoginContainer>
      <SingUp>Sing up</SingUp>
      <Image src={IMG} alt="Goose" />            
    </>
  );
}

export default Login;