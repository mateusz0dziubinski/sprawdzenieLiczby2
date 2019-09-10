var liczba1 = 21;
var liczba2 = 0;
var sumaLiczb = liczba1 + liczba2;
var wpiszliczbe = sumaLiczb;

function wynik(){
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
