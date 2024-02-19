const camposInput = document.querySelectorAll('[required]')

camposInput.forEach((campo) =>{
    campo.addEventListener('blur', () => validaCampo(campo))
})

function validaCampo(campo){
    
}