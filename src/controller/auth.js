
module.exports = {
    authForm: (req, res) => {
        res.render('auth');
    },
    authFailed: (req, res) => {
        // console.log(req)
    },
    dashboard: (req, res) => {
        const { user } = req;
        res.render('dashboard', { user });
    }
}