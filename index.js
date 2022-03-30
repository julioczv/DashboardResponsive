const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//Mostrar a barra lateral
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

//Fechar a barra lateral
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

//Mudar o tema
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span').classList.toggle('active');
})



Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                       <td>${order.productName}</td>
                       <td>${order.productNumber}</td>
                       <td>${order.paymentStatus}</td>
                       <td class="${order.shipping === 'Devolvido' ?
                        'danger' : order.shipping === 'Pendente' ?
                        'warning' : 'primary'}">${order.shipping}</td>
                       <td class="primary"></td>`;
        tr.innerHTML = trContent;
        document.querySelector('table tbody').appendChild(tr);
})