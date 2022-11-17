import connectDB from "../../../utils/connectDB";
import Users from '../../../models/userModal';
import bcrypt from 'bcrypt';
import {createAccessToken,createRefreshToken} from '../../../utils/generateToken';
connectDB();

export default async (req,res) => {
    switch(req.method) {
        case 'POST':
            await login(req,res)
            break;
    }
}

const login = async (req,res) => {
    try {
        const {email,password} = req.body;
   
        const checkUser = await Users.findOne({email});
        if (!checkUser) return res.status(400).json({err:'This user does not exists.'});

        const passwordHas = await bcrypt.hash(password,12);
        const newUser = new Users({name,email,password:passwordHas,cpassword})
        await newUser.save();
        res.json({msg:'Registered successfullly'});

    } catch(err) {
       return res.status(500).json({err:err.message});
    }
}