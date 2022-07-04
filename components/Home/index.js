import React from 'react';
import HomeCard from './HomeCard/HomeCard';
import FeaturedProperties from './FeaturedProperties';
import PresentationCard from './PresentationCard';
import Footer from '../Layout/Footer/Footer';
import Contact from '../Contact';


const Home = () => {
    return ( 
        <>
            <HomeCard />
            <PresentationCard />
            <FeaturedProperties />
            <Contact />
            <Footer />
        </>
    );
}
 
export default Home;