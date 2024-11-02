import { AnchorArrow, Header } from "./components/elements"
import { useSection } from "./context/SectionContext"
import { GlobalStyles } from "./styles/GlobalStyles";
import { SectionComponent } from "./custom_types/customTypes";


function App() {

  const { currentSection } = useSection();


  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <AnchorArrow $to={(currentSection?.type as SectionComponent).index - 1} $direction="left" />
        {currentSection}
        <AnchorArrow $to={(currentSection?.type as SectionComponent).index + 1} $direction="right" />
      </main>
    </>
  )
}

export default App
