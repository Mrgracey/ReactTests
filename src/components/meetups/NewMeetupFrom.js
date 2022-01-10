import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupFrom(props) {
    const titleInputRef = useRef();
    const imgInputRef = useRef();
    const addressInputRef = useRef();
    const descInputRef = useRef();

    function submitHandler(e) {
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImg = imgInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDesc = descInputRef.current.value;

        const MeetupData = {
            title: enteredTitle,
            img: enteredImg,
            address: enteredAddress,
            desc: enteredDesc,
        };

        props.onAddMeetup(MeetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input
                        type="text"
                        required
                        id="title"
                        ref={titleInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image Url</label>
                    <input type="url" required id="image" ref={imgInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        required
                        id="address"
                        ref={addressInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="desc">Description</label>
                    <textarea
                        id="desc"
                        required
                        rows="5"
                        ref={descInputRef}
                    ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupFrom;
