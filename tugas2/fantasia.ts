interface PahlawanAttribute{
    nama: string,
    umur: number,
    siap: boolean,
}

const pahlawan :PahlawanAttribute= {
    nama: "Arion",
    umur: 30,
    siap: true,
}

let emas: number = 5000
let makanan: number = 120
let prajurit: number = 200

console.log(`Pahlawan ${pahlawan.nama} berpetualang dan mendapatkan 1500 gold dan 75xp`)
emas += 1500
let exp: number = 0
exp += 75

console.log(`Pahlawan ${pahlawan.nama} memiliki ${emas} koin emas dan ${exp} Exp`)
