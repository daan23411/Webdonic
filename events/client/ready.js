const {prefix}= require('../../config.json')
module.exports=client=>{
    client.user.setActivity(`${prefix}help | ${client.user.username}`)
    console.log(`Hoi! ${client.user.username} is beschikbaar voor commands!`)
}