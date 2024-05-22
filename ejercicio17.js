const filtrar = x => x.name === "correcion evaluacion";

(async () => {


  let response = await fetch('user.json');
  let user = await response.json();

  let respuestGithub = await fetch(`https://api.github.com/users/users${user.name}/repos`);
    let usuariogithub = await respuestGithub.json();
  
  usuariogithub.forEach(elememt => {


    if (elememt.name === "correcion evaluacion") {
      console.log(elememt)


    }
  });

  let data = usuariogithub.filter(filtrar)
  console.log(data)
  console.log(usuariogithub)


})();