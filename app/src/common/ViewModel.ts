'use strict'

export default abstract class View {
    public HTMLElement: HTMLElement;

    constructor(protected _id: string, protected _parentId: string, protected _tag:string){
        const targetElement: HTMLElement = document.querySelector('#' + _id);
        console.log('entrou no constructor')
        if (!targetElement) {
            this.createElement();
        } else {
            this.HTMLElement = targetElement;
        }
    }

    protected createElement(): void {
        this.HTMLElement = document.createElement(this._tag);
        this.HTMLElement.id = this._id;
        const parentNode: HTMLElement = document.querySelector('#' + this._parentId)
        parentNode.appendChild(this.HTMLElement)

    }

    protected abstract template(): string

    public render():void {
        this.HTMLElement.innerHTML = this.template()
    }

}