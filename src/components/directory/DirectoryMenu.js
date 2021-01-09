import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import './directory.scss';
import Sections from './section';

class Directory extends React.Component{

    constructor(){
        super();
        this.state = {
           sections:Sections,
        }
    }

    render(){
        return(
           <div className="directory-menu">
               {
                   this.state.sections.map(({id,...other} )=> {
                       return(
                           <MenuItem key={id} id={id} {...other}/>
                       )
                   })
               }
           </div>
        );
    }
};



export default Directory;