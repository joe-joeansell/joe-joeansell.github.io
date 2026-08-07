// JavaScript Document

var x = window.matchMedia("(max-width: 600px)");

function overlayOn() {
	//Makes the overlay appear on screen
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/homepage.PNG";
    document.getElementById("overlayImg").style.width = "90%";
    document.getElementById("overlayImg").style.height = "30%";
    document.getElementById("overlayImg").style.left = "5%";
    document.getElementById("overlayImg").style.right = "5%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "Homepage- Landing Section";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/homepage.PNG";
    document.getElementById("overlayImg").style.width = "80%";
    document.getElementById("overlayImg").style.height = "80%";
    document.getElementById("overlayImg").style.left = "10%";
    document.getElementById("overlayImg").style.right = "10%";
    document.getElementById("overlayImg").style.top = "12%";
    document.getElementById("overlayText").innerHTML = "Homepage- Landing Section";
    }
  //Sets the image to the poster which the user has just clicked on
  //Myrick, D. Sanchez, E. (Directors). (1999). The Blair Witch Project. Haxan Films.
}

function overlayOn2() {
	//Makes the overlay appear on screen
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/contactpage.PNG";
    document.getElementById("overlayImg").style.width = "90%";
    document.getElementById("overlayImg").style.height = "30%";
    document.getElementById("overlayImg").style.left = "5%";
    document.getElementById("overlayImg").style.right = "5%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "Contact Page - Landing";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/contactpage.PNG";
    document.getElementById("overlayImg").style.height = "80%";
    document.getElementById("overlayImg").style.width = "80%";
    document.getElementById("overlayImg").style.left = "10%";
    document.getElementById("overlayImg").style.right = "10%";
    document.getElementById("overlayImg").style.top = "12%";
    document.getElementById("overlayText").innerHTML = "Contact Page - Landing";
    }
  //Sets the image to the poster which the user has just clicked on
  //Myrick, D. Sanchez, E. (Directors). (1999). The Blair Witch Project. Haxan Films.
}

function overlayOn3() {
	//Makes the overlay appear on screen
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/guestbookform.PNG";
    document.getElementById("overlayImg").style.width = "90%";
    document.getElementById("overlayImg").style.height = "30%";
    document.getElementById("overlayImg").style.left = "5%";
    document.getElementById("overlayImg").style.right = "5%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "Contact Page - Landing";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/guestbookform.PNG";
    document.getElementById("overlayImg").style.height = "80%";
    document.getElementById("overlayImg").style.width = "70%";
    document.getElementById("overlayImg").style.left = "15%";
    document.getElementById("overlayImg").style.right = "15%";
    document.getElementById("overlayImg").style.top = "12%";
    document.getElementById("overlayText").innerHTML = "Contact Page- Guestbook Form (And Footer)";
  }
  //Sets the image to the poster which the user has just clicked on
  //Myrick, D. Sanchez, E. (Directors). (1999). The Blair Witch Project. Haxan Films.
}

function overlayOn4() {
	//Makes the overlay appear on screen
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/gridpage.PNG";
    document.getElementById("overlayImg").style.width = "90%";
    document.getElementById("overlayImg").style.height = "30%";
    document.getElementById("overlayImg").style.left = "5%";
    document.getElementById("overlayImg").style.right = "5%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "Catalogue Page- Grid";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/gridpage.PNG";
    document.getElementById("overlayImg").style.height = "80%";
    document.getElementById("overlayImg").style.width = "65%";
    document.getElementById("overlayImg").style.left = "18%";
    document.getElementById("overlayImg").style.right = "18%";
    document.getElementById("overlayImg").style.top = "12%";
    document.getElementById("overlayText").innerHTML = "Catalogue Page- Grid";
  }
  //Sets the image to the poster which the user has just clicked on
  //Myrick, D. Sanchez, E. (Directors). (1999). The Blair Witch Project. Haxan Films.
}

