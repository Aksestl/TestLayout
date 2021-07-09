class Popup {
    constructor(title, text, url) {
        this._title = title;
        this._text = text;
        this._url = url;
    };

    _createPopup() {
        const container = document.createElement('div');
        const heading = document.createElement('div');
        const descriptionBlock = document.createElement('div');
        const description = document.createElement('p');
        const descriptionText = document.createElement('span');
        const descriptionHref = document.createElement('a');


        container.classList.add('popup');
        heading.classList.add('popup__heading', 'font');
        heading.textContent = this._title;
        descriptionBlock.classList.add('popup__block', 'pointer');
        description.classList.add('popup__text', 'font', 'description');
        description.textContent = 'Package may be replaced with JS';
        descriptionText.classList.add('popup__text', 'popup__text_blue', 'font');
        descriptionText.textContent = this._text;
        descriptionHref.classList.add('popup__text', 'font');
        descriptionHref.textContent = 'Go to npmjs.com';
        descriptionHref.href = this._url;


        container.appendChild(heading);
        container.appendChild(descriptionBlock);
        descriptionBlock.appendChild(description);
        description.appendChild(descriptionText);
        descriptionBlock.appendChild(descriptionHref);

        return container;
    };
};


const card = document.querySelector('.cards');
card.addEventListener('click', function (event) {
    const body = document.body;
    //    const currentCard = event.target;
    const currentCardText = event.target.textContent;
    let coordinate = event.clientX;

    if (currentCardText === 'true') {
        const popupTrue = new Popup(currentCardText, 'true.', 'https://www.npmjs.com/package/true');
        body.append(popupTrue._createPopup());
        document.querySelector('.popup').style.transformOrigin = coordinate + 'px';
    } else if (currentCardText === 'is-ten-thousand') {
        const popupTen = new Popup(currentCardText, 'x === 10 000.', 'https:/npmjs.com/package/is-ten-thousand');
        body.append(popupTen._createPopup());
        document.querySelector('.popup').style.transformOrigin = coordinate + 'px';
    } else if (currentCardText === 'jquery') {
        const popupTrue = new Popup(currentCardText, 'native JS.', 'https://www.npmjs.com/package/jquery');
        body.append(popupTrue._createPopup());
        document.querySelector('.popup').style.transformOrigin = coordinate + 'px';
    } else if (currentCardText === 'is-odd') {
        const popupTrue = new Popup(currentCardText, 'x % 2 !== 0.', 'https://www.npmjs.com/package/is-odd');
        body.append(popupTrue._createPopup());
        document.querySelector('.popup').style.transformOrigin = coordinate + 'px';
    };

    const popupBlock = document.querySelector('.popup__block');
    popupBlock.addEventListener('click', () => {
        const popup = document.querySelector('.popup');
        popup.classList.add('popup_close');
        popup.style.transformOrigin = coordinate + 'px';

        function remove() {
            body.removeChild(popup);
        };
        setTimeout(remove, 200);
    });

});