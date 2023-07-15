/* 
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * 
 * Plugin written by Kieran Schuler (operations@k1e.io)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
import { definePluginSettings } from "@api/Settings";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    discordStaff: {
        type: OptionType.BOOLEAN,
        description: "Discord Staff badge displayed on your profile",
        default: false,
        restartNeeded: false
    },

    discordPartner: {
        type: OptionType.BOOLEAN,
        description: "Discord Partner badge displayed on your profile",
        default: false,
        restartNeeded: false
    },

    moderatorProgrammesAlumni: {
        type: OptionType.BOOLEAN,
        description: "Moderator Programmes Alumni badge displayed on your profile",
        default: false,
        restartNeeded: false
    },

    hypesquadEvents: {
        type: OptionType.BOOLEAN,
        description: "HypeSquad Events badge displayed on your profile",
        default: false,
        restartNeeded: false
    },

    hypesquadHouseBravery: {
        type: OptionType.BOOLEAN,
        description: "HypeSquad Bravery badge displayed on your profile",
        default: false,
        restartNeeded: false
    },

    hypesquadHouseBrilliance: {
        type: OptionType.BOOLEAN,
        description: "HypeSquad Brilliance badge displayed on your profile",
        default: false,
        restartNeeded: false
    },

    hypesquadHouseBalance: {
        type: OptionType.BOOLEAN,
        description: "HypeSquad Balance badge displayed on your profile",
        default: false,
        restartNeeded: false
    },

    bugHunterLevel1: {
        type: OptionType.BOOLEAN,
        description: "Discord Bug Hunter badge (Level 1) displayed on your profile",
        default: false,
        restartNeeded: false
    },

    bugHunterLevel2: {
        type: OptionType.BOOLEAN,
        description: "Discord Bug Hunter badge (Level 2) displayed on your profile",
        default: false,
        restartNeeded: false
    },

    activeDeveloper: {
        type: OptionType.BOOLEAN,
        description: "Active Developer badge displayed on your profile",
        default: false,
        restartNeeded: false
    },

    verifiedDeveloper: {
        type: OptionType.BOOLEAN,
        description: "Verified Developer badge displayed on your profile",
        default: false,
        restartNeeded: false
    },

    earlySupporter: {
        type: OptionType.BOOLEAN,
        description: "Early Supporter badge displayed on your profile",
        default: false,
        restartNeeded: false
    },

    nitroBadge: {
        type: OptionType.BOOLEAN,
        description: "Nitro badge displayed on your profile",
        default: false,
        restartNeeded: false
    },

    // nitroBadgeDate: {
    //     type: OptionType.STRING,
    //     description: "Date of Nitro badge",
    //     default: "1 January 1970",
    // },

    nitroBooster: {
        type: OptionType.BOOLEAN,
        description: "Nitro Premium badge displayed on your profile",
        default: false,
        restartNeeded: false
    },

    // nitroBoosterDate: {
    //     type: OptionType.STRING,
    //     description: "Date of Nitro Premium badge",
    //     default: "1 January 1970",
    // },

    knownAs: {
        type: OptionType.BOOLEAN,
        description: "Known As badge displayed on your profile",
        default: false,
        restartNeeded: false
    },

    // knownAsName: {
    //     type: OptionType.STRING,
    //     description: "Name of Known As badge",
    //     default: "instatoys#1337",
    //     restartNeeded: true
    // }
});

let staffBadge = { id: "staff", description: "Discord Staff", icon: "5e74e9b61934fc1f67c65515d1f7e60d", link: "https://discord.com/company" };
let partnerBadge = { id: "partner", description: "Partnered Server Owner", icon: "3f9748e53446a137a052f3454e2de41e", link: "https://discord.com/partners" };
let ModProgAlum = { id: "certified_moderator", description: "Moderator Programmes Alumni", icon: "fee1624003e2fee35cb398e125dc479b", link: "https://discord.com/safety" };

let hypesquadEvents = { id: "hypesquad_events", description: "HypeSquad Events", icon: "bf01d1073931f921909045f3a39fd264", link: "https://discord.com/hypesquad" };
let hypesquadHouseBalance = { id: "hypesquad_house_3", description: "HypeSquad Balance", icon: "3aa41de486fa12454c3761e8e223442e", link: "https://discord.com/settings/hypesquad-online" };
let hypesquadHouseBrilliance = { id: "hypesquad_house_2", description: "HypeSquad Brilliance", icon: "011940fd013da3f7fb926e4a1cd2e618", link: "https://discord.com/settings/hypesquad-online" };
let hypesquadHouseBravery = { id: "hypesquad_house_1", description: "HypeSquad Bravery", icon: "8a88d63823d8a71cd5e390baa45efa02", link: "https://discord.com/settings/hypesquad-online" };

let bugHunter1 = { id: "bug_hunter_level_1", description: "Discord Bug Hunter", icon: "2717692c7dca7289b35297368a940dd0", link: "https://support.discord.com/hc/en-us/articles/360046057772-Discord-Bugs" };
let bugHunter2 = { id: "bug_hunter_level_2", description: "Discord Bug Hunter", icon: "848f79194d4be5ff5f81505cbd0ce1e6", link: "https://support.discord.com/hc/en-us/articles/360046057772-Discord-Bugs" };

let activeDev = { id: "active_developer", description: "Active Developer", icon: "6bdc42827a38498929a4920da12695d9", link: "https://support-dev.discord.com/hc/en-us/articles/10113997751447" };
let verifiedDev = { id: "verified_developer", description: "Early Verified Bot Developer", icon: "6df5892e0f35b051f8b61eace34f4967" };
let earlySupporter = { id: "early_supporter", description: "Early Supporter", icon: "7060786766c9c840eb3019e725d2b358", link: "https://discord.com/settings/premium" };

let nitroBadge = { id: "premium", description: `Subscriber since 1 January 1970`, icon: "2ba85e8026a8614b640c2837bcdfe21b", link: "https://discord.com/settings/premium" };
let nitroPremium = { id: "nitro_premium", description: `Server Boosting since 1 January 1970`, icon: "ec92202290b48d0879b7413d2dde3bab", link: "https://discord.com/settings/premium" };
let knownAs = { id: "known_as", description: `Originally known as DiscordUser#0000`, icon: "6de6d34650760ba5551a79732e98ed60", link: "https://discord.com" };

export default definePlugin({
    name: "AssignBadges",
    description: "Always wanted a certain Discord badge but can't get it? Select all the badges you could ever want with this plugin!",
    authors: [{ name: "instatoys", id: 673477059904929802n }],

    settings,

    start: () => {
        const store = Vencord.Webpack.findStore("UserProfileStore");
        const original = store.getUserProfile;

        store.getUserProfile = function (id) {

            const r = original.apply(this, arguments);

            if (r && id === Vencord.Webpack.Common.UserStore.getCurrentUser()?.id)
                r.badges = [
                    ...(settings.store.discordStaff ? [staffBadge] : []),
                    ...(settings.store.discordPartner ? [partnerBadge] : []),
                    ...(settings.store.moderatorProgrammesAlumni ? [ModProgAlum] : []),
                    ...(settings.store.hypesquadEvents ? [hypesquadEvents] : []),
                    ...(settings.store.hypesquadHouseBravery ? [hypesquadHouseBravery] : []),
                    ...(settings.store.hypesquadHouseBrilliance ? [hypesquadHouseBrilliance] : []),
                    ...(settings.store.hypesquadHouseBalance ? [hypesquadHouseBalance] : []),
                    ...(settings.store.bugHunterLevel1 ? [bugHunter1] : []),
                    ...(settings.store.bugHunterLevel2 ? [bugHunter2] : []),
                    ...(settings.store.activeDeveloper ? [activeDev] : []),
                    ...(settings.store.verifiedDeveloper ? [verifiedDev] : []),
                    ...(settings.store.earlySupporter ? [earlySupporter] : []),
                    ...(settings.store.nitroBadge ? [nitroBadge] : []),
                    ...(settings.store.nitroBooster ? [nitroPremium] : []),
                    ...(settings.store.knownAs ? [knownAs] : [])
                ];

            return r;
        };

        console.log('[AssignBadges] All specified badges added to profile!');
    },

    stop: () => {
        const store = Vencord.Webpack.findStore("UserProfileStore");
        const original = store.getUserProfile;

        store.getUserProfile = original;

        console.log('[AssignBadges] All specified badges removed from profile!');
    }
});