function overlayOn5() {
	//Makes the overlay appear on screen
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/infobox.PNG";
    document.getElementById("overlayImg").style.width = "90%";
    document.getElementById("overlayImg").style.height = "40%";
    document.getElementById("overlayImg").style.left = "5%";
    document.getElementById("overlayImg").style.right = "5%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "Catalogue Page - Information Box";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/infobox.PNG";
    document.getElementById("overlayImg").style.width = "60%";
    document.getElementById("overlayImg").style.height = "80%";
    document.getElementById("overlayImg").style.left = "20%";
    document.getElementById("overlayImg").style.right = "20%";
    document.getElementById("overlayImg").style.top = "12%";
    document.getElementById("overlayText").innerHTML = "Catalogue Page - Information Box";
  }
  //Sets the image to the poster which the user has just clicked on
  //Myrick, D. Sanchez, E. (Directors). (1999). The Blair Witch Project. Haxan Films.
}

function overlayOn6() {
	//Makes the overlay appear on screen
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/carousel.PNG";
    document.getElementById("overlayImg").style.width = "90%";
    document.getElementById("overlayImg").style.height = "30%";
    document.getElementById("overlayImg").style.left = "5%";
    document.getElementById("overlayImg").style.right = "5%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "Image Carousel";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/carousel.PNG";
    document.getElementById("overlayImg").style.width = "60%";
    document.getElementById("overlayImg").style.height = "80%";
    document.getElementById("overlayImg").style.left = "20%";
    document.getElementById("overlayImg").style.right = "20%";
    document.getElementById("overlayImg").style.top = "12%";
    document.getElementById("overlayText").innerHTML = "Image Carousel";
  }
  //Sets the image to the poster which the user has just clicked on
  //Myrick, D. Sanchez, E. (Directors). (1999). The Blair Witch Project. Haxan Films.
}

function overlayOn7() {
	//Makes the overlay appear on screen
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/homepagemobile.PNG";
    document.getElementById("overlayImg").style.width = "80%";
    document.getElementById("overlayImg").style.height = "70%";
    document.getElementById("overlayImg").style.left = "10%";
    document.getElementById("overlayImg").style.right = "10%";
    document.getElementById("overlayImg").style.top = "20%";
    document.getElementById("overlayText").innerHTML = "Homepage- Landing (Mobile)";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/homepagemobile.PNG";
    document.getElementById("overlayImg").style.width = "20%";
    document.getElementById("overlayImg").style.height = "80%";
    document.getElementById("overlayImg").style.left = "40%";
    document.getElementById("overlayImg").style.right = "40%";
    document.getElementById("overlayImg").style.top = "12%";
    document.getElementById("overlayText").innerHTML = "Homepage- Landing (Mobile)";
  }
  //Sets the image to the poster which the user has just clicked on
  //Myrick, D. Sanchez, E. (Directors). (1999). The Blair Witch Project. Haxan Films.
}

function overlayOn8() {
	//Makes the overlay appear on screen
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/contactmobile.PNG";
    document.getElementById("overlayImg").style.width = "80%";
    document.getElementById("overlayImg").style.height = "70%";
    document.getElementById("overlayImg").style.left = "10%";
    document.getElementById("overlayImg").style.right = "10%";
    document.getElementById("overlayImg").style.top = "20%";
    document.getElementById("overlayText").innerHTML = "Contact Page (Mobile)";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/contactmobile.PNG";
    document.getElementById("overlayImg").style.width = "20%";
    document.getElementById("overlayImg").style.height = "80%";
    document.getElementById("overlayImg").style.left = "40%";
    document.getElementById("overlayImg").style.right = "40%";
    document.getElementById("overlayImg").style.top = "12%";
    document.getElementById("overlayText").innerHTML = "Contact Page (Mobile)";
  }
  //Sets the image to the poster which the user has just clicked on
  //Myrick, D. Sanchez, E. (Directors). (1999). The Blair Witch Project. Haxan Films.
}

