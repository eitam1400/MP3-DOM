/** CODE **
 * Plays a song from the player.
 * Playing a song means changing the visual indication of the currently playing song.
 *
 * @param {String} songId - the ID of the song to play
 */

 'use strict';

 

 //---------------------------------------------------------------------------------------------------------------------------//


//---- ** Event Listeners ** ---- // AT THE TOP OF THE SCRIPT CUZ  (1) it improves the performances  (2) it avoids memory leaks !!!!!!!********

//---------------------------------------------------------------------------------------------------------------------------//

//mouse hover pics and text // USING WEAKMAP

// window.handleMouseEnterAlbumId = function (id) {
//   const listItemEl = listItemElByAlbumId(id);
//   listItemEl.style.height = listItemEl.offsetHeight + HEIGHT_INCREASE + "px";
//   listItemEl.style.width = listItemEl.offsetWidth + WIDTH_INCREASE + "px";
// };

// window.handleMouseLeaveAlbumId = function (id) {
//   const listItemEl = listItemElByAlbumId(id);
//   listItemEl.style.height = listItemEl.offsetHeight - HEIGHT_INCREASE + "px";
//   listItemEl.style.width = listItemEl.offsetWidth - WIDTH_INCREASE + "px";
// };

// const listItemElByAlbumId = (albumId) =>
//   document.querySelector(`tr.td[albumId="${albumId}"]`);

// function renderAlbumArt(albumEntry) {
//   const { id, title, album, artist, duration, coverArt } = albumEntry;
//   return `
//   <div class="song-image" albumid="${id}"
//     onmouseenter="handleMouseEnterAlbumId(${id})"
//     onmouseleave="handleMouseLeaveAlbumId(${id})">
//     <p>${title}</p>
//     <img src="${coverArt}" class="album-art-image" >
//   </div>
//   `;
// }

// function renderSong(albumEntry) {
//   const { id, title, album, artist, duration, coverArt } = albumEntry;
//   return `
//   <tr class="songs-list" albumid="${id}" onclick="handleSongClicked(${id})">
//       <p>ID: ${id}</p>
//       <p>title: ${title}</p>
//       <p>album: ${album}</p>
//       <p>artist: ${artist}</p>
//       <p>duration: ${duration}</p>
//   </tr>
// `;
// }

// const songList = (songs) => `
//   <section>
//     ${songs.map(renderSong)}
//   </section>
// `;

// const albumList = (songs) => `
//   <section id="album-container">
//     ${songs.map(renderAlbumArt)}
//   </section>
// `;

// function render() {
//   const songContainerEl = document.querySelector("div#songs");
//   songContainerEl.innerHTML += songList(player.songs);
//   const albumContainerEl = document.querySelector("div#albums");
//   albumContainerEl.innerHTML += albumList(player.songs);
// }

// render();


//---------------------------------------------------------------------------------------------------------------------------//



//---------------------------------------------------------------------------------------------------------------------------//


function playSong(songId) {
    // const playedSong = document.getElementById(songId);
    // const songPlayingShadow = createElement("div",[],[],{id: 'song-playing'})


//- - - - - - - - - - - - - - -- - -  - --  --  - -- - - - - --  - -- - - -- - - - - - - -- - - - - - - - - - -  -- - - - // private variable/s

    
} 

//---------------------------------------------------------------------------------------------------------------------------//


/**
 * Creates a song DOM element based on a song object.
 */
 function createSongElement( id, title, album, artist, duration) {
    
    const titleEl = createElement("span", [title], ["song-info"]);

    const albumEl = createElement("span", [album], ["song-info"]);

    const artistEl = createElement("span", [artist], ["song-info"]);
    
    const durationEl = createElement("span", ["" + duration] ,["duration", "short-duration", ["song-info"]], {onclick: `console.log('${duration}')`});

    //- - - - - - - - - - - - - - -- - -  - --  --  - -- - - - - --  - -- - - -- - - - - - - -- - - - - - - - - - -  -- - - - // PRIVATE variable/s

    
    return createElement("td", ["Title: ", titleEl, "\n" , "Album: ", albumEl, "\n", "Artist: ", artistEl, "\n", "Duration: ", durationEl],[`${id}`], {id: `${id}`});
  }

