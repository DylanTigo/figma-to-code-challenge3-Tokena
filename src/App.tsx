import { Outlet } from "react-router-dom";
import { AsideMenu } from "./components/AsideMenu";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <AsideMenu />
      <Outlet />
    </>
  );
}

export default App;
