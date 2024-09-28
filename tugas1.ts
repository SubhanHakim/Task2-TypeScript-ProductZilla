// Tugas 2 MSIB Soal no 1

// String
let nama: string = "Subhan Nur Iqbal Hakim";
let univ: string = "Universitas Siliwangi";
let asalKota: string = "Kota Tasikmalaya";
let makananKesukaan: string = "apapun asal bersama orang spesial";
let hobi: string = "Basket";

//number INT & Float
let umur: number = 21;
let jmlhOrang: number = 24;
let jarak: number = 21.9;
let semester: number = 5;
let tingkatan: number = 7;
let dataBidang: number = 10.5;

// Null
let nilai: null = null;

// Boolean
let isPresented: boolean = true;
let isLikeBasket: boolean = false;
let isDarkMode: boolean = false;
let isAutoAim: boolean = true;
let isAutoHeadshot: boolean = false;
let isWallHack: boolean = true;

// Undifined
let kelas: undefined = undefined;
let dataDonor: undefined = undefined;

// Union Type
let statusCode: string | number;

// Any
let tipeDataLain: any = "Ini bisa menerima berbagai tipe data";

// enum
enum levelUsia {
  anaKecil,
  Dewasa,
  Tua,
}
let manusia: levelUsia = levelUsia.Dewasa;

// array
let dataUsia: number[] = [50, 20, 25];
let daftarPeserta: string[] = ["Subhan", "Cynthia", "Faiq"];
let dataAcak: any[] = ["iqbal", 20, "nur"];

// Console log soal 1
console.log(asalKota);
console.log(daftarPeserta);
console.log(dataAcak);
console.log(dataDonor);
console.log(dataUsia);
console.log(hobi);
console.log(isAutoAim);
console.log(isAutoHeadshot);
console.log(isDarkMode);
console.log(isPresented);
console.log(isWallHack);
console.log(jarak);
console.log(jmlhOrang);
console.log(kelas);
console.log(makananKesukaan);
console.log(manusia);
console.log(nama);
console.log(nilai);
console.log(semester);
console.log(tingkatan);
console.log(tipeDataLain);
console.log(umur);
console.log(univ);
console.log(dataBidang);

// Tugas 2 MSIB Soal No 2
function penjumlahan(nilai1: number, nilai2: number): number {
  return nilai1 + nilai2;
}

const pengurangan = (nilai1: number, nilai2: number): number => {
  return nilai1 - nilai2;
};

function perkalian(nilai1: number, nilai2: number): number {
  return nilai1 * nilai2;
}

const pembagian = (nilai1: number, nilai2: number): number => {
  return nilai1 / nilai2;
};

console.log("Penjumlahan", penjumlahan(2, 4));
console.log("Pengurangan", pengurangan(2, 4));
console.log("Perkalian", perkalian(2, 4));
console.log("Pembagian", pembagian(2, 4));
