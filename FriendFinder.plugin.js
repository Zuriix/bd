/**
 * @name FriendFinder
 * @author Zuri
 * @authorId 746871249791221880
 * @version 0.0.1
 * @description Shows your friends, and enemies.
 */

module.exports = (_ => {
	const config = {
		"info": {
			"name": "FriendFinder",
			"author": "Zuri",
			"version": "0.0.1",
			"description": "Shows your friends, and enemies."
		},
	};

	return !window.BDFDB_Global || (!window.BDFDB_Global.loaded && !window.BDFDB_Global.started) ? class {
		getName () {return config.info.name;}
		getAuthor () {return config.info.author;}
		getVersion () {return config.info.version;}
		getDescription () {return `The Library Plugin needed for ${config.info.name} is missing. Open the Plugin Settings to download it. \n\n${config.info.description}`;}
		load () { window.BDFDB_Global&&Array.isArray(window.BDFDB_Global.pluginQueue)||(window.BDFDB_Global=Object.assign({},window.BDFDB_Global,{pluginQueue:[]})),window.BDFDB_Global.downloadModal||(window.BDFDB_Global.downloadModal=!0,BdApi.showConfirmationModal("Library Missing",`The Library Plugin needed for ${config.info.name} is missing. Please click "Download Now" to install it.`,{confirmText:"Download Now",cancelText:"Cancel",onCancel:o=>{delete window.BDFDB_Global.downloadModal},onConfirm:o=>{delete window.BDFDB_Global.downloadModal,require("request").get("https://mwittrien.github.io/BetterDiscordAddons/Library/0BDFDB.plugin.js",(o,i,n)=>{!o&&n&&200==i.statusCode?require("fs").writeFile(require("path").join(BdApi.Plugins.folder,"0BDFDB.plugin.js"),n,o=>BdApi.showToast("Finished downloading BDFDB Library",{type:"success"})):BdApi.alert("Error","Could not download BDFDB Library Plugin. Try again later or download it manually from GitHub: https://mwittrien.github.io/downloader/?library")})}})),window.BDFDB_Global.pluginQueue.includes(config.info.name)||window.BDFDB_Global.pluginQueue.push(config.info.name)}
		start () { this.load(); }
		stop () {}
	} : (([Plugin, BDFDB]) => {
			return class FriendFinder extends Plugin {
			forceUpdateAll () { BDFDB.PatchUtils.forceAllUpdates(this); BDFDB.MessageUtils.rerenderAll(); }
			onStart () { this.forceUpdateAll(); }
			onStop () { this.forceUpdateAll(); }
			onLoad() {
				this.patchedModules = {
					after: {
						MemberListItem: "render",
					}
				};
			}

			processRelation(e) {
				let user = BDFDB.UserUtils.me.id;
				if (e.bot || e.id == user) return;
				let relation = BDFDB.LibraryModules.RelationshipStore.getRelationshipType(e.id);
				if (relation == "0") return '#cc0000'; // If not friend
				if (relation == "1") return '#00cc00'; // If friend
				if (relation == "2") return '#cc00cc'; // If blocked
				if (relation == "3") return '#00cccc'; // Honestly no idea lol, maybe incoming pending?
				if (relation == "4") return '#cccc00'; // If outgoing pending
				return '#0f0fff'; // If something new is afoot
			}

			processMemberListItem(e) {
				let user = e.instance.props.user;
				let relation = this.processRelation(user);
				relation && (e.returnvalue.props.name.props.style.color = relation)
				
			}
		};
	})(window.BDFDB_Global.PluginUtils.buildPlugin(config));
})();
