import BaseToken from "./BaseToken"

export default class CallToken extends BaseToken {
    public value: BaseToken
    public args: Array<BaseToken>

    public constructor(value: BaseToken, args: Array<BaseToken>) {
        super(value, "call")
        this.args = args
    }

    public get() {
        return this.value.get().call(this.args.map(tok => tok.get()))
    }

    public update() {
        this.value.update()
        this.args.forEach(tok => tok.update())
    }
}