
import 'colors';
import { connect } from 'mongoose';

const dbConnect = () => {
    const DB_URI = process.env.DB_URI!;
    connect(DB_URI)
        .then(() => {
            console.log(`DB status: ${'ONLINE'.green}`);
        })
        .catch(err => {
            console.log(`DB status: ${'OFFLINE'.red}`);
            console.error(err);
        });
}

export { dbConnect };