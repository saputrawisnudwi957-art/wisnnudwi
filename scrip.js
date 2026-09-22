document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // ARRAY UNTUK MENYIMPAN PILIHAN
    // ==========================================

    const pilihanCheckbox = [
        "Programming",
        "Gaming",
        "Futsal",
        "Membaca",
        "Menonton Film"
    ];

    const pilihanDropdown = [
        "Informatika",
        "Sistem Informasi",
        "Teknik Informatika",
        "Teknik Komputer",
        "Manajemen"
    ];

    const pilihanRadio = [
        "Mahasiswa",
        "Pelajar",
        "Pekerja"
    ];


    // ==========================================
    // MEMBUAT FORM DENGAN JAVASCRIPT DOM
    // ==========================================

    const form = document.createElement("div");

    form.style.margin = "30px";
    form.style.padding = "20px";
    form.style.border = "2px solid #333";
    form.style.borderRadius = "10px";
    form.style.maxWidth = "500px";


    // ==========================================
    // INPUT TEXT
    // ==========================================

    const judulText = document.createElement("h2");
    judulText.textContent = "Input Data";
    form.appendChild(judulText);

    const labelNama = document.createElement("label");
    labelNama.textContent = "Nama:";
    form.appendChild(labelNama);

    form.appendChild(document.createElement("br"));

    const inputNama = document.createElement("input");
    inputNama.type = "text";
    inputNama.placeholder = "Masukkan nama";
    inputNama.id = "nama";
    inputNama.style.width = "250px";
    form.appendChild(inputNama);


    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));


    // ==========================================
    // INPUT NUMBER / SPINNER
    // ==========================================

    const labelJumlah = document.createElement("label");
    labelJumlah.textContent = "Jumlah pilihan (1-5):";
    form.appendChild(labelJumlah);

    form.appendChild(document.createElement("br"));

    const inputJumlah = document.createElement("input");
    inputJumlah.type = "number";
    inputJumlah.min = "1";
    inputJumlah.max = "5";
    inputJumlah.value = "3";
    inputJumlah.id = "jumlah";
    form.appendChild(inputJumlah);


    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));


    // ==========================================
    // INPUT EMAIL
    // ==========================================

    const labelEmail = document.createElement("label");
    labelEmail.textContent = "Email:";
    form.appendChild(labelEmail);

    form.appendChild(document.createElement("br"));

    const inputEmail = document.createElement("input");
    inputEmail.type = "text";
    inputEmail.placeholder = "contoh@email.com";
    inputEmail.id = "email";
    inputEmail.style.width = "250px";
    form.appendChild(inputEmail);


    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));


    // ==========================================
    // CHECKBOX
    // ==========================================

    const judulCheckbox = document.createElement("h3");
    judulCheckbox.textContent = "Pilih Hobi:";
    form.appendChild(judulCheckbox);

    const checkboxContainer = document.createElement("div");
    checkboxContainer.id = "checkboxContainer";
    form.appendChild(checkboxContainer);


    // ==========================================
    // DROPDOWN
    // ==========================================

    const judulDropdown = document.createElement("h3");
    judulDropdown.textContent = "Pilih Program Studi:";
    form.appendChild(judulDropdown);

    const dropdown = document.createElement("select");
    dropdown.id = "dropdown";

    pilihanDropdown.forEach(function (pilihan) {

        const option = document.createElement("option");

        option.value = pilihan;
        option.textContent = pilihan;

        dropdown.appendChild(option);
    });

    form.appendChild(dropdown);


    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));


    // ==========================================
    // RADIO BUTTON
    // ==========================================

    const judulRadio = document.createElement("h3");
    judulRadio.textContent = "Status:";
    form.appendChild(judulRadio);

    const radioContainer = document.createElement("div");
    radioContainer.id = "radioContainer";
    form.appendChild(radioContainer);


    // ==========================================
    // TOMBOL OUTPUT
    // ==========================================

    const tombol = document.createElement("button");
    tombol.textContent = "Tampilkan Data";
    tombol.style.marginTop = "15px";
    tombol.style.padding = "8px 15px";

    form.appendChild(tombol);


    // ==========================================
    // TEMPAT OUTPUT
    // ==========================================

    const outputJudul = document.createElement("h3");
    outputJudul.textContent = "Output:";
    form.appendChild(outputJudul);

    const output = document.createElement("div");
    output.id = "output";
    output.style.padding = "10px";
    output.style.border = "1px solid #999";
    output.style.minHeight = "50px";

    form.appendChild(output);


    // Masukkan form ke halaman HTML
    document.body.insertBefore(form, document.body.firstChild);


    // ==========================================
    // FUNGSI MEMBUAT CHECKBOX DAN RADIO
    // BERDASARKAN JUMLAH PILIHAN
    // ==========================================

    function buatPilihan() {

        checkboxContainer.innerHTML = "";
        radioContainer.innerHTML = "";

        let jumlah = parseInt(inputJumlah.value);

        // Error handling number
        if (isNaN(jumlah) || jumlah < 1 || jumlah > 5) {

            alert("Jumlah pilihan harus antara 1 sampai 5!");

            inputJumlah.value = 3;
            jumlah = 3;
        }


        // LOOP CHECKBOX
        for (let i = 0; i < jumlah; i++) {

            const label = document.createElement("label");

            const checkbox = document.createElement("input");

            checkbox.type = "checkbox";
            checkbox.name = "hobi";
            checkbox.value = pilihanCheckbox[i];

            label.appendChild(checkbox);
            label.appendChild(
                document.createTextNode(" " + pilihanCheckbox[i])
            );

            checkboxContainer.appendChild(label);
            checkboxContainer.appendChild(
                document.createElement("br")
            );
        }


        // LOOP RADIO BUTTON
        for (let i = 0; i < jumlah; i++) {

            const label = document.createElement("label");

            const radio = document.createElement("input");

            radio.type = "radio";
            radio.name = "status";
            radio.value = pilihanRadio[i];

            label.appendChild(radio);
            label.appendChild(
                document.createTextNode(" " + pilihanRadio[i])
            );

            radioContainer.appendChild(label);
            radioContainer.appendChild(
                document.createElement("br")
            );
        }
    }


    // Jalankan pertama kali
    buatPilihan();


    // Jika jumlah berubah
    inputJumlah.addEventListener("change", function () {
        buatPilihan();
    });


    // ==========================================
    // VALIDASI EMAIL
    // ==========================================

    inputEmail.addEventListener("blur", function () {

        const patternEmail =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!patternEmail.test(inputEmail.value)) {

            alert(
                "Email tidak valid!\n" +
                "Silakan masukkan email yang benar.\n" +
                "Contoh: nama@gmail.com"
            );

            inputEmail.value = "";
            inputEmail.focus();
        }
    });


    // ==========================================
    // TOMBOL OUTPUT
    // ==========================================

    tombol.addEventListener("click", function () {

        // Validasi nama
        if (inputNama.value.trim() === "") {

            alert("Nama harus diisi!");

            inputNama.focus();

            return;
        }


        // Validasi email
        const patternEmail =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!patternEmail.test(inputEmail.value)) {

            alert("Email tidak valid!");

            inputEmail.focus();

            return;
        }


        // Ambil checkbox yang dipilih
        const checkboxTerpilih =
            document.querySelectorAll(
                'input[name="hobi"]:checked'
            );

        let hasilCheckbox = [];

        checkboxTerpilih.forEach(function (checkbox) {
            hasilCheckbox.push(checkbox.value);
        });


        // Ambil radio yang dipilih
        const radioTerpilih =
            document.querySelector(
                'input[name="status"]:checked'
            );


        let hasilRadio = "";

        if (radioTerpilih) {
            hasilRadio = radioTerpilih.value;
        } else {
            hasilRadio = "Belum memilih";
        }


        // Ambil dropdown
        const hasilDropdown = dropdown.value;


        // ==========================================
        // OUTPUT DENGAN JAVASCRIPT DOM
        // ==========================================

        output.innerHTML = "";

        const pNama = document.createElement("p");
        pNama.textContent = "Nama: " + inputNama.value;

        const pEmail = document.createElement("p");
        pEmail.textContent = "Email: " + inputEmail.value;

        const pHobi = document.createElement("p");
        pHobi.textContent =
            "Hobi: " +
            (hasilCheckbox.length > 0
                ? hasilCheckbox.join(", ")
                : "Belum memilih");

        const pProdi = document.createElement("p");
        pProdi.textContent =
            "Program Studi: " + hasilDropdown;

        const pStatus = document.createElement("p");
        pStatus.textContent =
            "Status: " + hasilRadio;


        output.appendChild(pNama);
        output.appendChild(pEmail);
        output.appendChild(pHobi);
        output.appendChild(pProdi);
        output.appendChild(pStatus);
    });

});