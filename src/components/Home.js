import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const news = [
    {
        id: 1,
        title: "• Christian Meisel selected for Schilling-professorship",
        shortDescription: <div> Christian Meisel has been selected for the chaired Schilling Foundation Professorship in Computational Neurology. <a href="https://www.bihealth.org/en/notices/computationale-neurologie-foerderzusage-fuer-professur-der-schilling-stiftung-an-christian-meisel"> Link to press release. </a>  </div>, 
    },
    {
        id: 2,
        title: "• New preprint on critical brain dynamics",
        shortDescription: <div> <a href="https://www.medrxiv.org/content/10.1101/2024.08.19.24312223v1">Link to paper.</a> </div>,
    },
    {
        id: 3,
        title: "• New preprint on a comprehensive latent-space EEG map",
        shortDescription: <div> <a href="https://www.medrxiv.org/content/10.1101/2024.10.25.24316133v1">Link to paper.</a> </div>,
    },
];

function Home() {
    const sliderRef = useRef(null); // Reference for the Slider component

    const goToNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext(); // Move to the next slide
        }
    };

    const goToPrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev(); // Move to the previous slide
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: false, // Disable default arrows explicitly
    };

    return (
        <section id="home">
            <p>
                Welcome to the Computational Neurology Lab at Charité Berlin. We
                work on translational computational approaches to better understand
                and treat neurological diseases.
            </p>
            <div className="news-container">
                <h2 className="section-title">News</h2>
                <div className="carousel-wrapper">
                    {/* Custom navigation buttons */}
                    <button className="custom-arrow custom-prev-arrow" onClick={goToPrev}>
                        <FaChevronLeft />
                    </button>
                    <Slider ref={sliderRef} {...settings} className="news-carousel">
                        {news.map((item) => (
                            <div className="news-item" key={item.id}>
                                <h3 className="news-title">{item.title}</h3>
                                <p className="news-description">{item.shortDescription}</p>
                            </div>
                        ))}
                    </Slider>
                    <button className="custom-arrow custom-next-arrow" onClick={goToNext}>
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Home;
