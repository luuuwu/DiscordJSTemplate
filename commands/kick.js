module.exports = {
  name: "ban",
  description: "Ban Member",
  guildOnly: true,
  execute(message, args) {
    if (message.member.hasPermission(["BAN_MEMBERS"])) {
      if (!message.mentions.users.size) {
        return message.reply("you need to tag a user in order to ban them!");
      }
      const taggedUser = message.mentions.members.first();
      if (taggedUser.hasPermission(["MANAGE_MESSAGES"])) {
        message.channel.send(taggedUser.displayName + ` can't be banned`);
      } else {
        taggedUser.ban().then((taggedUser) => {
          tenor.Search.Query("anime ban", "10").then((Results) => {
            var images = [];
            var i = 0;
            Results.forEach((Post) => {
              images[i] = Post.url;
              i++;
            });
            const response = images[Math.floor(Math.random() * images.length)];

            message.channel.send(
              taggedUser.displayName + ` has been banned` + " " + response
            );
          });
        });
      }
    }
  },
};
