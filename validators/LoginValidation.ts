import * as Yup from "yup";
import {t} from "i18next";

export const MIN_LENGTH_PASSWORD = 6;
export const MAX_LENGTH_PASSWORD = 30;

export default Yup.object().shape({
    email: Yup.string().email(t('error.email')).required(t('error.required')),
    password: Yup.string().required(t('error.required')).min(MIN_LENGTH_PASSWORD, t('error.min', {'min': MIN_LENGTH_PASSWORD})).max(MAX_LENGTH_PASSWORD, t('error.max', {'max': MAX_LENGTH_PASSWORD}))
});