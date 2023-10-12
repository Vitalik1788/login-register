import styled from '@emotion/styled';
import { Field, Form } from 'formik';

const styledForm = Form;
const styledField = Field;

export const RegisterContainer = styled.div`
  padding: 40px 24px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  border-radius: 8px;
  @media screen and (min-width: 375px) and (max-width: 767px) {
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
    max-width: 480px;
    padding: 40px 40px;
  }
`;

export const FormTitle = styled.h1`
  margin-bottom: 32px;
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
  color: #3e85f3;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 24px;
  }
`;

export const FormStyled = styled(styledForm)`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.29;
  color: #111111;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const FormField = styled(styledField)`
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 14px;
  margin-bottom: 24px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  color: #111111;
  border-radius: 8px;
  border: 1px solid #dce3e599;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 18px;
  }

  ::placeholder {
    color: #dce3e5;
  }
`;

export const RegButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  padding: 14px 0;
  border-radius: 16px;
  font-size: 18px;
  background-color: #3e85f3;
  color: #ffffff;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;

export const LogIn = styled.h3`
  margin-top: 18px;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  color: #3e85f3;
  text-decoration: underline;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;