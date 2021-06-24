import 'normalize.css';
import AppRoutes from "./routing/AppRoutes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <AppRoutes/>
        <Footer/>
    </div>
  );
}

export default App;
