function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO] Verifique se todos os campos foram preenchidos!")
    } else {
        res.innerHTML = "Resultado: "
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c=i; c<=f; c+=p){
            res.innerHTML += `${c}`
        }
    }
}

