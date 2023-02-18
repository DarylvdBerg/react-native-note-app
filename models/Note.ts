export default interface INote {
    title: string;
    content: string;
    date: number;
}

export default class Note implements INote {
    title: string;
    content: string;
    date: number;
    
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
        this.date = Date.now();
    }
}