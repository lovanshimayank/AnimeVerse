const Anime = require("../models/Anime");


exports.addAnime = async (req,res)=>{

try{


const {
title,
description,
genre,
poster,
trailer,
summarySlides,
characters
}=req.body;



const anime = await Anime.create({

title,

description,

genre,

poster,

trailer,


summarySlides:
Array.isArray(summarySlides)
?
summarySlides.filter(
slide=>slide.trim()!=""
)
:
[],


characters:
Array.isArray(characters)
?
characters.filter(
char=>char.name && char.image
)
:
[],


});



res.status(201).json({

success:true,

anime

});



}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}


};