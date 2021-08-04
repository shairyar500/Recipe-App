
let API_KEY ='d1f2fb69a847477fb35d1d12e225cf24';


fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=d1f2fb69a847477fb35d1d12e225cf24&query=pasta')
.then(response => {
return response.json();
}).then(recipeArray)

.catch(function (err) {
  console.log(err);
});


function recipeArray(obj){

  let recepies = obj.results;

  console.log(recepies);

  console.log(typeof recepies);

  
document.getElementById("main-container").innerHTML =(recepies.map(recipe => 
    `
    <div class="main">
      <div class="content">
        <img  src="${recipe.image}" />
        <div class="title">${recipe.title}</div>
        <button type="button" class="btn">View Recipe</button>
     </div> 
    </div>`
).join(''));
}