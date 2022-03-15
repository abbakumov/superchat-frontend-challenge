import crypto from 'crypto';

import type { RepoData } from '../common/types/repo-data';

type Database = {
    [index: string]: RepoData;
};

// Yes! That's it! :)
// In memory key-value database!
// Ofcause it's not acceptable for the real project just because we will lost
// all the data on each application reload.
// For small real-world project PostgreSQL may work fine
// For medium+ size real-world project we probably better use some distributed NoSQL solutions
const database: Database = {};

const databaseAPI = {
    getItem: (index: string) => (database[index] || null),
    addItem: (data: RepoData) => {
        let index = crypto.randomBytes(6).toString('hex');

        // in case it's not unique
        while (database[index]) {
            index = crypto.randomBytes(6).toString('hex');
        }

        database[index] = data;

        return index;
    },
};

export default databaseAPI;
