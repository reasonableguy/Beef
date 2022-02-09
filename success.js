<!DOCTYPE html>
<html lang="en">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="stylesheet.css"> 
</head>
	<body>
	<div w3-include-html="/header.html"></div>



	

	<style>
.visible {
	display:block !important;
}
#thanks:before{
  display: inline-block;
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 32px;  content: "\00d7"; /* This will render the 'X' */
}

#thanks {
	padding:15% 5%;display:none;z-index:100;position:fixed;top:0;left:0;width:80%;margin-left:10%;margin-top:10%;background-color:white;
}
#thanks p {
	line-height: 2rem;    max-width: 50ch;    margin: 0 auto;    font-size: 1.3em;
}
.cat {
	height: 200px;    background-size: contain;    background-image: url("https://d33wubrfki0l68.cloudfront.net/803fb523-df28-43d6-a7fa-82bf575ae282/h-xuan-hoang-d-ng-WL_kPEF3eLA-unsplash.jpg");    background-repeat: no-repeat;    margin: 10% auto 0;    background-position: center;
}
</style>
	
<div class="page background" style="top:0;left:0;width:100%;height:100%;">

 <div id="thanks" class="visible" >
<h3>Thanks for adding your recipe</h3>
<p>Your recipe will soon be added for others to enjoy. The work is being performed by our highly skilled army of farm cats. It takes about a day but may be longer if it's a nap-in-the-sun sort of day.</p>
     <div class="cat">		</div>

</div>

	<h1>
	Recipes by Beef Cuts
	</h1>
	<div class="grid home" >
		<div class="grid-item">
			<h3>Cheaper Cuts</h3>
			<ul>
				<li><a href="cheaper-cuts/ground-beef">Ground</a></li>
				<li><a href="cheaper-cuts/stew-beef">Stew</a></li>
				<li><a href="cheaper-cuts/ribs">Maui Ribs</a></li>
			</ul>
		</div>
		<div class="grid-item">
			<h3>Steaks</h3>
			<ul>
				<li><a href="steak/tenderloin">Tenderloin</a></li>
				<li><a href="steak/ny-strip-sirloin">NY Strip Sirloin</a></li>
				<li><a href="steak/chuck-steak">Chuck</a></li>
				<li><a href="steak/rib-steak">Rib</a></li>
			</ul>
		</div>
				<div class="grid-item">
			<h3>Roasts</h3>
			<ul>
				<li><a href="roasts/cross-rib">Cross Rib</a></li>
				<li><a href="roasts/inside-round">Inside Round</a></li>
			</ul>
		</div>
		<div class="grid-item">
			<h3>The Rest</h3>
			<ul>
				<li><a href="the-rest/beef-heart">Heart</a></li>
				<li><a href="the-rest/beef-bones">Bones</a></li>
				<li><a href="the-rest/beef-livers">Livers</a></li>
				<li><a href="the-rest/beef-kidneys">Kidneys</a></li>
			</ul>
		</div>
	</div>

</div>

<div w3-include-html="footer.html"></div>


   

	
</body>


</html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("body").click(function(){
    $("#thanks").removeClass("visible");
  });
});
</script>
