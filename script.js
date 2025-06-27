document.getElementById("update-location").addEventListener("click", function() {
    let newLocation = prompt("Enter your new location:");
    if (newLocation) {
        document.querySelector(".location span").innerText = `Delivering to ${newLocation}`;
    }
});


const images = [
    "imge1.jpg",
    "imge2.jpg",
    "imge3.jpg",
    "imge4.jpg",    
    "imge5.jpg",
    "imge6.jpg",
    "imge.jpg"
    
];

let currentIndex = 0;
const imgElement = document.getElementById("slider-image");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");


function updateImage() {
    imgElement.src = images[currentIndex];
}

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});



// scroll bar

const setupCarousel = (carouselId, prevBtnId, nextBtnId) => {
    const carousel = document.getElementById(carouselId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -600, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: 600, behavior: 'smooth' });
    });

    const updateButtons = () => {
        prevBtn.disabled = carousel.scrollLeft === 0;
        nextBtn.disabled = carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth;
    };

    carousel.addEventListener('scroll', updateButtons);
    updateButtons();
};

setupCarousel('carousel1', 'prevBtn1', 'nextBtn1');
setupCarousel('carousel2', 'prevBtn2', 'nextBtn2');

// Navbars cut a links

document.querySelectorAll('.navbars a').forEach(link => {
    if (link.textContent.includes('Sell')) {
        link.style.display = 'none';
    }
});


// Card1 Thumbnail-container
 function changeImage(thumbnail, imagePath) {
            document.getElementById("mainImage").src = imagePath;
            document.querySelectorAll(".thumbnail").forEach(img => img.classList.remove("selected"));
            thumbnail.classList.add("selected");
        }



         