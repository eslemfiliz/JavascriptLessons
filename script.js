//Diziler
// var phones=[
//     "Apple",
//     "Honor",
//     "Huawei",
//     "Samsung",
//     "Vestel"
// ];
// console.log(phones);
// console.log(phones[2]);
// var telefonMarkasi="Telefon Markam:"+phones[0];
// console.log(telefonMarkasi);

// var phones=[
//     "Apple",
//     "Huawei",
//     "Samsung",
// ];
// var phone={phoneName:'Apple',phoneColor:"Blue",phoneStockNumber:61,phoneSockState:true};
// console.log(phone);

// var phones=[
//     "Apple",
//     "Huawei",
//     "Samsung",
//     "Vestel"
// ];
// console.log("Magazamızda"+phones.length+ "adet farklı telefon bulunmaktadır");

/*son elemanı bulmamızı sağlar*/ 
// console.log(phones[phones.length-1]);
/*eleman ekleme,listenin sonuna ekler*/
// phones.push("Oppo");
// console.log(phones);


// var numbers= new Array(40,50,100);
// console.log(numbers); 

// var numbers= new Array(40);
// console.log(numbers); 


// var phones=[
//     "Apple",
//     "Huawei",
//     "Samsung",
//     "Vestel"
// ];
// var cikarilanEleman=phones.pop();
// var eklendi=phones.push("Tesla");
// console.log(phones);
// console.log("Cikarilan eleman:"+cikarilanEleman,"Magazadaki farklı telefon değeri:"+eklendi);

// var phones=[
//     "Apple",
//     "Huawei",
//     "Samsung",
//     "Vestel"
// ];
// phones.splice(2,0,"Oppo","LG");
// console.log(phones);
// var diziBir=["A","B","C"];
// var diziIki=[1,2,3,4,5];
// var yeniDizi=diziBir.concat(diziIki);
// console.log(yeniDizi);

// var okulAracGerecleri=["Öğrenci","Kalem","Silgi","Öğretmen","Çanta","Suluk","Defter","Önlük","Çelik"];
// okulAracGerecleri.sort();
// okulAracGerecleri.reverse();
// console.log(okulAracGerecleri);


// günümüz saat ve tarihi
// var date= new Date();
// console.log(date);

// var date= new Date(2000,7,16,15,40,0);
// console.log(date);

// var date= new Date("2000-08-16");
// console.log(date);

// var date= new Date("August 16 2000");
// console.log(date);

// var gunumuz= new Date();
// var kullaniciDogumYili=prompt("Dogum yılı giriniz");
// console.log(kullaniciDogumYili);


// var gunumuzYili= new Date().getFullYear();
// var kullaniciDogumYili=prompt("Dogum yılı giriniz");
// var kullaniciTarih=new Date();
// kullaniciTarih.setFullYear(kullaniciDogumYili);
// var kullaniciYil=kullaniciTarih.getFullYear();

// var age=gunumuzYili-kullaniciYil;
// console.log(age);

// Conditions
// var sayi=12;
// console.log(sayi<10);

// if(sayi<10){
// console.log("Bu bir rakamdır.");
// }else{
//     console.log("Bu bir sayıdır.");
// }
// var sayi=12;


// if(sayi<10){
// console.log("Bu sayı 10 dan  küçktür.");
// }else{
//     console.log("Bu sayı 10 dan büyüktür.");
// }
// var isim="Eslem";

// if(isim=="Eslem"){
// console.log("Kullanıcı adı doğru.");
// }else{
//     console.log("Kullanıcı adı hatalı.");
// }

// var sayi=1;


// if(sayi==1){
// console.log("Sayı birdir.");
// }else if(sayi==2){
//     console.log("Sayi ikidir.");
// }else{
//     console.log("Sayi farklidir.")
// }

// var age=prompt("Yaşınızı giriniz.","18");
// console.log(age);

// if(age<18){
//     console.log("Ehliyet alamaz.");
// }else if(age>=18){
//     console.log("Ehliyet alabilir.");
// }

// Switch
// var date= 10;
// console.log(date);

// switch(date){
//     case 0:
//         console.log("Pazar");
//         break;
//     case 1:
//         console.log("Pazartesi");
//         break;
//     case 2:
//         console.log("Salı");
//         break;
//     case 3:
//         console.log("Çarşamba");
//         break;
//     case 4:
//         console.log("Perşembe");
//         break;
//     case 5:
//         console.log("Cuma");
//         break;
//     case 6:
//         console.log("Cumartesi");     
//         break;  
//     default:
//         console.log("Hata");                     
// }

// var sayac=1;

// while(sayac<10){
//     console.log(sayac);
//     sayac+=1;
// }

// var sayi=1;

// while(sayi<50){
//     if(sayi%2==0){
//         console.log(sayi+" Çift sayidir.")
        
//     }else{
//         console.log(sayi+"Tek sayidir.")
//     }
//     sayi+=1;
// }

// var sayac=0;

// do{
//     sayac++;
//     console.log(sayac);
// }while(sayac<10);
// parseInt sayi değerine çevirir yani number
// var sayi=parseInt(prompt("kaça kadar yazilsin"));

// for(var i=0;i<=sayi;i++){
//     console.log(i);
// }

// var sayilar=[10,12,20,25];

// for(var i=0;i<sayilar.length;i++){
//     console.log(sayilar[i]);
// }

// for(var i=0;i<15;i++){
//     if(i==3){
//         continue;
//     }
//     console.log(i);
// }
// for(var i=0;i<15;i++){
//     if(i==3){
//         break;
//     }
//     console.log(i);
// }
// console.log("Döngü bitmiştir.");


// var toplam=0;

// for(var i=0;i<3;i++){
//     var sayi=parseInt(prompt((i+1)+".sayiyi giriniz"));
//     toplam+=sayi;
// }
// console.log(toplam);

// fonksiyonlar

// function showMessage(message){
//     alert(message);
// }
// var kullaniciAdi=prompt("Kullanıcı Adı");
// var kullaniciSifre=parseInt(prompt("Kullanıcı Şifre"));

// if(kullaniciAdi=="Eslem" && kullaniciSifre==12345){
//     showMessage("Giriş Başarılı");
// }else{
//     showMessage("Giriş Hatalı");
// }

var sayiBir=parseInt(prompt("1. sayi"));
var sayiIki=parseInt(prompt("2. sayi"));

function topla(a,b){
    var islem=a+b;
    return islem;

}
var sonuc=topla(sayiBir,sayiIki);
console.log(sonuc);

if(sonuc>=0){
    console.log("sayi pozitif");
}else{
    console.log("Sayi negatif");
}