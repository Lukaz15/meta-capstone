import Webpage from "../../assets/videos/Webpage.mp4"
import { Section, Anchor, Video, Paragraph, Span, Article } from "../elements"
import { About } from "./"
import { SectionComponent } from "../../custom_types/customTypes";



export const Home: SectionComponent = (): React.ReactNode => {
    return (
        <Section >
            <Video type="video/mp4" src={Webpage} autoPlay muted loop $background />
            <Article>
                <Paragraph>
                    <Span>Discover</Span> a corner of authentic Mediterranean cuisine,
                    where each dish is a culinary masterpiece created with love and
                    dedication.
                </Paragraph>
            </Article>
            <Anchor type="button-right" to={<About />} />
        </Section>
    )
}

Home.index = 0