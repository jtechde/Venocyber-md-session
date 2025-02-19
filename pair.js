const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Venocyber_Tech,    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function VENOCYBER_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Venocyber_Tech = Venocyber_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Venocyber_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Venocyber_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Venocyber_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Venocyber_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Venocyber_Tech.sendMessage(Pair_Code_By_Venocyber_Tech.user.id, { text: '' + b64data });

               let VENOCYBER_MD_TEXT = `
*_JAMES V2 CONNECTED_*
*_SEND SESSION TO YOUR DEPLOYER_*
__________________________________
╔════◇
║ *🌹『JAMES-V2 🌹』*
║ _NOMAL BOT._
╚══════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *creator:* _james_
║❒ *Owner:* _254785016388_
║❒ *Repo:* _https://github.com/jtechde/james_
║❒ *WaChannel:* _https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l_
╚══════════════════════╝ 
_____________________________________

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_Venocyber_Tech.sendMessage(Pair_Code_By_Venocyber_Tech.user.id,{text:VENOCYBER_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Venocyber_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    JAMES_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await JAMES_MD_PAIR_CODE()
});
module.exports = router
