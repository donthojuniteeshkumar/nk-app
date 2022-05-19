import React from "react";
import HeroSlider from "react-slick";

// Import CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
    const settings = {
        arrows: true,
        centerMode: true,
        centerPadding: "200px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
      const images = [
          "https://images.unsplash.com/photo-1644982649363-fae51da44eac?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=6000",
          "https://images.unsplash.com/photo-1652911942944-572e532c8cf2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600",
          "https://images.unsplash.com/photo-1652940020904-8415ba8008da?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435",
          "https://images.unsplash.com/photo-1652695871803-532ad63dd466?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
          "https://images.unsplash.com/photo-1652489230911-702248f19631?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464",
    
        ];
    
    return ( 
    <>
     <HeroSlider {...settings}>
         {images.map((image) => (
            <div className="w-20 h-80">
                <img src={image} alt="testing" className="w-full h-full" />
            </div> 
         ))}
     </HeroSlider>
    </>
    );
};

export default HeroCarousal;
