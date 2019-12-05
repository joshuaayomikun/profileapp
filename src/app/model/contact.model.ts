import { Subject } from 'rxjs';

export class ContactModel {
    name: string;
    from: string;
    subject: string;
    message: string;
    constructor(name: string, from: string, subject: string, message: string) {
        this.name = name;
        this.from = from;
        this.subject = subject;
        this.message = message;

    }
}
