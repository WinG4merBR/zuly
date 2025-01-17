module.exports = class LangCommand {
	constructor () {
		return {
			permissoes: {
				membro: ['manageGuild'],
				bot: []
			},
			pt: {
				nome: 'fortnite',
				categoria: '⚙️ » Configuração',
				desc: 'Seta algum canal para receber a loja diária do fortnite.'
			},
			en: {
				nome: 'fortnite',
				categoria: '⚙️ » Configuration',
				desc: 'Set any channel to receive the daily fortnite store.'
			},
			/*
            SUB_COMMAND	1 = SubCommand
            SUB_COMMAND_GROUP: 2 = SubCommandGroup
            STRING: 3 = String
            INTEGER: 4 = Any integer between -2^53 and 2^53
            BOOLEAN: 5 = True or False
            USER: 6 = User Mention
            CHANNEL: 7 = Includes all channel types + categories
            ROLE: 8 = Role Mention
            MENTIONABLE: 9 = Includes users and roles
            NUMBER: 10 = Any double between -2^53 and 2^53
            */
			options: [{
				type: 3,
				name: 'channelid',
				description: 'Channel ID to be used',
				required: false
			}],
			aliases: ['anti-nsfw', 'nonsfw', 'anti-sfw'],
			run: this.run
		};
	}

	async run (ctx) {
		if (!ctx.args[0]) {
			return ctx.message.channel.slashReply({
				content: `:x: ${ctx.message.author.mention} **|** ${ctx.idioma.fnshop.args}`
			});
		}
		const fnshop = await global.db.get(`fnshop-${ctx.message.channel.guild.id}`);
		if (!fnshop) {
			const canal = await global.zuly.getRESTChannel(ctx.args[0]);
			try {
				canal.createMessage('<a:zu_fortnite:894977940926910485> **|** https://fn.zulybot.xyz/shop-now.png').then(async () => {
					await global.db.set(`fnshop-${ctx.message.channel.guild.id}`, ctx.args[0]);
					ctx.message.channel.slashReply({
						content: `✅ ${ctx.message.author.mention} **|** ${ctx.idioma.fnshop.sucess}`
					});
				});
			}
			catch (e) {
				return ctx.message.channel.slashReply({
					content: `:x: ${ctx.message.author.mention} **|** ${ctx.idioma.fnshop.channel}`
				});
			}
		}
	}
};
