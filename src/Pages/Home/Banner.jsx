import React from 'react';
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg';
import img6 from '../../assets/images/banner/6.jpg';

const Banner = () => {
    return (
			<div>
				<div className="carousel w-full">
					<div id="slide1" className="carousel-item relative w-full">
						<img
							src={img1}
							className="w-full"
						/>
						<div className="absolute flex gap-4 transform -translate-y-1/2 bottom-20 right-20">
							<a href="#slide4" className="btn btn-circle">
								❮
							</a>
							<a href="#slide2" className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
					<div id="slide2" className="carousel-item relative w-full">
						<img
							src={img2}
							className="w-full"
						/>
						<div className="absolute flex gap-4 transform -translate-y-1/2 bottom-20 right-20">
							<a href="#slide1" className="btn btn-circle">
								❮
							</a>
							<a href="#slide3" className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
					<div id="slide3" className="carousel-item relative w-full">
						<img
							src={img3}
							className="w-full"
						/>
						<div className="absolute flex gap-4 transform -translate-y-1/2 bottom-20 right-20">
							<a href="#slide2" className="btn btn-circle">
								❮
							</a>
							<a href="#slide4" className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
					<div id="slide4" className="carousel-item relative w-full">
						<img
							src={img4}
							className="w-full"
						/>
						<div className="absolute flex gap-4 transform -translate-y-1/2 bottom-20 right-20 ">
							<a href="#slide3" className="btn btn-circle">
								❮
							</a>
							<a href="#slide5" className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
					<div id="slide5" className="carousel-item relative w-full">
						<img
							src={img5}
							className="w-full"
						/>
						<div className="absolute flex gap-4 transform -translate-y-1/2 bottom-20 right-20">
							<a href="#slide4" className="btn btn-circle">
								❮
							</a>
							<a href="#slide6" className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
					<div id="slide5" className="carousel-item relative w-full">
						<img
							src={img6}
							className="w-full"
						/>
						<div className="absolute flex gap-4 transform -translate-y-1/2 bottom-20 right-20">
							<a href="#slide6" className="btn btn-circle">
								❮
							</a>
							<a href="#slide1" className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Banner;