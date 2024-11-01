import { SectionComponent } from "../../custom_types/customTypes";
import { Section, Img, Paragraph, Article, Span } from "../elements";

export const About: SectionComponent = (): React.ReactNode => {
    return (
        <Section >
            <Article>
                <Img src="https://i.postimg.cc/vTC6ngL8/Web-Page-edited-1.png" />
                <Paragraph >
                    <Span>About us</Span>
                    Nestled in Chicago, Illinois, Little Lemon is a family-owned
                    Mediterranean restaurant blending tradition with modernity. Brothers
                    Mario and Adrian draw from Italian, Greek, and Turkish culture to
                    craft a rotating menu of 12–15 seasonal dishes. With a rustic
                    ambiance and moderate prices, it's a popular spot any time of day.
                    Mario's culinary expertise brings forth family recipes, while Adrian
                    expands the menu's Mediterranean offerings. <br />
                    Come experience Little Lemon's vibrant flavors and warm hospitality!
                </Paragraph>
            </Article>
        </Section>
    )
}

About.index = 1