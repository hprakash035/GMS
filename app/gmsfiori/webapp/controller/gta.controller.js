sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("gmsfiori.controller.gta", {
        onInit: function() {
        },
        onSoldtp: function (oEvent) {
          let oTable = new sap.m.Table({
            fixedLayout: false,
            mode: sap.m.ListMode.SingleSelectLeft,
            selectionChange: this._onSelectionChangeMaterial1.bind(this),
          })
          oTable.bindAggregation('items', {
            path: '/Sold_To_PartySet',
            template: new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: '{Kunnr}' })
              ],
            }),
          })
          oTable.addColumn(
            new sap.m.Column({
              header: new sap.m.Label({ text: 'Kunnr' }),
            }),
          )
          oTable.addItem(
            new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: '{Kunnr}' })
              ],
            }),
          )
          this._oValueHelpDialog = new sap.m.Dialog({
            title: 'Kunnr',
          })
          this.getView().addDependent(this._oValueHelpDialog)
          this._oValueHelpDialog.addContent(oTable)
          this._oValueHelpDialog.open()
        },
        _onSelectionChangeMaterial1: function (oEvent) {
          this.byId('Soldtp_id').setValue(
            oEvent.getParameter('listItem').getBindingContext().getObject().Kunnr,
          )
          this._oValueHelpDialog.close()
        },

        onShiptp: function (oEvent) {
          let oTable = new sap.m.Table({
            fixedLayout: false,
            mode: sap.m.ListMode.SingleSelectLeft,
            selectionChange: this._onSelectionChangeMaterial2.bind(this),
          })
          oTable.bindAggregation('items', {
            path: '/Ship_To_PartySet',
            template: new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: '{Kunnr}' })
              ],
            }),
          })
          oTable.addColumn(
            new sap.m.Column({
              header: new sap.m.Label({ text: 'Kunnr' }),
            }),
          )
          oTable.addItem(
            new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: '{Kunnr}' })
              ],
            }),
          )
          this._oValueHelpDialog = new sap.m.Dialog({
            title: 'Kunnr',
          })
          this.getView().addDependent(this._oValueHelpDialog)
          this._oValueHelpDialog.addContent(oTable)
          this._oValueHelpDialog.open()
        },
        _onSelectionChangeMaterial2: function (oEvent) {
          this.byId('Shiptp_id').setValue(
            oEvent.getParameter('listItem').getBindingContext().getObject().Kunnr,
          )
          this._oValueHelpDialog.close()
        },

        
        onSalesorg: function (oEvent) {
          let oTable = new sap.m.Table({
            fixedLayout: false,
            mode: sap.m.ListMode.SingleSelectLeft,
            selectionChange: this._onSelectionChangeMaterial3.bind(this),
          })
          oTable.bindAggregation('items', {
            path: '/Sales_OrgSet',
            template: new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: '{Vkorg}' })
              ],
            }),
          })
          oTable.addColumn(
            new sap.m.Column({
              header: new sap.m.Label({ text: 'Vkorg' }),
            }),
          )
          oTable.addItem(
            new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: '{Vkorg}' })
              ],
            }),
          )
          this._oValueHelpDialog = new sap.m.Dialog({
            title: 'Vkorg',
          })
          this.getView().addDependent(this._oValueHelpDialog)
          this._oValueHelpDialog.addContent(oTable)
          this._oValueHelpDialog.open()
        },
        _onSelectionChangeMaterial3: function (oEvent) {
          this.byId('SalesOrg_id').setValue(
            oEvent.getParameter('listItem').getBindingContext().getObject().Vkorg,
          )
          this._oValueHelpDialog.close()
        },

        onDivison: function (oEvent) {
          let oTable = new sap.m.Table({
            fixedLayout: false,
            mode: sap.m.ListMode.SingleSelectLeft,
            selectionChange: this._onSelectionChangeMaterial4.bind(this),
          })
          oTable.bindAggregation('items', {
            path: '/DivisionSet',
            template: new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: '{Spart}' })
              ],
            }),
          })
          oTable.addColumn(
            new sap.m.Column({
              header: new sap.m.Label({ text: 'Spart' }),
            }),
          )
          oTable.addItem(
            new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: '{Spart}' })
              ],
            }),
          )
          this._oValueHelpDialog = new sap.m.Dialog({
            title: 'Spart',
          })
          this.getView().addDependent(this._oValueHelpDialog)
          this._oValueHelpDialog.addContent(oTable)
          this._oValueHelpDialog.open()
        },
        _onSelectionChangeMaterial4: function (oEvent) {
          this.byId('division_id').setValue(
            oEvent.getParameter('listItem').getBindingContext().getObject().Spart,
          )
          this._oValueHelpDialog.close()
        },
       
      
        onMaterial: function (oEvent) {
          let oTable = new sap.m.Table({
            fixedLayout: false,
            mode: sap.m.ListMode.SingleSelectLeft,
            selectionChange: this._onSelectionChangeMaterial.bind(this),
          })
          oTable.bindAggregation('items', {
            path: '/MaterialSet',
            template: new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: '{Matnr}' })
              ],
            }),
          })
          oTable.addColumn(
            new sap.m.Column({
              header: new sap.m.Label({ text: 'Matnr' }),
            }),
          )
          oTable.addItem(
            new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: '{Matnr}' })
              ],
            }),
          )
          this._oValueHelpDialog = new sap.m.Dialog({
            title: 'Matnr',
          })
          this.getView().addDependent(this._oValueHelpDialog)
          this._oValueHelpDialog.addContent(oTable)
          this._oValueHelpDialog.open()
        },
        _onSelectionChangeMaterial: function (oEvent) {
          this.byId('material_id').setValue(
            oEvent.getParameter('listItem').getBindingContext().getObject().Matnr,
          )
          this._oValueHelpDialog.close()
        },
        onUom: function (oEvent) {
          let oTable = new sap.m.Table({
            fixedLayout: false,
            mode: sap.m.ListMode.SingleSelectLeft,
            selectionChange: this._onSelectionChangeMaterial5.bind(this),
          })
          oTable.bindAggregation('items', {
            path: '/UOMSet',
            template: new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: '{Msehi}' })
              ],
            }),
          })
          oTable.addColumn(
            new sap.m.Column({
              header: new sap.m.Label({ text: 'Msehi' }),
            }),
          )
          oTable.addItem(
            new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: '{Msehi}' })
              ],
            }),
          )
          this._oValueHelpDialog = new sap.m.Dialog({
            title: 'Msehi',
          })
          this.getView().addDependent(this._oValueHelpDialog)
          this._oValueHelpDialog.addContent(oTable)
          this._oValueHelpDialog.open()
        },
        _onSelectionChangeMaterial5: function (oEvent) {
          this.byId('Uom_id').setValue(
            oEvent.getParameter('listItem').getBindingContext().getObject().Msehi,
          )
          this._oValueHelpDialog.close()
        },

        onPlant: function (oEvent) {
          let oTable = new sap.m.Table({
            fixedLayout: false,
            mode: sap.m.ListMode.SingleSelectLeft,
            selectionChange: this._onSelectionChangeMaterial6.bind(this),
          })
          oTable.bindAggregation('items', {
            path: '/PlantSet',
            template: new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: '{Werks}' })
              ],
            }),
          })
          oTable.addColumn(
            new sap.m.Column({
              header: new sap.m.Label({ text: 'Werks' }),
            }),
          )
          oTable.addItem(
            new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: '{Werks}' })
              ],
            }),
          )
          this._oValueHelpDialog = new sap.m.Dialog({
            title: 'Werks',
          })
          this.getView().addDependent(this._oValueHelpDialog)
          this._oValueHelpDialog.addContent(oTable)
          this._oValueHelpDialog.open()
        },
        _onSelectionChangeMaterial6: function (oEvent) {
          this.byId('Plant_id').setValue(
            oEvent.getParameter('listItem').getBindingContext().getObject().Werks,
          )
          this._oValueHelpDialog.close()
        },
        onStorageL: function (oEvent) {
          let oTable = new sap.m.Table({
            fixedLayout: false,
            mode: sap.m.ListMode.SingleSelectLeft,
            selectionChange: this._onSelectionChangeMaterial7.bind(this),
          })
          oTable.bindAggregation('items', {
            path: '/Storage_LocSet',
            template: new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: '{Lgort}' })
              ],
            }),
          })
          oTable.addColumn(
            new sap.m.Column({
              header: new sap.m.Label({ text: 'Lgort' }),
            }),
          )
          oTable.addItem(
            new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: '{Lgort}' })
              ],
            }),
          )
          this._oValueHelpDialog = new sap.m.Dialog({
            title: 'Lgort',
          })
          this.getView().addDependent(this._oValueHelpDialog)
          this._oValueHelpDialog.addContent(oTable)
          this._oValueHelpDialog.open()
        },
        _onSelectionChangeMaterial7: function (oEvent) {
          this.byId('StorageL_id').setValue(
            oEvent.getParameter('listItem').getBindingContext().getObject().Lgort,
          )
          this._oValueHelpDialog.close()
        },
        onTrans: function (oEvent) {
          let oTable = new sap.m.Table({
            fixedLayout: false,
            mode: sap.m.ListMode.SingleSelectLeft,
            selectionChange: this._onSelectionChangeMaterial8.bind(this),
          })
          oTable.bindAggregation('items', {
            path: '/TransportSet',
            template: new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: '{Tsyst}' })
              ],
            }),
          })
          oTable.addColumn(
            new sap.m.Column({
              header: new sap.m.Label({ text: 'Tsyst' }),
            }),
          )
          oTable.addItem(
            new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: '{Tsyst}' })
              ],
            }),
          )
          this._oValueHelpDialog = new sap.m.Dialog({
            title: 'Tsyst',
          })
          this.getView().addDependent(this._oValueHelpDialog)
          this._oValueHelpDialog.addContent(oTable)
          this._oValueHelpDialog.open()
        },
        _onSelectionChangeMaterial8: function (oEvent) {
          this.byId('Trans_id').setValue(
            oEvent.getParameter('listItem').getBindingContext().getObject().Tsyst,
          )
          this._oValueHelpDialog.close()
        },
        
      });
    }
  );
  