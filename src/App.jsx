import "./App.css";
import Content from "./components/Content";
import Magic from "./components/Magic";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Content />
        <Magic />
      </div>
    </main>
  );
};

export default App;
