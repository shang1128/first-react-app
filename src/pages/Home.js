import MidNavigation from "../components/mid-navigation/MidNavigation";
import TopBanner from "../components/top-banner/TopBanner";
import CardList from '../components/card/CardList';
import MidBanner from "../components/mid-banner/MidBanner";
import OtherOptions from "../components/other-options/OtherOptions";
import LatestNews from "../components/latest-news/LatestNews";
import FeaturedProducts from "../components/featured-products/FeaturedProducts";
import HeaderFooter from "../components/HeaderFooter";


const Home = () => {
    
    return (
        <HeaderFooter>
        <div>
            <TopBanner/>
            <MidNavigation/>
            <CardList hasFirstHot={true}/>
            <CardList />
            <MidBanner/>
            <OtherOptions/>
            <LatestNews/>
            <FeaturedProducts/>
        </div>
        </HeaderFooter>
    )
}

export default Home;