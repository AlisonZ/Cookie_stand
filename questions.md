### Questions that came up during Cookie Stand

1. What's up with width? For example the nav bar in both the index and the sales page. I had a similar problem with the Cat CSS project and got around it by making the width 100%, but then it gets weird when the screen size is changed and probably other stuff. 
	* Why is it that on the index.html I have the width set to 960px and when I use the same class for the sales.html they have different results?
		* my answer: I had the header for the public page contain a div, in which contained all of the stuff in the header bar. For the sales page, I had a header, but no <div> and the <div> is what stretches for the entire page, while the header is set smaller