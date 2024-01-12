sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
  ],
  function (Controller, MessageToast) {
    "use strict";
    let aSelectedIds = [];
    return Controller.extend("gmsfiori.controller.Initial_ItemConfig", {
      onInit: function () {




      },
      onComboBoxChange: function (oEvent) {
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
      },
      onGetSelectedValuesgsa: function (oEvent) {
        var oTable = this.getView().byId("table0");
        var aSelectedIndices = oTable.getSelectedIndices();
        var oModel = oTable.getModel();

        var aSelectedData = [];

        aSelectedIndices.forEach(function (iIndex) {
          var oContext = oTable.getContextByIndex(iIndex);
          var oSelectedEntry = oContext.getObject();
          aSelectedData.push(oSelectedEntry);
        });

        // Now aSelectedData array contains the selected data from the table
        console.log("Selected Data:", aSelectedData);
        for (const { ServiceParameter_ID, Service_Parameters, Initial_page, Item_page } of aSelectedData) {
          var data = {

            ServiceParameter_ID: ServiceParameter_ID,

            Service_Parameters: Service_Parameters,
            Initial_page: Initial_page,
            Item_page: Item_page



          };

        
  
          
          
         console.log (data);


          var JsonData = JSON.stringify(data)
          let EndPoint = "/odata/v4/gmsbtp/gsaInitialConfiguration";
          fetch(EndPoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JsonData
          })
            .then(function (res) {

              if (res.ok) {
                MessageToast.show(` success`);
                this.getView().getModel().refresh();
              }
              else {

                MessageToast.show(`failed`)
              }
            })
            .catch(function (err) {
              console.log("error", err);
            })
        }
      }, check: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteView17");
      },onOpenMenuPress: function () {
        
      }

    })
  }
);