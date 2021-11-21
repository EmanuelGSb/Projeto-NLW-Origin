const LinksSocialMedia = {
  github: 'EmanuelGSb',
  youtube: 'UCYm3gnlHm79BOlyNcOFw82A',
  facebook: 'emanueldoutor',
  intagram: 'emanuelgs_d'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `http://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.scr = data.avatar_url
      UserLogin.textContent = data.login
    })
  // transformando o "response" em json pois o fetch armazena os dados em formato de objeto e não sabe ao certo o que ele é(documento adquirido)
  //já que é apenas uma função dentro da arrow function nn é usado o {}
  //um then pega a resposta do outro
  //.texContentent é pra alteração do nome que eu peguei dentro de uma class / sendo uma função que mexe na don
}
getGitHubProfileInfos()
