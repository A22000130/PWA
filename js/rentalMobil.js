
var datamobil = [["Sedan", " 3 hari", " Diskon 25% = Rp.787500"]];
function showMobil() {
  var listMobil = document.getElementById("list-mobil");
  listMobil.innerHTML = "";
  for (let i = 0; i < datamobil.length; i++) {
    var btnEdit = "<a href='#' style='font-weight: bold' onclick='editMobil(" + i + ")'>Edit</a>";
    var btnHapus = "<a href='#' style='font-weight: bold; color: #D2001A' onclick='deleteMobil(" + i + ")'>Hapus</a>";
    listMobil.innerHTML += "<li>" + datamobil[i] + " [  " + btnEdit + " | " + btnHapus + "  ]</li>";
  }
}
function addMobil() {
  var nama = document.querySelector("input[name=mobil]");
  var jumlah = document.querySelector("input[name=jumlah]");
  var diskonMobil = document.getElementById("diskonMobil").value;

  var total = "";
  var diskon = "";
  var isi = nama.value + ", " + jumlah.value + " hari" + ", " + diskonMobil + " = Rp.";
  if (nama.value == "Avanza") {
    if (diskonMobil == "Diskon 25%") {
      diskon = jumlah.value * 300000 * 0.25;
      total = jumlah.value * 300000 - diskon;
    } else if (diskonMobil == "Diskon 10%") {
      diskon = jumlah.value * 300000 * 0.1;
      total = jumlah.value * 300000 - diskon;
    } else if (diskonMobil == "Diskon 5%") {
      diskon = jumlah.value * 300000 * 0.05;
      total = jumlah.value * 300000 - diskon;
    } else {
      total = jumlah.value * 300000;
    }
    datamobil.push([isi + total]);
  } else if (nama.value == "Sedan") {
    if (diskonMobil == "Diskon 25%") {
      diskon = jumlah.value * 350000 * 0.25;
      total = jumlah.value * 350000 - diskon;
    } else if (diskonMobil == "Diskon 10%") {
      diskon = jumlah.value * 350000 * 0.1;
      total = jumlah.value * 350000 - diskon;
    } else if (diskonMobil == "Diskon 5%") {
      diskon = jumlah.value * 350000 * 0.05;
      total = jumlah.value * 350000 - diskon;
    } else {
      total = jumlah.value * 350000;
    }
    datamobil.push([isi + total]);
  } else if (nama.value == "Hiace") {
    if (diskonMobil == "Diskon 10%") {
      diskon = jumlah.value * 1000000 * 0.1;
      total = jumlah.value * 1000000 - diskon;
    } else if (diskonMobil == "Diskon 5%") {
      diskon = jumlah.value * 1000000 * 0.05;
      total = jumlah.value * 1000000 - diskon;
    } else if (diskonMobil == "Tanpa Diskon") {
      total = jumlah.value * 1000000;
    } else {
      alert("Maksimal diskon untuk mobil ini 5-10%");
    }
    datamobil.push([isi + total]);
  } else {
    alert("Masukan data yang valid");
  }

  showMobil();
}
function editMobil(id) {
  var newMobil = prompt("Edit informasi", datamobil[id]);
  datamobil[id] = newMobil;
  showMobil();

}
function deleteMobil(id) {
  if (confirm("Data tidak dapat dikembalikan, apakah anda yakin untuk menghapus data ini?")) {
    datamobil.splice(id, 1);
    showMobil();
  } else {
  }

}
showMobil();
