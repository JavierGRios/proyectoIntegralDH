window.addEventListener('load',()=>{



    const mainListaUsuario = document.getElementById('mainListaUsuario');
    const listaUsuario = document.getElementById('listaUsuario')
    
    mainListaUsuario.addEventListener('load',(e)=>{
    
    
        mainListaUsuario.classList.add('container')
        mainListaUsuario.style.backgroundColor= "white";
    });
    
    listaUsuario.addEventListener('load',()=>{
    
        listaUsuario.style.fontSize= '50px';
    })
})
