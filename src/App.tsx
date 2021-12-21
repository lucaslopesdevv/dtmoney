
import { Dashboard } from "./components/Header/Dashboard";
import { Header } from "./components/Header/index";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}