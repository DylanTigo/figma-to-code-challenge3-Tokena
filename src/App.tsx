import { Outlet } from "react-router-dom";
import { AsideMenu } from "./components/AsideMenu";

function App() {
  return (
    <>
      <AsideMenu />
      <Outlet />
    </>
  );
}

export default App;
