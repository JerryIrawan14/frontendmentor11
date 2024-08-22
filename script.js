document.addEventListener('DOMContentLoaded', () => {
    const btnSubmit = document.getElementById('btn');
    const btnBack = document.getElementById('btn1');
    const thanksCard = document.getElementById('thanks-card');
    const ratingCard = document.getElementById('rating-card');

    let selectedIndex = null;

    // Function to handle link hover effect
    const handleLinkHover = (link, index, links) => {
        link.addEventListener('mouseover', () => {
            links.forEach(l => l.style.backgroundColor = 'hsl(212, 26%, 14%)');
            link.style.backgroundColor = 'hsl(25, 97%, 53%)';
            if (index > 0) {
                links[index - 1].style.backgroundColor = 'hsl(0, 0%, 100%)';
            }
        });

        link.addEventListener('mouseout', () => {
            links.forEach(l => l.style.backgroundColor = 'hsl(212, 26%, 14%)');
        });

        link.addEventListener('click', (e) => {
            e.preventDefault();
            selectedIndex = index + 1;
        });
    };

    // Initialize event listeners for anchor tags
    document.querySelectorAll('.link').forEach((link, index, links) => {
        handleLinkHover(link, index, links);
    });

    // Handle submit button click
    btnSubmit.addEventListener('click', () => {
        if (selectedIndex !== null) {
            document.querySelector('#index-rating span').textContent = selectedIndex;
            thanksCard.classList.remove('hide');
            ratingCard.classList.add('hide');
        }
    });

    // Handle back button click
    btnBack.addEventListener('click', () => {
        thanksCard.classList.add('hide');
        ratingCard.classList.remove('hide');
    });
});
