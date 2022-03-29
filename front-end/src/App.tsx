import GlobalStyle from "./style/global-style";
import MainRoutes from "./routes/routes";
import { ToastContainer } from "react-toastify";
import { ChosenNumbersProvider } from "./context";

function App() {
  return (
    <>

      <ChosenNumbersProvider>
        <GlobalStyle />
        <MainRoutes />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </ChosenNumbersProvider>
    </>
  );
}

export default App;
