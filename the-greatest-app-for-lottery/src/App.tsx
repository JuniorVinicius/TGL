import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import GlobalStyle from "./style/global-style";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ResetPasswordPage />
    </div>
  );
}

export default App;
