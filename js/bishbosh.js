document.querySelector('#start').addEventListener('click', BishBosh);
function BishBosh() {

    let myCollection = document.getElementById('#bish').value;

    let demo = document.getElementsByTagName("p");

    for (let i = 1; i < 100; i++) {
        if (i % 3 == 0 && i % 4 == 0) {
            for (let i = 0; 0 < myCollection.length; i++) {
                myCollection[i].innerHTML = "Bish-Bosh";
                console.log(myCollection);
            }

        } else if (i % 3 == 0) {

            console.log("Bish");
        } else if (i % 4 == 0) {

            console.log("Bosh");
        } else {

            console.log(i);
        }
    }

}
BishBosh();

function SetInput(userInput) {
    document.getElementById("number").textContent = userInput;
}

SetInput(userInput);

