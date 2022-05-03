import {LoginInfoDTO} from "./LoginInfo";

export class SingUpInfoDTO extends LoginInfoDTO {
    constructor(public fullname?: string, public email?: string, public password?: string, public confirmPassword?: string) {
        super(email, password);
    }
}