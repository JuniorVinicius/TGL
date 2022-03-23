import GlobalStyle from "./style/global-style";
import MainRoutes from './routes/routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <GlobalStyle/>
      <MainRoutes/>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
