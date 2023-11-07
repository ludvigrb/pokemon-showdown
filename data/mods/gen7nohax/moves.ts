export const Moves: {[k: string]: ModdedMoveData} = {
	"10000000voltthunderbolt": {
		inherit: true,
		isNonstandard: null,
	},
	aciddownpour: {
		inherit: true,
		isNonstandard: null,
	},
	alloutpummeling: {
		inherit: true,
		isNonstandard: null,
	},
	baddybad: {
		inherit: true,
		accuracy: 100,
		basePower: 90,
	},
	barrage: {
		inherit: true,
		isNonstandard: null,
	},
	barrier: {
		inherit: true,
		isNonstandard: null,
	},
	beakblast: {
		inherit: true,
		isNonstandard: null,
	},
	bestow: {
		inherit: true,
		isNonstandard: null,
	},
	bide: {
		inherit: true,
		isNonstandard: null,
	},
	blackholeeclipse: {
		inherit: true,
		isNonstandard: null,
	},
	bloomdoom: {
		inherit: true,
		isNonstandard: null,
	},
	boneclub: {
		inherit: true,
		isNonstandard: null,
	},
	bouncybubble: {
		inherit: true,
		basePower: 90,
		pp: 15,
	},
	breakneckblitz: {
		inherit: true,
		isNonstandard: null,
	},
	bubble: {
		inherit: true,
		isNonstandard: null,
	},
	buzzybuzz: {
		inherit: true,
		basePower: 90,
		pp: 15,
	},
	camouflage: {
		inherit: true,
		isNonstandard: null,
	},
	captivate: {
		inherit: true,
		isNonstandard: null,
	},
	catastropika: {
		inherit: true,
		isNonstandard: null,
	},
	chatter: {
		inherit: true,
		isNonstandard: null,
	},
	chipaway: {
		inherit: true,
		isNonstandard: null,
	},
	clamp: {
		inherit: true,
		isNonstandard: null,
	},
	clangoroussoulblaze: {
		inherit: true,
		isNonstandard: null,
	},
	cometpunch: {
		inherit: true,
		isNonstandard: null,
	},
	constrict: {
		inherit: true,
		isNonstandard: null,
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
	},
	continentalcrush: {
		inherit: true,
		isNonstandard: null,
	},
	corkscrewcrash: {
		inherit: true,
		isNonstandard: null,
	},
	curse: {
		inherit: true,
		target: "normal",
	},
	darkvoid: {
		inherit: true,
		isNonstandard: null,
	},
	defog: {
		inherit: true,
		onHit(target, source, move) {
			let success = false;
			if (!target.volatiles['substitute'] || move.infiltrates) success = !!this.boost({evasion: -1});
			const removeTarget = [
				'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb',
			];
			const removeAll = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb'];
			for (const targetCondition of removeTarget) {
				if (target.side.removeSideCondition(targetCondition)) {
					if (!removeAll.includes(targetCondition)) continue;
					this.add('-sideend', target.side, this.dex.conditions.get(targetCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			for (const sideCondition of removeAll) {
				if (source.side.removeSideCondition(sideCondition)) {
					this.add('-sideend', source.side, this.dex.conditions.get(sideCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			return success;
		},
	},
	devastatingdrake: {
		inherit: true,
		isNonstandard: null,
	},
	dive: {
		inherit: true,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, nonsky: 1, nosleeptalk: 1, noassist: 1, failinstruct: 1},
	},
	dizzypunch: {
		inherit: true,
		isNonstandard: null,
	},
	doubleironbash: {
		inherit: true,
		isNonstandard: "LGPE",
	},
	doubleslap: {
		inherit: true,
		isNonstandard: null,
	},
	dragonrage: {
		inherit: true,
		isNonstandard: null,
	},
	eggbomb: {
		inherit: true,
		isNonstandard: null,
	},
	electricterrain: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onSetStatus(status, target, source, effect) {
				if (status.id === 'slp' && target.isGrounded() && !target.isSemiInvulnerable()) {
					if (effect.id === 'yawn' || (effect.effectType === 'Move' && !effect.secondaries)) {
						this.add('-activate', target, 'move: Electric Terrain');
					}
					return false;
				}
			},
			onTryAddVolatile(status, target) {
				if (!target.isGrounded() || target.isSemiInvulnerable()) return;
				if (status.id === 'yawn') {
					this.add('-activate', target, 'move: Electric Terrain');
					return null;
				}
			},
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Electric' && attacker.isGrounded() && !attacker.isSemiInvulnerable()) {
					this.debug('electric terrain boost');
					return this.chainModify(1.5);
				}
			},
			onFieldStart(field, source, effect) {
				if (effect && effect.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Electric Terrain', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Electric Terrain');
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'move: Electric Terrain');
			},
		},
	},
	embargo: {
		inherit: true,
		isNonstandard: null,
	},
	extremeevoboost: {
		inherit: true,
		isNonstandard: null,
	},
	feintattack: {
		inherit: true,
		isNonstandard: null,
	},
	flameburst: {
		inherit: true,
		isNonstandard: null,
	},
	floralhealing: {
		inherit: true,
		onHit(target, source) {
			let success = false;
			if (this.field.isTerrain('grassyterrain')) {
				success = !!this.heal(this.modify(target.baseMaxhp, 0.667));
			} else {
				success = !!this.heal(Math.ceil(target.baseMaxhp * 0.5));
			}
			if (success && !target.isAlly(source)) {
				target.staleness = 'external';
			}
			if (!success) {
				this.add('-fail', target, 'heal');
				return null;
			}
			return success;
		},
	},
	fly: {
		inherit: true,
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
	},
	foresight: {
		inherit: true,
		isNonstandard: null,
	},
	freezyfrost: {
		inherit: true,
		accuracy: 100,
		basePower: 90,
		pp: 15,
	},
	frustration: {
		inherit: true,
		isNonstandard: null,
	},
	genesissupernova: {
		inherit: true,
		isNonstandard: null,
	},
	gigavolthavoc: {
		inherit: true,
		isNonstandard: null,
	},
	glitzyglow: {
		inherit: true,
		accuracy: 100,
		basePower: 90,
	},
	grassknot: {
		inherit: true,
		onTryHit() {},
	},
	grasswhistle: {
		inherit: true,
		isNonstandard: null,
	},
	grassyterrain: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onBasePower(basePower, attacker, defender, move) {
				const weakenedMoves = ['earthquake', 'bulldoze', 'magnitude'];
				if (weakenedMoves.includes(move.id) && defender.isGrounded() && !defender.isSemiInvulnerable()) {
					this.debug('move weakened by grassy terrain');
					return this.chainModify(0.5);
				}
				if (move.type === 'Grass' && attacker.isGrounded()) {
					this.debug('grassy terrain boost');
					return this.chainModify(1.5);
				}
			},
			onFieldStart(field, source, effect) {
				if (effect && effect.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Grassy Terrain', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Grassy Terrain');
				}
			},
			onResidualOrder: 5,
			onResidualSubOrder: 2,
			onResidual(pokemon) {
				if (pokemon.isGrounded() && !pokemon.isSemiInvulnerable()) {
					this.heal(pokemon.baseMaxhp / 16, pokemon, pokemon);
				} else {
					this.debug(`Pokemon semi-invuln or not grounded; Grassy Terrain skipped`);
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'move: Grassy Terrain');
			},
		},
	},
	guardianofalola: {
		inherit: true,
		isNonstandard: null,
	},
	healbell: {
		inherit: true,
		onHit(target, source) {
			this.add('-activate', source, 'move: Heal Bell');
			let success = false;
			const allies = [...target.side.pokemon, ...target.side.allySide?.pokemon || []];
			for (const ally of allies) {
				if (ally.hasAbility('soundproof')) continue;
				if (ally.cureStatus()) success = true;
			}
			return success;
		},
	},
	healblock: {
		inherit: true,
		isNonstandard: null,
	},
	healingwish: {
		inherit: true,
		condition: {
			duration: 2,
			onSwitchInPriority: 1,
			onSwitchIn(target) {
				if (!target.fainted) {
					target.heal(target.maxhp);
					target.clearStatus();
					this.add('-heal', target, target.getHealth, '[from] move: Healing Wish');
					target.side.removeSlotCondition(target, 'healingwish');
				}
			},
		},
	},
	healorder: {
		inherit: true,
		isNonstandard: null,
	},
	healpulse: {
		inherit: true,
		onHit(target, source) {
			let success = false;
			if (source.hasAbility('megalauncher')) {
				success = !!this.heal(this.modify(target.baseMaxhp, 0.75));
			} else {
				success = !!this.heal(Math.ceil(target.baseMaxhp * 0.5));
			}
			if (success && !target.isAlly(source)) {
				target.staleness = 'external';
			}
			if (!success) {
				this.add('-fail', target, 'heal');
				return null;
			}
			return success;
		},
	},
	heartstamp: {
		inherit: true,
		isNonstandard: null,
	},
	heartswap: {
		inherit: true,
		isNonstandard: null,
	},
	heatcrash: {
		inherit: true,
		onTryHit() {},
	},
	heavyslam: {
		inherit: true,
		onTryHit() {},
	},
	hiddenpower: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerbug: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerdark: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerdragon: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerelectric: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerfighting: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerfire: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerflying: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerghost: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowergrass: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerground: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerice: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerpoison: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerpsychic: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerrock: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowersteel: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerwater: {
		inherit: true,
		isNonstandard: null,
	},
	howl: {
		inherit: true,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
		},
		target: "self",
	},
	hydrovortex: {
		inherit: true,
		isNonstandard: null,
	},
	hyperfang: {
		inherit: true,
		isNonstandard: null,
	},
	hyperspacefury: {
		inherit: true,
		isNonstandard: null,
	},
	hyperspacehole: {
		inherit: true,
		isNonstandard: null,
	},
	iceball: {
		inherit: true,
		isNonstandard: null,
	},
	icehammer: {
		inherit: true,
		isNonstandard: null,
	},
	infernooverdrive: {
		inherit: true,
		isNonstandard: null,
	},
	iondeluge: {
		inherit: true,
		isNonstandard: null,
	},
	judgment: {
		inherit: true,
		isNonstandard: null,
	},
	jumpkick: {
		inherit: true,
		isNonstandard: null,
	},
	karatechop: {
		inherit: true,
		isNonstandard: null,
	},
	kingsshield: {
		inherit: true,
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect'] || move.category === 'Status') {
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				this.add('-activate', target, 'move: Protect');
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (this.checkMoveMakesContact(move, source, target)) {
					this.boost({atk: -2}, source, target, this.dex.getActiveMove("King's Shield"));
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					this.boost({atk: -2}, source, target, this.dex.getActiveMove("King's Shield"));
				}
			},
		},
	},
	letssnuggleforever: {
		inherit: true,
		isNonstandard: null,
	},
	lightofruin: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	lightthatburnsthesky: {
		inherit: true,
		isNonstandard: null,
	},
	lowkick: {
		inherit: true,
		onTryHit() {},
	},
	luckychant: {
		inherit: true,
		isNonstandard: null,
	},
	lunardance: {
		inherit: true,
		condition: {
			duration: 2,
			onSwitchInPriority: 1,
			onSwitchIn(target) {
				if (!target.fainted) {
					target.heal(target.maxhp);
					target.clearStatus();
					for (const moveSlot of target.moveSlots) {
						moveSlot.pp = moveSlot.maxpp;
					}
					this.add('-heal', target, target.getHealth, '[from] move: Lunar Dance');
					target.side.removeSlotCondition(target, 'lunardance');
				}
			},
		},
	},
	magnetbomb: {
		inherit: true,
		isNonstandard: null,
	},
	magnitude: {
		inherit: true,
		isNonstandard: null,
	},
	maliciousmoonsault: {
		inherit: true,
		isNonstandard: null,
	},
	meditate: {
		inherit: true,
		isNonstandard: null,
	},
	mefirst: {
		inherit: true,
		isNonstandard: null,
	},
	menacingmoonrazemaelstrom: {
		inherit: true,
		isNonstandard: null,
	},
	metronome: {
		inherit: true,
		noMetronome: [
			"After You", "Assist", "Baneful Bunker", "Beak Blast", "Belch", "Bestow", "Celebrate", "Chatter", "Copycat", "Counter", "Covet", "Crafty Shield", "Destiny Bond", "Detect", "Diamond Storm", "Dragon Ascent", "Endure", "Feint", "Fleur Cannon", "Focus Punch", "Follow Me", "Freeze Shock", "Helping Hand", "Hold Hands", "Hyperspace Fury", "Hyperspace Hole", "Ice Burn", "Instruct", "King's Shield", "Light of Ruin", "Mat Block", "Me First", "Metronome", "Mimic", "Mind Blown", "Mirror Coat", "Mirror Move", "Nature Power", "Origin Pulse", "Photon Geyser", "Plasma Fists", "Precipice Blades", "Protect", "Quash", "Quick Guard", "Rage Powder", "Relic Song", "Secret Sword", "Shell Trap", "Sketch", "Sleep Talk", "Snarl", "Snatch", "Snore", "Spectral Thief", "Spiky Shield", "Spotlight", "Steam Eruption", "Struggle", "Switcheroo", "Techno Blast", "Thief", "Thousand Arrows", "Thousand Waves", "Transform", "Trick", "V-create", "Wide Guard",
		],
	},
	miracleeye: {
		inherit: true,
		isNonstandard: null,
	},
	mirrormove: {
		inherit: true,
		isNonstandard: null,
	},
	mirrorshot: {
		inherit: true,
		isNonstandard: null,
	},
	moonlight: {
		inherit: true,
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
				factor = 0.25;
				break;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return null;
			}
			return success;
		},
	},
	morningsun: {
		inherit: true,
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
				factor = 0.25;
				break;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return null;
			}
			return success;
		},
	},
	mudbomb: {
		inherit: true,
		isNonstandard: null,
	},
	mudsport: {
		inherit: true,
		isNonstandard: null,
	},
	multiattack: {
		inherit: true,
		basePower: 90,
	},
	naturalgift: {
		inherit: true,
		isNonstandard: null,
	},
	needlearm: {
		inherit: true,
		isNonstandard: null,
	},
	neverendingnightmare: {
		inherit: true,
		isNonstandard: null,
	},
	nightmare: {
		inherit: true,
		isNonstandard: null,
	},
	oceanicoperetta: {
		inherit: true,
		isNonstandard: null,
	},
	odorsleuth: {
		inherit: true,
		isNonstandard: null,
	},
	ominouswind: {
		inherit: true,
		isNonstandard: null,
	},
	pollenpuff: {
		inherit: true,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onHit(target, source) {
			if (source.isAlly(target)) {
				if (!this.heal(Math.floor(target.baseMaxhp * 0.5))) {
					this.add('-immune', target);
					return null;
				}
			}
		},
	},
	powder: {
		inherit: true,
		isNonstandard: null,
	},
	precipiceblades: {
		inherit: true,
		isNonstandard: null,
	},
	psychicterrain: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onTryHitPriority: 4,
			onTryHit(target, source, effect) {
				if (effect && (effect.priority <= 0.1 || effect.target === 'self')) {
					return;
				}
				if (target.isSemiInvulnerable() || target.isAlly(source)) return;
				if (!target.isGrounded()) {
					const baseMove = this.dex.moves.get(effect.id);
					if (baseMove.priority > 0) {
						this.hint("Psychic Terrain doesn't affect Pokémon immune to Ground.");
					}
					return;
				}
				this.add('-activate', target, 'move: Psychic Terrain');
				return null;
			},
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Psychic' && attacker.isGrounded() && !attacker.isSemiInvulnerable()) {
					this.debug('psychic terrain boost');
					return this.chainModify(1.5);
				}
			},
			onFieldStart(field, source, effect) {
				if (effect && effect.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Psychic Terrain', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Psychic Terrain');
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'move: Psychic Terrain');
			},
		},
	},
	psychoboost: {
		inherit: true,
		isNonstandard: null,
	},
	psywave: {
		inherit: true,
		isNonstandard: null,
	},
	pulverizingpancake: {
		inherit: true,
		isNonstandard: null,
	},
	punishment: {
		inherit: true,
		isNonstandard: null,
	},
	purify: {
		inherit: true,
		onHit(target, source) {
			if (!target.cureStatus()) return false;
			this.heal(Math.ceil(source.maxhp * 0.5), source);
		},
	},
	pursuit: {
		inherit: true,
		isNonstandard: null,
	},
	quash: {
		inherit: true,
		onHit(target) {
			if (this.activePerHalf === 1) return false; // fails in singles
			const action = this.queue.willMove(target);
			if (!action) return false;

			action.priority = -7.1;
			this.queue.cancelMove(target);
			for (let i = this.queue.list.length - 1; i >= 0; i--) {
				if (this.queue.list[i].choice === 'residual') {
					this.queue.list.splice(i, 0, action);
					break;
				}
			}
			this.add('-activate', target, 'move: Quash');
		},
	},
	rage: {
		inherit: true,
		isNonstandard: null,
	},
	rapidspin: {
		inherit: true,
		basePower: 20,
		secondary: null,
	},
	razorwind: {
		inherit: true,
		isNonstandard: null,
	},
	refresh: {
		inherit: true,
		isNonstandard: null,
	},
	relicsong: {
		inherit: true,
		isNonstandard: null,
	},
	return: {
		inherit: true,
		isNonstandard: null,
	},
	revelationdance: {
		inherit: true,
		isNonstandard: null,
	},
	rockclimb: {
		inherit: true,
		isNonstandard: null,
	},
	rollingkick: {
		inherit: true,
		isNonstandard: null,
	},
	rototiller: {
		inherit: true,
		isNonstandard: null,
	},
	sappyseed: {
		inherit: true,
		accuracy: 100,
		basePower: 90,
		pp: 15,
	},
	savagespinout: {
		inherit: true,
		isNonstandard: null,
	},
	searingsunrazesmash: {
		inherit: true,
		isNonstandard: null,
	},
	secretpower: {
		inherit: true,
		isNonstandard: null,
	},
	seedflare: {
		inherit: true,
		isNonstandard: null,
	},
	sharpen: {
		inherit: true,
		isNonstandard: null,
	},
	shatteredpsyche: {
		inherit: true,
		isNonstandard: null,
	},
	shoreup: {
		inherit: true,
		onHit(pokemon) {
			let factor = 0.5;
			if (this.field.isWeather('sandstorm')) {
				factor = 0.667;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return null;
			}
			return success;
		},
	},
	signalbeam: {
		inherit: true,
		isNonstandard: null,
	},
	silverwind: {
		inherit: true,
		isNonstandard: null,
	},
	sinisterarrowraid: {
		inherit: true,
		isNonstandard: null,
	},
	sizzlyslide: {
		inherit: true,
		basePower: 90,
		pp: 15,
	},
	sketch: {
		inherit: true,
		isNonstandard: null,
	},
	skydrop: {
		inherit: true,
		isNonstandard: null,
	},
	skyuppercut: {
		inherit: true,
		isNonstandard: null,
	},
	smellingsalts: {
		inherit: true,
		isNonstandard: null,
	},
	snatch: {
		inherit: true,
		isNonstandard: null,
	},
	sonicboom: {
		inherit: true,
		isNonstandard: null,
	},
	soulstealing7starstrike: {
		inherit: true,
		isNonstandard: null,
	},
	sparklyswirl: {
		inherit: true,
		accuracy: 100,
		basePower: 90,
		pp: 15,
	},
	spiderweb: {
		inherit: true,
		isNonstandard: null,
	},
	spikecannon: {
		inherit: true,
		isNonstandard: null,
	},
	splinteredstormshards: {
		inherit: true,
		isNonstandard: null,
	},
	spotlight: {
		inherit: true,
		isNonstandard: null,
	},
	steamroller: {
		inherit: true,
		isNonstandard: null,
	},
	stokedsparksurfer: {
		inherit: true,
		isNonstandard: null,
	},
	subzeroslammer: {
		inherit: true,
		isNonstandard: null,
	},
	supersonicskystrike: {
		inherit: true,
		isNonstandard: null,
	},
	swallow: {
		inherit: true,
		onHit(pokemon) {
			const healAmount = [0.25, 0.5, 1];
			const success = !!this.heal(this.modify(pokemon.maxhp, healAmount[(pokemon.volatiles['stockpile'].layers - 1)]));
			if (!success) this.add('-fail', pokemon, 'heal');
			pokemon.removeVolatile('stockpile');
			return success || null;
		},
	},
	switcheroo: {
		inherit: true,
		onHit(target, source, move) {
			const yourItem = target.takeItem(source);
			const myItem = source.takeItem();
			if (target.item || source.item || (!yourItem && !myItem)) {
				if (yourItem) target.item = yourItem.id;
				if (myItem) source.item = myItem.id;
				return false;
			}
			if (
				(myItem && !this.singleEvent('TakeItem', myItem, source.itemState, target, source, move, myItem)) ||
				(yourItem && !this.singleEvent('TakeItem', yourItem, target.itemState, source, target, move, yourItem))
			) {
				if (yourItem) target.item = yourItem.id;
				if (myItem) source.item = myItem.id;
				return false;
			}
			this.add('-activate', source, 'move: Trick', '[of] ' + target);
			if (myItem) {
				target.setItem(myItem);
				this.add('-item', target, myItem, '[from] move: Switcheroo');
			} else {
				this.add('-enditem', target, yourItem, '[silent]', '[from] move: Switcheroo');
			}
			if (yourItem) {
				source.setItem(yourItem);
				this.add('-item', source, yourItem, '[from] move: Switcheroo');
			} else {
				this.add('-enditem', source, myItem, '[silent]', '[from] move: Switcheroo');
			}
		},
	},
	synchronoise: {
		inherit: true,
		isNonstandard: null,
	},
	synthesis: {
		inherit: true,
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
				factor = 0.25;
				break;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return null;
			}
			return success;
		},
	},
	tailglow: {
		inherit: true,
		isNonstandard: null,
	},
	tectonicrage: {
		inherit: true,
		isNonstandard: null,
	},
	telekinesis: {
		inherit: true,
		isNonstandard: null,
	},
	teleport: {
		inherit: true,
		priority: 0,
		selfSwitch: false,
		onTry: false,
	},
	toxic: {
		inherit: true,
		onPrepareHit(target, source, move) {
			if (source.hasType('Poison')) source.addVolatile('toxic');
		},
		condition: {
			noCopy: true,
			duration: 1,
			onSourceInvulnerabilityPriority: 1,
			onSourceInvulnerability(target, source, move) {
				if (move && source === this.effectState.target) return 0;
			},
			onSourceAccuracy(accuracy, target, source, move) {
				if (move && source === this.effectState.target) return true;
			},
		},
	},
	toxicthread: {
		inherit: true,
		isNonstandard: null,
	},
	trick: {
		inherit: true,
		onHit(target, source, move) {
			const yourItem = target.takeItem(source);
			const myItem = source.takeItem();
			if (target.item || source.item || (!yourItem && !myItem)) {
				if (yourItem) target.item = yourItem.id;
				if (myItem) source.item = myItem.id;
				return false;
			}
			if (
				(myItem && !this.singleEvent('TakeItem', myItem, source.itemState, target, source, move, myItem)) ||
				(yourItem && !this.singleEvent('TakeItem', yourItem, target.itemState, source, target, move, yourItem))
			) {
				if (yourItem) target.item = yourItem.id;
				if (myItem) source.item = myItem.id;
				return false;
			}
			this.add('-activate', source, 'move: Trick', '[of] ' + target);
			if (myItem) {
				target.setItem(myItem);
				this.add('-item', target, myItem, '[from] move: Trick');
			} else {
				this.add('-enditem', target, yourItem, '[silent]', '[from] move: Trick');
			}
			if (yourItem) {
				source.setItem(yourItem);
				this.add('-item', source, yourItem, '[from] move: Trick');
			} else {
				this.add('-enditem', source, myItem, '[silent]', '[from] move: Trick');
			}
		},
	},
	trumpcard: {
		inherit: true,
		isNonstandard: null,
	},
	twineedle: {
		inherit: true,
		isNonstandard: null,
	},
	twinkletackle: {
		inherit: true,
		isNonstandard: null,
	},
	wakeupslap: {
		inherit: true,
		isNonstandard: null,
	},
	watersport: {
		inherit: true,
		isNonstandard: null,
	},
	wringout: {
		inherit: true,
		isNonstandard: null,
	},
	zippyzap: {
		inherit: true,
		basePower: 50,
		pp: 15,
		willCrit: true,
		secondary: null,
	},
	aircutter:{
		inherit: true,
	},
	airslash: {
		inherit: true, //flinch chance
	},
	ancientpower: {
		inherit: true //boost chance
	},
	aquatail: {
		inherit: true
	},
	belch: {
		inherit: true
	},
	bite: {
		inherit: true //flinch chance
	},
	blazekick: {
		inherit: true //burn chance
	},
	blizzard: {
		inherit: true //freeze chance. Should drop in power unless hail
	},
	blueflare: {
		inherit: true //burn chance (stat drop of some kind since 85% acc?)
	},
	bodyslam: {
		inherit: true //paralysis chance
	},
	boltstrike: {
		inherit: true //paralysis chance (stat drop of some kind since 85% acc?)
	},
	bonemerang: {
		inherit: true
	},
	bonerush: {
		inherit: true //multihit move 2-5. Make it always 3
	},
	bounce: {
		inherit: true //paralysis chance
	},
	bugbuzz: {
		inherit: true //sp.def drop chance
	},
	bulletseed: {
		inherit: true //mulithit move 2-5. make it always 3
	},
	chargebeam: {
		inherit: true //make sp.atk boost chance 100%
	},
	circlethrow: {
		inherit: true
	},
	confusion: {
		inherit: true //Make confusion 100% since you are gonna nerf confusion status anyway?
	},
	crabhammer: {
		inherit: true //remmeber to look at crits. This move has critratio=2
	},
	crosschop: {
		inherit: true //could give this a defence drop or something
	},
	crosspoison: {
		inherit: true //poison chance and crit rate
	},
	crunch: {
		inherit: true //def drop chance
	},
	crushclaw: {
		inherit: true // make def drop 100%? Currently it is 50
	},
	darkpulse: {
		inherit: true //flinch chance
	},
	diamondstorm: {
		inherit: true //make def boost 100%?
	},
	discharge: {
		inherit: true //paralysis chance
	},
	doublehit: {
		inherit: true
	},
	dracometeor: {
		inherit: true
	},
	dragonbreath: {
		inherit: true //paralysis chance
	},
	dragonrush: {
		inherit: true //-atk and -def boost I think
	},
	dragontail: {
		inherit: true
	},
	drillrun: {
		inherit: true
	},
	dualchop: {
		inherit: true
	},
	dynamicpunch: {
		inherit: true //stat drop of some kind?
	},
	earthpower: {
		inherit: true //sp def drop chance
	},
	energyball: {
		inherit: true //sp def drop chance
	},
	extrasensory: {
		inherit: true //flinch chance
	},
	fierydance: {
		inherit: true //make the boost happen every other turn I suppose
	},
	fireblast: {
		inherit: true //burn chance. Add -def and -sp def I think
	},
	firefang: {
		inherit: true //flinch and burn chance
	},
	firepunch: {
		inherit: true //burn chance
	},
	firespin: {
		inherit: true
	},
	flamewheel: {
		inherit: true //burn chance
	},
	flamethrower: {
		inherit: true //burn chance
	},
	flareblitz: {
		inherit: true //burn chance
	},
	flashcannon: {
		inherit: true //sp def drop chance
	},
	fleurcannon: {
		inherit: true 
	},
	focusblast: {
		inherit: true //make -sp atk and -sp def
	},
	forcepalm: {
		inherit: true //para chance
	},
	freezedry: {
		inherit: true //freeze chance
	},
	frostbreath: {
		inherit: true
	},
	furyattack: {
		inherit: true //multihit move. Make it hit 4 times
	},
	furycutter: {
		inherit: true
	},
	furyswipes: {
		inherit: true //multihit move. Make it hit 4 times
	},
	geargrind: {
		inherit: true
	},
	gigaimpact: {
		inherit: true
	},
	glaciate: {
		inherit: true
	},
	gunkshot: {
		inherit: true //make -def and -sp def
	},
	hammerarm:{
		inherit: true
	},
	headbutt: {
		inherit: true //flinch chance
	},
	headsmash: {
		inherit: true
	},
	heatwave: {
		inherit: true //give it -sp def to differentiate from flamethrower
	},
	highhorsepower: {
		inherit: true
	},
	highjumpkick: {
		inherit: true
	},
	hurricane: {
		inherit: true //make power 90, 110 in rain and 70 in sun. And 110 if pokemon has noGuard ability
	},
	hydrocannon: {
		inherit: true
	},
	hydropump: {
		inherit: true //give -1 sp atk and -1 sp def
	},
	hyperbeam: {
		inherit: true
	},
	hypnosis: {
		inherit: true //make opponent sleep only one turn or something
	},
	icebeam: {
		inherit: true //freeze chance
	},
	iceburn: {
		inherit: true //burn chance
	},
	icefang: {
		inherit: true //freeze and flinch chance
	},
	icepunch: {
		inherit: true //freeze chance
	},
	iciclecrash: {
		inherit: true //flinch chance
	},
	iciclespear: {
		inherit: true //make always hit 3 times
	},
	icywind: {
		inherit: true
	},
	ironhead: {
		inherit: true //flinch chance
	},
	irontail: {
		inherit: true // -def and -sp def
	},
	lavaplume: {
		inherit: true //burn chance
	},
	leafblade: {
		inherit: true //remember to fix crit logic
	},
	leafstorm: {
		inherit: true
	},
	leechseed: {
		inherit: true
	},
	lick: {
		inherit: true //para chance
	},
	liquidation: {
		inherit: true //def drop chance
	},
	lovelykiss: {
		inherit: true //make opp sleep 2 turns always
	},
	lusterpurge: {
		inherit: true //make opp sp def drop 100%
	},
	magmastorm: {
		inherit: true //speed drop?
	},
	megahorn: {
		inherit: true //-sp def and -def
	},
	megakick: {
		inherit: true //-atk and -def
	},
	megapunch: {
		inherit: true
	},
	metalclaw: {
		inherit: true //atk boost chance
	},
	meteormash: {
		inherit: true //atk boost chance
	},
	moonblast: {
		inherit: true //sp atk drop chance
	},
	mudshot: {
		inherit: true
	},
	mudslap: {
		inherit: true //remove secondary effect
	},
	muddywater: {
		inherit: true //make it power 80.. and cause it to give the opponent a speed drop
	},
	naturesmadness: {
		inherit: true
	},
	nightdaze: {
		inherit: true //remove secondary effect
	},
	octazooka: {
		inherit: true //remove secondary effect
	},
	originpulse: {
		inherit: true
	},
	outrage: {
		inherit: true //fix so always locked two turns
	},
	overheat: {
		inherit: true
	},
	petaldance: {
		inherit: true //fix so always locked two turns
	},
	pinmissile: {
		inherit: true //always hit 3 times (unless skill link)
	},
	playrough: {
		inherit: true //atk drop chance
	},
	poisonfang: {
		inherit: true //poison chance
	},
	poisongas: {
		inherit: true
	},
	poisonjab: {
		inherit: true //poison chance
	},
	poisonpowder: {
		inherit: true
	},
	poisonsting: {
		inherit: true //psn chance
	},
	poisontail: {
		inherit: true //psn chance
	},
	powerwhip: {
		inherit: true //-sp def and -def
	},
	protect: {
		inherit: true //make it always only work once in a row
	}, 
	detect: {
		inherit: true //make it always only work once in a row
	},
	psybeam: {
		inherit: true //confusion chance
	},
	psychic: {
		inherit: true //sp def drop chance
	},
	razorleaf: {
		inherit: true
	},
	roar: {
		inherit: true //it shouldnt be random which pokemon comes in
	},
	rockblast: {
		inherit: true //make always hit 3 times unless skill link
	},
	rockslide: {
		inherit: true //flinch chance
	},
	rocksmash: {
		inherit: true //make secondary effect 100%
	},
	rockthrow: {
		inherit: true
	},
	rocktomb: {
		inherit: true
	},
	rockwrecker: {
		inherit: true
	},
	rollout: {
		inherit: true
	},
	sacredfire: {
		inherit: true //make it always burn?
	},
	sandtomb: {
		inherit: true
	},
	scald: {
		inherit: true //burn chance
	},
	screech: {
		inherit: true
	},
	shadowball: {
		inherit: true //sp def drop chance
	},
	shadowbone: {
		inherit: true //def drop chance
	},
	sing: {
		inherit: true //make opp sleep 1 turn
	},
	skyattack: {
		inherit: true
	},
	slam: {
		inherit: true
	},
	sleeppowder: {
		inherit: true //make opp sleep 2 turns
	},
	sleeptalk: {
		inherit: true //it shouldnt be random which move is chosen
	},
	sludge: {
		inherit: true //psn chance
	},
	sludgebomb: {
		inherit: true //psn chance
	},
	sludgewave: {
		inherit: true //psn chance
	},
	snore: {
		inherit: true //flinch chance
	},
	spikyshield: {
		inherit: true //should only work once in a row
	},
	spore: {
		inherit: true //make opp sleep 3 turns
	},
	steameruption: {
		inherit: true //burn chance
	},
	steelwing: {
		inherit: true //def boost chance
	},
	stomp: {
		inherit: true //flinch chance
	},
	stoneedge: {
		inherit: true //-def and -sp def. remember to fix crit logic
	},
	stunspore: {
		inherit: true 
	},
	superfang: {
		inherit: true
	},
	swagger: {
		inherit: true
	},
	sweetkiss: {
		inherit: true
	},
	tailslap: {
		inherit: true
	},
	takedown: {
		inherit: true
	},
	thrash: {
		inherit: true //make it always lock to two turns
	},
	thunder: {
		inherit: true // 50 power in sun. 70 power no weather and 110 in rain
	},
	thunderbolt: {
		inherit: true //para chance
	},
	thunderfang: {
		inherit: true //flinch and para chance
	},
	thunderpunch: {
		inherit: true //para chance
	},
	thunderwave: {
		inherit: true //remember to fix how para works
	},
	triattack: {
		inherit: true //this needs som serious change
	},
	triplekick: {
		inherit: true
	},
	vcreate: {
		inherit: true
	},
	waterfall: {
		inherit: true
	},
	waterpulse: {
		inherit: true // confusion chance
	},
	whirlpool: {
		inherit: true //
	},
	whirlwind: {
		inherit: true //it shouldnt be random which pokemon comes in
	},
	willowisp: {
		inherit: true
	},
	yawn: {
		inherit: true //should make opp sleep 3 turns
	},
	zapcannon: {
		inherit: true //should make user recharge
	},
	zenheadbutt: {
		inherit: true //flinch chance
	},
	zingzap: {
		inherit: true //flinch chance
	},
	


};

// Make all moves surehits
Object.keys(Moves).forEach(key => {
    Moves[key].accuracy = true;
});

//For logic pertaining to moves having hit several times in a row look at the logic for the move 'echoed voice'!