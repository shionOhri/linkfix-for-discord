"""linkfix.py: fixin' links in Discord so you don't have to.

TODO: add more stuff here.
"""
import logging
import sys
from os import getenv

import discord
from dotenv import load_dotenv

load_dotenv()


handler = logging.StreamHandler(stream=sys.stdout)

intents = discord.Intents.default()
intents.message_content = True

client = discord.Client(intents=intents)


@client.event
async def on_ready():
    """on_ready is fired when the client successfully logs into Discord."""
    # TODO: Create our own named logger for output
    log = logging.getLogger("discord.client")

    log.info(f"Logged in as {client.user}")


client.run(getenv("DISCORD_BOT_TOKEN"), log_handler=handler, log_level=logging.INFO)
