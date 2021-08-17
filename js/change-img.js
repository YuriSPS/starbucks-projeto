export default function initChangeImg() {
    const thumbs = document.querySelectorAll('.thumb li');

    thumbs.forEach((item, index) => {
        item.addEventListener('click', function() {
            const imgStarbucks = document.querySelector('.starbucks');
            const circleBackground = document.querySelector('.circle');
            const imgNewAttribute = imgStarbucks.setAttribute('src', `assets/img${index+1}.png`);

            if(index === 0 ) {
                circleBackground.style.backgroundColor = '#017143';
            } else if(index === 1){
                circleBackground.style.backgroundColor = '#efcfd3';
            } else if(index === 2) {
                circleBackground.style.backgroundColor = '#cc3da3';
            }
        });
    });
}
