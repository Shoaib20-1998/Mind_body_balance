
import jsonwebtoken from 'jsonwebtoken';


const userAuth=(req,res,next)=>{
    const token=req.headers.authorization;
    if(token){
        const decode=jsonwebtoken.verify(token.split(' ')[1],'userLogin');
        if(decode){
            req.body.userId=decode['userId'];
            next();
        }else{
            res.status(501).send({"error":"Invalid token"});
        }
    }else{
        res.status(501).send({"error":"please login!"})
    }
}

export default userAuth;