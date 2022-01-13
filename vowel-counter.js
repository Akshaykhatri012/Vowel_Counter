
let vowels = ['a', 'e', 'i', 'o', 'u']
let primary = document.getElementById('lists');
let tertiary = document.getElementById('lists-text');
let secondary = Array.from(document.getElementsByClassName('bttn'));
let Result = document.getElementById('Result');
let counter = 0;

secondary.map(bttn => {
    bttn.addEventListener('click', function () {

        let word = document.getElementById('lists-text').value;
        for (w of word) {

            for (v of vowels) {
                if (w == v) {
                    counter++;
                }
            }
        }
        
        Result.innerText =` "${word}" has ${counter} vowels`;
        bttn.addEventListener('click', function(){
            tertiary.value = "";
        })
          bttn.addEventListener('dblclick', function(){
            Result.remove(Result);
            console.log('Thanks');
          })
            // lists.removeChild(paragraph);
    })
})

    // var paragraph = document.createElement('p');
    // paragraph.classList.add('lists-container');
    // paragraph.innerText = lists_text.value;
    // lists.appendChild(paragraph);
    // lists_text.value = "";
