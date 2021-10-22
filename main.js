const linksSocialMedia = {
  github: 'cleibernerymelo',
  youtube: 'maykbrito',
  facebook: 'maykbrito',
  instagram: 'maykbrito',
  twitter: 'maykbrito'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  /*O response é apenas uma variavel. Podia ser qualquer outra coisa.
  o fetch é o responsavel por pegar o arquivo na url indicada. A api já manda em formato json. Porém o fetch  não sabe disso. Então o response.json
  exemplo: Caso eu precisasse passar mais que um argumento para arrow function. Como não será preciso, posso remover as chavetas {}
   .then(response => {
      response.json()
    })
  */
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