//---------------------------------------------------------------------------------------------------------------------------//

// CREATIN THE TABLE  of songs info!//

const songsList = createElement("tr",[],[],{id: "songs-list"}); //creating song list

const tbody = createElement("tbody", [songsList])

const table = createElement("table", [tbody])

//- - - - - - - - - - - - - - -- - -  - --  --  - -- - - - - --  - -- - - -- - - - - - - -- - - - - - - - - - -  -- - - - // public variable/s

document.getElementById("songs").append(table)


//---------------------------------------------------------------------------------------------------------------------------//


//sort songs && playlists list alphabetically by title//

  player.songs.sort((a, b) =>((a.title > b.title) ? 1 : -1)); 

  player.playlists.sort((a, b) =>((a.name > b.name) ? 1 : -1));


//---------------------------------------------------------------------------------------------------------------------------//


 //---- ** INSERT SONG IMAGE TO DOM ** ---- //

 //create song image element

  let i = 1, layer = player.songs.length; // i is initializer, layer is the layers number need to be assigned...

//- - - - - - - - - - - - - - -- - -  - --  --  - -- - - - - --  - -- - - -- - - - - - - -- - - - - - - - - - -  -- - - - // public variable/s

  function createSongElementIMAGE(song){

    const coverImageArt = song['coverArt'];
    let random1 = Math.round(Math.random()*150), random2 = Math.round(Math.random()*250); //number generator
    let color = `rgb(${random1},${random2},${random1})` //color generator

//- - - - - - - - - - - - - - -- - -  - --  --  - -- - - - - --  - -- - - -- - - - - - - -- - - - - - - - - - -  -- - - - // PRIVATE variable/s

    const imgEl = createElement("img", [] ,["album-art", song.id,  /* (layer > (player.songs.length)/2) ? ("layer_" + i) : ("layer_" + i) */], {src: coverImageArt, style: `border: 8px dotted ${color}` }); //creating image and insertin random color to border of it
    layer--;

    return createElement("div", [imgEl], ["song-image", `${song.id}`, (layer > (player.songs.length)/2) ? ("layer_" + i++) : ("layer_" + i--) ], {name: song.title}) // run over the rray /2 cuz in this case this is the max it will run.. then when layer is bigger than the array length / 2 it means it still havent arrived the middle item... when it arrive to middle (the i increases everytime till middle then it indicates switch and decreases).
  }

//---------------------------------------------------------------------------------------------------------------------------//


  // insert images to DOM
  
  const imagesContainer = createElement("div", [], [], {id: "images-container"})

//- - - - - - - - - - - - - - -- - -  - --  --  - -- - - - - --  - -- - - -- - - - - - - -- - - - - - - - - - -  -- - - - // public variable/s

document.getElementById('songs').insertBefore(imagesContainer, table); // table.before(imageContainer)

  
  for(const song of player.songs){ 
     imagesContainer.append(createSongElementIMAGE(song))
  }


//---------------------------------------------------------------------------------------------------------------------------//

/**----- insert play button to images -----**/


// const playerButton = createElement("img", [], ["player-button-image"], {src: "https://www.clipartmax.com/png/middle/430-4305244_see-also-related-to-unique-red-start-button-button-transparent-video-player.png"})
// play button

// play_button = document.createElement("div");
// play_button.className = "play-button"
// play_button.style.cssText = `background-color: #FFFFFF; min-height: 20px; min-width: 20px;`
// for (let each of document.querySelectorAll('.song-image')) {

//   console.log(each)
//   each.appendChild(play_button)
// }

const imges = Array.from(document.querySelectorAll('.song-image'));
console.log(["ALL IMAGES"], imges)
const playerButton = createElement("img", [], ["player-button-image"], {src: "https://www.clipartmax.com/png/middle/430-4305244_see-also-related-to-unique-red-start-button-button-transparent-video-player.png"})
//- - - - - - - - - - - - - - -- - -  - --  --  - -- - - - - --  - -- - - -- - - - - - - -- - - - - - - - - - -  -- - - - // public variable/s
imges.forEach(img => img.append(playerButton)); 


    
    
    
  // imges.forEach(img => img.addEventListener('click', playSong), {once: true })

  // function play(ev){
  //   ev.preventDefault();
  //   console.log(ev.target.parentNode.name)
  //   ev.target.parentNode.prepend(createElement('audio', [], [], {src:"./songs/" + "thelastcall" + '.mp3' }))
  //   ev.target.append(createElement('div', [], ['song-loader']))
  //   document.querySelector('.song-loader').classList.add('loading')
  // }



