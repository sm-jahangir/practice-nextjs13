import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menubar from "../components/Common/Menubar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menubar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
