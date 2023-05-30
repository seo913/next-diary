import { connectDB } from "@/util/database";

export default async function Create(req,res){
    if(req.method === 'POST'){
        const db = (await connectDB).db('diary');
        let result = db.collection('list').insertOne(req.body);

        console.log(result);
        
       return res.status(200).redirect(302,'/list');
    }
}