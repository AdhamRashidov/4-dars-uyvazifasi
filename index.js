
//    ******   eslatma har bitta masalani aloxida comentdan chiqarib tekshiring boshqa masalar  *****
//    ******   bilan bir xil o'zgaruvchisi bo'lishi munkin.    *****



// //1. Sonlarni Solishtirish
// let vaz1son1 = parseFloat(prompt("Birinchi sonni kiriting."));
// let vaz1son2 = parseFloat(prompt("Ikkiinchi sonni kiriting."));
// if (vaz1son1 < vaz1son2) {
//     alert(`${vaz1son2} katta ${vaz1son1} dan.`);
// } else if (vaz1son1 > vaz1son2) {
//     alert(`${vaz1son1} katta ${vaz1son2} dan.`);
// } else {
//     alert("Ikkala son teng.")
// }

// //2. Sonning Musbat, Manfiy yoki Nol Ekanligini Tekshirish
// let vaz2Son = prompt("Biror son kiriting.");
// if (vaz2Son < 0) {
//     alert("Bu son manfiy.");
// } else if (vaz2Son > 0) {
//     alert("Bu son musbat");
// } else {
//     alert ("Bu son '0' ga teng")
// }

// //3. Oddiy Kalkulyator
// let vaz3son1 = Number(prompt("Birinchi sonni kiriting."));
// let vaz3son2 = Number(prompt("Ikkinchi sonni kiriting."));
// let vaz3amal = prompt("amalni tanlang: ( +, -, *, / )");
// let vaz3res = 0;
// switch (vaz3amal) {
//     case '+':
//         alert(`Ikki sonning yig'indisi ${vaz3son1 + vaz3son2}`);
//         break;
//     case '-':
//         alert(`Ikki sonning ayirmasi ${vaz3son1 - vaz3son2}`);
//         break;
//     case '*':
//         alert(`Ikki sonning ko'paytmasi ${vaz3son1 * vaz3son2}`);
//         break;
//     case '/':
//         alert(`Ikki sonning bo'linmasi ${vaz3son1 / vaz3son2}`);
//         break;

//     default:
//         alert("Bunday amal mavjud emas.");
//         break;
// }


// // 4. Faktorial Hisoblash
// let factorial = Number(prompt("Sonni kiriting."));
// let element = 1
// for (let i = 1; i <= factorial; i++) {
//     element = element * i;
// }
// alert(`${factorial} Factorial = ${element} ga`);


// // 5. Fibonacci Ketma-ketligini Chiqaring
// let fibonacci = Number(prompt("Nechta fibonacci istaysiz"));
// let f1 = 0, f2 = 1;

// console.log(f1);


// for (let i = 1; i < fibonacci; i++) {
//     console.log(f2);
//     let next = f1 + f2;
//     f1 = f2;
//     f2 = next;
// }


// // 6. Sonning Toq yoki Juftligini Aniqlash
// let inputSon = parseInt(prompt("Biror son kiriting."));
// if (inputSon % 2 === 0) {
//     alert("Juft son.");
// } else {
//     alert("Toq son.");
// }


// // 7. Armstrong Sonini Tekshirish
// let Armstrong = prompt("3 xonali son kiriting.");
// let str = Armstrong.toString().split("");

// while (str.length !== 3 || isNaN(Armstrong)) {
//     alert("Iltimos 3 xonali son kiriting.");
//     Armstrong = prompt("3 xonali son kiriting.");
//     str = Armstrong.toString().split("");
// }

// console.log("Kiritilgan son:", Armstrong);
// console.log("Raqamlar:", str);

// let sum = 0;
// for (let i = 0; i < str.length; i++) {
//     const element = Number(str[i]) ** 3;
//     sum += element; 
// }

// console.log("Yig'indi:", sum);

// if (Number(Armstrong) === sum) {
//     console.log("Kiritilgan son Armstrong.");
// } else {
//     console.log("Kiritilgan son Armstrong emas.");
// }


// // 8. Palindrom So‘z Tekshiruvi
// let polindrom = prompt("So'z kiriting.");
// let teskari = polindrom.split("").reverse().join("");
// if (polindrom === teskari) {
//     alert("Bu so'z polindrom.");
// } else {
//     alert("Bu so'z polindrom emas.");
// }


// // 9. Ko‘paytma Jadvali
// let vaz9Son = parseInt(prompt("Bitta son kiriting."));
// let karra = 0;
// let jadval = '';

// for (let i = 1; i <= 10; i++) {
//     karra = vaz9Son * i;
//     jadval += vaz9Son + ' x ' + i + ' = ' + karra + '\n';
// }
// alert(jadval);


// // 10. Arraydagi Minimum va Maksimum Element
// let arr = [23, 5, 67, 1, 34];
// let min = arr[0];
// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element < min) {
//         min = element;
//     } else if (element > max) {
//         max = element;
//     }
// }

// console.log("Eng kichik element", min);
// console.log("Eng katta element", max);


