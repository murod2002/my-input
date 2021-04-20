const mur = document.getElementById('mur')
const mura = document.querySelector('.mura')
let array = []

function murod(){
 
    if(mur.value === ''){
        alert('Нету Информации')
    }else{
        let html = ``
        array.push(mur.value)
        for(i = 0; i < array.length; i++){
            html += `<h3 class="border rounded-pill bg-danger p-3 text-white text-center mt-3">${array[i]}</h3>`
            mura.innerHTML = html
            mur.value = '' ;
        }
    }
}


