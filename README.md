<div align="center">
	<br />
	<p>
		<img src="https://raw.githubusercontent.com/BotPortOfficial/nexus/main/.github/workflows/banner.png" width="546" alt="Ticket Bot" />
	</p>
	<p>
</a>
</p>
	<br />
	<p>
	    <a href="https://discord.gg/sRyU4GFraG"><img src="https://img.shields.io/discord/1383201315072639058?color=5865F2&logo=discord&logoColor=white" alt="Discord" /></a>
		<a href="https://github.com/BotPortOfficial/nexus"><img src="https://img.shields.io/github/last-commit/BotPortOfficial/nexus?logo=github&logoColor=white&style=flat-square" alt="Last commit" /></a>
		<a href="https://www.npmjs.com/package/@botport/core"><img src="https://img.shields.io/badge/framework-%40botport%2Fcore-blue?style=flat-square" alt="Framework" /></a>
		<a href="https://github.com/BotPortOfficial/nexus/graphs/contributors"><img src="https://img.shields.io/github/contributors/BotPortOfficial/nexus?logo=github&logoColor=white&color=blue&style=flat-square" alt="Contributors" /></a>
		<a href="https://github.com/BotPortOfficial/nexus/releases"><img src="https://img.shields.io/github/v/release/BotPortOfficial/nexus?style=flat-square" alt="Latest Release" /></a>
		<a href="https://github.com/BotPortOfficial/nexus/blob/main/LICENSE"><img src="https://img.shields.io/github/license/BotPortOfficial/nexus?style=flat-square" alt="License" /></a>
</div>
</div>

## 📋 About

**Nexus** is a powerful and extensible Discord bot built on the [@botport/core](https://github.com/BotPortOfficial/core) framework. Designed with both users and developers in mind, this bot offers a seamless ticket management experience with full addon support.

> ⚠️ **Important Notice**: While this bot is open source, we do not provide support, documentation, or assistance for the underlying [@botport/core](https://github.com/BotPortOfficial/core) framework or custom implementations.

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

This bot features a sophisticated addon system powered by the @botport/core framework:

### ✨ Key Features
- **Automatic Discovery**: Addons are automatically detected in `src/addons/` if enabled in the `.env` file.
- **Dynamic Loading**: Each addon is imported and executed at runtime
- **Error Handling**: Failed addons won't crash the bot
- **Debug Support**: Detailed logging for development
- **Validation**: Ensures proper addon structure before loading
- **Version Control**: Track addon versions through addon.info

## 📦 Installation

```bash
git clone https://github.com/BotPortOfficial/nexus.git
cd nexus
npm install
```

## ⚙️ Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Configure your bot token and environment variables
5. Run the bot with the included `start.bat` or with your own desired startup configuration

## 📄 License

This project is licensed under the [MIT licence](https://github.com/BotPortOfficial/nexus/blob/main/LICENSE).

---

<div align="center">
	<sub>Built with ❤️ by the BotPort Team</sub>
</div>