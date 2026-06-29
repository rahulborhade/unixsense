emailjs.init({
    publicKey: "57OmxtXQtsXDA7uw6"
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const button = document.getElementById("submitBtn");

    button.innerHTML = "Sending...";

    button.disabled = true;

    // First email → Owner

    emailjs.sendForm(

        "service_1wptnou",

        "template_c9wys2f",

        this

    )

        .then(function () {

            // Second email → Customer

            return emailjs.send(

                "service_1wptnou",

                "template_spzjtra",

                {

                    name: form.name.value,

                    company: form.company.value,

                    email: form.email.value,

                    phone: form.phone.value,

                    subject: form.subject.value,

                    message: form.message.value

                }

            );

        })

        .then(function () {

            alert("Thank you! Your inquiry has been submitted successfully.");

            form.reset();

        })

        .catch(function (error) {

            console.log(error);

            alert("Unable to send inquiry.");

        })

        .finally(function () {

            button.disabled = false;

            button.innerHTML = "Send Inquiry";

        });

});



