const tryform = document.getElementById('tryform');

tryform.addEventListener('submit', (e) => {
    console.log('submitted');
    e.preventDefault();
    // const newcom = document.querySelector('input').value;
    //document.querySelector('#comments li').textContent = newcom;
    const usernametInput = tryform.elements.username;
    const commentstIput = tryform.elements.comment;
    addComments(usernametInput.value, commentstIput.value);
    usernametInput.value = '';
    commentstIput.value = '';

});
const addComments = (username, comment) => {
    const newcomment = document.createElement('li');
    const btag = document.createElement('b')
    btag.append(username);
    newcomment.append(btag);
    newcomment.append(`:${comment}`);
    document.getElementById('comments').appendChild(newcomment);
}

