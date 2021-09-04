
const loadTemp = () => {
    const searchBox = document.getElementById('search-box')
    const searchBoxValue = searchBox.value;
    searchBox.value = '';
    if(searchBoxValue.length == 0){
        alert = 'please input something'
    }
    else if(searchBoxValue == ''){
        alert = 'plese give something'
    }
    else{
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchBoxValue}&appid=8ed426dd1d451801cac92dee363f393f`
        fetch(url)
            .then(res => res.json())
            .then(data => displayTemp(data))
    }
    
    
}
const displayTemp = data => {
    if(data.length === 0){
        alert('please input something')
    }
    else if(
        data.massage === "city not found"
    ){
        alert('something went wrong')
    }
    const tempareture = Math.floor(data.list[0].main.temp / 10)
    const containData = document.getElementById('contain-city')
    containData.textContent = '';
    const url = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
    const div = document.createElement('div')
    div.innerHTML = `
        <img src="${url}" alt="">
            <h1>${data.city.name} ${data.city.country}</h1>
            <h3><span>${tempareture} </span>&deg;C</h3>
            <h1 class="lead">${data.list[0].weather[0].main}</h1>
    `
    containData.appendChild(div)
}

