

const jokes = document.querySelector('#jokes')
/**const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    console.log(res.data.joke)
}*/

const bt = document.querySelector('#bt');

bt.addEventListener('click', async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        const newJoke = document.createElement('li');
        jokes.appendChild(newJoke);
        newJoke.innerText = res.data.joke
    } catch (e) {
        return "no joke available"

    }

}

)








