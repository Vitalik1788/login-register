import { Formik } from 'formik';
import { FiLogIn } from 'react-icons/fi';
import {
  FormField,
  FormLabel,
  FormStyled,
  FormTitle,
  LogIn,
  RegButton,
  RegisterContainer,
} from './Register.styled';

const Register = () => {
  return (
    <>
      <RegisterContainer>
        <FormTitle>Sign Up</FormTitle>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={async values => {
            console.log(values);
          }}
        >
          <FormStyled>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormField
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormField
              id="email"
              type="email"
              name="email"
              placeholder="Enter email"
            />
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormField
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <RegButton type="submit">
              Sign Up <FiLogIn size={20} style={{ marginLeft: 11 }} />
            </RegButton>
          </FormStyled>
        </Formik>
      </RegisterContainer>
      <LogIn>Log In</LogIn>
    </>
  );
};

export default Register;
