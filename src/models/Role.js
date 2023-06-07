import { Schema,model } from "mongoose";

const roleSchema = new Schema({
    name:String,
    
},{
    versionKey: false,
    timeStamps: true
})


export default model('Role', roleSchema);