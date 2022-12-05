import "./assets/styles/App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import AskQuestionPage from "./pages/AskQuestionPage";
import InitialPage from "./pages/InitialPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AnswersPage from "./pages/AnswersPage";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      {/* <ToastContainer /> */}
      <Header />
      <Routes>
        <Route exact path="/" element={<InitialPage />} />
        <Route exact path="login" element={<LoginPage />} />
        <Route exact path="signup" element={<SignUpPage />} />
        <Route exact path="askquestion" element={<AskQuestionPage />} />
        <Route exact path="answerspage" element={<AnswersPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
