document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burgerMenu");
  const menu = document.getElementById("menu");
  const bars = burgerMenu.getElementsByClassName("bar");
  const headerText = document.querySelector(".header-text");

  burgerMenu.addEventListener("click", function () {
    menu.classList.toggle("active");

    bars[0].classList.toggle("rotate1");
    bars[1].classList.toggle("fade");
    bars[2].classList.toggle("rotate2");

    headerText.classList.toggle("hidden");
  });
});

const targetElement = document.querySelector(".header-text");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-up");
        entry.target.classList.remove("hidden");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(targetElement);





function showRecommendation() {
  // Ambil nilai pilihan pengguna
  const goal = document.querySelector('input[name="goal"]:checked');
  const budget = document.querySelector('input[name="budget"]:checked');
  const recommendationContainer = document.getElementById('recommendation-container');
  const recommendationText = document.getElementById('recommendation-text');
  const recommendationImages = document.getElementById('recommendation-images');

  // Bersihkan konten sebelumnya
  recommendationImages.innerHTML = '';

  if (goal && budget) {
      // Variabel untuk menyimpan rekomendasi
      let text = '';
      let recommendations = [];

      // Tentukan rekomendasi berdasarkan pilihan pengguna
      if (goal.value === 'investment' && budget.value === 'above_10m') {
          text = 'We recommend these gold options for long-term investments:';
          recommendations = [
              { src: 'asset/image/1.ForInvest.jpg', price: 'Rp 15,000,000' },
              { src: 'asset/image/ForInvest3.jpg', price: 'Rp 19,200,000' },
              { src: 'asset/image/4.ForInvest4.jpg', price: 'Rp 14,000,000' },
              { src: 'asset/image/ForInvest4.jpg', price: 'Rp 26,500,000' },
              { src: 'asset/image/2.ForInvest2.jpg', price: 'Rp 12,000,000' },
              { src: 'asset/image/5.ForInvest.jpg', price: 'Rp 16,000,000' },
              { src: 'asset/image/3.ForInvest3.jpg', price: 'Rp 18,000,000' },
              { src: 'asset/image/ForInvest5.jpg', price: 'Rp 14,800,000' },
              { src: 'asset/image/ForInvest4.jpg', price: 'Rp 16,500,000' },

          ];
      } else if (goal.value === 'investment' && budget.value === '1m_to_10m') {
          text = 'These gold selections are perfect for securing your long-term investment goals:';
          recommendations = [
            { src: 'asset/image/ForInvest4.jpg', price: 'Rp 6,500,000' },
            { src: 'asset/image/2.ForInvest2.jpg', price: 'Rp 2,000,000' },
            { src: 'asset/image/ForInvest5.jpg', price: 'Rp 7,800,000' },
            { src: 'asset/image/3.ForInvest3.jpg', price: 'Rp 18,000,000' },
            { src: 'asset/image/ForInvest3.jpg', price: 'Rp 9,200,000' },
            { src: 'asset/image/ForInvest.jpg', price: 'Rp 8,000,000' },
            { src: 'asset/image/1.ForInvest.jpg', price: 'Rp 1,000,000' },
            { src: 'asset/image/ForInvest2.jpg', price: 'Rp 7,500,000' },
            { src: 'asset/image/4.ForInvest4.jpg', price: 'Rp 4,000,000' },
          ];
      } else if (goal.value === 'investment' && budget.value === 'below_1m') {
          text = 'For a reliable and profitable long-term investment, consider these gold options:';
          recommendations = [
            { src: 'asset/image/gift-5.png', price: 'Rp 850,000' },
            { src: 'asset/image/gift-2.jpg', price: 'Rp 800,000' },
            { src: 'asset/image/gift-6.png', price: 'Rp 950,000' },
            { src: 'asset/image/1.ForInvest.jpg', price: 'Rp 500,000' },
            { src: 'asset/image/gift-4.jpg', price: 'Rp 900,000' },
            { src: 'asset/image/ForInvest5.jpg', price: 'Rp 7,800,000' },
            { src: 'asset/image/ForInvest4.jpg', price: 'Rp 570,000' },
            { src: 'asset/image/2.ForInvest2.jpg', price: 'Rp 200,000' },
            { src: 'asset/image/gift-3.jpg', price: 'Rp 750,000' },
          ];





    } else if (goal.value === 'daily_use' && budget.value === 'above_10m') {
      text = 'These gold pieces are perfect for adding elegance to your daily style:';
      recommendations = [
        { src: 'asset/image/daily5.jpg', price: 'Rp 18,980,000' },
        { src: 'asset/image/daily10.jpg', price: 'Rp 17,800,000' },
        { src: 'asset/image/daily9.jpg', price: 'Rp 16,120,000' },
        { src: 'asset/image/daily2.jpg', price: 'Rp 17,300,000' },
        { src: 'asset/image/daily14.jpg', price: 'Rp 1,750,000' },
        { src: 'asset/image/daily15.jpg', price: 'Rp 4,950,000' },
        { src: 'asset/image/daily3.jpg', price: 'Rp 3,280,000' },
        { src: 'asset/image/daily4.jpg', price: 'Rp 1,760,000' },
        { src: 'asset/image/daily8.jpg', price: 'Rp 9,700,000' },
        { src: 'asset/image/daily1.jpg', price: 'Rp 3,530,000' },
        
      ];

    } else if (goal.value === 'daily_use' && budget.value === '1m_to_10m') {
      text = 'For a touch of luxury in your daily wear, these gold options are ideal:';
      recommendations = [
        { src: 'asset/image/daily4.jpg', price: 'Rp 16,760,000' },
        { src: 'asset/image/daily2.jpg', price: 'Rp 17,300,000' },
        { src: 'asset/image/daily6.jpg', price: 'Rp 13,430,000' },
        { src: 'asset/image/daily7.jpg', price: 'Rp 14,790,000' },
        { src: 'asset/image/daily8.jpg', price: 'Rp 19,700,000' },
        { src: 'asset/image/daily3.jpg', price: 'Rp 11,280,000' },
        { src: 'asset/image/daily10.jpg', price: 'Rp 17,800,000' },
        { src: 'asset/image/daily1.jpg', price: 'Rp 13,530,000' },
        { src: 'asset/image/daily9.jpg', price: 'Rp 16,120,000' },
        
      ];
    
    } else if (goal.value === 'daily_use' && budget.value === 'below_1m') {
      text = 'These stunning gold items are the perfect addition to your daily wardrobe:';
      recommendations = [
        { src: 'asset/image/daily13.jpg', price: 'Rp 720,000' },
        { src: 'asset/image/daily10.jpg', price: 'Rp 800,000' },
        { src: 'asset/image/daily9.jpg', price: 'Rp 120,000' },
        { src: 'asset/image/daily1.jpg', price: 'Rp 530,000' },
        { src: 'asset/image/daily12.jpg', price: 'Rp 550,000' },
        { src: 'asset/image/daily8.jpg', price: 'Rp 700,000' },
        { src: 'asset/image/daily15.jpg', price: 'Rp 930,000' },
        { src: 'asset/image/daily11.jpg', price: 'Rp 300,000' },
        { src: 'asset/image/daily14.jpg', price: 'Rp 750,000' },
        
      ];
    




    } else if (goal.value === 'gift' && budget.value === 'above_10m') {
      text = 'Give the gift of timeless beauty with these exquisite gold options:';
      recommendations = [
          { src: 'asset/image/gift1.jpg', price: 'Rp 18,000,000' },
          { src: 'asset/image/gift2.jpg', price: 'Rp 17,500,000' },
          { src: 'asset/image/gift11.jpg', price: 'Rp 11,880,000' },
          { src: 'asset/image/gift12.jpg', price: 'Rp 23,730,000' },
          { src: 'asset/image/gift13.jpg', price: 'Rp 17,470,000' },
          { src: 'asset/image/gift14.jpg', price: 'Rp 29,805,000' },
          { src: 'asset/image/gift3.jpg', price: 'Rp 12,200,000' },
          { src: 'asset/image/gift4.jpg', price: 'Rp 16,500,000' },
          { src: 'asset/image/gift5.jpg', price: 'Rp 12,800,000' },
      ];

    } else if (goal.value === 'gift' && budget.value === '1m_to_10m') {
      text = 'These gold treasures are ideal for expressing affection on special occasions:';
      recommendations = [
          { src: 'asset/image/gift6.jpg', price: 'Rp 8,000,000' },
          { src: 'asset/image/gift7.jpg', price: 'Rp 7,500,000' },
          { src: 'asset/image/gift8.jpg', price: 'Rp 9,200,000' },
          { src: 'asset/image/gift9.jpg', price: 'Rp 6,500,000' },
          { src: 'asset/image/gift13.jpg', price: 'Rp 5,470,000' },
          { src: 'asset/image/gift14.jpg', price: 'Rp 8,805,000' },
          { src: 'asset/image/gift3.jpg', price: 'Rp 2,200,000' },
          { src: 'asset/image/gift4.jpg', price: 'Rp 6,500,000' },
          { src: 'asset/image/gift10.jpg', price: 'Rp 7,800,000'},
      ];
    
    } else if (goal.value === 'gift' && budget.value === 'below_1m') {
      text = 'For a meaningful and luxurious gift, these gold selections are sure to impress:';
      recommendations = [
          { src: 'asset/image/gift11.jpg', price: 'Rp 880,000' },
          { src: 'asset/image/gift12.jpg', price: 'Rp 730,000' },
          { src: 'asset/image/gift13.jpg', price: 'Rp 470,000' },
          { src: 'asset/image/gift14.jpg', price: 'Rp 805,000' },
          { src: 'asset/image/gift15.jpg', price: 'Rp 960,000' },
          { src: 'asset/image/gift1.jpg', price: 'Rp 800,000' },
          { src: 'asset/image/gift2.jpg', price: 'Rp 500,000' },
          { src: 'asset/image/gift3.jpg', price: 'Rp 550,000' },
          { src: 'asset/image/gift4.jpg', price: 'Rp 780,000' },
      ];
    }
    
      recommendationText.textContent = text;

      recommendations.forEach(item => {
          const container = document.createElement('div');
          container.style.textAlign = 'center'; 
          container.style.width = '150px'; 

          const img = document.createElement('img');
          img.src = item.src;
          img.alt = 'Recommendation Image';
          img.style.width = '100%'; 
          img.style.borderRadius = '10px'; 

          const price = document.createElement('p');
          price.textContent = item.price;
          price.style.marginTop = '10px'; 
          price.style.fontWeight = 'bold';
          price.style.color = '#333';

          container.appendChild(img);
          container.appendChild(price);

          recommendationImages.appendChild(container);
      });

      recommendationContainer.style.display = 'block';
  } else {
      alert('Answer these questions, and your perfect match will reveal itself!');
      recommendationContainer.style.display = 'none';
  }
}


