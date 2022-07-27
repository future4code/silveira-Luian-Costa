export class Post {
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: string,
        private created_at: string,
        private author_id: string
    ) { }
}