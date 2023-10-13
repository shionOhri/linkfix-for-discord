# LinkFix for Discord

[![Bot status badge][9]][1]

[![GitHub Actions linting workflow badge][5]][4] [![ghcr.io release badge][6]][3] [![support server badge][7]][8]

<div align="center">
  <img src="./media/github-social-preview.png" alt="LinkFix Logo" width="400" />
  <p><em>erm... your link, my liege</em></p>
</div>

LinkFix for Discord replies to messages containing URLS that don't embed
properly (`x.com`, `twitter.com`, YouTube Shorts) with URLS that do
(`fxtwitter.com`, `youtu.be`).

<div align="center">
  <h2><a href="https://discord.com/oauth2/authorize?client_id=385950397493280805&scope=bot&permissions=274878286912">:arrow_forward: Click Here to add LinkFix to your Discord server! :arrow_backward:</a></h2>
</div>

## Self-Hosting

You can easily self-host this bot with Docker using the following steps:

1. Copy `docker-compose.example.yml` to `docker-compose.yml` (you **do not** need to clone the repo).
2. Edit `docker-compose.yml` and change the line reading `DISCORD_BOT_TOKEN=` to specify your bot's token.
3. Run `docker compose up -d` to start the bot.

**NB:** See [discordjs.guide][2] for instructions on how to create a bot, get a
token, and add the bot to a server.


## Contributing

**TODO:** Write `CONTRIBUTING.md` with updated instructions for setting up the
Python environment.


## License

```
LinkFix for Discord - A Discord bot for improving link embeds.
Copyright (C) 2023  Ralph <ralph@podaboutli.st>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
```

See [`LICENSE.txt`](/LICENSE.txt) for the full license details.


[1]: https://discord.com/oauth2/authorize?client_id=385950397493280805&scope=bot&permissions=274878286912
[2]: https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot
[3]: https://github.com/podaboutlist/linkfix-for-discord/pkgs/container/linkfix-for-discord
[4]: https://github.com/podaboutlist/linkfix-for-discord/actions/workflows/lint.yml
[5]: https://img.shields.io/github/actions/workflow/status/podaboutlist/linkfix-for-discord/lint.yml?style=plastic&logo=github&label=code%20style&labelColor=24292e
[6]: https://img.shields.io/github/actions/workflow/status/podaboutlist/linkfix-for-discord/publish-image.yml?style=plastic&logo=github&label=ghcr.io%20release&labelColor=24292e
[7]: https://img.shields.io/discord/643644919751376899?style=plastic&logo=discord&logoColor=%23ffffff&label=Support%20Server&labelColor=%2324292e&color=%235961ee&cacheSeconds=60
[8]: https://podaboutli.st/discord
[9]: https://dcbadge.vercel.app/api/shield/385950397493280805?bot=true&style=for-the-badge&theme=discord-inverted&labelColor=%2324292e