function overlayOn9() {
	//Makes the overlay appear on screen
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/gridmobile.PNG";
    document.getElementById("overlayImg").style.width = "80%";
    document.getElementById("overlayImg").style.height = "70%";
    document.getElementById("overlayImg").style.left = "10%";
    document.getElementById("overlayImg").style.right = "10%";
    document.getElementById("overlayImg").style.top = "20%";
    document.getElementById("overlayText").innerHTML = "Catalogue Page- Grid (Mobile)";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/gridmobile.PNG";
    document.getElementById("overlayImg").style.width = "20%";
    document.getElementById("overlayImg").style.height = "80%";
    document.getElementById("overlayImg").style.left = "40%";
    document.getElementById("overlayImg").style.right = "40%";
    document.getElementById("overlayImg").style.top = "12%";
    document.getElementById("overlayText").innerHTML = "Catalogue Page- Grid (Mobile)";
  }
  //Sets the image to the poster which the user has just clicked on
  //Myrick, D. Sanchez, E. (Directors). (1999). The Blair Witch Project. Haxan Films.
}
function overlayOn10() {
	//Makes the overlay appear on screen
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    //Hi
    document.getElementById("overlayImg").src = "images/careboconcept.png";
    document.getElementById("overlayImg").style.width = "90%";
    document.getElementById("overlayImg").style.height = "30%";
    document.getElementById("overlayImg").style.left = "5%";
    document.getElementById("overlayImg").style.right = "5%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "My initial concept art for CareBo, before further refinement.";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/careboconcept.png";
    document.getElementById("overlayImg").style.width = "60%";
    document.getElementById("overlayImg").style.height = "80%";
    document.getElementById("overlayImg").style.left = "20%";
    document.getElementById("overlayImg").style.right = "20%";
    document.getElementById("overlayImg").style.top = "12%";
    document.getElementById("overlayText").innerHTML = "My initial concept art for CareBo, before further refinement.";
  }
  //Sets the image to the poster which the user has just clicked on
  //Myrick, D. Sanchez, E. (Directors). (1999). The Blair Witch Project. Haxan Films.
}
function overlayOn11() {
	//Makes the overlay appear on screen
    if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/pictorial.PNG";
    document.getElementById("overlayImg").style.width = "90%";
    document.getElementById("overlayImg").style.height = "30%";
    document.getElementById("overlayImg").style.left = "5%";
    document.getElementById("overlayImg").style.right = "5%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "The opening page of the CareBo design document, including Abstract.";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/pictorial.PNG";
    document.getElementById("overlayImg").style.width = "60%";
    document.getElementById("overlayImg").style.height = "80%";
    document.getElementById("overlayImg").style.left = "20%";
    document.getElementById("overlayImg").style.right = "20%";
    document.getElementById("overlayImg").style.top = "12%";
    document.getElementById("overlayText").innerHTML = "The opening page of the CareBo design document, including Abstract.";
  }
  //Sets the image to the poster which the user has just clicked on
  //Myrick, D. Sanchez, E. (Directors). (1999). The Blair Witch Project. Haxan Films.
}
function overlayOn12() {
	//Makes the overlay appear on screen
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/careboexhibit.jpg";
    document.getElementById("overlayImg").style.width = "90%";
    document.getElementById("overlayImg").style.height = "30%";
    document.getElementById("overlayImg").style.left = "5%";
    document.getElementById("overlayImg").style.right = "5%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "A full view of CareBo, on display at an exhibition at the University of Portsmouth.";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/careboexhibit.jpg";
    document.getElementById("overlayImg").style.width = "60%";
    document.getElementById("overlayImg").style.height = "80%";
    document.getElementById("overlayImg").style.left = "20%";
    document.getElementById("overlayImg").style.right = "20%";
    document.getElementById("overlayImg").style.top = "12%";
    document.getElementById("overlayText").innerHTML = "A full view of CareBo, on display at an exhibition at the University of Portsmouth.";
  }
  //Sets the image to the poster which the user has just clicked on
  //Myrick, D. Sanchez, E. (Directors). (1999). The Blair Witch Project. Haxan Films.
}
function overlayOn13() {
	//Makes the overlay appear on screen
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/touchsensor.png";
    document.getElementById("overlayImg").style.width = "90%";
    document.getElementById("overlayImg").style.height = "30%";
    document.getElementById("overlayImg").style.left = "5%";
    document.getElementById("overlayImg").style.right = "5%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "A player touches one of the pieces to a 'Snake' space, causing the board to light up and vibrate.";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/touchsensor.png";
    document.getElementById("overlayImg").style.width = "60%";
    document.getElementById("overlayImg").style.height = "80%";
    document.getElementById("overlayImg").style.left = "20%";
    document.getElementById("overlayImg").style.right = "20%";
    document.getElementById("overlayImg").style.top = "12%";
    document.getElementById("overlayText").innerHTML = "A player touches one of the pieces to a 'Snake' space, causing the board to light up and vibrate.";
  }
  //Sets the image to the poster which the user has just clicked on
  //Myrick, D. Sanchez, E. (Directors). (1999). The Blair Witch Project. Haxan Films.
}

