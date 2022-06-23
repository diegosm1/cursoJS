'use-strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//contiene todas los componentes que contengan la clase 
const btnOpenModal = document.querySelectorAll('.show-modal');


const handleOpenModal = () => {
    console.log('btn clicked');
    modal.classList.remove('hidden'); //removemos clase que oculta el modal
    overlay.classList.remove('hidden');
}
const handleCloseModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


//para poder trabajar con ellos se nececita realizar una iteracion.

for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', handleOpenModal)
}

btnCloseModal.addEventListener('click', handleCloseModal);

overlay.addEventListener('click', handleCloseModal)

document.addEventListener('keydown', function (e) {
    const { key } = e;

    if (key && key === 'Escape' && !modal.classList.contains('hidden')) { 
            handleCloseModal();
    }
})