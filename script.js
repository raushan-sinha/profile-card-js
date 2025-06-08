'use strict';

//todo Profile Card Info
const profileCardHead = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWbnyXen_cSNYbR3Kw9HuUvss-eiNs-AiXyw&s',
        name: "Raushan Sinha",
        title: "Frontend Developer💻🚀"
    }
];
document.querySelector('#profileImage').src = profileCardHead[0].image;
document.querySelector('#profileName').textContent = profileCardHead[0].name;
document.querySelector('#profileTitle').textContent = profileCardHead[0].title;
document.addEventListener('DOMContentLoaded', profileCardHead);



//todo: Profile Card About
const profileCardAbout = [
    {
        aboutTitle: 'About Me',
        aboutPara: 'I am a frontend developer with a passion for creating beautiful and functional web experiences.I use HTML, CSS, JavaScript, React, Tailwind CSS and Next.js in Frontend Development. I have also knowledge of Git, GitHub, VS Code, Chrome DevTools, and Chrome Extension API.'
    }
];
document.querySelector('#aboutTitle').textContent = profileCardAbout[0].aboutTitle;
document.querySelector('#aboutPara').textContent = profileCardAbout[0].aboutPara;
document.addEventListener('DOMContentLoaded', profileCardAbout);



//todo: Profile Card Address - 
const profileCardAddress = [
    {
        addressTitle: 'Location',
        address: 'Arrah, Bihar, India'
    }
];
document.querySelector('#addressTitle').textContent = profileCardAddress[0].addressTitle;
document.querySelector('#address').textContent = profileCardAddress[0].address;
document.addEventListener('DOMContentLoaded', profileCardAddress);



//todo: Profile Card Social -
const profileCardSocial = [
    {
        socialTitle: 'Connect With Me',
        socialLinks: ['https://www.facebook.com/rohan.rider.1806',
            'https://x.com/84Raushan',
            'https://www.linkedin.com/in/raushan-sinha-4b94452a1/',
            'https://www.instagram.com/raushan_sinha02/?hl=en',
            'https://discord.com/channels/@me'
        ]
    }
];
document.querySelectorAll('#socialLinks a').forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(profileCardSocial[0].socialLinks[idx], '_blank ');
    }, false);
});



//todo: Footer text -
document.querySelector('#footerPara').textContent = '© 2025 Raushan Sinha. All rights reserved.'