function overlayOn14() {
	//Makes the overlay appear on screen
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/dicescreen.PNG";
    document.getElementById("overlayImg").style.width = "90%";
    document.getElementById("overlayImg").style.height = "30%";
    document.getElementById("overlayImg").style.left = "5%";
    document.getElementById("overlayImg").style.right = "5%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "The dice display for our 'hands-free' dice interaction. Visuals coded by me via Arduino graphics libraries.";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/dicescreen.PNG";
    document.getElementById("overlayImg").style.width = "60%";
    document.getElementById("overlayImg").style.height = "80%";
    document.getElementById("overlayImg").style.left = "20%";
    document.getElementById("overlayImg").style.right = "20%";
    document.getElementById("overlayImg").style.top = "12%";
    document.getElementById("overlayText").innerHTML = "The dice display for our 'hands-free' dice interaction. Visuals coded by me via Arduino graphics libraries.";
  }
  //Sets the image to the poster which the user has just clicked on
  //Myrick, D. Sanchez, E. (Directors). (1999). The Blair Witch Project. Haxan Films.
}

function overlayOn15() {
	//Makes the overlay appear on screen
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/snlexhibition.PNG";
    document.getElementById("overlayImg").style.width = "90%";
    document.getElementById("overlayImg").style.height = "30%";
    document.getElementById("overlayImg").style.left = "5%";
    document.getElementById("overlayImg").style.right = "5%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "Our exhibit displaying Snakes & Ladders & You at the University of Portsmouth.";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/snlexhibition.PNG";
    document.getElementById("overlayImg").style.width = "60%";
    document.getElementById("overlayImg").style.height = "80%";
    document.getElementById("overlayImg").style.left = "20%";
    document.getElementById("overlayImg").style.right = "20%";
    document.getElementById("overlayImg").style.top = "12%";
    document.getElementById("overlayText").innerHTML = "Our exhibit displaying Snakes & Ladders & You at the University of Portsmouth.";
  }
  //Sets the image to the poster which the user has just clicked on
  //Myrick, D. Sanchez, E. (Directors). (1999). The Blair Witch Project. Haxan Films.
}
function overlayOn16() {
	//Makes the overlay appear on screen
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/exhibition2.PNG";
    document.getElementById("overlayImg").style.width = "90%";
    document.getElementById("overlayImg").style.height = "45%";
    document.getElementById("overlayImg").style.left = "5%";
    document.getElementById("overlayImg").style.right = "5%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "Another aspect of our exhibit, including informative posters created by me.";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/exhibition2.PNG";
    document.getElementById("overlayImg").style.width = "45%";
    document.getElementById("overlayImg").style.height = "80%";
    document.getElementById("overlayImg").style.left = "27%";
    document.getElementById("overlayImg").style.right = "27%";
    document.getElementById("overlayImg").style.top = "12%";
    document.getElementById("overlayText").innerHTML = "Another aspect of our exhibit, including informative posters created by me.";
  }
  //Sets the image to the poster which the user has just clicked on
  //Myrick, D. Sanchez, E. (Directors). (1999). The Blair Witch Project. Haxan Films.
}

function overlayOn17() {
	//Makes the overlay appear on screen
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/board.PNG";
    document.getElementById("overlayImg").style.width = "90%";
    document.getElementById("overlayImg").style.height = "35%";
    document.getElementById("overlayImg").style.left = "5%";
    document.getElementById("overlayImg").style.right = "5%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "A close-up view of the game board and electronics within.";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/board.PNG";
    document.getElementById("overlayImg").style.width = "50%";
    document.getElementById("overlayImg").style.height = "80%";
    document.getElementById("overlayImg").style.left = "25%";
    document.getElementById("overlayImg").style.right = "25%";
    document.getElementById("overlayImg").style.top = "12%";
    document.getElementById("overlayText").innerHTML = "A close-up view of the game board and electronics within.";
  }
  //Sets the image to the poster which the user has just clicked on
  //Myrick, D. Sanchez, E. (Directors). (1999). The Blair Witch Project. Haxan Films.
}

