import { wrapper } from "../redux/store";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default wrapper.withRedux(MyApp);
