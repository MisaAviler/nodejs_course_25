import connectDB from './config/database.js';
import Unit from './models/Unit.js';
import mongoose from 'mongoose';

await connectDB();

const stepOne = async () => {
    const user = new Unit({ type: 'ddq', brand: 'sl' });
    await user.save();

    console.log(user);
}

await stepOne();


await mongoose.disconnect();


