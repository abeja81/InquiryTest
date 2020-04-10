document.getElementById('kokot').addEventListener('submit', submitCaptcha);

function submitCaptcha(e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    const newsletter = document.querySelector('#newsletter').value;
    const captcha = document.querySelector('#g-recaptcha-response').value;

    fetch('/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({name: name, email: email, message: message, newsletter: newsletter, captcha: captcha})
    })
    then((res) => res.json())
    .then((data) => {
        console.log(data);
    });
}