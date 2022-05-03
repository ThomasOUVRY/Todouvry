import {fr} from './locales/fr';
import i18next from 'i18next';
import * as Localization from 'expo-localization';
import {en} from "./locales/en";

export async function initTranslations() {
    void await i18next.init({
        lng: Localization.locale.substr(0, 2),
        debug: true,
        resources: {
            en: {
                translation: en
            },
            fr: {
                translation: fr
            }
        },
    });
}