window.count = 0;

const render = (json) => {
    const post = document.getElementById('let')
    let data_ = json.data
    for (let me=0; me in data_; me++){
        const div = document.createElement('div')
        const h2 = document.createElement('h2')
        const img = document.createElement('img')
        const p = document.createElement('p')
        count++
        div.classList.add(`card`);
        div.setAttribute('id', `card-${count}`)
        img.src = data_[me].avatar
        h2.innerText = `${data_[me].first_name} ${data_[me].last_name}`
        p.innerText = `Email: ${data_[me].email}`
        div.appendChild(img)
        div.appendChild(h2)
        div.appendChild(p)
        post.appendChild(div)
    }
    // removeElement('card')
}

function search() {
    let input = document.getElementById("mySearch");
    let filter = input.value.toUpperCase();
    let main = document.getElementById("let");
    let card = main.getElementsByTagName("div");
  
    for (let i = 0; i < card.length; i++) {
      let h2 = card[i].getElementsByTagName("h2")[0];
      if (h2.innerHTML.toUpperCase().indexOf(filter) > -1) {
        card[i].style.display = "";
      } else {
        card[i].style.display = "none";
      }
    }
  }

function get_l(I) {
    fetch(`https://reqres.in/api/users?page=${I}`)
        .then(
            obj=>obj.json(),
            e=>console.log(e)
        )
        .then(
            json=>render(json),
            e=>console.log(e)
        )
}

for(let I=1; I<3; I++) {
    get_l(I)
}

function removeElement(elementClass) {
    document.querySelector('#let').innerText = ''
}


