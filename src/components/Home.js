import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const news = [
    {
        id: 1,
        title: "• Prof. Meisel receives Schilling professorship",
        shortDescription: "Prof. Meisel has been awarded the Schilling professorship for his work on computational neurology.",
    },
    {
        id: 2,
        title: "• New publication in Nature",
        shortDescription: "Our latest paper on the role of astrocytes in neural networks has been published in Nature.",
    },
    {
        id: 3,
        title: "• Upcoming conference at Charité",
        shortDescription: "We are organizing a conference on the future of computational neurology at Charité.",
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
