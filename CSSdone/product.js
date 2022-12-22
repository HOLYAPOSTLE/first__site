

let btn = document.getElementById('btn');
btn.addEventListener('click', function(m){
    m.preventdefault()

    let fname = document.getElementById('name').value;
let email = document.getElementById('email').value;
let pNumber = document.getElementById('pNumber').value;
let mBox = document.getElementById('mBox').value;
let body = 'name: ' + fname + '<br/> email: ' + email + '<br/> Phone_number: ' +pNumber + '<br/> Message: ' + mBox;

    Email.send({
        Host : "smtp.gmail.com",
        Username : "antwip00@gmail.com",
        Password : "qzeuhprmhzegxyuw",
        To : 'antwip00@gmail.com',
        From : email,
        Subject : pNumber,
        Body : body
    })
    then(
      message => alert(message)
    );
})