//---------------------------------------------------------------------------------------------------------------------------//


// pics layers function

function picsLayering(player){
  let layerSaver; //var that saves the imges layer number
  for(let i=1; i < (player.songs.length)/2 +1; i++) //layers num will be max the img amount /2 +1 cuz i start from 1 cuz resembles layers
  {
    layerSaver = document.getElementsByClassName(`layer_${i}`) //get all images with same layer class
    for(let img of layerSaver){
       img.setAttribute("style", "position: relative; " + "z-index:" + (i + 5) + ';') //set their z-index attribute to be the same...
    }
  }
}


picsLayering(player);



//---------------------------------------------------------------------------------------------------------------------------//


  //---- ** INSERT SONG TEXT TO DOM TABLE ** ---- //
  

  //insert element into the DOM inside the songs table!
  function elementToDOMTable(element){ 
    document.getElementById('songs-list').append(element);
  }

 for(const song of player.songs){
    elementToDOMTable(createSongElement(song.id, song.title, song.album, song.artist, secondsToMinutesConverter(song.duration))) //implementing song list in the html DOM
  }

//---------------------------------------------------------------------------------------------------------------------------//

  //---- ** time converter function ** ---- //

  function secondsToMinutesConverter(seconds){
      return Math.floor(seconds/60) + ":" + seconds%60;
  }

//---------------------------------------------------------------------------------------------------------------------------//
 

/**
 * Creates a playlist DOM element based on a playlist object.
 */

function createPlaylistElement(playlist) {
    const playlistId = createElement("span", [playlist.id], ["song-info"]);
    const playlistName = createElement("span", [playlist.name], ["song-info"]);
    const playlistSongs = createElement("span", [playlist.songs.length], ["song-info"]);

//- - - - - - - - - - - - - - -- - -  - --  --  - -- - - - - --  - -- - - -- - - - - - - -- - - - - - - - - - -  -- - - - // PRIVATE variable/s

    return createElement("div", ["Name: ", playlistName, "\n", "Songs: ", playlistSongs, "\n", "duration: ", playlistDuration(playlist), "\n"], [], {id: playlistId});
}

function playlistDuration(playlist){
    let totalDuration = 0;
    playlist.songs.forEach((playlistSong) => { player.songs.forEach((playerSong) => { (playlistSong === (playerSong.id)) ? totalDuration += playerSong.duration : totalDuration })  } ); // run the playlist songs array and the player songs array... if the id matches.. the sum var adds up the songs player duration value.. then it returns the total duration of the playlist in mm:ss!
    return secondsToMinutesConverter(totalDuration);
    }

function elementToDOM(element){
    const playlists = document.getElementById('playlists')
    playlists.append(element)
}

for(const playlist of player.playlists){
    elementToDOM(createPlaylistElement(playlist))
}


//---------------------------------------------------------------------------------------------------------------------------//

/**----- linkin song text hover to its pic -----**/








//---------------------------------------------------------------------------------------------------------------------------//


/**
 * Creates a new DOM element.
 *
 * Example usage:
 * createElement("div", ["just text", createElement(...)], ["nana", "banana"], {id: "bla"})
 *
 * @param {String} tagName - the type of the element
 * @param {Array} children - the child elements for the new element.
 *                           Each child can be a DOM element, or a string (if you just want a text element).
 * @param {Array} classes - the class list of the new element
 * @param {Object} attributes - the attributes for the new element
 */
function createElement(tagName, children = [], classes = [], attributes = {}) {
    const element = document.createElement(tagName);

     // Children
        element.append(...children);
    

    // Classes
        element.classList.add(...classes);
   
    
    // Attributes
    for(const attr in attributes) {
        element.setAttribute(attr, attributes[attr]);
    }
    return element;
}






//---------------------------------------------------------------------------------------------------------------------------//







//---- ** CSS Styles ** ---- //

//---------------------------------------------------------------------------------------------------------------------------//


