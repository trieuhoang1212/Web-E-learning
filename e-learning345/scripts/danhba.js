const apiURL =
"https://randomuser.me/api/?results=10";

function renderUser(user){
    return `
    <div class="card">
        <img src="${user.picture.large}">

        <h3>
            ${user.name.first}
            ${user.name.last}
        </h3>

        <p>${user.email}</p>

        <p>${user.location.country}</p>
    </div>
    `;
}

const users = document.getElementById("users");

fetch(apiURL)
.then(res=>{
    if(res.ok){
        return res.json();
    }
})
.then(data=>{

    data.results.forEach(user=>{

        users.innerHTML +=
            renderUser(user);

    });

})
.catch(err=>{
    console.log(err);
});
