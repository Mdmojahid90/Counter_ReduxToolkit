import "./App.css";
import Container from "./components/Container";
import DisplayCounter from "./components/DisplayCounter";
import Controls from "./components/Controls";
import Welcomemsg from "./components/Welcomemsg";
import { useSelector } from "react-redux";
function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <Container>
      {privacy == true ? <Welcomemsg /> : <DisplayCounter />}
      <Controls />
    </Container>
  );
}

export default App;
