import { Client, Events, GatewayIntentBits } from "discord.js";
import { replacements } from "./replacements";
import dotenv from "dotenv";

dotenv.config();

const replacementsEntries = Object.entries(replacements);

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, (eventClient) => {
  console.log(`Ready! Logged in as ${eventClient.user.tag}`);
});

client.on(Events.MessageCreate, (message) => {
  if (message.author.bot) {
    // Avoid infinite loop by replying to self, or another bot that would reply to me
    return;
  }

  let reply = "";
  for (const [identifier, replacer] of replacementsEntries) {
    if (message.content.includes(identifier)) {
      const result = replacer(message.content);
      if (result) {
        if (message.content.includes("||")) {
          reply += "||";
        }
        reply += result;
        if (message.content.includes("||")) {
          reply += " ||";
        }
        reply += "\n";
      }
    }
  }

  if (reply !== "") {
    message
      .reply({ content: reply, allowedMentions: { repliedUser: false } })
      .catch((err) => {
        console.error("Failed to reply:", err);
    setTimeout(function () {
          //Delay function to give Discord time to produce the embed, then remove it
          message.suppressEmbeds(true); //Removes embed from previous message if bot sends fixed link
        }, 3000);    
      });
  }
});

// Log in to Discord with your client's token
client.login(process.env.DISCORD_BOT_TOKEN);
