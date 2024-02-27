import JsTabs from 'js-tabs';
import MmenuLight from 'mmenu-light';
import StarRating from 'star-rating.js';
import { Modal, ScrollSpy } from './../../../../node_modules/bootstrap/dist/js/bootstrap.esm.min';
import tippy from 'tippy.js';
import {hideAll} from 'tippy.js';
// import IMask from 'imask';




function parseHTML(html) {
    const t = document.createElement('template');
    t.innerHTML = html;
    return t.content.cloneNode(true);
}

  
document.addEventListener('DOMContentLoaded', function () { 
    
    //dropdawn
    function dropdawn(){          
        document.querySelectorAll('.dropdawn').forEach(item => {
          item.addEventListener("mouseover", function(){
            item.querySelector('.dropdawn-btn').classList.add('active');
            item.querySelector('.dropdawn-menu').classList.add('active');
          });
          item.addEventListener("mouseleave", function(){
            let timer = setTimeout(function(){
              item.querySelector('.dropdawn-menu').classList.remove('active');
              item.querySelector('.dropdawn-btn').classList.remove('active');
            }, 100);
            item.addEventListener('mouseover', function(){
              item.querySelector('.dropdawn-btn').classList.add('active');
              item.querySelector('.dropdawn-menu').classList.add('active');
              clearTimeout(timer);              
            });                        
          });         
        });        
    }
    dropdawn();
    //search
    document.querySelectorAll('.js_search').forEach(search => {
        let input = search.querySelector('input');
        let result = search.querySelector('.search-result');
        if(result){
            input.addEventListener('click', () => {
                result.classList.add('active');
            })
            document.addEventListener('click', function(e){            
                if(!e.target.closest('.js_search')){
                    result.classList.remove('active');
                }
            })
        }        
    })
    //search_mobile
    if(document.querySelector('.js_mobile-search')){
        let searchBlock = document.querySelector('.js_mobile-search');
        let searchBlockBtn = document.querySelector('.js_mobile-search-btn');
        searchBlockBtn.addEventListener('click', ()=>{
            if(!searchBlockBtn.classList.contains('active')){
                searchBlockBtn.classList.add('active');
                searchBlock.classList.add('active');
            } else {
                searchBlockBtn.classList.remove('active');
                searchBlock.classList.remove('active');    
            }

        })
    }
    //category-filter
    if(document.querySelector('.catalog-filter')){        
        let btn = document.querySelector('.btn-filter');
        const filter = document.querySelector('.catalog-filter');
        const wrapper = filter.querySelector('.catalog-wrapper');        
        document.addEventListener('click', (e) => {
            if(filter.classList.contains('active')){
                if(e.target == filter){
                    filter.classList.remove('active');
                }
            }            
        });
        btn.addEventListener('click', () => {
            console.log('231');
            filter.classList.add('active');            
        });        
    }
    //category-views
    if(document.querySelector('.catalog-show')){
        let block = document.querySelector('.catalog-show');
        let btns = document.querySelectorAll('.btn-show');
        let items = block.querySelectorAll('.catalog-item');        
        btns.forEach(item => {                        
            item.addEventListener('click', () => {
                console.log('click');
                btns.forEach(item => item.classList.remove('active'));
                item.classList.add('active');
                if(item.classList.contains('inline-show')){
                    block.classList.remove('grid-block');
                    block.classList.add('inline-block');
                    items.forEach(item => item.classList.add('inline-block'));
                } else {
                    block.classList.add('grid-block');
                    block.classList.remove('inline-block');
                    items.forEach(item => item.classList.remove('inline-block'));   
                }
            });
            if(item.classList.contains('grid-show')){
                item.classList.add('active');
            }    
        });  
    }
    //spoiler
    if (document.querySelector('.spoiler')) {
        document.querySelectorAll('.spoiler').forEach(item => {
            let btn = item.querySelector('.spoiler-btn');
            let container = item.querySelector('.spoiler-block');
            if(container.classList.contains('active')){
                container.style.height = container.clientHeight + 'px';
            }
            btn.addEventListener('click', function(event) {
                event.preventDefault();
                btn.classList.toggle('active');
                event.target.closest('.spoiler').classList.toggle('active');
                if(!container.classList.contains('active')){
                    container.classList.add('active');
                    container.style.height = 'auto';
                    let height = container.clientHeight + 'px';
                    container.style.height = '0px'; 
                    setTimeout(function () {
                        container.style.height = height;
                    }, 0);    
                } else {                    
                    container.style.height = '0px';                                                            
                    setTimeout(function () {                    
                        container.classList.remove('active');
                    }, 350);                
                }                
            })            
        })
    }
    document.querySelectorAll('.catalog-spoiler').forEach(catalogTags => {
        const block = catalogTags.querySelector('.catalog-tags');        
        if(block){            
            if(block.clientHeight <= 63){
                catalogTags.querySelector('.spoiler-btn').style.display = 'none';
            } else {
                catalogTags.querySelector('.spoiler-btn').style.display = 'flex';
            }

            
        }
    })
    //tabs
    function tabs(tabName){        
        if(document.querySelector(tabName)){            
            document.querySelectorAll(tabName).forEach(item => {
                let tab = new JsTabs({
                    elm: item,
                    shouldScrollTabIntoView: false,
                });
                tab.init();                    
            });            
        }    
    }    
    tabs('.product-tabs');

    if(document.querySelector('.rating')){
        document.querySelectorAll('.star-rating').forEach(item => {
            new StarRating(item, {
                clearable: true,
                tooltip: false,
                maxStars: 5,  
            })           
        });    
    }
    tippy('[data-tippy-content]');
                                                                 
    //mobileMenu                                       
    let mobileMenu = new MmenuLight(document.querySelector("#mobile-menu"));
    mobileMenu.navigation({
        title: "Меню",
        theme: "dark"
    });
    let drawerMenu = mobileMenu.offcanvas();
    document.querySelectorAll('a[href="#mobile-menu"]').forEach(mmenu => {
        mmenu.addEventListener('click', function (evnt) {
            evnt.preventDefault();
            drawerMenu.open();
        })
    });     
    //map
    let map = document.querySelectorAll('.map');
    map.forEach(mapItem => {
        if (mapItem) {            
            let observer = new IntersectionObserver((entries, obs) => {    
                entries.forEach(entry => {    
                    if (entry.isIntersecting) {                           
                        let src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad60bc21f76fbf82a2a6aea968e5854b43b9c4823ff494b25cb933c080224b58a&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=false"
                        let script = document.createElement('script');
                        script.async = true;
                        script.src = src;
                        document.querySelector('.map-block').replaceWith(script);     
                        obs.unobserve(entry.target);    
                    }    
                });    
            });            
            observer.observe(mapItem);    
        } 
    })
    //Количество товаров
    
    function newCount(item){
        let plus = item.querySelector('.count-btn-plus');        
        let min = item.querySelector('.count-btn-min');
        let input = item.querySelector('.count-input');                      
        plus.addEventListener('click', () => {        
            +input.value++;
            if(+input.value >= 999){
                input.value = 999;
            }
            if(input.value > 9 && input.value < 100){
                input.style.width = '2ch'
            } else if (input.value > 99){                
                input.style.width = '3ch'
            }            
        });
        min.addEventListener('click', () => {        
            +input.value--;
            if(+input.value < 1){
                +input.value++;
            }
            if(input.value < 100 && input.value > 9){
                input.style.width = '2ch'
            } else if (input.value < 10){
                input.style.width = '1ch'
            }                       
        });
        input.addEventListener('change', () => {
            if(+input.value < 1){
                input.value = 1;
            }
            if(+input.value >= 999){
                input.value = 999;
            }
            if(input.value <= 9){
                input.style.width = '1ch'    
            } else if(input.value > 9 && input.value < 100){
                input.style.width = '2ch'
            } else if (input.value > 99){
                input.style.width = '3ch'
            }            
        });              
    }
    function count(){         
        document.querySelectorAll('.count-number').forEach(item => { 
            newCount(item);                                           
        });                
    }
    count();      
    // if(document.querySelector('.map')){
    //     let map = document.querySelector('.map');
    //     let load = false;
    //     let src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9f9fa90ab86b2ada424adc59980748334c81d38e1ed599115ee9a5b63b682a65&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=false"
    //     window.addEventListener('scroll', function(){      
    //         if(load === false){
    //             load = true;
    //             setTimeout(() => {                    
    //                 let script = document.createElement('script');
    //                 script.async = true;
    //                 script.src = src;
    //                 document.querySelector('.map-block').replaceWith(script);                      
    //             }, 1000)  
    //         }
    //     })
    // }                
    //notice
    // const notice = (message, delay = 4000) => {
    //     let container = document.querySelector('.js_toast_container');
    //     if (!container) {
    //         container = parseHTML(`<div aria-live="polite" aria-atomic="true">
    //                                         <div class="toast-container position-fixed top-0 end-0 p-3 js_toast_container" style="z-index: 10000;"> 
    //                                         </div>
    //                                     </div>`);
    
    //         document.querySelector('body').append(container);
    //     }    
    //     let id = Math.random().toString().substring(2);    
    //     let element = parseHTML(`<div class="toast" id="toast_${id}" role="alert" aria-live="assertive" data-bs-animation="true" data-bs-delay="${delay}" aria-atomic="true">
    //                                         <div class="toast-header">
    //                                             <button type="button" class="btn-close border-0 bg-transparent p-0" data-bs-dismiss="toast" aria-label="Close">
    //                                                 <i class="icon-u_multiply icon fs-20"></i> 
    //                                             </button>
    //                                         </div>
    //                                         <div class="toast-body">
    //                                             ${message}
    //                                         </div>
    //                                     </div>`);    
    //     container.append(element);
    //     let to = document.querySelector(`#toast_${id}`);        
    //     let t = new Toast(to);
    //     t.show();    
    //     to.addEventListener('hidden.bs.toast', () => to.remove());        
    // };    
    // window.noty = notice;            
    //Mask
    function isNumber(val) {
        return /^[-]?\d+$/.test(val);
    }    
    function format(targetInput, e) {        
        let tel = targetInput.value.replace(/[^0-9]/g, '');                
        let result = '';
        let position = getCursorPosition(targetInput);
        if (tel.length) {
            if ("1" !== tel[0] && "2" !== tel[0] && "3" !== tel[0] && "4" !== tel[0] && "5" !== tel[0] && "6" !== tel[0] && "9" !== tel[0] || (tel = "7" + tel), "8" === tel[0])
                result = "7";
            else {
                if ("7" !== tel[0])
                    return;
                result = tel[0]
            }
            result = '+' + result,          
            result = result + " (" + tel.substring(1, 4),
            tel.length > 3 && (result = result + ") " + tel.substring(4, 7)),
            tel.length > 6 && (result = result + " " + tel.substring(7, 9)),
            tel.length > 9 && (result = result + "-" + tel.substring(9, 11))                           
        }                                      
        targetInput.value = result;               
        if (e.keyCode === 46 || e.keyCode === 8) {                     
            setCaretPosition(targetInput, position);            
        }        
    }
    function setCaretPosition(elem, caretPos) {
        let range = void 0;    
        if (elem.createTextRange) {    
            range = elem.createTextRange();    
            range.move('character', caretPos);    
            range.select();    
        } else {    
            elem.focus();    
            if (elem.selectionStart !== undefined) {    
                elem.setSelectionRange(caretPos, caretPos);    
            }    
        }    
    }            
    function getCursorPosition(element) {    
        let el = element;    
        let pos = 0;    
        if ('selectionStart' in el) {    
            pos = el.selectionStart;    
        } else if ('selection' in document) {    
            el.focus();    
            var Sel = document.selection.createRange();    
            var SelLength = document.selection.createRange().text.length;    
            Sel.moveStart('character', -el.value.length);    
            pos = Sel.text.length - SelLength;    
        }            
        return pos;    
    }    
    function formatUp(e){
        // format(e.currentTarget, e);                
        if(isNumber(e.key) || e.keyCode == 8 || e.keyCode == 46 || e.keyCode == 37 || e.keyCode == 39){            
            format(e.currentTarget, e);
        }    
    }   
    function formatDown(e){                       
        if(!isNumber(e.key) && e.keyCode !== 8 && e.keyCode !== 46 && e.keyCode !== 37 && e.keyCode !== 39){            
            e.preventDefault();
            e.stopPropagation();                      
        }
    }   
    document.querySelectorAll('input[type="tel"]').forEach(input => {               
        input.addEventListener('keydown', formatDown)
        input.addEventListener('keyup', formatUp)            
    })
    //скролл до верха
    if(document.querySelector('.scroll-item')){        
        document.addEventListener('scroll', ()=> {                      
            if(window.pageYOffset > 300){
                document.querySelectorAll('.scroll-item').forEach(item => {
                    item.classList.add('active');
                })
            } else {
                document.querySelectorAll('.scroll-item').forEach(item => {
                    item.classList.remove('active');
                })    
            }

        })
        document.querySelector('.scroll-top').addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        })
    }
    //order_btn
    if(document.querySelector('.order-form')){
        let btn = document.querySelector('.order-btn');
        let radios = document.querySelectorAll('.order-radio input');
        const chooseRadio = new Event('change');        
        radios.forEach(radio => {
            if(radio.classList.contains('active')){
                btn.innerHTML = radio.dataset.title;
            } else {
                radios[0].dispatchEvent(chooseRadio);
                radios[0].setAttribute('checked', 'checked');             
            }
            radio.addEventListener('change', function(){
                radios.forEach(item => item.classList.remove('active'));
                radio.classList.add('active');                
                btn.innerHTML = radio.dataset.title;
            })            
        })
    }
    //call_modal
    if(document.querySelector('.js_callModal')){
        const forms = document.querySelectorAll('.js_callModal');
        const sModal = document.querySelector('.modal-success');
        forms.forEach(form => {
            form.addEventListener('submit', (e) =>{
                e.preventDefault();
                const modalBoot = new Modal(sModal);                
                modalBoot.show();                
            })
        })
    }                                        
})
