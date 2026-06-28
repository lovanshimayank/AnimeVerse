import "./WhyAnimeVerse.css";

function WhyAnimeVerse() {

const features=[

{
emoji:"📺",
title:"Watch",
text:"Discover amazing anime and trailers."
},

{
emoji:"📖",
title:"Explore",
text:"Read stories and character journeys."
},

{
emoji:"🛍",
title:"Collect",
text:"Buy premium anime merchandise."
},

{
emoji:"❤️",
title:"Wishlist",
text:"Save your favorite collectibles."
}

];

return(

<section className="why">

<h2>Why AnimeVerse?</h2>

<div className="why-grid">

{features.map((item,index)=>(

<div
key={index}
className="why-card"
>

<h1>{item.emoji}</h1>

<h3>{item.title}</h3>

<p>{item.text}</p>

</div>

))}

</div>

</section>

);

}

export default WhyAnimeVerse;