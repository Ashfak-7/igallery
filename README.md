# Ex.08 Design of Interactive Image Gallery
## Date:18/10/2025

## AIM:
To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :
```
gallery.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Image Gallery</title>
    <script src="galscript.js"></script>
    <link rel="stylesheet" href="galstyle.css">
</head>
<body>
    <header>
        <h1>Knights</h1>
        <h4>ASHFAK N(25003270)</h4>
    </header>
    <div class="img-container">
        <div class="img-container" onclick="openModal(this)">
            <img class="images" src="snow.jpg">
        </div>
        <div class="img-cover" onclick="openModal(this)">
            <img class="images" src="stark.jpg">
        </div>
        <div class="img-cover" onclick="openModal(this)">
            <img class="images" src="tyrion.jpg">
        </div>
        <div class="img-cover" onclick="openModal(this)">
            <img class="images" src="robbs.jpg">
        </div>
        <div class="img-cover" onclick="openModal(this)">
            <img class="images" src="jamie.jpg">
        </div>
        <div class="img-cover" onclick="openModal(this)">
            <img class="images" src="robert.jpg">
        </div>
        <div class="img-cover" onclick="openModal(this)">
            <img class="imaages" src="bariston.jpg">
        </div>
    </div>
    <div id="modal">
        <span onclick="closeModal()">&times;</span>
        <img id="modalImage">
    </div>
    <footer>Designed By ASHFAK N(25003270)</footer>
</body>
</html>


galstyle.css
header
{
text-align: center;
background-color: #126e7c;
color: white;
padding: 1rem 0;
}
.img-container
{
white-space: nowrap;
overflow-x: auto;
padding: 1rem;
}
.img-cover
{
display: inline-block;
margin-right: 10px;
}
.images
{
height: 200px;
width: 200;
}


#modal{
display: none; 
position: fixed; 
z-index: 1; 
left: 0; 
top: 0;
width: 100%; 
height: 100%; 
background-color: rgba(0,0,0,0.9)
}
#modalImage{
display: block; 
margin: 5% auto; 
max-width: 80%
}

#modal span{
position: absolute; 
top: 15px; 
right: 35px; 
color: white; 
font-size: 40px; 
font-weight: bold; 
cursor: pointer;
}
footer
{
background-color:blue;
text-align:bottom;
}


galscript.js

gal.js

function openModal(element) {
            var modal = document.getElementById("modal");
            var modalImg = document.getElementById("modalImage");
            modal.style.display = "block";
            modalImg.src = element.querySelector("img").src;
}

function closeModal() {
            document.getElementById("modal").style.display = "none";
}

```
## OUTPUT:
![alt text](<Screenshot (32).png>)
![alt text](<Screenshot (33).png>)
![alt text](<Screenshot (34).png>)
![alt text](<Screenshot (35).png>)
![alt text](<Screenshot (36).png>)
![alt text](<Screenshot (37).png>)
![alt text](<Screenshot (38).png>)
![alt text](<Screenshot (39).png>)
## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
