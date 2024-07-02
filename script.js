document.addEventListener('DOMContentLoaded', () => {
    const timeline = gsap.timeline();

    
    timeline.from("img", {
        duration: 1, 
        x: -300, 
        opacity: 0, 
        ease: "power2.out" 
    });

    
    timeline.from("#install", {
        duration: 1, 
        x: -300, 
        opacity: 0, 
        ease: "power2.out", 
        delay: 0.2
    });
});





document.addEventListener('DOMContentLoaded', () => {
    
    const cards = document.querySelectorAll('.card');
    
    
    const tl = gsap.timeline();

    
    cards.forEach((card, index) => {
        tl.from(card, {
            duration: 1, 
            opacity: 0, 
            y: 50, 
            ease: 'power2.out', 
        }, index * 0.5); 
    });
});
