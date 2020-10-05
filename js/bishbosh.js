document.querySelector('#start').addEventListener('click', BishBosh);
function BishBosh() {

    let bish = parseInt(document.getElementById('bish').value);
    let bosh = parseInt(document.getElementById('bosh').value);
    let number = parseInt(document.getElementById('count').value);

    let resultContainer = document.getElementById('result');


    for (let i = 1; i < number; i++) {
        var elem = document.createElement('p');
        if (i % bish == 0 && i % bosh == 0) {

            elem.innerText = "Bish-Bosh";

            resultContainer.appendChild(elem);



        } else if (i % bish == 0) {
            elem.innerText = "Bish";
            resultContainer.appendChild(elem);
        } else if (i % bosh == 0) {

            elem.innerText = "Bosh";
            resultContainer.appendChild(elem);
        } else {

            elem.innerText = i;
            resultContainer.appendChild(elem);
        }
    }

}




