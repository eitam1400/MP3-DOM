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
    
    const titleEl = createElement("span", [title]);

    const artistEl = createElement("span", [artist]);
    
    const durationEl = createElement("span", ["" + duration] ,["duration", "short-duration"], {onclick: `console.log('${duration}')`});
  
    const coverImageArt = [coverArt];
    const imgEl = createElement("img", [] ,["album-art"], {src: coverImageArt});
  
    return createElement("li", ["Title: ", titleEl ,"Artist: ", artistEl, "Duration: ", durationEl, imgEl],[], {id: `${id}`});
  }

  const listCreator = createElement("ul",[],[],{id: "songs-list"}); //creating song list
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

/* STYLES */
//body 
/* document.body.style.backgroundImage = radialGradient(farthest-corner at 40px 40px,
    #f35 0%, #43e 100%);*/


//list





