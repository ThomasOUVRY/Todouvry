import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import {en} from './locales/en';
import {fr} from './locales/fr';

export function initTranslations() {
    i18n.translations = {
        en: en,
        fr: fr
    };
    // Set the locale once at the beginning of your app.
    i18n.locale = Localization.locale;
    // When a value is missing from a language it'll fallback to another language with the key present.
    i18n.fallbacks = true;
}