const form = document.getElementById('membership-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const membershipData = {};
    for (const [key, value] of formData) {
        membershipData[key] = value;
    }
    console.log(membershipData);

});