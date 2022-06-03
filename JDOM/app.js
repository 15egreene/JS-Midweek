console.log('Whats good');

let getRacer = async name => {
    let response = await axios.get(`https://ergast.com/api/f1/2020/1/driverStandings.json`)
    console.log(response);
    return response.data

}

let ourData = async name => {
    let data = await getRacer(name);
    console.log(data);
    if (typeof data === 'object') {
        console.log(data)
        console.log(data.name)
        let new_card = `<div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
        <ul> class="list-group list-group-flush">
        <li class="list-group-item">${data.types[0].type.name}</li>
        </div>
      </div>`
    }
}

let form = document.querySelector('#form');

form.addEventListener('submit', event => {
    event.preventDefault();
    let racer_name = event.path[0][0].value;
    ourData(racer_name);
    form.reset();
})

