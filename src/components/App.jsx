import { PageContainer } from "./App/App.styled";
// import Login from "./login/login";
import Register from "./register/Register";

export const App = () => {
  return (
    <PageContainer>
      <Register />
      {/* <Login /> */}
    </PageContainer>
  );
};
