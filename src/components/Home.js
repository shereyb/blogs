//import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
import Usefetch from "./Usefetch";


const Home = () => {
     const { data: blogs , isLoading , error} = Usefetch ('http://localhost:8006/blogs');
  
     return (  
        <div className="home">
            {error && <div>{ error }</div>}
            {isLoading && <div>Loading.....</div>}
           {blogs && <Bloglist blogs={blogs} title="All Blogs!" />}
        </div>
    );
}
 
export default Home;