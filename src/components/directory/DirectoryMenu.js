import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import './directory.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {SelectDirectorySections} from '../../redux/directory/directorySelector';

const Directory = ({sections}) => {


    
        return(
           <div className="directory-menu">
               {
                   sections.map(({id,...other} )=> {
                       return(
                           <MenuItem key={id} id={id} {...other}/>
                       )
                   })
               }
           </div>
        );
    
};

const mapStateToProps = createStructuredSelector({
  sections:SelectDirectorySections
})

export default connect(mapStateToProps)(Directory) ;