const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('./bot.js');
Manager.spawn(2); // This example will spawn 2 shards;
//Make this a seperate file and run this file.
