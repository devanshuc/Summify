import "./App.css";
import Content from "./components/Content";
import Magic from "./components/Magic";
import Footer from "./components/Footer";

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
      <div>
        <Footer />
      </div>
    </main>
  );
};

export default App;
