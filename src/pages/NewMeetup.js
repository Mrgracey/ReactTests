import { useNavigate } from 'react-router-dom';

import NewMeetupFrom from "../components/meetups/NewMeetupFrom";

function NewMeetupPage() {

    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch(
            "https://react-midlevel-app-default-rtdb.firebaseio.com/meetups.json",
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/', { replace: true });
        });
    }
    return (
        <div>
            <h1>Add New Meetup</h1>
            <NewMeetupFrom onAddMeetup={addMeetupHandler} />
        </div>
    );
}

export default NewMeetupPage;
