const {Router} = require('express');

const router = Router();

// Routes the endpoints
router.get('/recognize-object', (req, res) => {
    res.send('ok from recognition');
});

module.exports = router;