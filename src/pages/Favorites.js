import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
import MeetupItem from "../components/meetups/MeetupItem";

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;
    if(favoritesCtx.totalFavorites === 0){
        content = <p>You got no favorites yet. Start getting some</p>
    }else{
        content = <MeetupList meetups={favoritesCtx.favorites}/>
    }

    return(
        <div>
            <h1>My Favorites</h1>
            {content}
        </div>
    );
}

export default FavoritesPage;