document.binaryForm.onsubmit = async e => {
    e.preventDefault();

    let binaryOnly = () => {
        const binary = document.querySelector('input').value;

        for(let i = 0; i < binary.length; i++) {
            if (binary.charAt(i) != '0' && binary.charAt(i) != '1' ) {
                alert("Insert only 0 and 1!")
                document.querySelector('.result').innerHTML = "Decimal";
                document.querySelector('input').value = "";
                return false;
            } 
        }

        return true;
    };

    if(binaryOnly()) {
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
                resultado.innerHTML = JSON.stringify(json.decimal);
            });
    } else {
        console.log('foi');
    }


}