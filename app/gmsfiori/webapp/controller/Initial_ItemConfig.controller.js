sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(Controller) {
      "use strict";
  
      return Controller.extend("gmsfiori.controller.Initial_ItemConfig", {
        onInit: function() {
          
        },onComboBoxChange: function(oEvent) {
          var sSelectedKey = oEvent.getSource().getSelectedKey();
          var oTable = this.getView().byId("table0");
          var otable1 = this.getView().byId("table1");
      
          if (sSelectedKey === "GSA") {
              oTable.setVisible(true);
              otable1.setVisible(false);
          } else {
              oTable.setVisible(false);
              otable1.setVisible(true);
          }
      }
      });
    }
  );

