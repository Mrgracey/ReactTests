import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
    const [loadingState, setLoadingState] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setLoadingState(true);
        fetch(
            "https://react-midlevel-app-default-rtdb.firebaseio.com/meetups.json"
        ).then((response) => {
            return response.json();
        }).then((data) => {
            console.table(data);
            const meetups = [];

            for(const key in data){
                const meetup = {
                    id: key,
                    ...data[key]
                };

                meetups.push(meetup);
            }
            setLoadingState(false);
            setLoadedMeetups(meetups);
        });
    }, []);

    if (loadingState) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }
    return (
        <div>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </div>
    );
}

export default AllMeetupsPage;
