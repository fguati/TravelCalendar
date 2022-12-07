'use strict';
export default class View {
    _id;
    _parentId;
    _tag;
    HTMLElement;
    constructor(_id, _parentId, _tag) {
        this._id = _id;
        this._parentId = _parentId;
        this._tag = _tag;
        const targetElement = document.querySelector('#' + _id);
        if (!targetElement) {
            this.createElement();
        }
        else {
            this.HTMLElement = targetElement;
        }
    }
    createElement() {
        this.HTMLElement = document.createElement(this._tag);
        this.HTMLElement.id = this._id;
        const parentNode = document.querySelector('#' + this._parentId);
        parentNode.appendChild(this.HTMLElement);
    }
    render() {
        this.HTMLElement.innerHTML = this.template();
    }
}
//# sourceMappingURL=ViewModel.js.map