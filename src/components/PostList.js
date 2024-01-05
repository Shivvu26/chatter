import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "./PostItem";
import { getPosts } from "../redux/action";
import image from "../sorting.png";

const PostList = (props) => {
    const dispatch = useDispatch();

    let posts = useSelector(state => state?.posts);
    useEffect(() => {
        dispatch(getPosts());
    }, []);

    const sortItems = () => {
        const sortedList = [...posts].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        console.log(sortedList);
        dispatch({
            type: "GET_POSTS",
            payload: sortedList
        })
    }

    return (
        <div className="posts container">
            <div className="sorting" onClick={() => sortItems()}><img src={image}  alt="sort"/></div>
            {posts.map((post, index) => {
                return <PostItem key={index} {...post} />
            })}

        </div>
    );
};

export default PostList;
