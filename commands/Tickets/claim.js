const {MessageEmbed} = require('discord.js');
module.exports={
    name:'claim',
    category: 'Tickets',
    description: 'Claim een ticket.',
    usage: '<command>',
    run: async(client,message,member,args)=>{ 
      const claimEmbed = new MessageEmbed()
      .setTitle('Ticket Geclaimed')
      .setDescription(`<@${message.author.id}> heeft de ticket geclaimed! \nDoor hem wordt u verder geholpen.`)
      .setFooter('© daan2341, 2020 - 2021')
      .setColor('RANDOM')
      .setTimestamp();
      message.channel.send(claimEmbed);
    }
}