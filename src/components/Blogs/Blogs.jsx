import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [bolgs, setBlogs]=useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div>
        </div>
    );
};

export default Blogs;