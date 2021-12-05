
let box=document.querySelector(".box")

let p=document.createElement("p")
let a=document.createElement("a")
a.setAttribute("href","https://www.w3schools.com")
a.setAttribute("id","w3r")
a.setAttribute("type","text/html")
a.setAttribute("rel","nofollow")
a.setAttribute("target","_self")
a.textContent="w3schools"

p.append(a)
box.append(p)

console.log(box)


