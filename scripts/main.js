// Declaraciones
    const d = document;
    const galleries = d.querySelectorAll('.gallery');
    const controls = d.querySelectorAll('.controls');
    const buttons = [
        d.querySelectorAll('.prev'),
        d.querySelectorAll('.next')
    ];
    let cName = 'active';
    const canvas = d.querySelectorAll('canvas');
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

// Graficos Mapa de Bits
canvas.forEach( (canva, i) => {
    let ctx = canva.getContext('2d')
    switch (i){
        case 0:
        // Rectangulo
            ctx.fillStyle = '#c36';
            ctx.fillRect(60, 60, 150, 30);// x,y,w,h
        // Circulo
            ctx.fillStyle = 'hsla(260, 50%, 50%, .8)';
            ctx.arc(150, 30, 30,0, Math.PI * 2); // cx,cy,r,start,end
            ctx.fill();
        break;
        case 1:
        // Triangulo
            ctx.fillStyle = 'rgba(51, 204, 68, .8)';
            ctx.moveTo(150,0);
            ctx.lineTo(50,150);
            ctx.lineTo(250,150);
            ctx.fill();
        // Linea vertical
            ctx.beginPath()
            ctx.strokeStyle = 'darkslateblue';
            ctx.lineWidth = 4;
            ctx.moveTo(150,150);
            ctx.lineTo(150, 0);
            ctx.stroke()
        break;
        case 2:
            ctx.strokeStyle = '#248';
            ctx.lineWidth = 4;
            ctx.ellipse(150, 100, 20, 50, 0, 0, Math.PI * 2);
            ctx.stroke()
            ctx.beginPath();
            ctx.ellipse(150, 100, 20, 50, -180, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.ellipse(150, 100, 20, 50, 180, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.ellipse(150, 100, 20, 50, 300, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.fillStyle = 'hsla(260, 50%, 50%, .8)';
            ctx.arc(150,100,5,0, Math.PI * 2);
            ctx.fill();
        break;
        case 3:
        break;
    }
})