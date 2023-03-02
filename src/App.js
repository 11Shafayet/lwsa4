import { Provider } from "react-redux";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Container />
    </Provider>
  );
}

export default App;
