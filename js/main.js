function wynik(liczba1, liczba2){

    var liczba1 = 11;
    var liczba2 = 10;
    var sumaLiczb = liczba1 + liczba2;
   

    if (liczba1 == 20){
        return true;
    }
        if(liczba2 == 20){
        return true;
    }
        if(sumaLiczb <= 20){
            return true;
        }else{
            return false;
    }
}

console.log(wynik());
