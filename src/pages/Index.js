import react, { Fragment } from 'react';

function Index(){
    return(
        <Fragment>
            <div class="head">
		<link rel="shortcut icon" href="http://sstatic.net/stackoverflow/img/favicon.ico"/>
	<h1><marquee> ✨ Movie Reviews ✨</marquee></h1>
	</div>
	
	<div class="all">
	    <h2>Add a review</h2>
	<div class="mid">
	<form action="{{ url_for('add_review') }}" method="post">
		<label>Movie title:</label>
		<input type="text" name="movieTitle"/><br/>
		<label>Your review:</label><br/>
		{/* <textarea name="review">{
				"user_name": "qwjghjge",
				"review_id": "eqghjjwe",
				"reviewer": "eqgjhje",
				"movie": "eqwertte",
				"rating": "eqertertertw",
				"review_summary": "eqhjgwe",
				"review_date": "weqgdfge",
				"review_detail": "qwejghje",
				"helpful":"eqwjghe" ,
				"created_at": "eqwjghjge"
			}</textarea><br> */}
		<input type="submit" value="Submit Review"/>
	</form>
	</div>
	<h2>Search for a review</h2>
		<div class="mid">
		<form>
			<label>Movie title:</label>
			<input type="text" name="searchMovie"/><br/>
			<input type="submit" value="Search"/>
		</form>
		</div>
	<h2>View review</h2>
		<div class="mid">
		{/* {% for item in data %}
	
	
		<p>Movie title:{{item.movie }} <span id="viewMovieTitle"></span></p>
		<p>Review: {{ item }}<span id="viewReview"></span></p>
		{% endfor %} */}
	
		</div>
	<h2>Delete review</h2>
		<div class="mid">
		<form>
			<label>Movie title:</label>
			<input type="text" name="deleteMovie"/><br/>
			<input type="submit" value="Delete"/>
		</form>
		</div>
	<h2>Edit review</h2>
		<div class="mid">
		<form>
			<label>Movie title:</label>
			<input type="text" name="editMovie"/><br/>
			<label>Your updated review:</label><br/>
			<textarea name="updatedReview"></textarea><br/>
			<input type="submit" value="Update Review"/>
		</form>
		</div>
	</div>
	<img src="assets/images/200w.gif"/>
	<img src="assets/images/gu4.gif"/>
        </Fragment>
    )
}

export default Index;