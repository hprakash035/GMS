sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("gmsfiori.controller.nomtiles", {
        onInit: function() {
        },
        masterdet:function(){
          const createNom = this.getOwnerComponent().getRouter();
          createNom.navTo("RouteView7");
      },
      
      });
    }
  );
  