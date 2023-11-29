import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="text-center m-3">
        {" "}
        <h1>Dictionary</h1>{" "}
      </div>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        This app is{" "}
        <a href="https://github.com/EliTimeless/dictionary-react-app.git">
          open-sourced
        </a>{" "}
        and is coded by Eliska Necasova
      </footer>
    </div>
  );
}
