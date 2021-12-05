let boxs=document.querySelector(".boxs")

boxs.style.display="flex"

let box1=document.createElement("div")
box1.style.width="200px"
box1.style.height="200px"
box1.style.backgroundColor="orange"
box1.style.color="black"
box1.style.border="3px green solid"
box1.textContent="box1"
box1.style.display="inline-block"
box1.style.margin="5px"

boxs.appendChild(box1)


let box2=document.createElement("div")
box2.style.width="200px"
box2.style.height="200px"
box2.style.color="black"
box2.style.border="3px red solid"
box2.textContent="box2"
box2.style.display="inline-block"
box2.style.margin="5px"


boxs.appendChild(box2)


let box3=document.createElement("div")
box3.style.width="100px"
box3.style.height="100px"
box3.style.color="black"
box3.style.border="3px green solid"
box3.textContent="box3"
box3.style.display="inline-block"
box3.style.margin="5px"


boxs.appendChild(box3)


let box4=document.createElement("div")
box4.style.width="200px"
box4.style.height="200px"
box4.style.color="black"
box4.style.border="3px red solid"
box4.style.display="inline-block"
box4.style.margin="5px"


boxs.appendChild(box4)