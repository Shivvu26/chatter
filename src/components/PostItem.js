import { useState } from "react";
import { timeStampConversion } from "../utils";
import image from "../chat-box.png";
import { useDispatch } from "react-redux";
import { deletePost } from "../redux/action";

const PostItem = (props) => {
    const dispatch = useDispatch();
    let { text, source, timestamp, id } = props;


    return (
        <section className="post-card">
            <h5><img src={image}  alt="message"/> {source} - <span className="grayed-text">{timeStampConversion(timestamp)}</span>
            <span className="delete-btn" onClick={() => dispatch(deletePost(id))}>Delete</span>
            </h5>
            <p className="grayed-text">{text}</p>
            <hr />
        </section>
    );
};

export default PostItem;