//html
const htmlSelector = document.getElementsByTagName("html");

const htmlStyle = htmlSelector[0].style;

htmlStyle.height = "100vh"

//---------------------------------------------------------------------------------------------------------------------------//


//body//
const bodySelector = document.getElementsByTagName("body");
/* document.body.style.backgroundImage = radialGradient(farthest-corner at 40px 40px,
    #f35 0%, #43e 100%);*/
        const bodyStyle = bodySelector[0].style;
       // bodyStyle.backgroundImage = "URL('https://store.wvbs.org/wp-content/uploads/StoryofMoses_MP3_download.png')";
       // bodyStyle.backgroundRepeat = "no-repeat";
        //bodyStyle.backgroundSize = "100%";

        // bodyStyle.backgroundImage = `radial-gradient(ellipse at top, #1DB954, transparent),
        //     radial-gradient(ellipse at bottom, #191414, transparent)`;

        bodyStyle.height = "100vh"
        bodyStyle.overflowX = "hidden"
        bodyStyle.overflowY = "hidden"
        bodyStyle.background = `url("https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"), #111111`;
        bodyStyle.animation = "backgroundScroll 70s linear infinite";
        bodyStyle.margin = "0"
        bodyStyle.padding = "0"
        bodyStyle.height = "100%"
        bodyStyle.width = "100%"
        bodyStyle.position = "fixed"
//---------------------------------------------------------------------------------------------------------------------------//


//list//
const allSongs = document.getElementsByTagName("td");

for(const song of allSongs){
    const eachSongStyle = song.style;
    eachSongStyle.fontFamily = "Garamond, serif"
    eachSongStyle.fontSize = "20px"
    eachSongStyle.color = "blue"
    //eachSongStyle.float = "left"
    // eachSongStyle.alignItems = "center"
    // eachSongStyle.display = "inline-flex"
    // eachSongStyle.justifyContent = "start"
    // eachSongStyle.flexDirection = "column"
    // eachSongStyle.lineHeight = "3em"
}


//---------------------------------------------------------------------------------------------------------------------------//


// songs-content-text
const textOfSongs = document.getElementsByTagName("span");
for(const textOfSong of textOfSongs){
    const eachSongText = textOfSong.style;
    eachSongText.alignItems = "center"
    //eachSongText.marginLeft  "10px"
    eachSongText.color = "white"
    eachSongText.margin = "10px 10p 2px 2px"
    eachSongText.padding = "2px 10px 4px 1px"
    eachSongText.opacity = "0.5"
    eachSongText.textAlign = "center"
    eachSongText.style ="bold"
    // eachSongText.display = "block"
    
}


//---------------------------------------------------------------------------------------------------------------------------//


//images//
const allImgesContainer = document.getElementById("images-container");
const allImges = document.getElementsByClassName("song-image");

allImgesContainer.style.marginTop="25px"

for(const img of allImges){
    const eachImgStyle = img.style;
    
    eachImgStyle.display = "inline-block"
    eachImgStyle.width = "190px"
    eachImgStyle.margin = "0 0 10% 0px"

   // eachImgStyle.border = "8px dotted yellow";
    // eachImgStyle.padding = "5px"
    // eachImgStyle.margin = "100px"
    // eachImgStyle.height = "75px";
    // eachImgStyle.width = "75px";
  }
  

//---------------------------------------------------------------------------------------------------------------------------//


//songs list//




//---------------------------------------------------------------------------------------------------------------------------//


//playlists

const playlistsSelector = document.getElementById("playlists")

const playlistsStyle = playlistsSelector.style;

playlistsStyle.border = "5px solid gold"
playlistsStyle.borderRadius = "20%"

playlistsStyle.color = "white"



playlistsStyle.paddingRight = "0px"
playlistsStyle.marginRight = "0px"
playlistsStyle.display = "flex"
playlistsStyle.justifyContent = "center"
playlistsStyle.marginLeft="500px"
playlistsStyle.marginTop="25px"
playlistsStyle.display = "block"
playlistsStyle.textAlign = "center"
playlistsStyle.position="fixed"
playlistsStyle.float="right"

playlistsStyle.transformOrigin = "top left"
playlistsStyle.transform = "(-90deg)"

//---------------------------------------------------------------------------------------------------------------------------//





