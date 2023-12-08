import "./App.css";
import Dictionary from "./Dictionary";
import img1 from "./img/Dictionary.jpg";

//import image1 from "./images/image1.jpg";
export default function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="text-center m-3">
        {" "}
        <img src={img1} alt="dictionary-logo" className="img-fluid" />{" "}
      </div>
      <main>
        <Dictionary defaultKeyword="warm" />
      </main>
      <footer className="App-footer">
        This app is{" "}
        <a href="https://github.com/EliTimeless/dictionary-react-app.git">
          open-sourced
        </a>{" "}
        and is coded by{" "}
        <a
          href="https://www.linkedin.com/in/eliška-nečasová-front-end-tester"
          alt="LinkedIn profile"
          target="_blank"
        >
          Eliska Necasova
        </a>
      </footer>
    </div>
  );
}
