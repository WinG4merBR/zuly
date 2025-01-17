module.exports = {
	lang: 'es',
	ticket: {
		sus: 'Success!',
		already: 'Sorry, you already have a ticket.',
		await: 'Wait until one of the attendants answers you.',
		created: 'Your ticket has been created.',
		delete: 'Your ticket has been closed and will be deleted in 10 seconds.',
		create: 'To create a ticket click on the button below,',
		labels: {
			delete: 'Close',
			create: 'Open Ticket'
		}
	},
	aki: {
		reg: 'pt',
		q: 'Question:',
		r: 'Answers:',
		i: 'Starting Akinator',
		is: 'Is this your character?',
		win: 'Great! I got it right once more.',
		nowin: 'Uh, you won',
		yay: 'I loved playing with you!',
		res: '[yes (**y**) / no (**n**)]'
	},
	labels: { recalc: 'Recalculate' },
	guess: {
		start: 'The Game will start in **5 seconds** with a number between `%min` and `%max`.',
		started: 'It\'s started!',
		number: 'The chosen Number was `%num`, users must guess it in order to win the event.',
		win: 'You got it right! The chosen Number was `%num`!'
	},
	lockdown: {
		pass: 'To start lockdown, send `lock` in chat.\n> ⚠️ If you want to cancel, send something else in chat.',
		cancel: 'Lockdown has been successfully cancelled.',
		success: 'Lockdown was successfully executed.',
		locking: 'Lockdown is in progress.',
		noCanal: 'No channels have been locked.'
	},
	print: { website: 'Print from website:' },
	mention: {
		hello: 'Hello %user!',
		about: 'I am a multifunctional bot for discord!',
		help: 'To know my commands, type **/help**.',
		labels: {
			support: 'Support Server',
			invite: 'Invite',
			website: 'Website'
		}
	},
	reactionRole: {
		invalidMessage: 'Could not find message with id `%id%`',
		sucess: 'ReactionRole created successfully!'
	},
	eventLog: {
		fields: {
			deletedMessage: 'Deleted Message:',
			oldMessage: 'Old Message:',
			newMessage: 'New Message:'
		},
		channel: 'Channel:'
	},
	docs: { args: 'Say what will be searched for in the documentation.' },
	fnshop: {
		args: 'Include the channel ID that will be sent to the fortnite store.',
		channel: 'I don\'t have permission to send messages on the mentioned channel.',
		sucess: 'Channel set successfully!'
	},
	message: {
		P: '¡Hola humano!',
		view: '¡No tengo permiso para leer el historial de mensajes!',
		the: 'El comando',
		unk: '¡no existe o no se puede ejecutar en este momento!',
		user: '¡No tiene todos los permisos necesarios para usar este comando!\n Permisos requeridos:',
		bot: '¡No tiene todos los permisos necesarios para usar este comando!\n Permisos requeridos:',
		dev: '¡Solo mis desarrolladores pueden usar este comando!',
		c: 'Espere %t segundos para usar otro comando.',
		e: '¡Ups, algo salió mal!',
		e2: 'Notificar este error!',
		e3: 'My team probably already knows about this error, but how about you help? You can open an [issue](https://github.com/zulybot/zuly/issues) in [github](https://github.com/zulybot/zuly) or report it to my [support server](https://discord.gg/pyyyJpw5QW), let\'s make the discord a better place, together 🤝',
		nsfw: 'Este comando solo puede ser utilizado en el canal {0}'
	},
	host: {
		db: 'Eu utilizo [MongoDB](https://mongodb.com) para meu banco de dados, hospedados em maquinas da <:zu_azure:880536844473880617> [Azure](https://azure.microsoft.com).',
		vps: 'Eu sou hospedada na VPS, utilizando maquinas da [OVH](https://ovh.com), com sistema operacional <:zu_ubuntu:880496793740255253> Ubuntu.'
	},
	giveaway: {
		sec: 'segundos',
		min: 'minutos',
		hrs: 'horas',
		day: 'dias',
		term: 'Terminou ás',
		host: 'Sorteio de: {user}',
		win: 'ganhador(es)',
		wins: 'Parabéns, {winners}! Você ganhou **{prize}**!\n{messageURL}',
		addReaction: 'Reaja com 🎁 para participar!',
		restante: 'Tempo Restante:',
		no: 'Sorteio cancelado, sem participações válidas',
		give: 'SORTEIO',
		giveend: 'SORTEIO ENCERRADO',
		start: 'Você não usou o comando corretamente, utilize: `%pgiveaway-start [tempo(10s, 10m)] [ganhadores(1, 1w)] [prêmio(fotos de gatinhos)]`, não inclua **[]** ou **()**.',
		end: 'Você não usou o comando corretamente, utilize: `%pgiveaway-end [id da mensagem]`',
		reroll: 'Você não usou o comando corretamente, utilize: `%pgiveaway-reroll [id da mensagem]`',
		novo: 'Novo ganhador(es): {winners}! Parabéns, vocês ganharam **{prize}**\n{messageURL}',
		err: 'Sem participações válidas, nenhum(s) novo(s) vencedor(es) escolhidos!'
	},
	help: {
		title: 'Lista de Comandos • ',
		creators: 'Eu fui desenvolvida por ',
		description: '> Meu prefixo atual é: `%p`\n> Caso tenha alguma dúvida entre em meu servidor de suporte: [Clique Aqui](https://discord.gg/pyyyJpw5QW)\n> Me adicione clicando [aqui](https://discord.com/oauth2/authorize?client_id=880173509077266483&scope=bot&permissions=805432446)',
		nsfw: 'Você precisa estar em um canal NSFW para ver os comandos nsfw. '
	},
	calc: {
		ex: 'Estão faltando argumentos, utilize, `%pcalc <expressão>`',
		inv: 'Expressão invalida.',
		res: 'Resultado'
	},
	botinfo: {
		texto: 'Hi, I\'m %bot, a bot with unique features that every server needs! I currently know **%u different people** who use my features and I\'m on **%g different servers**.\n\nI\'m developed by `%devs` using [Eris](https://abal.moe/Eris/) using [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) & [ NodeJS](https://nodejs.org/en/)',
		recursos: 'Resources:'
	},
	messages: {
		tem: 'tem',
		msg: 'mensagens',
		title: 'Mensagens'
	},
	together: {
		channel: 'Você precisa estar em um canal de voz para executar este comando.',
		done: 'Basta clicar no link e você será redirecionado para a atividade:',
		done2: '**(só funciona no computador)**'
	},
	erela: {
		np: 'Tocando agora',
		end: 'A música acabou, estou saindo',
		not: 'Não estou tocando nada no servidor.',
		voice: 'I was alone on the voice channel, I\'m leaving!',
		duration: 'Duration:',
		loop: {
			ativado: 'Current Song Loop has been enabled.',
			desativado: 'Current Song Loop has been turned off.'
		}
	},
	play: {
		nada: 'Arguments are missing, use `%pplay <music | url>`',
		add: 'Adicionado a fila',
		can: 'Você precisa estar em um canal de voz para ouvir música.'
	},
	waifu: {
		casar: 'Reaja com 💖 para se casar',
		casou: 'Você se casou com %w',
		dono: 'Dono',
		utl: 'Utilize: %pwaifu-info [ID]',
		casado: 'Você já casou recentemente, você pode casar a cada 2 horas'
	},
	tradutor: {
		lang: 'Você precisa especificar a linguagem, examplo: %translator **en** Oi',
		text: 'Você precisa especificar o texto, examplo: %translator en  **Oi** '
	},
	invite: {
		add: 'Me Adicione ao seu servidor!',
		desc: 'Yay, did you like my commands? Or my features? [Add me](https://discord.com/oauth2/authorize?client_id=719524114536333342&scope=bot%20applications.commands&permissions=805432446)\n\nYou need Help or something? Log into my [support server](https://discord.gg/pyyyJpw5QW), yay'
	},
	ban: {
		noarg: '**Mencione** algum usuário ou dê o **ID** do mesmo.',
		vc: 'Você deseja mesmo punir',
		r: '✅',
		r2: '✅',
		mot: 'Não Definido',
		mot2: 'Punido por:',
		mot3: 'Motivo:',
		the: 'O Usuário',
		foi: 'foi punido com sucesso.'
	},
	clear: {
		msg: 'mensagens** limpas com sucesso',
		no: 'Insira a quantidade de mensagens a serem limpas',
		p: 'Procurando mensagens, isso pode levar 30 segundos...',
		num: 'Eu só consigo limpar entre 2 a 2000 mensagens'
	},
	baninfo: {
		user: 'Usuário:',
		reason: 'Motivo',
		desban: 'Para desbanir reaja com 🐹.'
	},
	multiLang: {
		unknownLanguage: 'Idioma desconhecido.\n<:zu_info:880812942713573396> Idiomas disponíveis: %langs',
		insertLang: 'Você não específicou um idioma. Para alterar o idioma do bot, utilize `%pidioma %langs`'
	},
	autorole: {
		insertRole: 'Você não especificou um cargo, utilize: `%pautorole <@cargo | cargo id | desativar>.`',
		success: 'Certo, agora membros que entrarem no servidor terão o cargo `%cargo` adicionado automaticamente.',
		disabled: 'Autorole foi desativado com sucesso.',
		noset: 'Não Setado',
		bot: 'Mencione o cargo que será dado quando algum BOT entrar no servidor.',
		botset: 'O Autorole de bots foi setado para os cargos:',
		user: 'Mencione o cargo que será dado quando algum usuário entrar no servidor.',
		userset: 'O Autorole de usuários foi setado para os cargos:',
		mem: 'Membros',
		del: 'Desativar',
		del2: 'Reaja com ❌ para desativar/deletar'
	},
	userinfo: {
		inf: 'Informações de:',
		tag: 'Tag de:',
		id: 'ID de:',
		create: 'Conta criada dia:'
	},
	slash: 'devido a alguns problemas de compatibilidade, mudei completamente para **Comandos Slash**, se os comandos não aparecerem, adicione-me novamente clicando aqui: [adicionar](https://zulybot.xyz/add), não é necessário remover o bot, caso os comandos ainda não foram atualizados em seu servidor, pode levar até uma hora para que sejam atualizados em todos os servidores, devido ao discord.',
	avatar: {
		title: 'Avatar de:',
		download: 'Link para download:',
		click: 'Clique Aqui'
	},
	perfil: {
		ngm: 'NINGUÉM',
		desc: 'A Zuly é minha amiga, sabia que você pode alterar isso usando "%psobremim"?',
		comp: 'Clique no `🛒` para comprar',
		succ: 'Background comprado com sucesso',
		no: 'Você não tem dinheiro suficiente para comprar este background'
	},
	filtros: {
		ativado: 'O Filtro %f foi ativado com sucesso.',
		desativado: 'O Filtro %f foi desativado com sucesso.'
	},
	economy: {
		jacoletou: 'Você já coletou sua recompensa diária hoje! Tente novamente em:',
		recebeu: 'Você recebeu:',
		noarg: 'Estão faltando argumentos, utilize: `%presgatar <codigo>.`',
		resgatado: 'Você já resgatou esse código.',
		nocode: 'Esse código não existe.',
		sucesso: 'Você resgatou o promocode **%p** e ganhou **%v ryos** 🥳'
	},
	sobre: {
		nada: 'Preciso de algum argumento, utilize: `%psobremim <texto>`',
		alt: 'Sobre alterado para: `%t`'
	},
	nsfw: {
		activated: 'System activated successfully!',
		disabled: 'System successfully disabled!',
		nonsfw: 'Não envie conteúdo NSFW fora de canais NSFW.'
	}
};