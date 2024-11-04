import Header from "./components/Header.jsx";
import Slider from "./components/Slider.jsx";
import List from "./components/List.jsx";
import Portal from "./components/Portal..jsx";
import Footer from "./components/Footer.jsx";
import Menu from "./components/Menu.jsx";
function App() {

  return (
    <div className="App">
        <Header/>
        <Slider/>
        <List/>

        <Portal>
            <Menu/>
        </Portal>
        <Footer></Footer>
    </div>
  )
}

export default App
