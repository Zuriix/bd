/**
 * @name ExamplePlugin
 * @author
 * @description 
 * @version 0.0.1
 * @authorId 1234567890
 */

 module.exports = (_ => {
    const config = {
        info: {
            name: 'Listener',
            authors: [{name: '', discord_id: '', github_username: '', website: ''}],
            version: '0.0.1',
            description: '',
        }
};

    

    if (!global.ZeresPluginLibrary) {
        return class { load() { BdApi.showConfirmationModal("Zere's Library Missing", "Either Click Download Now to install it or manually install it. ", { confirmText: "Automatically Install", cancelText: "Cancel", onConfirm: () => { require("request").get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", async(error, result, body) => {!error && result.statusCode == 200 && body ? require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, _ => BdApi.showToast("Finished downloading Zere's Plugin Library", { type: "success" })) : BdApi.showToast("Failed to download Zere's Plugin Library", { type: "error" }) }) } }) } };
    } else {
        return (([Plugin, Zlib]) => {
            const {/* stuff goes here */} = Zlib;
            return class ExamplePlugin extends Plugin {
                onLoad() {};
                onStop() { Patcher.unpatchAll(); }
                onStart() { this.onStop()
                  // stuff goes here lol
                }
            }
        })(global.ZeresPluginLibrary.buildPlugin(config));
    }
})();

/*
  _,-=._              /|_/|
  `-.}   `=._,.-=-._.,  @ @._,
     `._ _,-.   )      _,.-'
        `    G.m-"^m`m'        
Example Zlib Betterdiscord plugin
*/
