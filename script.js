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

  if(document.getElementById("nata").checked){
    total += hargaTopping;
  }

  if(document.getElementById("boba").checked){
    total += hargaTopping;
  }

  if(document.getElementById("rainbow").checked){
    total += hargaTopping;
  }

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

  let topping = [];

  if(document.getElementById("nata").checked){
    topping.push("Nata de Coco");
  }

  if(document.getElementById("boba").checked){
    topping.push("Popping Boba");
  }

  if(document.getElementById("rainbow").checked){
    topping.push("Rainbow Jelly");
  }

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
${topping.join(", ") || "-"}

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
