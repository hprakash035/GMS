sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("gmsfiori.controller.tile1", {
            onInit: function () {

            },
            onCreate: function(){
                const tile = this.getOwnerComponent().getRouter();
                tile.navTo("RouteView2");
            },
            Onconfig:function(){
                const config = this.getOwnerComponent().getRouter();
                config.navTo("RouteView10")
            }
        });
    });
