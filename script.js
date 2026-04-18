// Шаблоны для генерации базы
const templates = [
  { name: "Rabbit Blue Snus", price: 250, cat: "snus", img: "https://placehold.co/200x150/111/00ff41?text=SNUS" },
  { name: "Elf Bar BC5000", price: 550, cat: "vape", img: "https://placehold.co/200x150/111/00ff41?text=VAPE" },
  { name: "Chaser Mix 30ml", price: 230, cat: "liquid", img: "https://placehold.co/200x150/111/00ff41?text=LIQUID" },
  { name: "Siberia Red Slim", price: 260, cat: "snus", img: "https://placehold.co/200x150/111/00ff41?text=SNUS" },
  { name: "Lost Mary OS5000", price: 520, cat: "vape", img: "https://placehold.co/200x150/111/00ff41?text=VAPE" },
  { name: "Hype Juice 30ml", price: 210, cat: "liquid", img: "https://placehold.co/200x150/111/00ff41?text=LIQUID" }
];

// Генерируем 305 товаров
const products = [];
for (let i = 1; i <= 305; i++) {
  const t = templates[i % templates.length];
  products.push({
    name: `${t.name} #${i}`,
    price: `${t.price + (i % 20)}₴`,
    cat: t.cat,
    img: t.img
  });
}

function render(items) {
  const grid = document.getElementById('grid');
  document.getElementById('count').innerText = items.length;
  grid.innerHTML = items.map(p => `
    <div class="product-card">
      <img src="${p.img}" alt="img">
      <h3>${p.name}</h3>
      <div class="price">${p.price}</div>
      <a href="https://t.me/xeqov" target="_blank" class="buy-btn">ЗАКАЗАТЬ</a>
    </div>
  `).join('');
}

// Глобальная функция фильтрации
window.filter = function(category) {
  document.querySelectorAll('.cat').forEach(el => el.classList.remove('active'));
  event.currentTarget.classList.add('active');
  
  const filtered = category === 'all' ? products : products.filter(p => p.cat === category);
  render(filtered);
};

// Поиск
document.getElementById('search').addEventListener('input', (e) => {
  const val = e.target.value.toLowerCase();
  const found = products.filter(p => p.name.toLowerCase().includes(val));
  render(found);
});

// Запуск
document.addEventListener('DOMContentLoaded', () => render(products));