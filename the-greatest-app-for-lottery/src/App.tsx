import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import GlobalStyle from "./style/global-style";
import HomePage from './pages/HomePage';
import NewBet from './pages/NewBetPage';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NewBet/>
    </div>
  );
}

export default App;
