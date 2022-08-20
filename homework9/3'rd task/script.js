//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha' ,'beta');
div.style.backgroundColor ='black' ;
div.style.width = '200px';
div.style.height =`200px`;
div.style.borderRadius = '100%'
div.style.margin= '10px'
document.body.append(div)

let divClone = div.cloneNode(true);
document.body.append(divClone);




