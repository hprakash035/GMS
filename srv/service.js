const cds = require('@sap/cds');

module.exports = async (srv) => 
{        
    // Using CDS API      
    const ZAPI_SALES_CONTRACT_SRV = await cds.connect.to("ZAPI_SALES_CONTRACT_SRV"); 
      srv.on('READ', 'A_SalesContract', req => ZAPI_SALES_CONTRACT_SRV.run(req.query)); 
      srv.on('READ', 'A_SalesContractItem', req => ZAPI_SALES_CONTRACT_SRV.run(req.query)); 
      srv.on('READ', 'A_SalesContractItemPartner', req => ZAPI_SALES_CONTRACT_SRV.run(req.query)); 
      srv.on('READ', 'A_SalesContractItemPrcgElmnt', req => ZAPI_SALES_CONTRACT_SRV.run(req.query)); 
      srv.on('READ', 'A_SalesContractPartner', req => ZAPI_SALES_CONTRACT_SRV.run(req.query)); 
      srv.on('READ', 'A_SalesContractPrcgElmnt', req => ZAPI_SALES_CONTRACT_SRV.run(req.query));
      const ZGMS_VALUE_HELP_SRV = await cds.connect.to("ZGMS_VALUE_HELP_SRV");
      srv.on('READ', 'Contract_TypeSet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'Dist_ChannelSet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'DivisionSet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'LocationPointSet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'MaterialSet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'LocationSet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'PlantSet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'Sales_ContractSet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'Sales_OrgSet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'Ship_To_PartySet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'Sold_To_PartySet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'Storage_LocSet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'TransportSet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'UOMSet', req => ZGMS_VALUE_HELP_SRV.run(req.query));  
}