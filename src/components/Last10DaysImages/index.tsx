import { Image } from "@/types"
import { useRouter } from "next/router"

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'bootstrap/dist/css/bootstrap.min.css';

type Last10DaysImagesProps = {
    images: Image[]
}


const Last10DaysImages = ({ images }: Last10DaysImagesProps) => {
    const router = useRouter();

    return (
        <div className="container">
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {images.map((image, index) => (
                    <SwiperSlide>
                        <div className="carousel-inner" key={`last-10-day-image-${image.title}`}>
                            <img className="d-block w-100" src={image.url} alt={image.title} onClick={() => router.push(`/image/${image.date}`)}></img>
                            <h3>{image.title}</h3>
                            <h5>{image.copyright}</h5>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

export default Last10DaysImages