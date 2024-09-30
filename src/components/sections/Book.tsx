import { SectionComponent } from "../../custom_types/customTypes"
import { Anchor, Section } from "../elements"
import { Dishes } from "./"

export const Book: SectionComponent = (): React.ReactNode => {

    return (
        <Section>
            <Anchor type="button-left" to={<Dishes />} />
            <div className="container" id="Book-container">
                <article>
                    <h2>Book a Table</h2>
                    <form action="/submit-booking" method="get">
                        <div className="form-element">
                            <label htmlFor="name">Name:</label>
                            <input
                                className="inputs"
                                type="text"
                                id="name"
                                name="name"
                                required
                            />
                        </div>
                        <div className="form-element">
                            <label htmlFor="email">Email:</label>
                            <input
                                className="inputs"
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                        <div className="form-element">
                            <label htmlFor="phone">Phone:</label>
                            <input
                                className="inputs"
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                            />
                        </div>
                        <div className="form-element">
                            <label htmlFor="date">Date:</label>
                            <input
                                className="inputs"
                                type="date"
                                id="date"
                                name="date"
                                required
                            />
                        </div>
                        <div className="form-element">
                            <label htmlFor="time">Time:</label>
                            <input
                                className="inputs"
                                type="time"
                                id="time"
                                name="time"
                                required
                            />
                        </div>
                        <div className="form-element">
                            <label htmlFor="guests">Guests:</label>
                            <input
                                className="inputs"
                                type="number"
                                id="guests"
                                name="guests"
                                min="1"
                                required
                            />
                        </div>
                        <div className="form-element">
                            <label htmlFor="requests">Special Requests: </label>
                            <textarea
                                className="inputs"
                                id="requests"
                                name="requests"
                                rows={4}
                            ></textarea>
                        </div>
                        <button type="submit">Book Now</button>
                    </form>
                </article>
                <footer>
                    <img
                        src="https://i.postimg.cc/d1kCVjrN/Asset-7-4x.png"
                        alt="footer-logo"
                    />
                    <div id="Address-container" className="container">
                        <p>
                            Sun Avenue 123, Jardines Neighborhood, Mediterranean City,
                            Postal Code 45678.
                        </p>
                        <p>Monday - Saturday. 9:00 - 20:00 hrs</p>
                    </div>
                    <div id="Copyright-container">
                        <img
                            src="https://i.postimg.cc/Qt4VvWTj/bar-code.png"
                            alt="bar-code"
                        />
                        <p>Copyright Little Lemon</p>
                    </div>
                </footer>
            </div>

        </Section>
    )

}
Book.index = 3