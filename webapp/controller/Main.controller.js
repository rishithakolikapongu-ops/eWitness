sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
  "use strict";

  return Controller.extend("eWitness.controller.Main", {
    onInit: function () {
      const oData = {
        statements: [
          { date: "2025-07-15", category: "Theft" },
          { date: "2025-07-14", category: "Assault" }
        ]
      };
      this.getView().setModel(new JSONModel(oData));
    },

    onAddStatement: function () {
      MessageToast.show("Add Statement – dialog to open");
    },

    onViewDetails: function () {
      MessageToast.show("View confidential details – secured");
    }
  });
});

