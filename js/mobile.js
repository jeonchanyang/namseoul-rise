document.addEventListener("DOMContentLoaded", () => {
    const headInner = document.querySelector('.head-inner');
    const btnGNB = document.querySelector('.head-top .btn-gnb');
    const btnGNBClsoe = document.querySelector('.head-inner .btn-close-gnb');

    // GNB 열기
    btnGNB.addEventListener('click', ()=> {
        headInner.classList.add('on');
    });
    
    // GNB 닫기
    btnGNBClsoe.addEventListener('click', ()=> {
        headInner.classList.remove('on');
    });

    // GNB menu control
    const navGNB = document.querySelectorAll('.head-inner ul.gnb>li');

    navGNB.forEach( item => {
        item.addEventListener('click', ()=>{
            
            const navGNBOn = item.classList.contains('on');

            navGNB.forEach( el => el.classList.remove('on'));
            
            if(navGNBOn) return;

            item.classList.add("on");
            
        });
    });


    

    

});