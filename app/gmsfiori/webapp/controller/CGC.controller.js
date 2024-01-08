sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("gmsfiori.controller.CGC", {
        onInit: function() {
        },
        onGeneral:function() {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteView4");
      },
      onHeader:function() {
        this.getSplitAppObj().toMaster(this.createId("master2"));
    },
    onItems:function() {
        const oRouter2 = this.getOwnerComponent().getRouter();
        oRouter2.navTo("RouteView4");
    },

    onPressMasterBack: function () {
      this.getSplitAppObj().backMaster();
  },


    onListItemPress:function(oEvent){
      // this.getSplitAppObj().toMaster(this.createId("master"));

      var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();

      this.getSplitAppObj().toDetail(this.createId(sToPageId));

    },



    onGSA:function() {
      const oRouter2 = this.getOwnerComponent().getRouter();
      oRouter2.navTo("RouteView5");
    },
    onGTA:function() {
      const oRouter2 = this.getOwnerComponent().getRouter();
      oRouter2.navTo("RouteView11");
    },
    getSplitAppObj: function () {
      var result = this.byId("_IDGenSplitApp1");
      if (!result) {
          Log.info("SplitApp object can't be found");
      }
      return result;
  }
        // onGeneral:function(){
        //     const home = this.getOwnerComponent().getRouter();
        //   home.navTo("RouteView5");
        // }

        // navigate:function(){
        //   var oRouter=this.getOwnerComponent().getRouter();
        //   var Doc_Type=this.getView().byId("docType").getSelectedItem().getText();
        //   if(Doc_Type=="GSA"){
        //     oRouter.navTo("RouteView5")
        //   }
        //   else if(Doc_Type=="GTA"){
        //     oRouter.navTo("RouteView11")
        //   }
          
        // }
      });
    }
  );
  