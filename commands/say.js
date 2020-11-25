module.exports = {
    name: 'say',
    description: "Says A message inputted",
    execute(message, args){
        const sayMessage = args.join(" ")
        message.delete().catch(err => console.log(err));
        message.channel.send(sayMessage);
    }
}
