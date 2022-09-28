import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <h1> Dictionary App</h1>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer>
          <small>Coded by Lucie Jáchimová</small>
        </footer>
      </div>
    </div>
  );
}
App();
