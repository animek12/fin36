var handler = async (m, {
	command,
	usedPrefix,
	DevMode,
	args
}) => {
	var type = (args[0] || '').toLowerCase()
	var msk = (args[0] || '').toLowerCase()
	var user = db.data.users[m.sender]
	var author = global.author
	var cok = `
โง ayambakar ๐
ใ Need 2 ayam ๐ & 1 Coal ๐ณ๏ธ
โง ayamgoreng ๐
 ใ Need 2 ayam ๐ & 1 Coal ๐ณ๏ธ
โง oporayam ๐
 ใ Need 2 ayam ๐ & 1 Coal ๐ณ๏ธ
โง steak ๐ฅฉ
 ใ Need 2 sapi ๐ฎ & 1 Coal ๐ณ๏ธ
โง rendang ๐ฅ
 ใ Need 2 sapi ๐ฎ & 1 Coal ๐ณ๏ธ
โง gulaiayam ๐ฒ
 ใ Need 2 ayam ๐ & 1 Coal ๐ณ๏ธ
โง babipanggang ๐ฅ 
 ใ Need 2 babi ๐ & 1 Coal ๐ณ๏ธ
โง Gado Gado ๐ฅ
 ใ Need 2 bayam๐ , 2 kubis ๐ฅฌ & 1 Coal ๐ณ๏ธ
โง Jagung Bakar ๐ฝ
 ใ Need 2 jagung ๐ฝ & 1 Coal ๐ณ๏ธ
โง Kentang Goreng ๐
 ใ Need 2 kentang ๐ฅ & 1 Coal ๐ณ๏ธ
โง Sup Labu ๐ฅฃ
 ใ Need 2 labu ๐ & 1 Coal ๐ณ๏ธ
โง Tumis Kangkung ๐ฅ
 ใ Need 2 kangkung ๐ฅฆ & 1 Coal ๐ณ๏ธ
โง Pop Corn๐ฟ
 ใ Need 2 jagung ๐ฝ & 1 Coal ๐ณ๏ธ
`

	try {
		if (/masak|cook/i.test(command)) {
			var count = args[1] && args[1].length > 0 ? Math.min(5, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
			switch (type) {
				case 'ayambakar':
					if (user.ayam < count * 2 || user.coal < 1 * count) {
						user.ayam >= count * 1
						user.ayam -= count * 2
						user.coal -= count * 1
						user.ayambakar += count * 1
						conn.reply(m.chat, `Sukses memasak ${count} ayam bakar๐`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak ayam bakar\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
				case 'gulaiayam':
					if (user.ayam < count * 2 || user.coal < 1 * count) {
						user.ayam >= count * 1
						user.ayam -= count * 2
						user.coal -= count * 1
						user.gulai += count * 1
						conn.reply(m.chat, `Sukses memasak ${ count } Gulai Ayam๐`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak gulai ayam\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
				case 'rendang':
					if (user.sapi < count * 2 || user.coal < 1 * count) {
						user.sapi >= count * 1
						user.sapi -= count * 2
						user.coal -= count * 1
						user.rendang += count * 1
						conn.reply(m.chat, `Sukses memasak ${ count } Rendang ๐`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak dimasak rendang\nAnda butuh 2 sapi dan 1 coal untuk memasak`, m)
					break
				case 'ayamgoreng':
					if (user.ayam < count * 2 || user.coal < 1 * count) {
						user.ayam >= count * 1
						user.ayam -= count * 2
						user.coal -= count * 1
						user.ayamgoreng += count * 1
						conn.reply(m.chat, `Sukses memasak ${ count } ayam goreng๐`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak ayam goreng\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
				case 'oporayam':
					if (user.lele < count * 2 || user.coal < 1 * count) {
						user.lele >= count * 1
						user.lele -= count * 2
						user.coal -= count * 1
						user.oporayam += count * 1
						conn.reply(m.chat, `Sukses memasak ${ count } opor ayam`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak opor ayam\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
				case 'steak':
					if (user.sapi < count * 2 || user.coal < 1 * count) {
						user.sapi >= count * 1
						user.sapi -= count * 2
						user.coal -= count * 1
						user.steak += count * 1
						conn.reply(m.chat, `Sukses memasak ${ count } Steak`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak steak\nAnda butuh 2 sapi dan 1 coal untuk memasak`, m)
					break
				case 'babipanggang':
					if (user.babi < count * 2 || user.coal < 1 * count) {
						user.babi >= count * 1
						user.babi -= count * 2
						user.coal -= count * 1
						user.babipanggang += count * 1
						conn.reply(m.chat, `Sukses memasak ${ count } babi panggang`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak babi panggang\nAnda butuh 2 babi dan 1 coal untuk memasak`, m)
					break
				case 'jagungbakar':
					if (user.jagung < count * 2 || user.coal < 1 * count) {
						user.jagung >= count * 1
						user.jagung -= count * 2
						user.coal -= count * 1
						user.jagungbakar += count * 1
						conn.reply(m.chat, `Sukses memasak ${count} jagung bakar๐ฝ`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak jagung bakar\nAnda butuh 2 jagung dan 1 coal untuk memasak`, m)
					break
				case 'popcorn':
					if (user.jagung < count * 2 || user.coal < 1 * count) {
						user.jagung >= count * 1
						user.jagung -= count * 2
						user.coal -= count * 1
						user.popcorn += count * 1
						conn.reply(m.chat, `Sukses memasak ${count} jagung bakar๐ฟ`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak jagung bakar\nAnda butuh 2 jagung dan 1 coal untuk memasak`, m)
					break
				case 'kentanggoreng':
					if (user.kentang < count * 2 || user.coal < 1 * count) {
						user.kentang >= count * 1
						user.kentang -= count * 2
						user.coal -= count * 1
						user.kentanggoreng += count * 1
						conn.reply(m.chat, `Sukses memasak ${count} kentang goreng๐`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak kentang goreng\nAnda butuh 2 kentang dan 1 coal untuk memasak`, m)
					break
				case 'suplabu':
					if (user.labu < count * 2 || user.coal < 1 * count) {
						user.labu >= count * 1
						user.labu -= count * 2
						user.coal -= count * 1
						user.suplabu += count * 1
						conn.reply(m.chat, `Sukses memasak ${count} sup labu๐ฅฃ`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak sup labu\nAnda butuh 2 labu dan 1 coal untuk memasak`, m)
					break
				case 'tumiskangkung':
					if (user.kangkung < count * 2 || user.coal < 1 * count) {
						user.kangkung >= count * 1
						user.kangkung -= count * 2
						user.coal -= count * 1
						user.tumiskangkung += count * 1
						conn.reply(m.chat, `Sukses memasak ${count} tumis kangkung๐ฅ`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak tumis kangkung\nAnda butuh 2 kangkung dan 1 coal untuk memasak`, m)
					break
				case 'gadogado':
					if (user.blabu < count * 2 || user.coal < 1 * count) {
						user.blabu >= count * 1
						user.blabu -= count * 2
						user.coal -= count * 1
						user.gadogado += count * 1
						conn.reply(m.chat, `Sukses memasak ${count} gado gado๐ฅ`, m)
					} else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak gado gado\nAnda butuh 2 blabu dan 1 coal untuk memasak`, m)
					break
				default:
					await conn.sendMessage(m.chat, {
						text: cok,
						footer: author,
						title: 'ใ *C O O K I N G* ใ',
						buttonText: "C O O K I N G",
						sections: [{
							title: "List Featured",
							rows: [{
								title: "Ayam Bakar ๐",
								rowId: ".cook ayambakar",
								description: "Cooking Ayam Bakar"
							}, {
								title: "Ayam Goreng ๐",
								rowId: ".cook ayambakar",
								description: "Cooking Ayam Goreng"
							}, {
								title: "Opor Ayam ๐",
								rowId: ".cook oporayam",
								description: "Cooking Opor Ayam"
							}, {
								title: "Steak ๐ฅฉ",
								rowId: ".cook steak",
								description: "Cooking Steak"
							}, {
								title: "Rendang ๐ฅ",
								rowId: ".cook rendang",
								description: "Cooking Rendang"
							}, {
								title: "Gulai Ayam ๐ฒ",
								rowId: ".cook gulaiayam",
								description: "Cooking Gulai Ayam"
							}, {
								title: "Babi Panggang ๐ฅ ",
								rowId: ".cook babipanggang",
								description: "Cooking Babi Panggang"
							}, {
								title: "Gado Gado๐ฅ",
								rowId: ".cook gadogado",
								description: "Cooking Gado Gado"
							}, {
								title: "Kentang Goreng๐",
								rowId: ".cook kentanggoreng",
								description: "Cooking Kentang Goreng"
							}, {
								title: "Pop Corn๐ฟ",
								rowId: ".cook popcorn",
								description: "Cooking Pop Corn"
							}, {
								title: "Sup Labu ๐ฅฃ",
								rowId: ".cook suplabu",
								description: "Cooking Sup Labu"
							}, {
								title: "Jagung Bakar๐ฝ",
								rowId: ".cook jagungbakar",
								description: "Cooking Jagung Bakar"
							}, {
								title: "Tumis Kangkung ๐ฅ",
								rowId: ".cook tumiskangkung",
								description: "Cooking Tumis Kangkung"
							}]
						}]
					})
			}
		}
	} catch (e) {
		conn.reply(m.chat, `Sepertinya ada yg eror,coba laporin ke owner deh`, m)
		console.log(e)
		if (DevMode) {
			for (var jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
				conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@` [0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
			}
		}
	}
}

handler.help = ['masak <masakan> <args>', 'cook <masakan> <args>']
handler.tags = ['rpg']
handler.register = true
handler.command = /^(masak|cook)$/i
var wm = global.botwm
module.exports = handler