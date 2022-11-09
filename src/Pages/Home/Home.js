import React from 'react';
import Gallery from './Gallery/Gallery';
import Services from './Services/Services';
import Slider from './Slider/Slider';
import TeamMembers from './TeamMembers/TeamMembers';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Gallery></Gallery>
            <TeamMembers></TeamMembers>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;