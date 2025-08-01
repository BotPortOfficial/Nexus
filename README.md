<div align="center">
	<br />
	<p>
		<img src="https://raw.githubusercontent.com/BotPortOfficial/ticket-bot/main/.github/workflows/banner.png" width="546" alt="Ticket Bot" />
	</p>
	<p>
</a>
</p>
	<br />
	<p>
	    <a href="https://discord.gg/sRyU4GFraG"><img src="https://img.shields.io/discord/1383201315072639058?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
		<a href="https://github.com/BotPortOfficial/ticket-bot"><img src="https://img.shields.io/github/last-commit/BotPortOfficial/ticket-bot?logo=github&logoColor=white&style=flat-square" alt="Last commit" /></a>
		<a href="https://www.npmjs.com/package/@botport/tickets"><img src="https://img.shields.io/badge/framework-%40botport%2Ftickets-blue?style=flat-square" alt="Framework" /></a>
		<a href="https://github.com/BotPortOfficial/ticket-bot/graphs/contributors"><img src="https://img.shields.io/github/contributors/BotPortOfficial/ticket-bot?logo=github&logoColor=white&color=blue&style=flat-square" alt="Contributors" /></a>
		<a href="https://github.com/BotPortOfficial/ticket-bot/blob/main/LICENSE"><img src="https://img.shields.io/github/license/BotPortOfficial/ticket-bot?style=flat-square" alt="License" /></a>
</div>
</div>

## 📋 About

**Ticket Bot** is a powerful and extensible Discord bot built on the [@botport/tickets](https://github.com/BotPortOfficial/tickets) framework. Designed with both users and developers in mind, this bot offers a seamless ticket management experience with full addon support.

> ⚠️ **Important Notice**: While this bot is open source, we do not provide support, documentation, or assistance for the underlying [@botport/tickets](https://github.com/BotPortOfficial/tickets) framework or custom implementations.

## 🚀 Features

- ✅ **User-friendly interface** - Intuitive ticket management for all users
- ✅ **Developer-friendly architecture** - Easy to understand and modify
- ✅ **Automatic addon discovery** - Scans `src/addons/` for valid addon directories
- ✅ **Dynamic loading system** - Imports and executes addons at runtime
- ✅ **Robust error handling** - Failed addons won't crash the bot
- ✅ **addon.info validation** - Ensures proper addon structure and metadata
- ✅ **Extensible framework** - Built on the robust @botport/tickets foundation
- ✅ **Open source** - Free to use and modify
- ✅ **Regular updates** - Maintained and improved continuously

## 🔧 Addon Development

This bot features a sophisticated addon system powered by the @botport/tickets framework:

### 📁 Addon Structure
```
src/addons/
├── my-addon/
│   ├── addon.info
│   └── index.js (or your mainfile)
└── another-addon/
    ├── addon.info
    └── main.js
```

### 📋 addon.info Format
```ini
name=My Awesome Addon
version=1.0.0
type=addon
mainfile=index.js
description=This addon does amazing things
```

### ✨ Key Features
- **Automatic Discovery**: Addons are automatically detected in `src/addons/` if enabled in the `.env` file.
- **Dynamic Loading**: Each addon is imported and executed at runtime
- **Error Handling**: Failed addons won't crash the bot
- **Debug Support**: Detailed logging for development
- **Validation**: Ensures proper addon structure before loading
- **Version Control**: Track addon versions through addon.info

## 📦 Installation

```bash
git clone https://github.com/BotPortOfficial/ticket-bot.git
cd ticket-bot
npm install
```

## ⚙️ Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Configure your bot token and environment variables
5. Run the bot with the included `start.bat` or with your own desired startup configuration

## 📄 License

This project is licensed under the [MIT licence](https://github.com/BotPortOfficial/ticket-bot/blob/main/LICENSE).

---

<div align="center">
	<sub>Built with ❤️ by the BotPort Team</sub>
</div>