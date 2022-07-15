const hizmetlerData = [
    {
        title: "Muayene",
        desc: "Muayene Desc"
    },
    {
        title: "Aşı Uygulamaları",
        desc: "Aşı uygulamaları Desc"
    },
    {
        title: "Mikroçip Uygulamaları",
        desc: "Mikroçip Uygulamaları"
    },
    {
        title: "Veteriner Laboratuvar",
        desc: "Veteriner Laboratuvar Desc"
    },
    {
        title: "CR Röntgen",
        desc: "CR Röntgen Desc"
    },
    {
        title: "Diş Ünitesi",
        desc: "Diş Ünitesi Desc"
    },
    {
        title: "Cerrahi Müdahale",
        desc: "Cerrahi Müdahale Desc"
    },
    {
        title: "Yoğun Bakım",
        desc: "Yoğun Bakım Desc"
    },
    {
        title: "Hospitalizasyon",
        desc: "Hospitalizasyon Desc"
    },
    {
        title: "Kuaför Hizmetleri",
        desc: "Kuaför Hizmetleri Desc"
    },
    {
        title: "Petshop Ürünleri",
        desc: "Petshop Ürünleri Desc"
    }
]


const muayeneExpH1 = document.querySelector(".muayeneExp h1")
const muayeneExpSpan = document.querySelector(".muayeneExp span")

function descTest (e) {
    if (e.target.innerText === "Muayene") {
        muayeneExpH1.innerHTML = hizmetlerData[0].title
        muayeneExpSpan.innerHTML = hizmetlerData[0].desc
    }
    else if (e.target.innerText === "Aşı Uygulamaları") {
        muayeneExpH1.innerHTML = hizmetlerData[1].title
        muayeneExpSpan.innerHTML = hizmetlerData[1].desc
    }
    else if (e.target.innerText === "Mikroçip Uygulamaları") {
        muayeneExpH1.innerHTML = hizmetlerData[2].title
        muayeneExpSpan.innerHTML = hizmetlerData[2].desc
    }
    else if (e.target.innerText === "Veteriner Laboratuvar") {
        muayeneExpH1.innerHTML = hizmetlerData[3].title
        muayeneExpSpan.innerHTML = hizmetlerData[3].desc
    }
    else if (e.target.innerText === "CR Röntgen") {
        muayeneExpH1.innerHTML = hizmetlerData[4].title
        muayeneExpSpan.innerHTML = hizmetlerData[4].desc
    }
    else if (e.target.innerText === "Diş Ünitesi") {
        muayeneExpH1.innerHTML = hizmetlerData[5].title
        muayeneExpSpan.innerHTML = hizmetlerData[5].desc
    }
    else if (e.target.innerText === "Cerrahi Müdahale") {
        muayeneExpH1.innerHTML = hizmetlerData[6].title
        muayeneExpSpan.innerHTML = hizmetlerData[6].desc
    }
    else if (e.target.innerText === "Yoğun Bakım") {
        muayeneExpH1.innerHTML = hizmetlerData[7].title
        muayeneExpSpan.innerHTML = hizmetlerData[7].desc
    }
    else if (e.target.innerText === "Hospitalizasyon") {
        muayeneExpH1.innerHTML = hizmetlerData[8].title
        muayeneExpSpan.innerHTML = hizmetlerData[8].desc
    }
    else if (e.target.innerText === "Kuaför Hizmetleri") {
        muayeneExpH1.innerHTML = hizmetlerData[9].title
        muayeneExpSpan.innerHTML = hizmetlerData[9].desc
    }
    else if (e.target.innerText === "Petshop Ürünleri") {
        muayeneExpH1.innerHTML = hizmetlerData[10].title
        muayeneExpSpan.innerHTML = hizmetlerData[10].desc
    }
}
