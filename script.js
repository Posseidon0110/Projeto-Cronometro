let btniniciar = document.querySelector("#iniciar")
let dispseg = document.querySelector("#tseg")
let dispmin = document.querySelector("#tmin")

let pegamin = document.querySelector("#dmin")
let pegaseg = document.querySelector("#dseg")

let audio = document.querySelector("#sound")

let acao = "parado"

let minuto
let segundo

btniniciar.addEventListener('click',function(){
    if(acao == "parado"){
        if(pegaseg.value >= 1 && pegaseg.value <= 60 || pegamin.value >= 1){
            if(pegamin.value >= 1){
                minuto = addzero(pegamin.value, 2)
            }
            else{
                minuto = "00"
            }

            console.log(pegaseg.value)

            if(pegaseg.value >= 1 && pegaseg.value <= 60){
                segundo = addzero(pegaseg.value, 2)
            }
            else{
                segundo = "00"
            }
            audio.pause()
            audio.currentTime = 0;
            iniciar()
            dispmin.innerHTML = addzero(minuto, 2)
            dispseg.innerHTML = addzero(segundo, 2)    
        }
        if(pegaseg.value >= 1){

        }
    }
    
})

function iniciar(){
    acao = "contando"
    interval = setInterval(function(){
        if(acao == "contando"){
            if(segundo > 0){
                segundo--
                dispseg.innerHTML = addzero(segundo, 2)
            }
            else{
                if(minuto > 0) {
                    segundo = "60"
                    dispseg.innerHTML = addzero(segundo, 2)
                    minuto--
                    dispmin.innerHTML = addzero(minuto, 2)
                }
                else{
                    acao = "parado"
                    console.log("Fim")
                    audio.play()
                    clearInterval(interval)
                }
            }
        }
    },1000);
}

function addzero(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}