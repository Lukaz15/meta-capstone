import { Header } from "./components/elements"
import { useSection } from "./context/SectionContext"
import { GlobalStyles } from "./styles/GlobalStyles";


function App() {

  const { currentSection } = useSection();

  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        {currentSection}
      </main>
    </>
  )
}

export default App
