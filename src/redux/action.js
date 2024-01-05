import axios from "axios";
const API_KEY = ' slLxLQ6Ekn_l3nbp';

export const putPost = (msg, cb) => {
    return dispatch => {
        axios.post('https://mapi.harmoney.dev/api/v1/messages/',
            {
                text: msg
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": API_KEY
                }
            }
        )
            .then((res) => {
                if (res.status === 201 && res.data) {
                    dispatch(getPosts());
                }
            })
            .catch((error) => console.error('Error in posting:', error));
    }
}


export const getPosts = () => {
    return dispatch => {
        axios.get('https://mapi.harmoney.dev/api/v1/messages/',
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": API_KEY
                }
            }
        )
            .then((res) => {
                if (res.status === 200) {
                    dispatch({
                        type: "GET_POSTS",
                        payload: res.data
                    })
                }
            })
            .catch((error) => console.error('Error fetching posts:', error));
    }
}

export const deletePost = (id) => {
    return (dispatch) => {
        axios
            .delete(`https://mapi.harmoney.dev/api/v1/messages/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": API_KEY,
                },
            })
            .then((res) => {
                if (res.status === 204) {
                    dispatch(getPosts());
                }
            })
            .catch((error) => console.error('Error deleting post:', error));
    };
};



