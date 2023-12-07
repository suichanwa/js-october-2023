fetch('http://localhost:3000/users')
    .then(data => data.json())
    .then(data => {
        data.forEach(user => {
            let li = document.createElement('li')
            li.innerText = user.first_name
            document.body.appendChild(li)
        })
})


const postdat = async (url, data) => {
const response = await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body:data
})
return await response.json()
}

const fun = () => {
    const submit = document.getElementById('submit');

    submit.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(submit);
        console.log(formData.entries())
        const json = JSON.stringify(Object.fromEntries(formData.entries()));
        console.log(json)
        postdat('http://localhost:3000/users', json)
    })
}

fun()