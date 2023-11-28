import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="text-left m-3">Dictionary</div>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">Coded by Eliska Necasova</footer>
    </div>
  );
}
