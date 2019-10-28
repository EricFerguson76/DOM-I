const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

//NAV
let navItem = document.getElementsByTagName('a');
navItem[0].textContent = siteContent['nav']['nav-item-1'];
navItem[1].textContent = siteContent['nav']['nav-item-2'];
navItem[2].textContent = siteContent['nav']['nav-item-3'];
navItem[3].textContent = siteContent['nav']['nav-item-4'];
navItem[4].textContent = siteContent['nav']['nav-item-5'];
navItem[5].textContent = siteContent['nav']['nav-item-6'];

//ADDED NEW CONTENT
let newNavItem = document.createElement('a');
newNavItem.textContent = 'Items';
let newNav = document.querySelector('nav');
newNav.append(newNavItem);

let newNavItem1 = document.createElement('a');
newNavItem1.textContent = 'Forms';
let newNav1 = document.querySelector('nav');
newNav1.prepend(newNavItem1);

let navItem1 = document.querySelectorAll('nav a');
navItem1.forEach(element => {
  element.style.color = 'green';
});

//CTA

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let buttonOne = document.querySelector('button');
buttonOne.textContent = siteContent['cta']['button'];

let ctaOne = document.querySelector('.cta-text h1');
ctaOne.innerHTML = 'DOM<br/>is<br/>awesome';

//TOP CONTENT
let topContent1 = document.querySelectorAll('.top-content h4')[0];
topContent1.textContent = siteContent['main-content']['features-h4'];

let topText = document.querySelectorAll('.top-content p')[0];
topText.textContent = siteContent['main-content']['features-content'];

let topContent2 = document.querySelectorAll('.top-content h4')[1];
topContent2.textContent = siteContent['main-content']['about-h4'];

let topText1 = document.querySelectorAll('.top-content p')[1];
topText1.textContent = siteContent['main-content']['about-content'];

//MIDDLE IMAGE
let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//BOTTOM CONTENT
let bottomContent1 = document.querySelectorAll('.bottom-content h4')[0];
bottomContent1.textContent = siteContent['main-content']['services-h4'];

let bottomText = document.querySelectorAll('.bottom-content p')[0];
bottomText.textContent = siteContent['main-content']['services-content'];

let bottomContent2 = document.querySelectorAll('.bottom-content h4')[1];
bottomContent2.textContent = siteContent['main-content']['product-h4'];

let bottomText1 = document.querySelectorAll('.bottom-content p')[1];
bottomText1.textContent = siteContent['main-content']['product-content'];

//CONTACT INFO
let Contact1 = document.querySelector('.contact h4');
Contact1.textContent = siteContent['contact']['contact-h4'];

let contactText = document.querySelectorAll('.contact p')[0];
contactText.innerHTML = '123 Way 456 Street<br/> Somewhere, USA';

let contactText1 = document.querySelectorAll('.contact p')[1];
contactText1.textContent = siteContent['contact']['phone'];

let contactText2 = document.querySelectorAll('.contact p')[2];
contactText2.textContent = siteContent['contact']['email'];

//FOOTER INFO
const footer1 = document.querySelector('footer p');
footer1.textContent = siteContent['footer']['copyright'];
