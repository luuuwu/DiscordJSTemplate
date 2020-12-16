module.exports = {
	name: 'kick',
    description: 'Kick Member',
    guildOnly: true,
    execute(message, args) 
    {
        if (message.member.hasPermission(['MANAGE_MESSAGES']))
        {
            if (!message.mentions.users.size) 
            {
                return message.reply('you need to tag a user in order to kick them!');
            }
            const taggedUser = message.mentions.members.first();
            if (taggedUser.hasPermission(['MANAGE_MESSAGES']))
            {
                message.channel.send(taggedUser.displayName + ` can't be kicked`);  
            }
            else
            {
                taggedUser.kick().then((taggedUser) => 
                {
                    tenor.Search.Query("anime kick", "10").then(Results => {
                        var images = [];
                        var i = 0;
                         Results.forEach(Post => {
                     
                             images[i] = Post.url;
                             i++;
                         
                         });
                         const response = images[Math.floor(Math.random() * images.length)];
                          

                        message.channel.send(taggedUser.displayName + ` has been kicked` + " " + response);
                    });
                })
            }   
        }
    }
}
