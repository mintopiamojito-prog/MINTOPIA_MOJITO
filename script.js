const hargaMinuman = 12000;
const hargaTopping = 3000;

function plus(id){
  let el = document.getElementById(id);
  el.innerText = parseInt(el.innerText) + 1;
  hitungTotal();
}

function minus(id){
  let el = document.getElementById(id);

  if(parseInt(el.innerText) > 0){
    el.innerText = parseInt(el.innerText) - 1;
  }

  hitungTotal();
}

function hitungTotal(){

let strawberry = parseInt(document.getElementById("strawberry").innerText);
let melon = parseInt(document.getElementById("melon").innerText);
let markisa = parseInt(document.getElementById("markisa").innerText);
let sunset = parseInt(document.getElementById("sunset").innerText);

let total =
(strawberry * hargaMinuman) +
(melon * hargaMinuman) +
(markisa * hargaMinuman) +
(sunset * hargaMinuman);

const toppingList = [
"strawberry_nata","strawberry_boba","strawberry_jelly",
"melon_nata","melon_boba","melon_jelly",
"markisa_nata","markisa_boba","markisa_jelly",
"sunset_nata","sunset_boba","sunset_jelly"
];

toppingList.forEach(id => {
if(document.getElementById(id).checked){
total += hargaTopping;
}
});

document.getElementById("total").innerText =
total.toLocaleString("id-ID");
}

function showQRIS(){

  let metode =
  document.getElementById("metode").value;

  let qris =
  document.getElementById("qrisSection");

  if(metode === "QRIS"){
    qris.style.display = "block";
  }else{
    qris.style.display = "none";
  }
}

function kirimWA(){

  let nama =
  document.getElementById("nama").value;

  let nomor =
  document.getElementById("nomor").value;

  let tanggal =
  document.getElementById("tanggal").value;

  let jam =
  document.getElementById("jam").value;

  let metode =
  document.getElementById("metode").value;

  let strawberry =
  document.getElementById("strawberry").innerText;

  let melon =
  document.getElementById("melon").innerText;

  let markisa =
  document.getElementById("markisa").innerText;

  let sunset =
  document.getElementById("sunset").innerText;

  let total =
  document.getElementById("total").innerText;

  let toppingStrawberry = [];
let toppingMelon = [];
let toppingMarkisa = [];
let toppingSunset = [];

if(document.getElementById("strawberry_nata").checked) toppingStrawberry.push("Nata de Coco");
if(document.getElementById("strawberry_boba").checked) toppingStrawberry.push("Popping Boba");
if(document.getElementById("strawberry_jelly").checked) toppingStrawberry.push("Rainbow Jelly");

if(document.getElementById("melon_nata").checked) toppingMelon.push("Nata de Coco");
if(document.getElementById("melon_boba").checked) toppingMelon.push("Popping Boba");
if(document.getElementById("melon_jelly").checked) toppingMelon.push("Rainbow Jelly");

if(document.getElementById("markisa_nata").checked) toppingMarkisa.push("Nata de Coco");
if(document.getElementById("markisa_boba").checked) toppingMarkisa.push("Popping Boba");
if(document.getElementById("markisa_jelly").checked) toppingMarkisa.push("Rainbow Jelly");

if(document.getElementById("sunset_nata").checked) toppingSunset.push("Nata de Coco");
if(document.getElementById("sunset_boba").checked) toppingSunset.push("Popping Boba");
if(document.getElementById("sunset_jelly").checked) toppingSunset.push("Rainbow Jelly");

  let pesan =
`Halo Mintopia Mojito! 🍹

Nama: ${nama}
No WA: ${nomor}

Pesanan:

🍓 Strawberry Mojito : ${strawberry}
🍈 Melon Mojito : ${melon}
🍹 Markisa Mojito : ${markisa}
🌅 Sunset Berry : ${sunset}

Topping:
🍓 Strawberry Mojito : ${strawberry}
Topping:
${toppingStrawberry.join(", ") || "-"}

🍈 Melon Mojito : ${melon}
Topping:
${toppingMelon.join(", ") || "-"}

🍹 Markisa Mojito : ${markisa}
Topping:
${toppingMarkisa.join(", ") || "-"}

🌅 Sunset Berry : ${sunset}
Topping:
${toppingSunset.join(", ") || "-"}

📅 Tanggal Ambil:
${tanggal}

🕒 Jam Ambil:
${jam}

💳 Metode:
${metode}

💰 Total:
Rp ${total}

📍 Kampus Pelita Indonesia`;

  window.open(
`https://wa.me/628972151687?text=${encodeURIComponent(pesan)}`
  );
}
const tanggalSelect = document.getElementById("tanggal");
const jamSelect = document.getElementById("jam");

function updateJam() {
  const tanggal = tanggalSelect.value;

  jamSelect.innerHTML = "";

  let jamList = [];

  if (tanggal === "13 Juni 2026") {
    jamList = ["15.00", "16.00", "17.00", "18.00", "19.00", "20.00","21.00"];
  } else {
    jamList = [
      "09.00","10.00","11.00",
      "12.00","13.00","14.00","15.00",
      "16.00","17.00","18.00","19.00","20.00","21.00"
    ];
  }

  jamList.forEach(jam => {
    const option = document.createElement("option");
    option.value = jam;
    option.textContent = jam;
    jamSelect.appendChild(option);
  });
}

tanggalSelect.addEventListener("change", updateJam);
updateJam();
