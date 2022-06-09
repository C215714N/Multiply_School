// Declaraciones
    const d = document;
    const galleries = d.querySelectorAll('.gallery');
    const controls = d.querySelectorAll('.controls');
    const buttons = [
        d.querySelectorAll('.prev'),
        d.querySelectorAll('.next')
    ];
    let cName = 'active';
//  Galerias de Imagenes
buttons.forEach( button => button.forEach( (btn,i) => {
    let control = controls[i].querySelectorAll('button');
    let gallery = galleries[i].querySelectorAll('li');
    //  Controles Imagenes
    control.forEach( (ctrl, item) => {
        ctrl.addEventListener('click', () => {
            getItem(control, item);
            getItem(gallery, item);
    }   )   }   )
    //  Controles Generales
    btn.addEventListener( 'click', () => {
        let dir =  btn.classList.contains('prev') ? 'prev' : 'next';
        getItem(control, dir);
        getItem(gallery, dir);
}   )   }   )   );


const getItem = (array, i) => {
    for(el of array){
        if(el.classList.contains(cName)){
            el.classList.remove(cName);
            getDirection(el, i);
    }   }   
    newItem.classList.add(cName);
}

const getDirection = (el, i) => {
    newItem = (
        i == 'prev' ? ( 
            el.previousElementSibling || el.parentNode.lastElementChild ) : 
        i == 'next' ? ( 
            el.nextElementSibling || el.parentNode.firstElementChild ) : 
        el.parentNode.children[i]
)   }