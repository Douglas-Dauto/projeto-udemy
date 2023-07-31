(function() {
const elements = window.document.querySelectorAll('.container-header__sec-one-ul li');
const containerHidden = document.createElement('div');
const textContentOld = [], control = [];
let mouseOut = true;


for(let i = 2; i < elements.length; i++) {
    control.push(true);

    elements[i].addEventListener('mouseenter', () => {
        if(control[i - 2]) {
            textContentOld[i] = elements[i].textContent;
            containerHidden.setAttribute('class', 'container-header__container-hidden');
            containerHidden.innerHTML = `<p>${i === 2?'Sua equipe pode ter acesso a mais de 22.000 cursos de destaque da Udemy a qualquer hora, em qualquer lugar.':i === 3?'Transforme o que você sabe em oportunidade e alcance milhões de alunos do mundo todo.':''}</p><a href="#">${i === 2?'Testar Udemy Business':i === 3?'Saiba mais':'Acessar meu aprendizado'}</a>`;
            elements[i].appendChild(containerHidden);

            containerHidden.addEventListener('mouseenter', () => {
                mouseOut = false;
            });

            setInterval(() => {
                if(mouseOut === false) {
                    containerHiddenMoveOut();
                }
            }, 100);

            function containerHiddenMoveOut() {
                containerHidden.removeEventListener('mouseout', containerHiddenCallbackOne);
                containerHidden.addEventListener('mouseout', containerHiddenCallbackOne);

                function containerHiddenCallbackOne() {
                    containerHidden.addEventListener('mouseout', containerHiddenCallback);

                    function containerHiddenCallback() {
                        elements[i].innerHTML = textContentOld[i];
                        control[i - 2] = true;
                        mouseOut = true;
                    }

                    setTimeout(() => {
                        containerHidden.removeEventListener('mouseout', containerHiddenCallback);
                        mouseOut = false;
                    }, 1000)
                }
            }
        }

        control[i - 2] = false;
    });

    elements[i].addEventListener('mouseout', () => {
        setTimeout(() => {
            if(mouseOut) {
                elements[i].innerHTML = textContentOld[i];
                control[i - 2] = true;
            }
        }, 1000);
    });
}
})();