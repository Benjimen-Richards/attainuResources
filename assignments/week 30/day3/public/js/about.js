const submitbtn = document.getElementById('submitbtn')
const cityvalue = document.getElementById('cityname')
const temp = document.getElementById('temp')
const getinfo = async (e) => {
    e.preventDefault()
    const cityname = cityvalue.value ? cityvalue.value : 'delhi';
    // console.log(cityname)
    const apiurl = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityname}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    const response = await fetch(apiurl)
    const data = await response.json()

    const arr = [data]
    console.log(arr)
    temp.innerText = `${arr[0].city.name} temp =${arr[0].list[0].feels_like.day} c`

}

submitbtn.addEventListener('click', getinfo)

