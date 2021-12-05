let box=document.querySelector(".box")

let table=document.createElement("table")
let tr1=document.createElement("tr")
let tr2=document.createElement("tr")
let td1=document.createElement("td")
let td2=document.createElement("td")
let td3=document.createElement("td")
let td4=document.createElement("td")


table.setAttribute("id","sampleTable")
table.setAttribute("border",1)

td1.textContent="Row1 cell1"
td2.textContent="Row1 cell2"
tr1.append(td1)
tr1.append(td2)

td3.textContent="Row2 cell1"
td4.textContent="Row2 cell2"
tr2.append(td3)
tr2.append(td4)



table.append(tr1)
table.append(tr2)
box.append(table)