function overlayOn18() {
	//Makes the overlay appear on screen
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/pictorialsnl.PNG";
    document.getElementById("overlayImg").style.width = "90%";
    document.getElementById("overlayImg").style.height = "30%";
    document.getElementById("overlayImg").style.left = "5%";
    document.getElementById("overlayImg").style.right = "5%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "The first page of our pictorial, including the Abstract for our project.";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/pictorialsnl.PNG";
    document.getElementById("overlayImg").style.width = "60%";
    document.getElementById("overlayImg").style.height = "80%";
    document.getElementById("overlayImg").style.left = "20%";
    document.getElementById("overlayImg").style.right = "20%";
    document.getElementById("overlayImg").style.top = "12%";
    document.getElementById("overlayText").innerHTML = "The first page of our pictorial, including the Abstract for our project.";
  }
  //Sets the image to the poster which the user has just clicked on
  //Myrick, D. Sanchez, E. (Directors). (1999). The Blair Witch Project. Haxan Films.
}

function overlayOn19() {
	//Makes the overlay appear on screen
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/zombie.png";
    document.getElementById("overlayImg").style.width = "80%";
    document.getElementById("overlayImg").style.height = "35%";
    document.getElementById("overlayImg").style.left = "10%";
    document.getElementById("overlayImg").style.right = "10%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "A still from the game Final Fantasy Legend, visually edited.";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/zombie.png";
    document.getElementById("overlayImg").style.width = "50%";
    document.getElementById("overlayImg").style.height = "80%";
    document.getElementById("overlayImg").style.left = "25%";
    document.getElementById("overlayImg").style.right = "25%";
    document.getElementById("overlayImg").style.top = "15%";
    document.getElementById("overlayText").innerHTML = "A still from the game Final Fantasy Legend, visually edited.";
  }
}

function overlayOn20() {
	//Makes the overlay appear on screen
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/skeleton.png";
    document.getElementById("overlayImg").style.width = "80%";
    document.getElementById("overlayImg").style.height = "35%";
    document.getElementById("overlayImg").style.left = "10%";
    document.getElementById("overlayImg").style.right = "10%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "A still from the game Final Fantasy Legend, visually edited.";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/skeleton.png";
    document.getElementById("overlayImg").style.width = "50%";
    document.getElementById("overlayImg").style.height = "80%";
    document.getElementById("overlayImg").style.left = "25%";
    document.getElementById("overlayImg").style.right = "25%";
    document.getElementById("overlayImg").style.top = "15%";
    document.getElementById("overlayText").innerHTML = "A still from the game Final Fantasy Legend, visually edited.";
  }
}

function overlayOn21() {
	//If controls mobile view, else controls desktop
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/imageedit.png";
    document.getElementById("overlayImg").style.width = "90%";
    document.getElementById("overlayImg").style.height = "25%";
    document.getElementById("overlayImg").style.left = "5%";
    document.getElementById("overlayImg").style.right = "5%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "A screenshot of sprites being changed in a tile editor.";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/imageedit.png";
    document.getElementById("overlayImg").style.width = "60%";
    document.getElementById("overlayImg").style.height = "70%";
    document.getElementById("overlayImg").style.left = "20%";
    document.getElementById("overlayImg").style.right = "20%";
    document.getElementById("overlayImg").style.top = "18%";
    document.getElementById("overlayText").innerHTML = "A screenshot of sprites being changed in a tile editor.";
  }
}

function overlayOn22() {
	//If controls mobile view, else controls desktop
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/clim8.PNG";
    document.getElementById("overlayImg").style.width = "90%";
    document.getElementById("overlayImg").style.height = "25%";
    document.getElementById("overlayImg").style.left = "5%";
    document.getElementById("overlayImg").style.right = "5%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "A slide comprising part of a feature review of a competing device.";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/clim8.PNG";
    document.getElementById("overlayImg").style.width = "60%";
    document.getElementById("overlayImg").style.height = "70%";
    document.getElementById("overlayImg").style.left = "20%";
    document.getElementById("overlayImg").style.right = "20%";
    document.getElementById("overlayImg").style.top = "18%";
    document.getElementById("overlayText").innerHTML = "A slide comprising part of a feature review of a competing device.";
  }
}

