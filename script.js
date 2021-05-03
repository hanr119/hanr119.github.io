var listElements = document.querySelector(".links");

var boxOne = document.querySelector(".box-one");

var studioLabel = document.createElement("h2");
studioLabel.classList.add("studio-label");
studioLabel.innerText = "STUDIO";
studioLabel.style.textAlign = "center";
boxOne.append(studioLabel);

boxOne.addEventListener("mouseover", function(){
    studioLabel.classList.add("active");
    listElements.classList.add("mouseover");
})

boxOne.addEventListener("mouseout", function(){
    var studioLabel = document.querySelector(".studio-label");
    studioLabel.classList.remove("active");
    listElements.classList.remove("mouseover");
})


var listElementsTwo = document.querySelector(".links-two");

var boxTwo = document.querySelector(".box-two");
var labLabel = document.createElement("h2");
labLabel.classList.add("lab-label");
labLabel.innerText = "LAB";
labLabel.style.textAlign = "center";
boxTwo.append(labLabel);

boxTwo.addEventListener("mouseover", function(){
    labLabel.classList.add("active");
    listElementsTwo.classList.add("mouseover");
})

boxTwo.addEventListener("mouseout", function(){
    var labLabel = document.querySelector(".lab-label");
    labLabel.classList.remove("active");
    listElementsTwo.classList.remove("mouseover");
})