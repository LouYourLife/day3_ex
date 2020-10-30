import logo from './logo.svg';
import './App.css';
import FormDemo from "./FormDemo";
import FormDemoMultiple from "./FormDemoMultiple";
import StateLidtDemo, {ParentComp} from "./StateLidtDemo";

function App() {
  return (
    <div className="App">
      <h2>Simple form</h2>
      <FormDemo/>
      <h2>Handling multiple inputs</h2>
      <FormDemoMultiple/>
      <h2>Lifting State Up</h2>
      <ParentComp/>
    </div>
  );
}

export default App;
