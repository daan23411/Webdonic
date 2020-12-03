const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'review',
    category: 'Misc',
    description: 'Maak een review.',
    usage: '<sterren> <beschrijving>',
    run: async (bot, message, args) => {
        const amountStars = args[0];
        if (!amountStars || amountStars < 1 || amountStars > 5) return message.channel.send("Geef een aantal op tussen de 1 en 5 sterren");
        let text = args.splice(1, args.length).join(" ") || '**Geen text opgegeven.**';
        let channel = message.member.guild.channels.cache.get('783775661377454130');
        if (!channel) return message.channel.send(`Geen kanaal gevonden met id: ${channel.id}`);
        let stars = "";
        for (let i = 0; i < amountStars; i++) {
            
            stars+= ":star: ";

        }

        message.delete();

        const embed = new MessageEmbed()
        .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
        .setTitle('Nieuwe Review!')
        .addField("Sterren: ", stars)
        .addField("Review: ", text)
        .setColor('RANDOM')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`Review gemaakt door ${message.author.username}#${message.author.discriminator}`);

        message.channel.send("✅ - Review verstuurd!");

        return channel.send(embed)
    }
}