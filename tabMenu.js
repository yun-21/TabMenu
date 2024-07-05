const tab1 = document.getElementById("tab1")
const tab2 = document.getElementById("tab2")
const tab3 = document.getElementById("tab3")

window.addEventListener("hashchange",()=>{
  const hash = window.location.hash();
  console.log(hash.slice(1));
})