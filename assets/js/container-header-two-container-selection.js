export const containerSelection = window.document.createElement('div');
export const containerTriangle = window.document.createElement('div');
export const containerHeaderTwo = window.document.getElementsByClassName('container-header-two')[0];

(function() {
const elements = window.document.querySelectorAll('.container-header-two > ul li');
const containerHeader = window.document.getElementsByClassName('container-header')[0];

for(let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseenter', () => {
        containerSelection.setAttribute('class', 'container-header-two__container-selection');
        containerSelection.innerHTML = `<ul>
        ${i === 0?`<li class="li-developer">Desenvolvimento Web</li>
        <li class="li-developer">Desenvolvimento móvel</li>
        <li class="li-developer">Linguagens de programação</li>
        <li class="li-developer">Desenvolvimento de games</li>
        <li class="li-developer">Design e desenvolvimento de banco de dados</li>
        <li class="li-developer">Teste de software</li>`:i === 1?`
        <li>Empreendedorismo</li>
        <li>Comunicação</li>
        <li>Administração</li>
        <li>Vendas</li>
        <li>Estratégia de negócios</li>`:i === 2?`
        <li>Contabilidade e escrituração contábil</li>
        <li>Criptomoeda e blockchain</li>
        <li>Finanças</li>
        <li>Modelagem e análise financeira</li>
        <li>Investimentos e trading</li>`:i === 3?`
        <li>Certificações de TI</li>
        <li>Rede e segurança</li>
        <li>Hardware</li>
        <li>Sistemas operacionais e servidores</li>
        <li>Mais opções em TI e software</li>`:i === 4?`
        <li>Microsoft</li>
        <li>Apple</li>
        <li>Google</li>
        <li>SAP</li>
        <li>Oracle</li>
        <li>Mais opções em produtividade no escritório</li>`:i === 5?`
        <li>Transformação pessoal</li>
        <li>Produtividade pessoal</li>
        <li>Liderança</li>
        <li>Desenvolvimento de carreira</li>
        <li>Maternidade/paternidade e relacionamentos</li>`:i === 6?`
        <li>Web design</li>
        <li>Design gráfico e ilustração</li>
        <li>Ferramentas de design</li>
        <li>Design de experiência do usuário</li>
        <li>Design de games</li>
        <li>3D e animação</li>`:i === 7?`
        <li>Marketing digital</li>
        <li>Otimização de mecanismos de busca (SEO)</li>
        <li>Marketing de redes sociais</li>
        <li>Brading</li>
        <li>Fundamentos de marketing</li>
        <li>Análise de marketing e automação</li>`:i === 8?`
        <li>Fitness</li>
        <li>Saúde geral</li>
        <li>Esportes</li>
        <li>Nutrição e dieta</li>
        <li>Ioga</li>
        <li>Saúde geral</li>`:`
        <li>Instrumentos</li>
        <li>Produção musical</li>
        <li>Fundamentos da música</li>
        <li>Canto</li>
        <li>Técnicas de música</li>
        <li>Software de música</li>`}
    </ul>`;
        containerHeaderTwo.appendChild(containerSelection);
        containerTriangle.setAttribute('class', 'triangle');
        elements[i].appendChild(containerTriangle);
    });

    containerHeader.addEventListener('mouseenter', containerSelectionMouseOff);
    window.document.getElementsByClassName('main-sec-one-carousel')[0].addEventListener('mouseenter', containerSelectionMouseOff);
}
})();

export function containerSelectionMouseOff() {
    containerHeaderTwo.removeChild(containerSelection);
    containerTriangle.removeAttribute('class', 'triangle');
}