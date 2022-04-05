const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];




    const refs = {
        listImages: document.querySelector('.js-gallery'),
        itemImage: document.querySelector('ul.gallery__item'),
        divModal: document.querySelector('.js-lightbox'),
        image: document.querySelector('.lightbox__image'),
        buttonClose: document.querySelector('button[data-action="close-lightbox"]'),
        overlay: document.querySelector('.lightbox__overlay'),
        linkImage: document.querySelector('.gallery__link')
    }


    const createListItems = createListItemsMarkup(galleryItems);
    refs.listImages.innerHTML = createListItems;

    refs.listImages.addEventListener('click', onOpenModal);
    refs.buttonClose.addEventListener('click', onCloseModal);
    refs.overlay.addEventListener('click', onOverlayClick);
  

    function createListItemsMarkup(items) {
        return items.map(item => `<li class="gallery__item">
        <a
        class="gallery__link"
        href=${item.original}
        >
        <img
            class="gallery__image"
            src=${item.preview}
            data-source=${item.original}
            alt=${item.description}
        />
        </a>
      </li>`).join('');

    }


    function onOpenModal(evt) {
        window.addEventListener('keydown', onCloseModalEsc);
        
        refs.divModal.classList.add("is-open");
        evt.preventDefault();

        refs.image.src = evt.target.dataset.source;
        refs.image.alt = evt.target.alt;
    
        window.addEventListener('keydown', onRightKeyPress);
        window.addEventListener('keydown', onLeftKeyPress);
    }

    function onCloseModal(evt) {
        window.removeEventListener('keydown', onCloseModalEsc)
        window.removeEventListener('keydown', onRightKeyPress);
        window.removeEventListener('keydown', onLeftKeyPress);

        refs.divModal.classList.remove("is-open");
        refs.image.src = "";
        refs.image.alt = ""
    }

    function onOverlayClick(evt) {
        if(evt.currentTarget === evt.target) { 
            onCloseModal();
        }
    }

    function onCloseModalEsc(evt) {

       if(evt.code === 'Escape') {
        onCloseModal();
       
    }
    }

    function onRightKeyPress(evt) {
        if(evt.code === 'ArrowRight') {

            for (let i = 0; i < galleryItems.length; i+= 1) {
                    if(refs.image.getAttribute('src') === galleryItems[i].original && i < galleryItems.length - 1) {
                        refs.image.setAttribute('src', galleryItems[i + 1].original);
                        refs.image.setAttribute('alt', galleryItems[i + 1].description);
                        return
                    }
                }
           }
    }



    function onLeftKeyPress(evt) {
        if(evt.code === 'ArrowLeft') {

            for (let i = 0; i < galleryItems.length; i+= 1) {
                    if(refs.image.getAttribute('src') === galleryItems[i].original && i >=1) {
                        refs.image.setAttribute('src', galleryItems[i - 1].original);
                        refs.image.setAttribute('alt', galleryItems[i - 1].description);
                        return
                    }
                }
           }
        }




// СПОСІБ 2

//  const arr = document.querySelectorAll('.gallery__image')
//     const arrayConcat = Array.prototype.slice.call(arr)
//     let mainIndex = 0

//     function onOpenModal(evt) {
//         window.addEventListener('keydown', onCloseModalEsc);
//         refs.divModal.classList.add("is-open");
//         evt.preventDefault();

//         arrayConcat.forEach((e,i)=>{
//             if(evt.target === e){
//                 mainIndex = i
//             }
//         })
        
//         refs.image.src = arrayConcat[mainIndex].dataset.source;
//         refs.image.alt = arrayConcat[mainIndex].alt;

    
//         window.addEventListener('keydown', onRightKeyPress);
//         window.addEventListener('keydown', onLeftKeyPress);
//     }

//     function onCloseModal(evt) {
//         window.removeEventListener('keydown', onCloseModalEsc)
//         window.removeEventListener('keydown', onRightKeyPress);
//         window.removeEventListener('keydown', onLeftKeyPress);

//         refs.divModal.classList.remove("is-open");
//         refs.image.src = "";
//         refs.image.alt = ""
//     }

//     function onOverlayClick(evt) {
//         if(evt.currentTarget === evt.target) { 
//             onCloseModal();
//         }
//     }

//     function onCloseModalEsc(evt) {

//        if(evt.code === 'Escape') {
//            onCloseModal();
//         }
//     }

//     function onRightKeyPress(evt) {
//         if(evt.code === 'ArrowRight') {

//             mainIndex +=1
//             refs.image.src = arrayConcat[mainIndex].dataset.source;
//             refs.image.alt = arrayConcat[mainIndex].alt;
//         }
//     }



//     function onLeftKeyPress(evt) {
//         if(evt.code === 'ArrowLeft') {

//             mainIndex -=1
//             refs.image.src = arrayConcat[mainIndex].dataset.source;
//             refs.image.alt = arrayConcat[mainIndex].alt;
//         }
//     }
