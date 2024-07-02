const pre_get_comments = (req, res, next) => {
    console.log('Middleware for getting ALL comments');
    next();
};

const get_comments = (req, res) => {
    if (req.params.id) {
        res.send(`Get 1 comment with id=${req.params.id}`);
    } else {
        res.send('Get ALL comments');
    }
};

const add_comment = (req, res) => {
    res.send('Add comment');
};

const change_comment = (req, res) => {
    res.send(`Change comment with id=${req.params.id}`);
};

export { pre_get_comments, get_comments, add_comment, change_comment };
