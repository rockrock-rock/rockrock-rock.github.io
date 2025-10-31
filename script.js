const main = document.getElementById('main-content');

const sections = [
  {
    title: 'Our Services',
    icon: 'fas fa-cogs',
    content: 'We offer top-notch software and hardware solutions for all mobile devices. From screen replacements to firmware upgrades, we’ve got you covered.'
  },
  {
    title: 'Software Solutions',
    icon: 'fas fa-laptop-code',
    content: 'Our software team handles mobile OS installation, app development, virus removal, and system optimization.'
  },
  {
    title: 'Hardware Repairs',
    icon: 'fas fa-screwdriver-wrench',
    content: 'We repair screens, batteries, charging ports, and more. All repairs are done with precision and quality parts.'
  },
  {
    title: 'Accessories',
    icon: 'fas fa-headphones-alt',
    content: 'We stock premium accessories including chargers, earphones, cases, and screen protectors.'
  },
  {
    title: 'Gallery',
    icon: 'fas fa-images',
    content: `
      <div class="gallery">
        <img src="https://via.placeholder.com/300x200?text=Repair+1" alt="Repair 1" />
        <img src="https://via.placeholder.com/300x200?text=Repair+2" alt="Repair 2" />
        <img src="https://via.placeholder.com/300x200?text=Accessories" alt="Accessories" />
        <img src="https://via.placeholder.com/300x200?text=Software+Setup" alt="Software Setup" />
      </div>
    `
  },
  {
    title: 'Contact Us',
    icon: 'fas fa-envelope',
    content: `
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    `
  },
  {
    title: 'Find Us',
    icon: 'fas fa-map-marker-alt',
    content: `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.08670876443!2d32.5825!3d0.3476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1630000000000!5m2!1sen!2sus" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    `
  },
  {
    title: 'About Us',
    icon: 'fas fa-info-circle',
    content: 'MUNTU PHONE SOLUTIONS AND ACCESSORIES is a trusted name in mobile technology. We are passionate about delivering reliable, affordable, and innovative solutions to our customers across Uganda and beyond.'
  }
];

sections.forEach(section => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <h2><i class="${section.icon}"></i>${section.title}</h2>
    <p>${section.content}</p>
  `;

  main.appendChild(card);
});
