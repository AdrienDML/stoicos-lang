import VarManager from "../manager/VarManager"
import BaseToken from "./BaseToken"
import VarToken from "./VarToken"

export default class AttrToken extends VarToken {
    public current: BaseToken
    public value: String
    public attrs: Array<String>

    public constructor(value: any, attrs: Array<String>) {
        super(value)
        this.attrs = attrs
    }

    public get() {
        let tok = super.get()
        let res = this.attrs.reduce((tok, attr) => tok.request("struct").get(attr), tok)
        return res
    }

    public update() {
        try {
            this.current = VarManager.get().getVar(this.value)
        } catch (error) { }
    }
}