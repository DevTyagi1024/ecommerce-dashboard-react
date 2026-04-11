import Banner from './components/banner';
import Header from './Header';

const Home = () => {
    return (
        <div>

            <Header />

            <Banner
                title="Welcome to the E-commerce Dashboard"
                subtitle="Manage your products and users with ease. Explore the dashboard to view product listings, user management, and more."
                ctaText="Get Started"
                ctaLink="/productlist"
            />

        </div>
    );
};

export default Home;