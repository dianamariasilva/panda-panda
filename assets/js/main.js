
// var pictures = ["assets/img/img1.jpg","assets/img/img2.jpg", "assets/img/img3.jpg", "assets/img/img4.jpg"];
// document.getElementsByClassName("container_images");
// var div1 = document.createElement("div");
// document.getElementsByClassName("imagenes").appendChild(div1);
// for(var i=1; i< pictures.length ; i++){
// 	var imagenes =document.getElementsByClassName("img"+i);
// 	var imagen1 = pictures[i];
// 	imagenes.style.background=('')
// }

function elimImg() {
    var list = document.getElementById("myList");
    list.removeChild(list.childNodes[0]);
}

var paragraph1 = document.createElement('p');
var paragraph2 = document.createElement('p');
var div1 = document.createElement('DIV');
var div2 = document.createElement('DIV');
var parrafos = document.getElementById("parrafos");
var text = document.createTextNode('Lorem ipsum dolor sit amet, consectetur   adipisicing elit. Non dignissimos veniam, nostrum repellendus facere iusto ipsum, aliquam! Rem libero enim, asperiores quasi, ducimus, hic nulla nesciunt, culpa sed perspiciatis possimus?');
var text2 = document.createTextNode('Lorem ipsum dolor sit amet, consectetur   adipisicing elit. Non dignissimos veniam, nostrum repellendus facere iusto ipsum, aliquam! Rem libero enim, asperiores quasi, ducimus, hic nulla nesciunt, culpa sed perspiciatis possimus?');

//document.getElementsByTagName("p")[0].setAttribute("class", "parr1");
paragraph1.appendChild(text);
div1.appendChild(paragraph1);
parrafos.appendChild(div1);

paragraph2.appendChild(text2);
div2.appendChild(paragraph2);
parrafos.appendChild(div2);



