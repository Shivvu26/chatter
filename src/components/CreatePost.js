import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteALLPost, getPosts, putPost } from '../redux/action';
import axios from 'axios';


function CreatePost(props) {
    const dispatch = useDispatch();

    const [post, setPost] = useState("");
    const posts = useSelector(state => state.posts);

    const submitPost = (e) => {
        e.preventDefault();
        dispatch(putPost(post));
        setPost("");
    }

    const deleteALLPost = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete all posts?");
        if (!confirmDelete) {
            return;
        }
        const deleteRequests = posts.map((post) => {
            const url = `https://mapi.harmoney.dev/api/v1/messages/${post.id}`;
            return axios.delete(url, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "slLxLQ6Ekn_l3nbp",
                },
            });
        });

        try {
            await Promise.all(deleteRequests);
            dispatch(getPosts())
            console.log("All messages deleted successfully.");
        } catch (error) {
            console.error("Error deleting messages:", error);
        }
    }

    return (
        <div className="container mt-3">
            <h5 className="form-label">
                Type something in the box below, then hit "Post!"
            </h5>
            <form className='d-flex' onSubmit={submitPost}>
                <div className="mb-3 col-6">
                    <textarea
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={post}
                        onChange={(e) => setPost(e.target.value)}
                    />
                </div>
                <button disabled={!post.length} type="submit" className="btn btn-primary">
                    Post!
                </button>

                <span onClick={() => deleteALLPost()} className="btn btn-danger">
                    Delete All
                </span>
            </form>
        </div>
    );
}

export default CreatePost;
