import Button from "./components/ui/Button";
import IconButton from "./components/ui/IconButton";
import heart from "./assets/icons/heart.svg";

function App() {
  return (
    <div className="space-y-5">
      <Button>
        Dashboard <img src={heart} alt="" />
      </Button>
      <Button variants="secondary">Dashboard</Button>
      <Button variants="ghost">
        <img src={heart} alt="" /> Dashboard
      </Button>
      <IconButton icon={heart} variants="secondary" />
    </div>
  );
}

export default App;
