import Webpage from "../../assets/videos/Webpage.mp4"
import { Section, Anchor, Video, Paragraph, Span } from "../elements"
import { About } from "./"
import { SectionComponent } from "../../custom_types/customTypes";



export const Home: SectionComponent = (): React.ReactNode => {
    return (
        <Section >
            <Video type="video/mp4" src={Webpage} autoPlay muted loop $background />
            <article>
                <Paragraph>
                    <Span>Discover</Span> a corner of authentic Mediterranean cuisine,
                    where each dish is a culinary masterpiece created with love and
                    dedication.
                </Paragraph>
            </article>
            <Anchor type="button-right" to={<About />} />
        </Section>
    )
}

// Set the position index
Home.index = 0