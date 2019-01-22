import React from 'react';
import Select from 'react-select'



const SelectCountry = ({state , changeHandler, finalizeProject , previuosDescription}) => (
    <div>
        <h4 className="addProjectHeading">Mention Your Country.</h4>
         <p className="addProjectHeading">You cannot edit this later.</p>
      <Select
        options={state.options}
        value={state.value}
        onChange={changeHandler}
      />
      <div>
            
            <form onSubmit={previuosDescription}>
               <div className="previous">
                    <button type="submit" className="btn world-btn float-left"> {"<--"} Previous</button>
                   
               </div>
            </form>
            
            <form onSubmit={finalizeProject}>

               <div className="next">
                  <button type="submit" className="btn world-btn float-right">Continue</button>
                  
                    
               </div>
            </form>
            
               </div>
     </div>
)
export default SelectCountry;