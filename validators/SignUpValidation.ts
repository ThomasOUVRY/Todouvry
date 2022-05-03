import * as Yup from "yup";
import {t} from "i18next";
import {MAX_LENGTH_PASSWORD, MIN_LENGTH_PASSWORD} from "./LoginValidation";


export default Yup.object().shape({
    fullname: Yup.string().required(t("error.required")),
    email: Yup.string().email(t('error.email')).required(t('error.required')),
    password: Yup.string().required(t('error.required')).min(MIN_LENGTH_PASSWORD, t('error.min', {'min': MIN_LENGTH_PASSWORD})).max(MAX_LENGTH_PASSWORD, t('error.max', {'max': MAX_LENGTH_PASSWORD})),
    confirmPassword: Yup.string().required(t('error.required')).oneOf([Yup.ref<string>('password'), null], t('error.confirmPassword'))
});