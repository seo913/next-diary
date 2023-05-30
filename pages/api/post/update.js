import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function update(req,res){
    if(req.method === 'POST'){
        let ch = {
            date : req.body.date, 
            weather : req.body.weather, 
            title : req.body.title, 
            content : req.body.content
        };

        const db = (await connectDB).db('diary');
        let result = await db.collection('list').updateOne({_id : new ObjectId(req.body._id)},
            {$set: ch});
            
            return res.status(200).redirect(302,'/list');
    }
}