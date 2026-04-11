import { Link } from 'react-router-dom';

const Banner = ({ title, subtitle, ctaText, ctaLink }) => {
    return (
        <div>

            <section className="hero">
                <div className="container">
                    <div className="hero_content">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                        <Link to={ctaLink} className="button button--primary">
                            {ctaText}
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Banner;