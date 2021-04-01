import {SET_ALBUMS,ADD_ALBUMS,SET_ARTISTS,ADD_ARTISTS,SET_PLAYLIST,ADD_PLAYLIST} from "../utils/constants"
import {get} from '../utils/api'

export const setAlbums = (albums)=>{
    return({
        type:SET_ALBUMS,
        albums
    })
}
export const addAlbums = (albums)=>{
    return({
        type:ADD_ALBUMS,
        albums
    })
}
export const setArtists = (artists)=>{
    return({
        type:SET_ARTISTS,
        artists
    })
}
export const addArtists = (artists)=>{
    return({
        type:ADD_ARTISTS,
        artists
    })
}
export const setPlayList = (playlists)=>{
    return({
        type:SET_PLAYLIST,
        playlists
    })
}
export const addPlaylist = (playlists)=>{
    return({
        type:ADD_PLAYLIST,
        playlists
    })
}
export const initiateGetResult = (searchTerm) =>{
    return async (dispatch)=>{
        try{
            const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
                searchTerm
              )}&type=album,playlist,artist`;
              const result = await get(API_URL);
              console.log(result)
              const {albums,artists,playlists} = result;
              dispatch(setAlbums(albums))
              dispatch(setArtists(artists))
              dispatch(setPlayList(playlists))
        }catch(error){
            console.log("error",error)
        }
    }
}
export const initiateLoadMoreAlbums = (url) => {
    return async (dispatch) => {
      try {
        console.log('url', url);
        const result = await get(url);
        console.log('categoriess', result);
        return dispatch(addAlbums(result.albums));
      } catch (error) {
        console.log('error', error);
      }
    };
  };
  export const initiateLoadMoreArtists = (url) => {
    return async (dispatch) => {
      try {
        console.log('url', url);
        const result = await get(url);
        console.log('categoriess', result);
        return dispatch(addArtists(result.artists));
      } catch (error) {
        console.log('error', error);
      }
    };
  };
  export const initiateLoadMorePlaylist = (url) => {
    return async (dispatch) => {
      try {
        console.log('url', url);
        const result = await get(url);
        console.log('categoriess', result);
        return dispatch(addPlaylist(result.playlists));
      } catch (error) {
        console.log('error', error);
      }
    };
  };