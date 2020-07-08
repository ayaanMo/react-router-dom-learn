const UserAPI = {
    users: [
        { id: "1", name: "Ben Blocker", position: "G" },
        { id: "2", name: "Dave Defender", position: "D" },
        { id: "3", name: "Sam Sweeper", position: "D" },
        { id: "4", name: "Matt Midfielder", position: "M" },
        { id: "5", name: "William Winger", position: "M" },
        { id: "6", name: "Fillipe Forward", position: "F" }
    ],
    all: function () { return this.users },
    get: function (id) {
        const isUser = u => u.id === id;
        return this.users.find(isUser);
    }
}
export default UserAPI