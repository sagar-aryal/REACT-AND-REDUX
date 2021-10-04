import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import BookContextProvider from "./context/BookContext";

function App() {
  return (
    <BookContextProvider>
      <div className="App">
        <Header />
        <Main />
      </div>
    </BookContextProvider>
  );
}

export default App;
