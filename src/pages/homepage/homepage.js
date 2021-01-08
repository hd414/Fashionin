import React from 'react';
import './homepage.scss';
import Directory from '../../components/directory/DirectoryMenu';

const Homepage = () =>{
    return(
       <div className="homepage">
           <Directory/>
       </div>
       
    );
}

export default Homepage;