let mainContent = document.getElementById("mainContent");
let boxProducto = document.createElement("div");

mainContent.appendChild(boxProducto);
boxProducto.setAttribute("class", "box-producto");

let boxImgProducto = document.createElement("div");
boxProducto.appendChild(boxImgProducto);

let imgProducto = document.createElement("img");
boxImgProducto.appendChild(imgProducto);
imgProducto.setAttribute("src", "imag//articulo-4.jpg");