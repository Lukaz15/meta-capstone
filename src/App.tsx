import { Home, About, Dishes, Book } from "./components/sections"
import { Header, Nav, Ul, Img, Anchor } from "./components/elements"
import { useSection } from "./context/SectionContext"
import { GlobalStyles } from "./styles/GlobalStyles";


function App() {

  const { currentSection, goToSection } = useSection();

  return (
    <>
      <GlobalStyles />
      <Header>
        <Img onClick={() => goToSection(<Home />)} $gridarea="1 / 1 / 2 / 2" $hover cursor="pointer" src="https://i.postimg.cc/ht1bks19/Asset-14-4x.png" alt="little-lemon-logo" />
        <Nav>
          {/*Using the Ul component automatically wraps all its children in <li> elements.*/}
          <Ul>
            <Anchor type="navigation" to={<About />}>About</Anchor>
            <Anchor type="navigation" to={<Dishes />}>Dishes</Anchor>
            <Anchor type="navigation" to={<Book />}>Book</Anchor>
          </Ul>
        </Nav>
      </Header>
      <main>
        {currentSection}
      </main>
    </>
  )
}

export default App
