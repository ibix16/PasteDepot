
const { v4: uuidv4 } = require('uuid');
const db = require('./db');

module.exports = async (req, res) => {
    const { content, language } = req.body;
    const id = uuidv4(); // Generate unique ID for the paste
    const createdAt = new Date().toISOString();

    db.run(
        `INSERT INTO pastes (id, content, language, created_at) VALUES (?, ?, ?, ?)`,
        [id, content, language, createdAt],
        function (err) {
            if (err) {
                return res.status(500).json({ error: 'Database error' });
            }
            res.status(200).json({ id });
        }
    );
};

/*
This function will generate a UUID, 
store the paste in the SQLite database, 
and return the unique ID for the paste.
*/