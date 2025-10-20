import React from 'react'
import CommonHead from '../common/CommonHead'
import SingleCar from '../common/SingleCar'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
import { CarData } from '../../assets/CarData/CarData';

const Browse = () => {
    const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [{ breakpoint: 1024, settings: { slidesToShow: 3 } }, { breakpoint: 768, settings: { slidesToShow: 1 } }, { breakpoint: 480, settings: { slidesToShow: 1 } }]
  };

  return (
    <>
        <main id='Browse' className='mt-[100px]'>
            <div className="container">
                <div id="Browse-Row">
                    {/* ----------------Common Head--------------------- */}
                    <CommonHead text={'Browse By Type'} linkName={'View All'}/>

                    {/* ---------------- Slider--------------------- */}
                    <section className='mt-10'>
                        <Slider {...settings}>
                            {CarData.map((item , i)=>(
                                <SingleCar key={i} img={item.image} type={item.type} title={item.title} desc={item.description} />
                            ))}

                        </Slider>
                    </section>

                </div>
            </div>
        </main>
    </>
  )
}

export default Browse