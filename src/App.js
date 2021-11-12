import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Welcome to our eCommerce website</h1>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
