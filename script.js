

const dias = document.getElementById('dias')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const lancamento = "1 dec 2023"

function countDown(){
   const dataLanc = new Date(lancamento)
   const hoje = new Date()
   
   const segTotal = (dataLanc - hoje)/1000

   const finalD = Math.floor( segTotal / 60 / 60 / 24 ) 
   const finalH = Math.floor(segTotal / 60 / 60 ) % 24
   const finalM = Math.floor(segTotal / 60 ) % 60
   const finalS = Math.floor(segTotal ) % 60

   dias.innerHTML = finalD
   horas.innerHTML = finalH
   minutos.innerHTML = finalM
   segundos.innerHTML = finalS

   dias.innerHTML = "<b>" + finalD + "D" 
   horas.innerHTML = "<b>" + finalH + "H"
   minutos.innerHTML = "<b>" + finalM + "M"
   segundos.innerHTML = "<b>" + finalS + "S"
}


countDown();
setInterval(countDown, 1000)