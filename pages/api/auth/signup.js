import connectDB from "../../../utils/connectDB";
import Users from '../../../models/userModal';
import valid from '../../../utils/valid'
import bcrypt from 'bcrypt';

connectDB();

export default async (req,res) => {
    switch(req.method) {
        case 'POST':
            await register(req,res)
            break;
    }
}

const register = async (req,res) => {
    try {
        const {name,email,password,cpassword} = req.body;
        const errorMsg = valid(name,email,password,cpassword)
        if (errorMsg) return res.status(400).json({err:errorMsg});

        const checkUser = await Users.findOne({email});
        if (checkUser) return res.status(400).json({err:'This email already exists'});

        const passwordHas = await bcrypt.hash(password,12);
        const newUser = new Users({name,email,password:passwordHas,cpassword})
        await newUser.save();
        res.json({msg:'Registered successfullly'});

    } catch(err) {
       return res.status(500).json({err:err.message});
    }
}