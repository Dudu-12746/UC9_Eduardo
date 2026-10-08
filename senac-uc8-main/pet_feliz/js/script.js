const $ = s => document.querySelector(s),
   $$ = s => document.querySelectorAll(s);
let cart = 0;
function toast(msg) {
   const t = $('#toast');
   t.textContent = msg;
   t.classList.add('show');

   clearTimeout(window.toastTimer);

   window.toastTimer = setTimeout(
      () => t.classList.remove('show'),
      2600)
}
$('#menuToggle').addEventListener('click', () =>
   $('#navLinks').classList.toggle('open')
);
$$('#navlinks a').forEach(a =>
   a.addEventListener('click', () =>
      $('#navlinks').classList.remove('open')
   )
);
$$('.add-cart').forEach(b =>
   b.addEventListener('click', () => {
      cart++;
      $('#cartCounts').textContent = cart;
      toast(
         b.dataset.name + ' adicionado ao carrinho!'
      )
   })
);
$('#cartBtn').addEventListener('click', () =>
   toast(
      cart
         ? `Seu carrinho tem ${cart} ${cart === 1 ? 'item' : 'itens'
         }. Para finalizar, fale com a loja pelo WhatsApp.`
         : 'Seu carrinho está vazio.'
   )
);
$('#accountBtn').addEventListener('click', () =>
   toast(
      'Área do cliente: entre em contato pelo WhatsApp para acessar sua conta.'
   )
);
function filterProducts(term) {
   let found = 0;

   $$('.product').forEach(p => {
      const show = (
         p.textContent +
         ' ' +
         p.dataset.category
      )
         .toLowerCase()
         .includes(term.toLowerCase());
      p.style.display = show ? 'flex' : 'none';

      if (show) found++
   }); if (!found)
      toast(
         'Nenhum produto encontrado. Tente outra busca.'
      )
}
$('#searchForm').addEventListener('submit', e => {
   filterProducts($('#searchInput').value.trim());
   $('#produtos').scrollIntoView()
});
$$('.category').forEach(c =>
   c.addEventListener('click', () =>
      filterProducts(c.dataset.categoria)
   )
);
$('#clearFilter').addEventListener('click', e => {
   e.preventDefault();

   $$('.product-card').forEach(
      p => p.style.display = 'flex'

   ); $('#searchInput').value = ''
}
);

const backdrop = $('#modalBackdrop');

$$('.book-service').forEach(b =>
   b.addEventListener('click', () => {
      $('#serviceSelect').value = b.dataset.service;

      $('#modalTitle').textContent =
         b.dataset.service === 'Hotel e Creche'
            ? 'Consulte disponibilidade'
            : 'Agende seu atendimento';

      backdrop.classList.add('open');
      $('#clientName').focus()
   })
);

function closeModal() {
   backdrop.classList.remove('open')
}

$('#modalClose').addEventListener('click', closeModal);

backdrop.addEventListener('click', e => {
   if (e.target === backdrop)
      closeModal()

});
$('#bookingForm').addEventListener('submit', e => {
   e.preventDefault();

   const n = $('#clientName').value,
          p = $('#petName').value,
          s = $('#serviceSelect').value,
          phone = $('#clientPhone').value;

   const msg = `Olá, PetFeliz! Meu nome é ${n}. Gostaria de solicitar ${s} para meu pet ${p}. Meu telefone: ${phone}.`;

   window.open(
      'https://wa.me/5527988561122?text=' +
      encodeURIComponent(msg),
      '_blank'
   );

   closeModal();

   toast(
      'Solicitação preparada para envio pelo WhatsApp!'
   )
}
);
$('#newsletterForm').addEventListener('submit', e => {
   e.preventDefault();

   toast(
      'Obrigado! Seu e-mail foi cadastrado para novidades.'
   );
   e.target.reset()
});
