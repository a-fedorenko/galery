const images = [
    {
        id: '01',
        preview: './assets/img_sm/01.jpg',
        original: './assets/img_lg/01.jpg',
        description: 'red fish'
    },
    {
        id: '02',
        preview: './assets/img_sm/02.jpg',
        original: './assets/img_lg/02.jpg',
        description: 'houses in the mountains'
    },
    {
        id: '03',
        preview: './assets/img_sm/03.jpg',
        original: './assets/img_lg/03.jpg',
        description: 'flowering bush'
    },
    {
        id: '04',
        preview: './assets/img_sm/04.jpg',
        original: './assets/img_lg/04.jpg',
        description: 'hot air balloon over the sea'
    },
    {
        id: '05',
        preview: './assets/img_sm/05.jpg',
        original: './assets/img_lg/05.jpg',
        description: 'pine branch'
    },
    {
        id: '06',
        preview: './assets/img_sm/06.jpg',
        original: './assets/img_lg/06.jpg',
        description: 'lanterns on a tree'
    },
    {
        id: '07',
        preview: './assets/img_sm/07.jpg',
        original: './assets/img_lg/07.jpg',
        description: 'doors in a blue wall'
    },
    {
        id: '08',
        preview: './assets/img_sm/08.jpg',
        original: './assets/img_lg/08.jpg',
        description: 'yellow flower'
    },
    {
        id: '09',
        preview: './assets/img_sm/09.jpg',
        original: './assets/img_lg/09.jpg',
        description: 'bird on a branch'
    }
];

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', function (e) {
    e.stopPropagation();
    openModal(e.target);
});

function setImages() {
    images.forEach(({ id, preview, description }) => {
        const liItem = document.createElement('li');
        liItem.innerHTML = `<img class="gallery-img" id="${id}" src="${preview}" alt="${description}">`;
        liItem.classList.add('gallery-item');
        gallery.appendChild(liItem);
    });
}

function openModal(target) {
    if(!target.id) {
        return;
    }
    const modal = createModalContent(target);
    basicLightbox.create(modal).show();
}

function createModalContent({ id, alt }) {
    const content = document.createElement('div');
    content.innerHTML = `<img width="100%" src="./assets/img_lg/${id}.jpg" alt="${alt}"> <p>${alt}</>`;
    return content;
}

setImages();