/**
 * Plays a song from the player.
 * Playing a song means changing the visual indication of the currently playing song.
 *
 * @param {String} songId - the ID of the song to play
 */
function playSong(songId) {
    
} 

/**
 * Creates a song DOM element based on a song object.
 */
 function createSongElement( id, title, album, artist, duration, coverArt ) {
    
    const titleEl = createElement("span", [title], ["song-info"]);

    const albumEl = createElement("span", [album], ["song-info"]);

    const artistEl = createElement("span", [artist], ["song-info"]);
    
    const durationEl = createElement("span", ["" + duration] ,["duration", "short-duration", ["song-info"]], {onclick: `console.log('${duration}')`});
  
    const coverImageArt = [coverArt];
    const imgEl = createElement("img", [] ,["album-art"], {src: coverImageArt, style: "border: 8px dotted yellow"});
  
    return createElement("td", ["Title: ", titleEl ,"Album: ", albumEl, "Artist: ", artistEl, "Duration: ", durationEl, imgEl],[], {id: `${id}`});
  }

  const listCreator = createElement("tr",[],[],{id: "songs-list"}); //creating song list
  document.getElementById('songs').append(listCreator); //implementing it in the html DOM
  const songsList = document.getElementById("songs-list"); //referring it for future games with it ;)
  function elementToDOM(element){ //insert element into the DOM!
      songsList.append(element);
  }

  player.songs.sort((a, b) =>((a.title > b.title) ? 1 : -1)); //sort songs list alphabetically by title

  for(const song of player.songs){
    elementToDOM(createSongElement(song.id, song.title, song.album, song.artist, song.duration, song.coverArt))
  }

 
/**
 * Creates a playlist DOM element based on a playlist object.
 */
function createPlaylistElement({ id, name, songs }) {
    const children = []
    const classes = []
    const attrs = {}
    return createElement("div", children, classes, attrs)
}

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
     for(const child of children) {
        element.append(child);
    }

    // Classes
    for(const cls of classes) {
        element.classList.add(cls);
    }
    
    // Attributes
    for(const attr in attributes) {
        element.setAttribute(attr, attributes[attr]);
    }
    return element;
}

/* CSS STYLES */


//body//
const bodySelector = document.getElementsByTagName("body");
/* document.body.style.backgroundImage = radialGradient(farthest-corner at 40px 40px,
    #f35 0%, #43e 100%);*/
     for(const body of bodySelector){
        const bodyStyle = body.style;
       // bodyStyle.backgroundImage = "URL('https://store.wvbs.org/wp-content/uploads/StoryofMoses_MP3_download.png')";
       // bodyStyle.backgroundRepeat = "no-repeat";
        //bodyStyle.backgroundSize = "100%";
        bodyStyle.backgroundImage = `radial-gradient(ellipse at top, #1DB954, transparent),
            radial-gradient(ellipse at bottom, #191414, transparent)`;
     }


//list//
const allSongs = document.getElementsByTagName("td");
for(const song of allSongs){
    const eachSongStyle = song.style;
    eachSongStyle.listStyle = 'none';
    //eachSongStyle.float = "left"
    // eachSongStyle.alignItems = "center"
    // eachSongStyle.display = "inline-flex"
    // eachSongStyle.justifyContent = "start"
    // eachSongStyle.flexDirection = "column"
    // eachSongStyle.lineHeight = "3em"
}

// list-text
const textOfSongs = document.getElementsByTagName("span");
for(const textOfSong of textOfSongs){
    const eachSongText = textOfSong.style;
    eachSongText.alignItems = "center"
    //eachSongText.marginLeft  "10px"
    eachSongText.color = "red"
}



//images//
const allImges = document.getElementsByTagName("img");
for(const img of allImges){
    const eachImgStyle = img.style;
   // eachImgStyle.border = "8px dotted yellow";
    eachImgStyle.padding = "5px"
    eachImgStyle.margin = "100px"
}