// // 11. Eng Uzun So‘zni Topish
// let jumla = prompt("Matn yoki so'zlar ketmaketligini kiriting.");
// let aloxida = jumla.split(" ");
// let max = 0;
// let uzunSoz = [];

// for (let i = 0; i < aloxida.length; i++){
//     const element = aloxida[i];
//     let uzunlik = element.length;
    
//     if (uzunlik > max) {
//         max = uzunlik;
//         uzunSoz = element;
//     }
// }

// console.log(`Eng uzun so'z: "${uzunSoz}" Uzunligi: "${max}"`);


// // 12. Ish Haqini Hisoblash (Ortiqcha Soatlar)
// let ishSoatlari = Number(prompt("Ish soatini kiriting."));
// let soatlikHaq = Number(prompt("Soatlik ish haqini kiriting."));
// let ishHaqi = ishSoatlari * soatlikHaq;

// if (ishSoatlari > 40) {
//     let multiplier = ishSoatlari - 40;
//     multiplier *= soatlikHaq * 2;
//     console.log(`Qo'shimcha multiplier = ${multiplier}`);
// }


// // 13. Arraydagi Juft Sonlar Yig’indisi
// let arr = [4, 7, 10, 15, 20];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         sum += arr[i];
//     }    
// }
// console.log(`Arraydagi Juft Sonlar Yig’indisi = ${sum}`);


// // 14. Arrayni Teskari Tartibda Chiqaring
// let arr14 = prompt("Sonlari ' ' bilan ajratib kiriting.").split(" ");
// console.log(`Arrayning original ko'rinishi = ${arr14}`);
// console.log(`Teskari yozilgan array = ${arr14.reverse()}`);


// // 15. Random Son Topish O'yini
// let randomSon = Math.floor(Math.random() * 100) + 1;
// let InputUser = 0;
// while (InputUser !== randomSon) { 
//     InputUser = Number(prompt("1 dan 100 gacha son kiriting."));
//     if (InputUser < randomSon) {
//         alert("Siz kichik son kiritdingiz.");
//     } else if (InputUser > randomSon) {
//         alert("Siz katta son kiritdingiz");
//     } else {
//         alert("Tabriklayman siz yutdingiz!")
//     }
// }


// // 16. Berilgan Oralig‘dagi Juft Sonlar Yig’indisi
// let start = Number(prompt("Boshlang'ich qiymatni kiriting."));
// let end   = Number(prompt("Tugash qiymatni kiriting."));
// let sum = 0;

// for (let i = start; i < end; i++) {
//     if (i % 2 == 0) {
//         sum += i;
//     }
// }

// alert(`Berilgan oralig'dagi juft sonlar yi'g'indisi = ${sum}`);

// // 17. Sonlar Summasi va O’rtacha Qiymati
// let InputUserSonlar = prompt("Sonlarni ' ' (bo'sh joy) tashlab kiriting.").split(" ").map(Number);
// let summa = 0;

// for (let i = 0; i < InputUserSonlar.length; i++) {
//     summa += InputUserSonlar[i];
// }

// let avg = summa / InputUserSonlar.length;

// console.log(`Yig'indi: ${summa}`);
// console.log(`O'rtacha qiymat: ${avg}`);

// if (avg > 10) {
//     console.log("O'rtacha qiymat 10 dan yuqori.")
// }


// // 18. Muntazam Ketma-ket Sonlar Ro'yxati
// let start = Number(prompt("Start qiymatni kiriting."));
// let stop  = Number(prompt("Stop qiymatni kiriting."));
// let step = Number(prompt("Step qiymatni kiriting."));

// for (let i = start; i <= stop; i += step) {
//     console.log(i);
// }


// // 19. To'g'ri To'rtburchak Yuza va Perimetri Hisobi
// let uzunlik = Number(prompt("Uzunligini kiriting."));
// let kenglik = Number(prompt("kengligini kiriting."));

// let perimetr = 2 * (uzunlik + kenglik);
// let yuzasi = uzunlik * kenglik;

// alert(`To'g'ri to'rtburchakning \nPerimetri = ${perimetr}M/kv \nTo'g'ri to'rtburchakning \nYuzasi = ${yuzasi}M/kv`);

// if (yuzasi > 100) {
//     alert("Ushbu to'g'ri to'rtburchakning yuzasi 100 M/kv dan katta!")
// }


// 20. O'quv Reyting Tizimi
let ball = Number(prompt("talabani 1 dan 100 gacha baholash tizimida baholang."));

if (ball <= 100 && ball >= 90) {
    alert("A");
} else if (ball < 90 && ball >= 80) {
    alert("B");
} else if (ball < 80 && ball >= 70) {
    alert("C");
} else if (ball < 70 && ball >= 60) {
    alert("D");
} else if (ball < 60 && ball >= 50) {
    alert("E");
} else if (ball <= 50 && ball >= 0) {
    alert("F");
} else {
    alert("Iltimos 100 ballik tizimda baholang!");
}