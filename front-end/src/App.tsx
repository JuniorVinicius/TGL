import GlobalStyle from "./style/global-style";
import MainRoutes from "./routes/routes";
import { ToastContainer } from "react-toastify";
import { ChosenNumbersProvider } from "./context/test";

function App() {
  return (
    <>

      <ChosenNumbersProvider>
        <GlobalStyle />
        <MainRoutes />
        <ToastContainer
          position="top-right"
          autoClose={false}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        />

      </ChosenNumbersProvider>
    </>
  );
}

export default App;
