import{fetchProducts} from './fetch'

// console.log(5); //то була перевірка чи працює файл
const container = document.querySelector(".popup");
console.log(container);
const item = document.querySelector(".products-container ");
console.log(item);
// Те що в комментах не працює. Я хочу спитати в тих хто робив файл templates.js. як то зробити.
// container.insertAdjacentHTML("beforeend", createMarkUpCard(fetchProducts));

// function createMarkUpCard(fetchProducts) {
//     return fetchProducts.map(({price, name, img, _id, category, size, popularity, desc}) =>
//     `<div class="popup-body" id="${_id}">
//         <div class="popup-content">
//             <button type="button" class="popup-close close-popup" id="closeModal">
//                <svg class="btn-close">
//                    <use href="../img/sprite.svg#icon-closed"></use>
//                </svg>
//             </button> 
//             <div class="popup-block">
//                <div class="popup-block-img">
//                   <img src="${img}" alt="${name}" srcset="" class="imgId">
//                </div>
//                <h3 class="popup-block-title">${name}</h3>
//                <div class="popup-block-info">
//                   <div class="order">
//                      <h5 class="popup-block-info-param">Category:<span class="info-param-value">${category}</span></h5>
//                      <h5 class="popup-block-info-param">Size:<span class="info-param-value">${size}</span></h5>
//                   </div>
//                   <h5 class="popup-block-info-param">Popularity:<span class="info-param-value">${popularity}</span></h5>
//                </div>
//                <p class="popup-block-p">${desc}</p>
//                <div class="popup-block-price">
//                   <h3 class="popup-block-price-h3">${price}</h3>
//                   <button type="button" class="btn-styles">Add to
//                      <svg width="14" height="14" > 
//                         <use href="./img/sprite.svg#icon-basket" > </use > 
//                      </svg >
//                   </button>
//                </div>
//             </div>
//         </div> 
//     </div>`).join("")
// }
// 
item.addEventListener("click", handleClick);
function handleClick(event) {
    console.log(event.target);
    if (event.target === event.currentTarget) {
        return
    }

    container.style.display = 'flex'

}

