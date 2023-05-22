let elements = document.getElementByTagName("strong")
function highlight() {
    //Write your code here
	for(let i=0; i<elements.length;i++){
		elements[i].style.color ="red";
	}


}


function return_normal() {
    //Write your code here
for(let i=0;i<elements.length; i++){
	elements[i].style.color ="black";
	
}
    
}
