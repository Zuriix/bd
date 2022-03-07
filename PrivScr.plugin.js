/**
 * @name PrivScr
 * @author Zuri
 * @authorId 746871249791221880
 * @version 0.0.1
 */

module.exports = (_ => {
    const config = {
        info: {
            name: 'PrivScr',
            author: 'Zuri',
            version: '0.0.1',
            description: 'Blurs the screen when you press Alt. unblurs after another press',
        },
    };
    let enabled = false;

    if (!window.BDFDB_Global || (!window.BDFDB_Global.loaded && !window.BDFDB_Global.started)) {
        return class {
            load() {
                BdApi.alert('This plugin requires BDFDB', 'Download it here:\n\nhttps://mwittrien.github.io/BetterDiscordAddons/Library/0BDFDB.plugin.js');
            }
        };
    } else {
        return (([Plugin, BDFDB]) => {
            return class PrivScr extends Plugin {
                onStart() {
                    BDFDB.ListenerUtils.add(BDFDB, document, "keydown.BDFDBPressedKeys", e => {
                        console.log(e)
                        if (e.type == "keydown") {
                            if (e.key == "Alt") {
                                enabled = enabled ? false : true;
                                document.getElementsByTagName('body')[0].style.filter = enabled ? "blur(6px)" : "blur(0px)"
                                document.getElementsByTagName('body')[0].style.pointerEvents = enabled ? "none" : ""
                            }
                        }
                    });


                }
                onStop() {
                    BDFDB.ListenerUtils.remove(BDFDB) // not entirely sure if this is correct lol
                }
            };
        })(window.BDFDB_Global.PluginUtils.buildPlugin(config));
    }
})();
