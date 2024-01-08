sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("gmsfiori.controller.Gascontract", {
        onInit: function() {
        },
        onCGC:function(){
          const CGC = this.getOwnerComponent().getRouter();
          CGC.navTo("RouteView5");
        },
        Amendcontract:function(){
          const AGC= this.getOwnerComponent().getRouter();
          AGC.navTo("RouteView12")

        }
      });
    }
  );
  