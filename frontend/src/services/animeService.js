import API from "./axios";



// GET ALL ANIME

export const getAllAnime = async()=>{

try{


const response =
await API.get("/anime");


return response.data;



}catch(error){


console.log(
"Get Anime Error:",
error
);


return [];


}


};





// GET SINGLE ANIME

export const getAnimeById = async(id)=>{


try{


const response =
await API.get(
`/anime/${id}`
);



return response.data;



}catch(error){


console.log(
"Get Anime By ID Error:",
error
);


return null;


}


};






// ADD ANIME

export const addAnime = async(data)=>{


try{


const response =
await API.post(
"/anime",
data
);



return response.data;



}catch(error){


console.log(
"Add Anime Error:",
error
);


throw error;


}


};






// DELETE ANIME

export const deleteAnime = async(id)=>{


try{


const response =
await API.delete(
`/anime/${id}`
);



return response.data;



}catch(error){


console.log(
"Delete Anime Error:",
error
);


throw error;


}


};





// UPDATE ANIME

export const updateAnime = async(id,data)=>{


try{


const response =
await API.put(
`/anime/${id}`,
data
);



return response.data;



}catch(error){


console.log(
"Update Anime Error:",
error
);


throw error;


}


};