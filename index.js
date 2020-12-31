const url = 'api.php';
const render = document.querySelector(".container");
const User = async ()=>{
 const response = await fetch(url);
 const result = await response.json()
 renderFxn(result);
 return result;
}
const renderFxn = (result)=>{
   const users = result;
  
 const user = users.map((person)=>{
  const {name, image} = person

  return `<div class="users item">
  
    <img src="${image}"/>
    <p>${name}</p>
  </div>`
 }).join("");
  render.innerHTML =user;
}
User();