var center = document.querySelector(".center")
var second = document.querySelector(".second")

function create(tabel,key,value){
    var tr = document.createElement("tr")
    var th = document.createElement("th")
    var td = document.createElement("td")
   
    th.innerHTML = key
    if(key === "flag"){
        let img = document.createElement("img")
        img.src = value
        td.appendChild(img)
        
    }else if(key === "Maps"){
        let a = document.createElement("a")
        a.href = value
        a.target = "_blank"
        a.innerHTML = "click to open Map"
        td.appendChild(a)
    }else

    td.innerHTML = value
  
    tr.appendChild(th)
    tr.appendChild(td)

    tabel.appendChild(tr)

}

function getAPIdata(){
let name = "bharat"
let search = document.getElementById("search")
if(search.value!==""){
    name = search.value
}
    let request = new XMLHttpRequest()
    request.open("get",`https://restcountries.com/v3.1/name/${name}`)
    request.send()

    center.removeChild(second)
     second = document.createElement("div")
     second.classList.add("second")
     center.appendChild(second)

     request.addEventListener("load",()=>{
        for(let country of JSON.parse(request.responseText)){
            var table = document.createElement("tabel")

            create(table,"Official Name ",country.name.official)
            create(table,"Capital",country.capital)
            create(table,"flag",country.flags.svg)
            create(table,"population",country.population)
            create(table,"Area",country.area)
            create(table,"Region",country.region)
            create(table,"Sub-Region",country.subregion)
            create(table,"Continents",country.continents)
            create(table,"Independent",country.independent)
            create(table,"un-Member",country.unMember)
            create(table,"Landlocked",country.landlocked)
            create(table,"Borders",country.borders)
            create(table,"Timezones",country.timezones)
            create(table,"Maps",country.maps.googleMaps)

            second.appendChild(table)

        }
     })

}
getAPIdata()