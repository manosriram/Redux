import { FETCH_POSTS, NEW_POST } from "../types";

return function fetchPosts() {
    return function(dispatch) {
        const res1 = await fetch("https://jsonplaceholder.typicode.com/posts");
        const res2 = await res1.json();
        this.setState({ posts: res2 });
    }
}