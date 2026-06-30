import { Swiper, SwiperSlide } from "swiper/react";

import {
Navigation,
Pagination,
Autoplay
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SummarySlider.css";


function SummarySlider({slides}){


if(!slides || slides.length===0)
return null;


return (

<div className="summary-slider">


<h1>
Anime Summary
</h1>


<Swiper

modules={[
Navigation,
Pagination,
Autoplay
]}

navigation

pagination={{
clickable:true
}}

autoplay={{
delay:3500
}}

loop

>


{
slides.map((slide,index)=>(


<SwiperSlide key={index}>


<div className="summary-card">


<p>
{slide}
</p>


</div>


</SwiperSlide>


))
}



</Swiper>


</div>

);

}


export default SummarySlider;