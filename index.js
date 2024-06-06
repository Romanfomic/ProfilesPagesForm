document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('userList');
    const ageFilterCheckbox = document.getElementById('ageFilter');
    const userForm = document.getElementById('userForm');
    const sortCriteriaSelect = document.getElementById('sortCriteria');
    const sortOrderSelect = document.getElementById('sortOrder');
    //test data
    const users = [
        {
            firstName: "AfirstName",
            lastName: "AlastName",
            age: 20,
            email: "test@test.com",
            photo: null
        },
        {
            firstName: "BfirstName",
            lastName: "BlastName",
            age: 16,
            email: "test@test.com",
            photo: null
        },
    ];
    renderUsers();

    function renderUsers() {
        userList.innerHTML = '';
        let filteredUsers = ageFilterCheckbox.checked ? users.filter(user => user.age > 18) : users;

        const sortCriteria = sortCriteriaSelect.value;
        const sortOrder = sortOrderSelect.value;
        filteredUsers = filteredUsers.sort((a, b) => {
            if (sortCriteria === 'name') {
                if (sortOrder === 'asc') {
                    return a.firstName.localeCompare(b.firstName);
                } else {
                    return b.firstName.localeCompare(a.firstName);
                }
            } else if (sortCriteria === 'age') {
                if (sortOrder === 'asc') {
                    return a.age - b.age;
                } else {
                    return b.age - a.age;
                }
            }
        });

        filteredUsers.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'user-card';
            userCard.innerHTML = `
                <img src="${user.photo}" alt="${user.firstName} ${user.lastName}" width="50" height="50">
                <div>
                    <strong>${user.firstName} ${user.lastName}</strong>
                    <span>Age: ${user.age}</span>
                    <span>Email: ${user.email}</span>
                </div>
            `;
            userList.appendChild(userCard);
        });
    }

    ageFilterCheckbox.addEventListener('change', renderUsers);
    sortCriteriaSelect.addEventListener('change', renderUsers);
    sortOrderSelect.addEventListener('change', renderUsers);

});