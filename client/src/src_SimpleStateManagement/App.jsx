import { useState, useContext } from "react"
import ThemeContext from "./context/ThemeContext.jsx"

import "./App.css"

function App() {
  const [theme, setTheme] = useState("light")
  const [fontSize, setFontSize] = useState("medium")

  return (
    <ThemeContext value={{ theme, setTheme, fontSize, setFontSize }}>
      <Layout />
    </ThemeContext>
  )
}

function Layout() {
  const { theme, setTheme, fontSize, setFontSize } = useContext(ThemeContext)
  const bgColor = theme === "light" ? "#ffffff" : "#1a1a1a"
  const color = theme === "light" ? "#000000" : "#ffffff"

  return (
    <div style={{ backgroundColor: bgColor, color, minHeight: "100vh", padding: "20px" }}>
      <Header />
      <Content />
    </div>
  )
}

function Header() {
  const { theme, setTheme, fontSize, setFontSize } = useContext(ThemeContext)
  return (
    <header style={{ marginBottom: "20px" }}>
      <Navigation />
      <Controls />
    </header>
  )
}

function Navigation() {
  const { theme, setTheme, fontSize, setFontSize } = useContext(ThemeContext)
  const size = fontSize === "small" ? "14px" : fontSize === "large" ? "20px" : "16px"

  return (
    <nav style={{ fontSize: size, marginBottom: "10px" }}>
      <a href="#home">Home</a> | <a href="#about">About</a> | <a href="#contact">Contact</a>
    </nav>
  )
}

function Controls() {
  const { theme, setTheme, fontSize, setFontSize } = useContext(ThemeContext)
  return (
    <div>
      <ThemeToggle />
      <FontControl />
    </div>
  )
}

function ThemeToggle() {
  const { theme, setTheme, fontSize, setFontSize } = useContext(ThemeContext)
  return <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? "Dark" : "Light"} Mode</button>
}

function FontControl() {
  const { theme, setTheme, fontSize, setFontSize } = useContext(ThemeContext)
  return (
    <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </select>
  )
}

function Content() {
  const { theme, setTheme, fontSize, setFontSize } = useContext(ThemeContext)
  const size = fontSize === "small" ? "14px" : fontSize === "large" ? "20px" : "16px"

  return (
    <main style={{ fontSize: size }}>
      <Article />
      <Sidebar />
    </main>
  )
}

function Article() {
  const { theme, setTheme, fontSize, setFontSize } = useContext(ThemeContext)
  return (
    <article>
      <h1>Article Title</h1>
      <p>This content uses the {theme} theme. Notice how theme props are passed through every component!</p>
    </article>
  )
}

function Sidebar() {
  const { theme, setTheme, fontSize, setFontSize } = useContext(ThemeContext)
  return (
    <aside style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <h3>Sidebar</h3>
      <p>Current theme: {theme}</p>
    </aside>
  )
}

export default App