function overlayOn23() {
	//If controls mobile view, else controls desktop
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/hardware.PNG";
    document.getElementById("overlayImg").style.width = "90%";
    document.getElementById("overlayImg").style.height = "25%";
    document.getElementById("overlayImg").style.left = "5%";
    document.getElementById("overlayImg").style.right = "5%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "A slide showcasing different devices and materials for use in the creation of an IoT Device.";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/hardware.PNG";
    document.getElementById("overlayImg").style.width = "60%";
    document.getElementById("overlayImg").style.height = "70%";
    document.getElementById("overlayImg").style.left = "20%";
    document.getElementById("overlayImg").style.right = "20%";
    document.getElementById("overlayImg").style.top = "18%";
    document.getElementById("overlayText").innerHTML = "A slide showcasing different devices and materials for use in the creation of an IoT Device.";
  }
}

function overlayOn24() {
	//If controls mobile view, else controls desktop
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/productdesign.PNG";
    document.getElementById("overlayImg").style.width = "90%";
    document.getElementById("overlayImg").style.height = "25%";
    document.getElementById("overlayImg").style.left = "5%";
    document.getElementById("overlayImg").style.right = "5%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "A slide showcasing the design concept for the Heat smart jacket, with practical justification.";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/productdesign.PNG";
    document.getElementById("overlayImg").style.width = "60%";
    document.getElementById("overlayImg").style.height = "70%";
    document.getElementById("overlayImg").style.left = "20%";
    document.getElementById("overlayImg").style.right = "20%";
    document.getElementById("overlayImg").style.top = "18%";
    document.getElementById("overlayText").innerHTML = "A slide showcasing the design concept for the Heat smart jacket, with practical justification.";
  }
}

function overlayOn25() {
	//If controls mobile view, else controls desktop
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/abstract.PNG";
    document.getElementById("overlayImg").style.width = "90%";
    document.getElementById("overlayImg").style.height = "25%";
    document.getElementById("overlayImg").style.left = "5%";
    document.getElementById("overlayImg").style.right = "5%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "The abstract of my dissertation, providing an overview of it's contents.";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/abstract.PNG";
    document.getElementById("overlayImg").style.width = "50%";
    document.getElementById("overlayImg").style.height = "55%";
    document.getElementById("overlayImg").style.left = "25%";
    document.getElementById("overlayImg").style.right = "25%";
    document.getElementById("overlayImg").style.top = "24%";
    document.getElementById("overlayText").innerHTML = "The abstract of my dissertation, providing an overview of it's contents.";
  }
}

function overlayOn26() {
	//If controls mobile view, else controls desktop
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/graphs.PNG";
    document.getElementById("overlayImg").style.width = "90%";
    document.getElementById("overlayImg").style.height = "28%";
    document.getElementById("overlayImg").style.left = "5%";
    document.getElementById("overlayImg").style.right = "5%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "Bar charts summarising some of the results of my study, regarding numbers of artificial posts on social media.";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/graphs.PNG";
    document.getElementById("overlayImg").style.width = "45%";
    document.getElementById("overlayImg").style.height = "52%";
    document.getElementById("overlayImg").style.left = "27%";
    document.getElementById("overlayImg").style.right = "27%";
    document.getElementById("overlayImg").style.top = "24%";
    document.getElementById("overlayText").innerHTML = "Bar charts summarising some of the results of my study, regarding numbers of artificial posts on social media.";
  }
}

function overlayOn27() {
	//If controls mobile view, else controls desktop
  if (x.matches) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/summary.PNG";
    document.getElementById("overlayImg").style.width = "90%";
    document.getElementById("overlayImg").style.height = "28%";
    document.getElementById("overlayImg").style.left = "5%";
    document.getElementById("overlayImg").style.right = "5%";
    document.getElementById("overlayImg").style.top = "30%";
    document.getElementById("overlayText").innerHTML = "An Excel table, showcasing the totals of my analysis of AI posts on social media.";
  }else{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImg").src = "images/summary.PNG";
    document.getElementById("overlayImg").style.width = "40%";
    document.getElementById("overlayImg").style.height = "50%";
    document.getElementById("overlayImg").style.left = "30%";
    document.getElementById("overlayImg").style.right = "30%";
    document.getElementById("overlayImg").style.top = "24%";
    document.getElementById("overlayText").innerHTML = "An Excel table, showcasing the totals of my analysis of AI posts on social media.";
  }
}

function overlayOff() {
	//Sets the overlay to no longer display
  document.getElementById("overlay").style.display = "none";
}