import React, { Component } from 'react';
import Axios from 'axios';

class Blog extends Component {

    state={
        // blogData: {
        //     id: '1',
        //     title: 'lorem ipsum',
        //     content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown prin'        
        // }
    }

    componentDidMount(){
        Axios.get('http://localhost:8000/posts/view/'+this.props.location.state.id)
        .then(data=>{
            this.setState({
                blogData: data.data
            })
        })
    }

    render() { 
        
        return (
            <div className="blog">
                <div className="blogTitle">blog</div>
                {this.state.blogData?(
                    <>
                        <p>{this.state.blogData.title}</p>
                        <div className="data">
                            {this.state.blogData.content}
                        </div>
                    </>
                ):(<p>LOADING...</p>)}
            </div>
        );
    }
}
 
export default Blog;