import React, {Component} from "react";
import {firestore} from "../firebase";
import Posts from "./Posts";

const collectIdsAndDocs = doc => {
    return {
        id: doc.id,
        ...doc.data()
    };
}

class Application extends Component{

    componentDidMount = async () =>{
        const snapshot = await firestore.collection('posts').get();
        const posts = snapshot.docs.map(collectIdsAndDocs);
        this.setState({posts});
    }

    state = {
        posts: []
    }

    handleCreate = async post => {
        const { posts } = this.state;

        const docRef = await firestore.collection('posts').add(post);
        const doc = await docRef.get();
        const newPost = collectIdsAndDocs(doc);

        this.setState({ posts: [newPost, ...posts] });
      };
    
    handleRemove = async id => {
        const allPosts = this.state.posts;

        const posts = allPosts.filter(post => post.id !== id);

        this.setState({posts})
    }
    render(){
        const {posts} = this.state;

        return (
            <main className="application">
                <h1>Blog App</h1>
                <Posts posts={posts} onDelete= {this.handleRemove}onCreate={this.handleCreate}>
                </Posts>
            </main>
        )
    }
}

export default Application;