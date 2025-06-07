document.addEventListener('DOMContentLoaded', function() {
    
    const lines = [
        { id: 'line1', text: "Pehle, sirf andhera tha..." },
        { id: 'line2', text: "Phir tum aaye, ek roshni ki tarah." },
        { id: 'line3', text: "Lekin har roshni ke saath, ek parchhayi aati hai." },
        { id: 'line4', text: "Aur tum mujhe ussi parchhayi mein chhod gaye." },
        { id: 'final-word', text: "Khaali." }
    ];

    let delay = 1500; // Har line ke beech ka gap

    function typeWriter(element, text, index) {
        let i = 0;
        element.style.opacity = '1';
        element.classList.add('cursor');
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 80); // Har letter ke type hone ki speed
            } else {
                element.classList.remove('cursor');
                if (index + 1 < lines.length) {
                    setTimeout(() => showLine(index + 1), delay);
                }
            }
        }
        type();
    }

    function showLine(index) {
        if (index < lines.length) {
            const line = lines[index];
            const element = document.getElementById(line.id);
            typeWriter(element, line.text, index);
        }
    }

    // Story shuru karo
    setTimeout(() => showLine(0), 1000);
});
