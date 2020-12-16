module.exports = {
	name: 'mute',
    description: 'Mute Member',
    guildOnly: true,
    execute(message, args) 
    {
        if (message.member.hasPermission(['MANAGE_MESSAGES']))
        {
            if (!message.mentions.users.size) 
            {
                return message.reply('you need to tag a user in order to mute them!');
            }
            
            const taggedUser = message.mentions.members.first();
            const r = taggedUser.guild.roles.cache.find(role => role.name === "Muted");

            if (taggedUser.hasPermission(['MANAGE_MESSAGES']))
            {
                message.channel.send(taggedUser.displayName + ` can't be muted`);  
            }
            else
            {   
                taggedUser.roles.add(r).then((taggedUser) => 
                {
                    message.channel.send(taggedUser.displayName + ` has been muted`);
                });
                
            }
            
        }
        
    }
};
