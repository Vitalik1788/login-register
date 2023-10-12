import { Formik } from "formik";
import { FormField, FormLabel, FormStyled, FormTitle, LoginButton, LoginContainer, SingUp } from './login.styled';
import { FiLogIn } from "react-icons/fi";



const Login = () => {
  

  return (
    <>
      <LoginContainer>
        <FormTitle>Log In</FormTitle>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={async values => {
            console.log(values);
          }}
        >
          <FormStyled>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormField
              id="email"
              type="email"
              name="email"
              placeholder="nadiia@gmail.com"
            />
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormField
              id="password"
              type="password"
              name="password"
              placeholder="******"
            />
            <LoginButton type="submit">
              Log in <FiLogIn style={{ marginLeft: 11 }} />
            </LoginButton>
          </FormStyled>
        </Formik>
      </LoginContainer>
      <SingUp>Sing up</SingUp>
    </>
  );

}
export default Login;