document.binaryForm.onsubmit = async e => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const options = {
        method: form.method,
        body: new URLSearchParams(data)
    };

    fetch(form.action, options)
    .then(resp => resp.json())
    .then(json => {
        const resultado = document.querySelector('.result');
        resultado.innerHTML = JSON.stringify(json);
    });
}