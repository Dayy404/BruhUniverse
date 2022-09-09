const contactForm = document.getElementsByTagName("bruh-contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        menthod: "POST",
        body: formData,
        mode: "no-cors",
    })
    .then(() => {
        //url thankyou
        window.location.href = "thankyou.html";
    })
});