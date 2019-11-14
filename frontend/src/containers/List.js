import React, { Component } from 'react';
import axios from "axios";

class List extends Component {

    state={
        // listData: [
        //     {id: '1', title: 'lorem ipsum'},
        //     {id: '2', title: 'lorem ipsum'},
        //     {id: '3', title: 'lorem ipsum'},
        //     {id: '4', title: 'lorem ipsum'},
        //     {id: '5', title: 'lorem ipsum'},
        //     {id: '6', title: 'lorem ipsum'},
        // ]
    }

    blogHandler=(item)=>{
        // sends ajax request
        this.props.history.push({
            pathname: '/blog/'+item.id,
            state: {id: item.id}
        });
    }

    componentDidMount(){
        axios.get('http://localhost:8000/posts/')
        .then(data=>{
            console.log(data.data);
            this.setState({
                loader: false,
                listData: data.data
            })
        })
    }

    render() { 
        var list = this.state.listData? this.state.listData.map((item, index)=>{
            return(
                <div className="list" onClick={()=>this.blogHandler(item)} key={item.id}>
                    <p>{item.title}</p>
                    <p>></p>
                </div>
            )
        }):(
            <p>LOADING...</p>
        );
        return (
            <div className="listCon">
                <div className="heading">Blogs</div>
                {list}
            </div>
        );
    }
}
 
export default List;
