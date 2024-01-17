let total=0
let art=""
let cant=0
let detail=""
let exit=""
let valor=0
let pagos=""
let consfinal=0

function cuotas(valor,pagos){
    let res=false
    while(pagos>=1 && res!=true){
        if (pagos==1){
            res=true
        }
        else if (pagos == 3){
            valor= valor*1.25
            res=true
        }
        else if(pagos == 6){
            valor= valor*1.48
            res=true
        }
        else if(pagos == 9){
            valor= valor*1.67
            res=true
        }
        else if (pagos == 12){
            valor= valor*2
            res=true
        }
        else{
            pagos=Number(prompt("ERROR. Ingrese un valor de cuotas valido.(1,3,6,9 u 12)"))
        }
    }return valor
}

function validador(num){
    key=false
    if (num>0){
        key=true
    }
    else{
        alert("ERROR. Ingrese un numero valido")
    }
    return key
}

function main(){
    do{
        art=prompt("Ingrese el art. que desea")
        cant=Number(prompt("¿Cuantos necesita?"))
        while(validador(cant)!=true){
            cant=Number(prompt("Ingrese un valor valido"))
        }
        valor=Number(prompt("Ingrese el valor"))
        while(validador(valor)!=true){
            valor=Number(prompt("Ingrese un valor valido"))
        }
        detail=(detail)+(cant+" "+art+"  "+"$"+(cant*valor)+"\n")
        total+=(valor*cant)
        exit=prompt("Escriba ESC para salir")
    }while(exit!="ESC")
    alert("El detalle de su compra es:\n"+detail)
    pagos=Number(prompt(("El total es: "+total+"\n\n"+"Ingrese la cantidad de cuotas que desea pagar (1,3,6,9,12)")))
    consfinal=cuotas(total,pagos)
    alert("El total a pagar es de $"+consfinal+"\n\n Gracias por su compra vuelva pronto!")
}

main()
