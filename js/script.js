document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById("successMessage").classList.add("reveal");
            form.reset();
        } else {
            alert("There was an error submitting the form. Please try again.");
        }
    }).catch(error => {
        alert("There was an error submitting the form. Please try again.");
    });
});

function scrollToSection(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

const scrollToTopBtn = document.getElementById("scrollToTopBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {

    if (document.documentElement.scrollTop < 100 || (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        scrollToTopBtn.style.display = "none";
    } else {
        scrollToTopBtn.style.display = "block";
    }

};

// window.addEventListener("load", function() {
//     document.body.style.display = "block"; // Show the page after image is loaded
// });

document.addEventListener("DOMContentLoaded", () => {
    const img = new Image();
    img.src = "/assets/images/Tsunami_by_hokusai.jpg";  // Path to your background image

    img.onload = () => {
        document.body.style.visibility = "visible";
        //   document.body.style.opacity = "1";
    };
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".pop-fade-element");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => observer.observe(element));
});

// Add your JavaScript code here

function handleSurprise(button) {
    button.innerText = button.innerText === 'SURPRISE!' ? 'CLICK TO UNROLL!' : 'SURPRISE!';
    
    const surpriseImage = document.querySelector('.rainbow-text');
    const img = document.querySelector('.rickroll-img'); 

    if (!surpriseImage.classList.contains('active')) {
        surpriseImage.classList.add('active');
        // surpriseImage.style.display = 'block';
        console.log('surpriseImage.classList', surpriseImage.classList);
        setTimeout(() => {
            img.style.maxWidth = '100%';
        }, 100); // Small delay to ensure transition works
        
    } else {
        surpriseImage.classList.remove('active');
        console.log('remove surpriseImage.classList', surpriseImage.classList);
        img.style.maxWidth = '0%';
        // setTimeout(() => {
        //     surpriseImage.style.display = 'none';
        // }, 1500); // Small delay to ensure transition works
    }
}

// function handleSurprise(button) {
//     const surpriseImage = document.getElementById('surpriseImage');
//     const img = surpriseImage.querySelector('img');
//     surpriseImage.style.display = 'block';
//     setTimeout(() => {
//         img.style.maxWidth = '100%';
//     }, 100); // Small delay to ensure transition works
// }
