export class Post {
    userId: String;
    id: Number;
    private _body: String;
    public get body(): String {
        return this._body;
    }
    public set body(value: String) {
        this._body = value;
    }
}
