'use strict'

export default abstract class View {
    public HTMLElement: HTMLElement;

    constructor(protected _id: string, protected _parentId: string, protected _tag:string, protected _class: string){
        const targetElement: HTMLElement = document.querySelector('#' + _id);
        if (!targetElement) {
            this.createElement();
        } else {
            this.HTMLElement = targetElement;
        }
    }

    protected createElement(): void {
        this.HTMLElement = document.createElement(this._tag);
        this.HTMLElement.id = this._id;
        this.HTMLElement.classList.add(this._class)
        const parentNode: HTMLElement = document.querySelector('#' + this._parentId)
        parentNode.appendChild(this.HTMLElement)

    }

    protected abstract template(): string

    public render():void {
        this.HTMLElement.innerHTML = this.template()
    }

}