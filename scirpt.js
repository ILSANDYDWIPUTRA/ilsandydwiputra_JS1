// Contoh penggunaan if, else, dan nested if
let nilaiMahasiswa = 85;
if (nilaiMahasiswa >= 60) {
    if (nilaiMahasiswa >= 70) {
        console.log("Selamat! Anda lulus dengan grade " + tentukanGrade(nilaiMahasiswa));
    } else {
        console.log("Anda lulus dengan grade " + tentukanGrade(nilaiMahasiswa) + ", tapi perlu belajar lebih giat.");
    }
} else {
    console.log("Maaf, Anda tidak lulus.");
}

// Contoh penggunaan switch case
let nilaiHuruf = 'A';
switch (nilaiHuruf) {
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Average");
        break;
    default:
        console.log("Poor");
}

// Contoh penggunaan for statement

for (let i = 1; i <= 5; i++) {
    console.log("Iterasi ke-" + i);
}

// Contoh penggunaan while
let counter = 1;
while (counter <= 5) {
    console.log("Iterasi ke-" + counter);
    counter++;
}

// Contoh penggunaan do while
let count = 1;
do {
    console.log("Iterasi ke-" + count);
    count++;
} while (count <= 5);


//contoh penggunaan function
function tentukanGrade(nilai) {
    if (nilai >= 90) {
        return "A";
    } else if (nilai >= 80) {
        return "B";
    } else if (nilai >= 70) {
        return "C";
    } else if (nilai >= 60) {
        return "D";
    } else {
        return "E";
    }
    let nilai = 80
}

