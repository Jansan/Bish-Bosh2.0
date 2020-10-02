
function BishBosh() {

    let myCollection = document.getElementById('#bish-bosh');
    for (let i = 1; i < 100; i++) {
        if (i % 3 == 0 && i % 4 == 0) {
            for (let i = 0; 0 < myCollection.length; i++) {
                myCollection[i].innerHTML = "Bish-Bosh";
                console.log(myCollection);
            }
            // document.querySelector('#bish-bosh').textContent = "Bish-Bose";

        } else if (i % 3 == 0) {
            // document.querySelector('#bish').textContent = "Bish";
            console.log("Bish");
        } else if (i % 4 == 0) {
            // document.querySelector('#bosh').textContent = i + " Bosh";
            console.log("Bosh");
        } else {
            //  document.querySelector('#i').textContent = i;
            console.log(i);
        }
    }

}
BishBosh();

function SetInput(userInput) {
    document.getElementById("number").textContent = userInput;
}

SetInput(userInput);

