let select=document.querySelector("#myselect")
let option=document.querySelector("#myselect option")

alert("Count items: "+select.length)
let getvalue=option.getAttribute("value")[0]

alert(getvalue)