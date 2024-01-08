  sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/ColumnListItem",
    "sap/m/Text",
    "sap/m/Input",
    "sap/m/CheckBox"
], function (BaseController, ColumnListItem, Text, Input, CheckBox) {
    "use strict";
    return BaseController.extend("gmsfiori.controller.config", {
 
        onInit: function() {
        },
        onServP: function(){
            const tile = this.getOwnerComponent().getRouter();
            tile.navTo("RouteView15");
        },
        Onconfig: function(){
            const tile = this.getOwnerComponent().getRouter();
            tile.navTo("RouteView16");
        }
       
    }
    )
    });
