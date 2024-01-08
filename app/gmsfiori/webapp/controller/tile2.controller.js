sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("gmsfiori.controller.tile2", {
            onInit: function () {

            },
            onPress: function(){
                const Gascontract = this.getOwnerComponent().getRouter();
                Gascontract.navTo("RouteView3");
            },
            onNomi: function(){
                const nomTiles = this.getOwnerComponent().getRouter();
                nomTiles.navTo("RouteView4");
            },
        });
    });
