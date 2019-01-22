
import React from 'react';

const SelectCategory = ({state , onChange1 , onChange2, submitCategory}) => (
    <div>
    <h4 className="addProjectHeading">Pick a project category to connect with a specific community. You can always update this later.</h4>

    <form onSubmit={submitCategory}>
    <div className="form-group">
<label htmlFor="Category" >Category</label>
<select value={state.value1} onChange={onChange1.bind(this)} className="form-control">
<option value="select">Select a Category</option>
<option value="Arts">Arts</option>
<option value="Comics">Comics</option>
<option value="Craft">Craft</option>
<option value="Dance">Dance</option>
<option value="Design">Design</option>
<option value="Fashion">Fashion</option>

<option value="Films">Films</option>
<option value="Food">Food</option>
<option value="Games">Games</option>
<option value="Journalism">Journalism</option>

<option value="Music">Music</option>
<option value="Photograph">Photograph</option>

<option value="Publish">Publish</option>
<option value="Technology">Technology</option>
<option value="Theater">Theater</option>

</select>
</div>

{
state.value1 === "Arts" && 
<div className="form-group">
<label htmlFor="SubCategory" >SubCategory</label>
<select value={state.value2} onChange={onChange2.bind(this)} className="form-control">
<option value="select">Select a SubCategory</option>
<option value="Ceramics">Ceramics</option>
<option value="Conceptual Art">Conceptual Art</option>
<option value="Digital Art">Digital Art</option>
<option value="Illustration">Illustration</option>
<option value="Installations">Installations</option>
<option value="Mixed Media">Mixed Media</option>
<option value="Painting">Painting</option>
<option value="Performance Art">Performance Art</option>
<option value="Public Art">Public Art</option>
<option value="Sculptures">Sculptures</option>
<option value="Textiles">Textiles</option>
<option value="Video Art">Video Art</option>
</select>
</div>
}
{
state.value1 === "Comics" && 
<div className="form-group">
<label htmlFor="SubCategory" >SubCategory</label>
<select value={state.value2} onChange={onChange2.bind(this)} className="form-control">
<option value="select">Select a SubCategory</option>
<option value="Anthologies">Anthologies</option>
<option value="Webcomics">Webcomics</option>
<option value="Comic Books">Comic Books</option>
<option value="Events">Events</option>
<option value="Graphic Novels">Graphic Novels</option>
</select>
</div>
}

{
state.value1 === "Craft" && 

<div className="form-group">
<label htmlFor="SubCategory" >SubCategory</label>
<select value={state.value2} onChange={onChange2.bind(this)} className="form-control">
<option value="select">Select a SubCategory</option>
<option value="Candles">Candles</option>
<option value="Crochet">Crochet</option>
<option value="Glass">Glass</option>
<option value="DIY">DIY</option>
<option value="Embroidery">Embroidery</option>
<option value="Pottery">Pottery</option>
<option value="Printing">Printing</option>
<option value="Quilts">Quilts</option>
<option value="Stationery">Stationery</option>
<option value="Taxidermy">Taxidermy</option>
<option value="Weaving">Weaving</option>
<option value="Woodworking">Woodworking</option>




</select>
</div>
}
{
state.value1 === "Dance" && 

<div className="form-group">
<label htmlFor="SubCategory" >SubCategory</label>
<select value={state.value2} onChange={onChange2.bind(this)} className="form-control">
<option value="select">Select a SubCategory</option>
<option value="Performances">Performances</option>
<option value="Residencies">Residencies</option>
<option value="Spaces">Spaces</option>
<option value="Workshops">Workshops</option>
</select>
</div>
}
{
state.value1 === "Design" && 


<div className="form-group">
<label htmlFor="SubCategory" >SubCategory</label>
<select value={state.value2} onChange={onChange2.bind(this)} className="form-control">
<option value="select">Select a SubCategory</option>
<option value="Architecture">Architecture</option>
<option value="Civic Design">Civic Design</option>
<option value="Graphic Design">Graphic Design</option>
<option value="Interactive Design">Interactive Design</option>
<option value="Product Design">Product Design</option>
<option value="Typography">Typography</option>

</select>
</div>
}
{
state.value1 === "Fashion" && 


<div className="form-group">
<label htmlFor="SubCategory" >SubCategory</label>
<select value={state.value2} onChange={onChange2.bind(this)} className="form-control">
<option value="select">Select a SubCategory</option>
<option value="Accessories">Accessories</option>
<option value="Apparel">Apparel</option>
<option value="Childrenswear">Childrenswear</option>
<option value="Couture">Couture</option>
<option value="Footwear">Footwear</option>
<option value="Jewelry">Jewelry</option>
<option value="Pet Fashion">Pet Fashion</option>
<option value="Ready-to-wear">Ready-to-wear</option>


</select>
</div>
}
{
state.value1 === "Films" && 

<div className="form-group">
<label htmlFor="SubCategory" >SubCategory</label>
<select value={state.value2} onChange={onChange2.bind(this)} className="form-control">
<option value="select">Select a SubCategory</option>
<option value="Action">Action</option>
<option value="Animation">Animation</option>
<option value="Comedy">Comedy</option>
<option value="Documentary">Documentary</option>
<option value="Drama">Drama</option>
<option value="Experimental">Experimental</option>
<option value="Family">Family</option>
<option value="Fantasy">Fantasy</option>
<option value="Festivals">Festivals</option>

<option value="Horror">Horror</option>
<option value="Movie Theaters">Movie Theaters</option>
<option value="Music Videos">Music Videos</option>
<option value="Narrative Film">Narrative Film</option>
<option value="Romance">Romance</option>
<option value="Science Fiction">Science Fiction</option>
<option value="Shorts">Shorts</option>
<option value="Television">Television</option>
<option value="Thrillers">Thrillers</option>
<option value="Webseries">Webseries</option> 
</select>
</div>
}
{
state.value1 === "Food" && 

<div className="form-group">
<label htmlFor="SubCategory" >SubCategory</label>
<select value={state.value2} onChange={onChange2.bind(this)} className="form-control">
<option value="select">Select a SubCategory</option>
<option value="Bacon">Bacon</option>
<option value="Community Gardens">Community Gardens</option>
<option value="Cookbooks">Cookbooks</option>
<option value="Drinks">Drinks</option>
<option value="Events">Events</option>
<option value="Farmer's Markets">Farmer's Markets</option>
<option value="Farms">Farms</option>
<option value="Food Trucks">Food Trucks</option>
<option value="Restaurants">Restaurants</option>
<option value="Small Batch">Small Batch</option>
<option value="Spaces">Spaces</option>
<option value="Vegan">Vegan</option>

</select>
</div>
}
  {
state.value1 === "Games" && 

<div className="form-group">
<label htmlFor="SubCategory" >SubCategory</label>
<select value={state.value2} onChange={onChange2.bind(this)} className="form-control">
<option value="select">Select a SubCategory</option>
<option value="Gaming Hardware">Gaming Hardware</option>
<option value="Live Games">Live Games</option>
<option value="Mobile Games">Mobile Games</option>
<option value="Playing Cards">Playing Cards</option>
<option value="Puzzles">Puzzles</option>
<option value="Tabletop Games">Tabletop Games</option>
<option value="Video Games">Video Games</option>

</select>
</div>
}
        {
state.value1 === "Journalism" && 
<div className="form-group">
<label htmlFor="SubCategory" >SubCategory</label>
<select value={state.value2} onChange={onChange2.bind(this)} className="form-control">
<option value="select">Select a SubCategory</option>
<option value="Audio">Audio</option>
<option value="Photo">Photo</option>
<option value="Print">Print</option>
<option value="Video">Video</option>
<option value="Web">Web</option>

</select>
</div>
}
{
state.value1 === "Music" && 
<div className="form-group">
<label htmlFor="SubCategory" >SubCategory</label>
<select value={state.value2} onChange={onChange2.bind(this)} className="form-control">
<option value="select">Select a SubCategory</option>
<option value="Blues">Blues</option>
<option value="Chiptune">Chiptune</option>
<option value="Classical Music">Classical Music</option>
<option value="Country & Folk">Country & Folk</option>
<option value="Electronic Music">Electronic Music</option>
<option value="Faith">Faith</option>
<option value="Hip-Hop">Hip-Hop</option>
<option value="Indie Rock">Indie Rock</option>
<option value="Jazz">Jazz</option>
<option value="Kids">Kids</option>
<option value="Latin">Latin</option>
<option value="Metal">Metal</option>
<option value="Pop">Pop</option>
<option value="Punk">Punk</option>
<option value="R&B">R&B</option>
<option value="Rock">Rock</option>
<option value="World Music">World Music</option>
</select>
</div>
}
              {
state.value1 === "Photograph" && 
<div className="form-group">
<label htmlFor="SubCategory" >SubCategory</label>
<select value={state.value2} onChange={onChange2.bind(this)} className="form-control">
<option value="select">Select a SubCategory</option>
<option value="Animals">Animals</option>
<option value="Fine Art">Fine Art</option>
<option value="Classical Music">Classical Music</option>
<option value="Nature">Nature</option>
<option value="Photobooks">Photobooks</option>
<option value="People">People</option>
<option value="Places">Places</option>
</select>
</div>
}
                    {
state.value1 === "Publish" && 

<div className="form-group">
<label htmlFor="SubCategory" >SubCategory</label>
<select value={state.value2} onChange={onChange2.bind(this)} className="form-control">
<option value="select">Select a SubCategory</option>
<option value="Academic">Academic</option>
<option value="Anthologies">Anthologies</option>
<option value="Art Books">Art Books</option>
<option value="Calendars">Calendars</option>
<option value="Children's Books">Children's Books</option>
<option value="Comedy">Comedy</option>
<option value="Fiction">Fiction</option>
<option value="Letterpress">Letterpress</option>
<option value="Literary Journals">Literary Journals</option>
<option value="Literary Spaces">Literary Spaces</option>
<option value="Nonfiction">Nonfiction</option>
<option value="Periodicals">Periodicals</option>
<option value="Poetry">Poetry</option>
<option value="Radio & Podcasts">Radio & Podcasts</option>
<option value="Translations">Translations</option>
<option value="Young Adult">Young Adult</option>
<option value="Zines">Zines</option>



</select>
</div>
}
                    {
state.value1 === "Technology" && 
<div className="form-group">
<label htmlFor="SubCategory" >SubCategory</label>
<select value={state.value2} onChange={onChange2.bind(this)} className="form-control">
<option value="select">Select a SubCategory</option>
<option value="3D Printing">3D Printing</option>
<option value="Apps">Apps</option>
<option value="Camera Equipment">Camera Equipment</option>
<option value="DIY Electronics">DIY Electronics</option>
<option value="Fabrication Tools">Fabrication Tools</option>
<option value="Fabrication Tools">Flights</option>
<option value="Fabrication Tools">Gadgets</option>
<option value="Fabrication Tools">HardWare</option>
<option value="Fabrication Tools">MarkerSpaces</option>
<option value="Fabrication Tools">Fabrication Tools</option>
<option value="Fabrication Tools">Software</option>
<option value="Fabrication Tools">Sound</option>
<option value="Fabrication Tools">Space Exploration</option>
<option value="Fabrication Tools">Wearables</option>
<option value="Fabrication Tools">Web</option>
</select>
</div>
}
{    state.value1 === "Theater" && 

<div className="form-group">
<label htmlFor="SubCategory" >SubCategory</label>
<select value={state.value2} onChange={onChange2.bind(this)} className="form-control">
<option value="select">Select a SubCategory</option>
<option value="Comedy">Comedy</option>
<option value="Experimental">Experimental</option>
<option value="Immersive">Immersive</option>
<option value="Musical">Musical</option>
<option value="Plays">Plays</option>
<option value="Plays">Plays</option>
<option value="Spaces">Spaces</option>



</select>
</div>
}
<button type="submit" className="btn world-btn float-right">Next:Project Description</button>

</form>
</div>
)
export default SelectCategory;