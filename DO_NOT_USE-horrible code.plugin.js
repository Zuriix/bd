/**
 * @name BToneIndicators
 * @author NomadNaomie, Zuri
 * @description Displays the messages tone indicators or by highlighting a tone tag will give you the defintion
 * @version 1.1.1
 * @source https://github.com/NomadNaomie/BD-Tone-Indicators
 * @updateUrl https://raw.githubusercontent.com/NomadNaomie/BD-Tone-Indicators/main/ToneIndicator.plugin.js
 * @authorId 188323207793606656, 746871249791221880
 * @authorLink https://twitter.com/NomadNaomie
 */

 module.exports = (_ => {
    const toneMap = {
        "/j": { "name": "joking", "colors": ['#BFFCC6', '#0d7a1a'], "alt": []},
        "/hj": { "name": "half joking", "colors": ['#D8FFD6', '#0d7a1a'], "alt": []},
        "/g": { "name": "genuine / genuine question", "colors": ['#AFF8D8', '#089c5b'], "alt": ['/gen', '/genq']},
        "/s": { "name": "sarcastic / sarcasm", "colors": ['#FFCBC1', '#cf3d21'], "alt": ['/sarc']},
        "/srs": { "name": "serious", "colors": ['#6EB5FF', '#29629e'], "alt": []},
        "/nsrs": { "name": "not serious'", "colors": ['#F6A6FF', '#a639b3'], "alt": []},
        "/lh": { "name": "light hearted", "colors": ['#ACE6FF', '#217ca3'], "alt": []},
        "/ij": { "name": "inside joke", "colors": ['#E7FFAC', '#6d9114'], "alt": []},
        "/ref": { "name": "reference", "colors": ['#AFCBFF', '#144091'], "alt": []},
        "/t": { "name": "teasing", "colors": ['#FFFFD1', '##c7c710'], "alt": []},
        "/nm": { "name": "not mad", "colors": ['#DCD3FF', '#3d1bc2'], "alt": []},
        "/lu": { "name": "a little upset", "colors": ['#FFF5BA', '#8f7c0b'], "alt": []},
        "/nf": { "name": "not forced", "colors": ['#DEFDE0', '#089611'], "alt": []},
        "/nbh": { "name": "nobody here", "colors": ['#FCF7DE', '#7a6600'], "alt": []},
        "/sb": { "name": "not subtweeting", "colors": ['#DEF3FD', '#00405e'], "alt": []},
        "/nay": { "name": "not at you", "colors": ['#F0DEFD', '#7a02d1'], "alt": []},
        "/ay": { "name": "at you", "colors": ['#FDDFDF', '#8c0707'], "alt": []},
        "/nbr": { "name": "not being rude", "colors": ['#9ADBB3', '#048a38'], "alt": []},
        "/ot": { "name": "off-topic", "colors": ['#E7FFAC', '#476108'], "alt": []},
        "/th": { "name": "threat", "colors": ['#FFABAB', '#b50e0e'], "alt": []},
        "/cb": { "name": "clickbait", "colors": ['#F3FFE3', '#569106'], "alt": []},
        "/f": { "name": "fake", "colors": ['#85E3FF', '#066480'], "alt": []},
        "/q": { "name": "quote", "colors": ['#D5AAFF', '##3b086e'], "alt": []},
        "/l": { "name": "lyrics", "colors": ['#97A2FF', '#0e1873'], "alt": ["/ly"]},
        "/c": { "name": "copypasta", "colors": ['#DBFFD6', '#1f8c0f'], "alt": []},
        "/m": { "name": "metaphor / metaphorically", "colors": ['#FBE4FF', '#750987'], "alt": []},
        "/li": { "name": "literal / literally", "colors": ['#BED2FE', '#0a328a'], "alt": []},
        "/rt": { "name": "rhetorical question", "colors": ['#A79AFF', '#1c099c'], "alt": ["/rh"]},
        "/hyp": { "name": "hyperbole", "colors": ['#F6F9FF', '#2a3c5e'], "alt": []},
        "/p": { "name": "platonic", "colors": ['#B5CCFE', '#2260e6'], "alt": []},
        "/r": { "name": "romantic", "colors": ['#FFCCF9', '#bf19ac'], "alt": []},
        "/a": { "name": "alterous", "colors": ['#C7D9FE', '#1458e3'], "alt": []},
        "/sx": { "name": "sexual intent", "colors": ['#FF9CEE', '#780b65'], "alt": ["/x"]},
        "/nsx": { "name": "non-sexual intent", "colors": ['#FFBEBC', '#7a201d'], "alt": ["/ns", "/nx"]},
        "/pc": { "name": "positive connotation", "colors": ['#84D3B2', '#0e9e62'], "alt": ["/pos"]},
        "/nc": { "name": "negative connotation", "colors": ['#FFCCBB', '#87452f'], "alt": ["/neg"]},
        "/neu": { "name": "neutral / neutral connotation", "colors": ['#E3ECFF', '#315ab0'], "alt": []},
    }
    const config = {
        info: {
            name: 'BToneIndicators',
            authors: [
                {name: 'NomadNaomie', discord_id: '188323207793606656', github_username: 'NomadNaomie', twitter_username: 'NomadNaomie'},
                {name: 'Zuri', discord_id: '746871249791221880', github_username: 'Zuriix', website: "https://zuriix.github.io/"}
            ],
            version: '1.1.1',
            description: 'Displays the messages tone indicators or by highlighting a tone tag will give you the defintion',
            github_raw: 'https://raw.githubusercontent.com/NomadNaomie/BD-Tone-Indicators/main/ToneIndicator.plugin.js',
            github: 'https://github.com/NomadNaomie/BD-Tone-Indicators'
        },
        changelog: [


            /* Added Changlog*/
            // {
            //     title: "Added", type: "added",
            //     items: []
            // },


            /* Removed Changelog*/
            // {
            //     title: "Removed", type: "fixed",
            //     items: []
            // },


            /* Fixed Changelog*/
            {
                title: "Changed", type: "improved",
                items: ["Worked a little magic :D"]
            }


        ],
        defaultConfig: [


            /* Background settings */
        { 
            type: 'category', id: 'background', name: 'Background settings', collapsible: true, shown: false,
            settings: [
                { type: "switch", id: "disabled", name: "Remove Background Color", note: "Removes the background color from indicators in messages.", value: false },
                { type: "slider", id: "transparency", name: "Background Transparency", note: "Changes the transparency of the indicators background color.", value: 10 }
            ]
        }, 


            /* Tooltip settings */
        {
            type: 'category', id: 'tooltip', name: 'Tooltip settings', collapsible: true, shown: false,
            settings: [
                { type: "switch", id: "bottom", name: "Display tooltip under message", note: "Displays tooltip under the message instead of above it.", value: true }
            ]
        },


            /* Indicator settings */
        {
            type: 'category', id: 'tonecolor', name: 'Tone colour settings', collapsible: true, shown: false,
            settings: [
                { type: "switch", id: "lightmode", name: "Light Mode", note: "Changes the tone indicators to use a light color scheme.", value: false }
            ]
        },
    ]
};

    

    if (!global.ZeresPluginLibrary) {
        return class { load() { BdApi.showConfirmationModal("Zere's Library Missing", "Either Click Download Now to install it or manually install it. ", { confirmText: "Automatically Install", cancelText: "Cancel", onConfirm: () => { require("request").get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", async(error, result, body) => {!error && result.statusCode == 200 && body ? require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, _ => BdApi.showToast("Finished downloading Zere's Plugin Library", { type: "success" })) : BdApi.showToast("Failed to download Zere's Plugin Library", { type: "error" }) }) } }) } };
    } else {
        return (([Plugin, Zlib]) => {
            const { WebpackModules, Patcher, ContextMenu, Logger: { error: Error } } = Zlib;
            return class BToneIndicators extends Plugin {

                /* ------------------------------------ ZLIB FUNCTIONS ------------------------------------ */
                getSettingsPanel() { const panel = this.buildSettingsPanel(); return panel.getElement(); }

                /* ------------------------------------ USER FUNCTIONS ------------------------------------ */
                generateBackgroundColor(hex, alpha = "0.5") {let bg = '0x' + hex.substring(1); return 'rgba(' + [(bg >> 16) & 255, (bg >> 8) & 255, bg & 255].join(',') + `,${alpha})`; }
                parseTag(tag){return tag in toneMap ? toneMap[tag] : Object.keys(toneMap).filter(v => toneMap[v].alt.includes(tag)).map(v => toneMap[v])[0]}
                getTone(tag){let data = this.parseTag(tag); if (!data) return; return { ref: tag, name: data.name, color: this.settings.tonecolor.lightmode ? data.colors[1] : data.colors[0]}}

                /* ------------------------------------ SYSTEM FUNCTIONS ------------------------------------ */
                onLoad() {};
                onStop() { Patcher.unpatchAll(); }
                onStart() { this.onStop()
                
                    ContextMenu.getDiscordMenu("MessageContextMenu").then(menu => {
                        Patcher.after(menu, "default", (_, [props], ret) => {
                            let selectedText = document.getSelection().toString().trim();
                            selectedText = selectedText.match((/^[^\/]/g, '/')) ? selectedText : "/" + selectedText;
                            let tone = this.getTone(selectedText.toLowerCase());
                            if (typeof tone === "string") return;
                            ret.props.children.push(ContextMenu.buildMenuItem({ type: "separator" }))
                            ret.props.children.push(ContextMenu.buildMenuItem({
                                label: "Tone Indicator",
                                action: () => BdApi.showToast(`${tone.ref} - ${tone.name}`),
                            }));
                        });
                    });

                    Patcher.after(WebpackModules.find(m => m.type && m.type.displayName === 'MessageContent'), "type", (_, [props], ret) => {
                        if (!props.message.content || !props.message.content.includes('/')) return;
                        if (ret.props.children[0].filter(n => typeof n == "string").length == 0) return;
                        let temp = ret.props.children[0];
                        ret.props.children[0] = temp.map(content => {
                            if (!content.length > 0) return;
                            let current = 0;
                            return content.split(' ').map(word => {
                                current++
                                let currentWord = current == 1 ? word : " " + word;
                                let tone = this.getTone(word.toLowerCase())
                                return tone ? BdApi.React.createElement("span", {
                                    style:
                                        !this.settings.background.disabled ? ({ "background-color": this.generateBackgroundColor(tone.color, this.settings.background.transparency / 100 || 0.1), "color": tone.color, "display": "inline-block", "font-size": "12px", "font-weight": "bold", "border-radius": "6px", "padding-left": "3px", "padding-right": "3px", "margin-left": "4px" }) : ({ "display": "inline-block", "color": tone.color }),
                                    children: BdApi.React.createElement(WebpackModules.getByProps("TooltipContainer").TooltipContainer, { "position": this.settings.tooltip.bottom ? "bottom" : "top", "text": `${tone.name}` }, currentWord)
                                }) : currentWord;
                            })
                        })
                    })

                }

            }
        })(global.ZeresPluginLibrary.buildPlugin(config));
    }
})();
