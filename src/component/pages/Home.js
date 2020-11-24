import Banner from '../banner/Banner';
import Information from '../information/Information';
import SocialPage from '../social_media/Social_Page';

const Home = () => {
    return (
        <div>
            <Banner text="Karnataka State Ranking Table Tennis Tournament 2020-21" />
            <Information />
            <div className="divider"></div>
            <Banner text="" />
            <SocialPage />
            <div className="divider"></div>
            <Banner />
        </div>
    );
};

export default Home;
