const get_users = (req, res) => {
    if (req.params.id) {
        res.send(`Get 1 user with id=${req.params.id}`);
    } else {
        res.send('Get ALL users');
    }
};

const add_user = (req, res) => {
    res.send('Add user');
};

const change_user = (req, res) => {
    res.send(`Change user with id=${req.params.id}`);
};

export { get_users, add_user, change_user };
