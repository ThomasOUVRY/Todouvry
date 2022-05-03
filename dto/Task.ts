export class TaskDTO {

    constructor(
        public id: string,
        public id_user?: string,
        public libelle?: string,
        public due_date?: string,
    ) {
    }
}
