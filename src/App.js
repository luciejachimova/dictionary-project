import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <h1 className="main-h1"> Dictionary App</h1>
        <main>
          <Dictionary defaultKeyword="nature" />
        </main>
        <footer>
          <small>
            This project was coded by Lucie Jáchimová and is{" "}
            <a
              href="https://github.com/luciejachimova/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub{" "}
            </a>
            or{" "}
            <a
              href="https://celadon-gnome-541f34.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
App();
