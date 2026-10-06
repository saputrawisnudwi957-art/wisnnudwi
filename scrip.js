let nama = "";
let jumlah = 0;
let pilihan = [];

// LANGKAH 1
function buatPilihan() {

    nama = document.getElementById("nama").value.trim();
    jumlah = parseInt(document.getElementById("jumlah").value);

    if (nama === "") {
        alert("Nama harus diisi!");
        return;
    }

    if (isNaN(jumlah) || jumlah < 1) {
        alert("Jumlah pilihan harus diisi dengan angka minimal 1!");
        return;
    }

    let html = `
        <h3>Data Diri</h3>

        <label>Nama :</label>
        <input type="text" value="${nama}" readonly>

        <br><br>

        <label>Jumlah Pilihan :</label>
        <input type="number" value="${jumlah}" readonly>

        <br><br>

        <h3>Masukkan Pilihan</h3>
    `;

    for (let i = 1; i <= jumlah; i++) {
        html += `
            <label>Pilihan ${i} :</label>
            <input type="text" id="pilihan${i}" placeholder="Teks Pilihan ${i}">
            <br><br>
        `;
    }

    html += `
        <button onclick="buatRadio()">OK</button>
    `;

    document.getElementById("program").innerHTML = html;
}


// LANGKAH 2
function buatRadio() {

    pilihan = [];

    for (let i = 1; i <= jumlah; i++) {

        let teks = document.getElementById("pilihan" + i).value.trim();

        if (teks === "") {
            alert("Pilihan " + i + " harus diisi!");
            return;
        }

        pilihan.push(teks);
    }

    let html = `
        <h3>Data Diri</h3>

        <p>Nama : ${nama}</p>
        <p>Jumlah Pilihan : ${jumlah}</p>

        <h3>Pilihan :</h3>
    `;

    for (let i = 0; i < pilihan.length; i++) {

        html += `
            <input type="radio"
                   name="pilihan"
                   value="${pilihan[i]}"
                   id="radio${i}">

            <label for="radio${i}">
                ${pilihan[i]}
            </label>

            <br><br>
        `;
    }

    html += `
        <button onclick="buatEmail()">OK</button>
    `;

    document.getElementById("program").innerHTML = html;
}


// LANGKAH 3
function buatEmail() {

    let dipilih = document.querySelector(
        'input[name="pilihan"]:checked'
    );

    if (!dipilih) {
        alert("Silakan pilih salah satu pilihan!");
        return;
    }

    let pilihanTerpilih = dipilih.value;

    let html = `
        <h3>Data Diri</h3>

        <p>Nama : ${nama}</p>
        <p>Jumlah Pilihan : ${jumlah}</p>

        <h3>Pilihan :</h3>

        <p>
            Pilihan yang dipilih:
            <b>${pilihanTerpilih}</b>
        </p>

        <h3>Email</h3>

        <label>Email :</label>
        <input type="email"
               id="email"
               placeholder="contoh@email.com">

        <br><br>

        <button onclick="hasilAkhir()">OK</button>
    `;

    document.getElementById("program").innerHTML = html;
}


// LANGKAH 4
function hasilAkhir() {

    let email = document.getElementById("email").value.trim();

    if (email === "") {
        alert("Email harus diisi!");
        return;
    }

    // Pola email
    let polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!polaEmail.test(email)) {
        alert("Format email tidak valid!");
        return;
    }

    let dipilih = document.querySelector(
        'input[name="pilihan"]:checked'
    );

    let pilihanTerpilih = dipilih.value;

    let daftarPilihan = "";

    for (let i = 0; i < pilihan.length; i++) {

        if (i === pilihan.length - 1) {
            daftarPilihan += "dan " + pilihan[i];
        } else {
            daftarPilihan += pilihan[i] + ", ";
        }
    }

    document.getElementById("program").innerHTML = `
        <h2>Hasil</h2>

        <p>
            Hallo, nama saya <b>${nama}</b>,
            email <b>${email}</b>.
            Saya mempunyai sejumlah <b>${jumlah}</b>
            pilihan yaitu <b>${daftarPilihan}</b>,
            dan saya memilih <b>${pilihanTerpilih}</b>.
        </p>
    `;
}