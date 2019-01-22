
import React from 'react';

const AddDescription = ({state , previuosCategory , nextCountry , onChangeDescription}) => (
    <div>
        <h4 className="addProjectHeading">Describe what you’ll be creating.</h4>
         <p className="addProjectHeading">And don’t worry, you can edit this later, too.</p>
         <div>
        <textarea rows="4" cols="70" value={state.description} onChange={onChangeDescription.bind(this)}>
        </textarea>
        <span className="float-right"> {state.description.length === 0 ? 0 : state.description.match(/\S+/g).length}/150</span>
        </div>
        <div>
            
             <form onSubmit={previuosCategory}>
                <div className="previous">
                     <button type="submit" className="btn world-btn float-left"> {"<--"} Previous</button>
                    
                </div>
             </form>
             
             <form onSubmit={nextCountry}>

                <div className="next">
                    <button type="submit" className="btn world-btn float-right">{"-->"}Next</button>
                     
                </div>
             </form>
             
                </div>
     </div>
)
export default AddDescription;