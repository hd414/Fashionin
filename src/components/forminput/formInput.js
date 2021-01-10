import React from 'react'
import './formInput.scss';

const FormInput = ({HandeleChange,label,...otherprops}) =>{
    return(
      <div className="group">
          <input 
          className="form-input" 
          onChange={HandeleChange}
          {...otherprops}/>
          {
              label?
              <label className={`${otherprops.value.length ? 'shrink' : ''} form-input-label`}>
                 {label}
              </label>
              :null
          }
      </div>
    );
}

export default FormInput;