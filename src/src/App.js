function fetchUsers() {
    fetch('https://randomuser.me/api/?results=3')
        .then(response => response.json())
        .then(data => {
            const users = data.results;
            const container = document.getElementById('usersContainer');
            container.innerHTML = '';
            users.forEach(user => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img class="user-photo" src="${user.picture.large}" alt="User Photo">
                    <div class="user-info">
                        <div class="user-name">${user.name.first} ${user.name.last}</div>
                        <div><strong>Email:</strong> ${user.email}</div>
                        <div><strong>Phone:</strong> ${user.phone}</div>
                        <div><strong>Location:</strong> ${user.location.city}, ${user.location.country}</div>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.log(error));
}

// Initial fetch
fetchUsers();

// Refresh every 30 seconds
setInterval(fetchUsers, 30000);
