import Swiper, {Navigation, Pagination, Thumbs, EffectFade} from 'swiper';

  document.addEventListener('DOMContentLoaded', function () {                 
    document.querySelectorAll('.slider-4').forEach(item => {            
        let currentCategory = item.dataset.category;             
        let currentNavigation = document.querySelector(`.slider-navigation-4[data-category="${currentCategory}"]`);                     
        let navigation = {};
        let pagination = {};                       
        if (currentNavigation) {
            let next = currentNavigation.querySelector('.slider-next');                
            let prev = currentNavigation.querySelector('.slider-prev');                
            navigation = {
                nextEl: next,
                prevEl: prev,
            },
            pagination = {
                el: currentNavigation.querySelector('.slider-pagination'),                    
                type: 'fraction',                   
            };                 
        }                  
        new Swiper(item, {
            modules: [Navigation, Pagination],                
            spaceBetween: 10,
            slidesPerView: 'auto',
            navigation: navigation,
            pagination: pagination,                              
            watchSlidesVisibility: true,
            slideActiveClass: "active", 
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },                  
                992: {
                    spaceBetween: 20,
                    slidesPerView: 3,
                },
                1200: {
                    spaceBetween: 20,
                    slidesPerView: 4,
                },
                1355: {
                    spaceBetween: 30,
                    slidesPerView: 4,
                }
            }                                             
        });

    });                        
    document.querySelectorAll('.slider-2').forEach(item => {            
        let currentCategory = item.dataset.category;             
        let currentNavigation = document.querySelector(`.slider-navigation-2[data-category="${currentCategory}"]`);                     
        let navigation = {};
        let pagination = {};                       
        if (currentNavigation) {
            let next = currentNavigation.querySelector('.slider-next');                
            let prev = currentNavigation.querySelector('.slider-prev');                
            navigation = {
                nextEl: next,
                prevEl: prev,
            },
            pagination = {
                el: currentNavigation.querySelector('.slider-pagination'),                    
                type: 'fraction',                   
            };                 
        }                   
        new Swiper(item, {
            modules: [Navigation, Pagination],                
            spaceBetween: 10,
            slidesPerView: 'auto',
            navigation: navigation,
            pagination: pagination,                              
            watchSlidesVisibility: true,
            slideActiveClass: "active", 
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },                  
                992: {
                    spaceBetween: 20,
                    slidesPerView: 2,
                },                
                1355: {
                    spaceBetween: 30,
                    slidesPerView: 2,
                }
            }                                             
        });

    });
    document.querySelectorAll('.slider-gallery').forEach(item => {                               
        let currentNavigation = document.querySelector(`.slider-navigation-gallery`);                     
        let navigation = {};
        let pagination = {};                       
        if (currentNavigation) {
            let next = currentNavigation.querySelector('.slider-next');                
            let prev = currentNavigation.querySelector('.slider-prev');                
            navigation = {
                nextEl: next,
                prevEl: prev,
            },
            pagination = {
                el: currentNavigation.querySelector('.slider-pagination'),                    
                type: 'fraction',                   
            };                 
        }                    
        new Swiper(item, {
            modules: [Navigation, Pagination],                
            spaceBetween: 15,
            slidesPerView: 'auto',
            loop: true,            
            navigation: navigation,
            pagination: pagination, 
            breakpoints: {                                 
                992: {
                    spaceBetween: 20,                    
                },                
                1355: {
                    spaceBetween: 30,                    
                }
            }                              
                                                                   
        });

    });
    document.querySelectorAll('.product-slider').forEach(productSlider => {                        
        let swiperProductThumbs = new Swiper('.product-slider-thumbs', {            
            slidesPerView: 4,
            spaceBetween: 10,
            direction: 'horizontal',
            breakpoints: {
                768: {                    
                    slidesPerView: 5,
                },
                992: {                    
                    slidesPerView: 4,
                },
                1200: {
                    direction: 'vertical',
                    slidesPerView: 5,
                }
            }                       
        });        
        const swiperDefOpt = {            
            spaceBetween: 10,
            slidesPerView: 'auto',
            direction: 'horizontal',
            breakpoints: {
                1200: {
                    direction: 'vertical',   
                }
            }   
        }  
        const swiperProductOpt = { 
            modules: [Thumbs],                                
            thumbs: {
                swiper: swiperProductThumbs
            },                        
        } 
        if(document.querySelector('.product-slider-thumbs')){            
            new Swiper(productSlider, Object.assign({}, swiperDefOpt, swiperProductOpt));
        }
        else{            
            new Swiper(productSlider, Object.assign({}, swiperDefOpt));    
        }               
    })
    if(document.querySelector('.compare-tabs')){
        function compare (){        
            const liAutoHeight = () => {
              let map = new Map();          
              document.querySelectorAll('.compare-tabs-content-table-row-value').forEach(item => {              
                  let parameterId = item.dataset.parametr;              
                  let t = map.get(parameterId) || [];              
                  t.push(Math.floor(parseFloat(getComputedStyle(item).height) || 0))
                  map.set(parameterId, t)
              })                             
              let keys = Array.from(map.keys());                     
              keys.map(item => {
                  let arr = map.get(item);                          
                  let max = Math.max(...arr);              
                  document.querySelectorAll(`.compare-tabs-content-table-row-value[data-parametr="${item}"]`).forEach(i => {
                      if (max > 0) {
                          i.style.height = max + 'px';
                      }
                  })
              })              
            }
            liAutoHeight();
            window.addEventListener('resize', function(){
                liAutoHeight();    
            })                         
        }
        compare ();
        document.querySelector('[name="compare_equal"]').addEventListener('change', (event) =>{            
            if(event.target.checked){
                console.log('da');               
                document.querySelectorAll('.compare-tabs-content-table-row[data-diff="0"]').forEach(item => {
                    console.log(item);
                    item.style.display = "none";
                });
            } else {
                console.log('ne')               
                document.querySelectorAll('.compare-tabs-content-table-row').forEach(item => {
                    item.style.display = "block";
                })    
            }               
        })                            
        if(document.querySelector('.compare-tabs')){
            function compare (){        
                const liAutoHeight = () => {
                  let map = new Map();          
                  document.querySelectorAll('.compare-tabs-content-table-row-value').forEach(item => {              
                      let parameterId = item.dataset.parametr;              
                      let t = map.get(parameterId) || [];              
                      t.push(Math.floor(parseFloat(getComputedStyle(item).height) || 0))
                      map.set(parameterId, t)
                  })                 
                  let keys = Array.from(map.keys());            
                  keys.map(item => {
                      let arr = map.get(item);                          
                      let max = Math.max(...arr);              
                      document.querySelectorAll(`.compare-tabs-content-table-row-value[data-parametr="${item}"]`).forEach(i => {
                          if (max > 0) {
                              i.style.height = max + 'px';
                          }
                      })
                  })              
                }
                liAutoHeight();
                window.addEventListener('resize', function(){
                    liAutoHeight();    
                })                         
            }
            compare ();                               
            function selected(){
                document.querySelector('[name="compare-block"]').addEventListener('change', (event) => {                    
                    let currentValue = event.target.value;                
                    document.querySelectorAll('.swiper-compare').forEach(item => {
                        item.style.display = "none";
                        if(item.dataset.category === currentValue){
                            item.style.display = "block";
    
                        }
                    })            
                    document.querySelectorAll('.slider-pagination-compare').forEach(item => {
                        item.style.display = "none";
                        if(item.dataset.category === currentValue){
                            item.style.display = "flex";
                        }
                    })            
                })
            }
            selected();                 
            document.querySelector('[name="compare-block"]').dispatchEvent(new Event('change'));       
            document.querySelectorAll('.swiper-compare').forEach(swipers => {
                let currentCategory = swipers.dataset.category;                       
                let currentNavigation = document.querySelector(`.slider-pagination-compare[data-category="${currentCategory}"]`);         
                let navigation = {};
                let pagination = {};           
                if (currentNavigation) {
                    let next = currentNavigation.querySelector('.slider-next');                
                    let prev = currentNavigation.querySelector('.slider-prev');                
                    navigation = {
                        nextEl: next,
                        prevEl: prev,
                    },
                    pagination = {
                        el: currentNavigation.querySelector('.slider-pagination'),                    
                        type: 'fraction',                   
                    };                 
                }                   
                new Swiper(swipers, {
                    modules: [Navigation, Pagination],                
                    spaceBetween: 10,
                    slidesPerView: 'auto',
                    navigation: navigation,
                    pagination: pagination,                              
                    watchSlidesVisibility: true,
                    slideActiveClass: "active", 
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                        },                  
                        992: {
                            spaceBetween: 20,
                            slidesPerView: 3,
                        },
                        1200: {
                            spaceBetween: 20,
                            slidesPerView: 4,
                        },
                        1355: {
                            spaceBetween: 30,
                            slidesPerView: 4,
                        }
                    }                                              
                });
                swipers.querySelectorAll('.btn-close').forEach(item => {
                    item.addEventListener('click', () => {          
                      item.closest('.swiper-slide').remove();
                      swiperCompare.update();
                    })
                })
            })
        } 
    }  
                    
})    