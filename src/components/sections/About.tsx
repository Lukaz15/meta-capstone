import { SectionComponent } from "../../custom_types/customTypes";
import { Section, Anchor, Img } from "../elements";
import { Home, Dishes } from "./"

export const About: SectionComponent = (): React.ReactNode => {
    return (
        <Section >
            <Anchor type="button-left" to={<Home />} />
            <article>
                <Img $shadow src="https://i.postimg.cc/vTC6ngL8/Web-Page-edited-1.png" />
                <p >
                    <span>About us</span>
                    Nestled in Chicago, Illinois, Little Lemon is a family-owned
                    Mediterranean restaurant blending tradition with modernity. Brothers
                    Mario and Adrian draw from Italian, Greek, and Turkish culture to
                    craft a rotating menu of 12–15 seasonal dishes. With a rustic
                    ambiance and moderate prices, it's a popular spot any time of day.
                    Mario's culinary expertise brings forth family recipes, while Adrian
                    expands the menu's Mediterranean offerings. <br />
                    Come experience Little Lemon's vibrant flavors and warm hospitality!
                </p>
            </article>
            <Anchor type="button-right" to={<Dishes />} />
        </Section>
    )
}

About.index = 1