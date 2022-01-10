import { useContext } from 'react';

import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
    const favoriteCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if(itemIsFavorite){
            favoriteCtx.delFavorite(props.id);
        }else{
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                address: props.address,
                desc: props.desc,
                img: props.img
            })
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.img} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.desc}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;
