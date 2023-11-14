const inputs = document.querySelectorAll('input')
const res = document.querySelector('#res')
const arr = ['nojnici', 'kamen', 'bumaga']

inputs.forEach((input) => {
    input.addEventListener('click', (e) => {
        const random = Math.floor(Math.random() * 3)
        console.log(random)
        if (e.target.value === 'nojnici' && random === 2) {
            res.innerHTML = `
        <h2> You win </h2>
        <img src='./assets/bumaga.jpeg' alt=""=>
        `
        } else if (e.target.value === 'kamen' && random === 0) {
            res.innerHTML = `
        <h2> You win </h2>
        <img src='./assets/nojnici.jpeg' alt=""/>
        `
        } else if (e.target.value === 'bumaga' && random === 1) {
            res.innerHTML = `
        <h2> You win </h2>
        <img src='./assets/kamen.jpeg' alt=""/>
        `
        } else if (e.target.value === 'nojnici' && random === 0) {
            res.innerHTML = `
        <h2> Draw </h2>
        <img src='./assets/nojnici.jpeg' alt=""/>
        `
        } else if (e.target.value === 'bumaga' && random === 2) {
            res.innerHTML = `
        <h2> Draw </h2>
        <img src='./assets/bumaga.jpeg' alt=""/>
        `
        } else if (e.target.value === 'kamen' && random === 1) {
            res.innerHTML = `
        <h2> Draw </h2>
        <img src='./assets/kamen.jpeg' alt=""/>
        `
        } else if(e.target.value === 'kamen' && random === 2) {
            res.innerHTML = `
        <h2> You lose </h2>
        <img src='./assets/bumaga.jpeg'alt=""/>
        `
        }else if(e.target.value === 'nojnici' && random === 1) {
            res.innerHTML = `
        <h2> You lose </h2>
        <img src='./assets/kamen.jpeg'alt=""/>
        `
        }else if(e.target.value === 'bumaga' && random === 0) {
            res.innerHTML = `
        <h2> You lose </h2>
        <img src='./assets/nojnici.jpeg'alt=""/>
        `
        }else {
            return false
        }
    })
})