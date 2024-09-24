
const db = require('./db');

module.exports = async (req, res) => {
    const { id } = req.query;

    db.get(`SELECT * FROM pastes WHERE id = ?`, [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }

        if (!row) {
            return res.status(404).json({ error: 'Paste not found' });
        }

        res.status(200).json(row);
    });
};

/*
fetches a specific paste using its unique ID
*/