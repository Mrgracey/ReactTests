import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    delFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
        
    }

    function delFavoriteHandler(meetupId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
        
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        delFavorite: delFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
        
        
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;