const matches = require('../databseSchema/schema')

const addMatch = async(req,res)=>{
    const match = await matches.create(req.body)
    res.json({match})
}
const findMatch = async (req,res)=>{
    const {match} = req.query
    const object = {}
    if(match){
        object.match = { $regex: match, $options: 'i' };
    }
     if(!match){
        const match = await matches.find({})
        return res.json({match})
    }
    const matchFind = await matches.find(object)
     return res.status(200).json({matchFind}) 

} 
const deleteMatch = async (req,res) =>{
    const {id:matchId} = req.params
    const match = await matches.findOneAndDelete({_id:matchId})
    res.status(200).json({match})
}

module.exports = { addMatch, findMatch, deleteMatch };