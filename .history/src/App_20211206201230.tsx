import { Header } from "./assets/components";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Hello World</h1>
      <GlobalStyle />
    </div>
  );
}