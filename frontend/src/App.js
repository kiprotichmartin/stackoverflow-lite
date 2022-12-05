import "./assets/styles/App.css";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <SignUpPage /> */}
      <LoginPage />
      <Footer />
    </div>
  );
}

export default App;
