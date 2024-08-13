import pkg from '@whiskeysockets/baileys';
const { prepareWAMessageMedia } = pkg;

const handler = async (m, { conn }) => {
    await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key } });

    const Elsony = 'https://telegra.ph/file/3709b122a7b1bc560f58f.jpg';

    let messageContent = {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: { title: 'Elsony' },
                    body: {
                        text: `◉━─ •༺ ﷽ ༻• ─━◉
> ⌞🔰┊ 𝑹𝑶𝑩 𝑩𝑶𝑻 ┊🔰⌝

> 〔 الاشتراك الاسبوعي┊ ˼‏ 🚀˹ ↶〕

*◉━━━─ •༺ 🔰 ༻• ─━━━◉*

﹝السعر ↶ 💵﹞
> •┊˹👾˼┊- رقم وهمي اسبوعيا
> •┊˹👾˼┊- روبل بوت ارقام
> •┊˹👾˼┊- 500 نقطة دعمكم
◉━━━─ •༺ 🔰 ༻• ─━━━◉
﹝المميزات ↶ 🚀﹞
> •┊˹👾˼┊- اشتراك سرفر عام
> •┊˹👾˼┊- شغال 7/24
> •┊˹👾˼┊- البوت تحت التطوير
◉━━━─ •༺ 🔰 ༻• ─━━━◉
﹝طرق الدفع ↶ 💰﹞
> •┊˹👾˼┊- Payeer
> •┊˹👾˼┊- VodafoneCash
*◉━━━─ •༺ 🔰 ༻• ─━━━◉*
> 〔تـوقـيـع┊ ˼‏📜˹ 〕↶
⌞🔰┊ 𝑹𝑶𝑩 𝑩𝑶𝑻 ┊🔰⌝
*◉━━━─ •༺ 🔰 ༻• ─━━━◉*`,
                        subtitle: "𝑹𝑶𝑩"
                    },
                    header: {
                        hasMediaAttachment: true,
                        ...(await prepareWAMessageMedia({ image: { url: Elsony } }, { upload: conn.waUploadToServer }, { quoted: m }))
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈🚀╎𝐁𝐔𝐘 ˹💰˼ 𝐍𝐎𝐖╎🚀⌋","url":"https://api.whatsapp.com/send?phone=+966583621949","merchant_url":"https://api.whatsapp.com/send?phone=+966583621949"}'
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الـمـطـور╎📲⌋","url":"https://chat.whatsapp.com/Ck3mQdmm0Ty3FMrJSNsG90","merchant_url":"https://chat.whatsapp.com/Ck3mQdmm0Ty3FMrJSNsG90"}'
                            }
                        ]
                    }
                }
            }
        }
    };

    conn.relayMessage(m.chat, messageContent, {});
};

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['اسبوعي', 'ش2', 'اشتراك_اسبوعي', 'بمقابل'];

export default handler;
