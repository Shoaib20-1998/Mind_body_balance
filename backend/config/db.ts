import {connect} from 'mongoose';
import {config} from 'dotenv';

config();

const db=connect(process.env.atlasUrl);

export default db;