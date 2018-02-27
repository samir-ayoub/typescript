var Views;
(function (Views) {
    class View {
        constructor(seletor) {
            this._elemento = document.querySelector(seletor);
        }
        update(model) {
            this._elemento.innerHTML = this.template(model);
        }
    }
    Views.View = View;
})(Views || (Views = {}));
