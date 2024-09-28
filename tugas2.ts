// Nama Pahlawan
let namaPahlawan: string = "Arion";
let age: number = 30;
let statusBertarung: boolean = true;

// Sumber Daya Kerjaan
let emass: number = 5000;
let persedianMakanan: number = 120;
let prajuritt: number = 200;

let emasTambahan: number = 1500 + emass;
let pengalamanBertarung: number = 75;

function kurangiKesehatan(jumlahPrajurit: number, jumlahPoinKesehatan: number) {
  let kesehatanPrajurit: number = 100;
  let totalKesehatan: number = kesehatanPrajurit - jumlahPoinKesehatan;

  if (totalKesehatan > 0) {
    console.log("Jumlah Prajurit :", jumlahPrajurit);
    console.log("Kesehatan Prajuti :", totalKesehatan);
  } else {
    console.log("Prajurit tidak bisa bertarung");
  }
}

function rangkumanMisi() {
  console.log("Nama Pahlawan :", namaPahlawan);
  console.log("Emas yang dikumpulkan :", emasTambahan);
  console.log("Poin Pengalaman :", pengalamanBertarung);
}

// Penyembuhan
kurangiKesehatan(100, 5);

// Rangkuman Misi Arion
console.log("------");

rangkumanMisi();
