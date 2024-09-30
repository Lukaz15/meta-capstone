import { SectionComponent } from "../../custom_types/customTypes"
import { Anchor, Section } from "../elements"
import { About, Book } from "./"

export const Dishes: SectionComponent = (): React.ReactNode => {

    return (<Section >
        <Anchor type="button-left" to={<About />} />
        <div id="dish-wrapper">
            <h1>Most popular dishes</h1>
            <article>
                <img
                    src="https://i.postimg.cc/6pcnj3Bc/platillo1.png"
                    alt="home-special"
                />
                <div className="info-wrapper">
                    <p>
                        <span>House Specialty</span><br />
                        On a creamy base of fresh guacamole, we serve juicy pieces of
                        marinated pork, cooked to perfection, and topped with our
                        special house sauce that enhances its smoky flavor. To add a
                        crispy and refreshing touch, we include grated jicama, which
                        brings a light sweetness and an irresistible texture. We finish
                        with a blend of fresh herbs that add a vibrant aroma and an
                        unmatched flavor.
                    </p>
                    <small>Weight: 300 grams</small>
                    <small>Calories: 450 <span>$35 USD</span></small>
                </div>
            </article>
            <article>
                <div className="info-wrapper">
                    <p>
                        <span>Imperial Salad</span><br />
                        Enjoy a harmonious blend of sliced avocado, teriyaki chicken
                        strips topped with sesame seeds, and crispy strips of carrot and
                        celery. Fresh lettuce and green beans surround a center of wheat
                        germ, adorned with fine herbs for an exquisite final touch. This
                        dish is a symphony of flavors and textures that will delight
                        your senses.
                    </p>
                    <small>Weight: 350 grams </small>
                    <small>Calories: 480 <span>$30 USD</span></small>
                </div>
                <img
                    src="https://i.postimg.cc/0NNmLsQs/platillo2.png"
                    alt="imperial-salad"
                />
            </article>
        </div>
        <Anchor type="button-right" to={<Book />} />
    </Section>

    )
}
Dishes.index = 2