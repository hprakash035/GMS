const cds = require('@sap/cds');

module.exports = async (srv) => 
{        
    // Using CDS API      
    const ZGMS_VALUE_HELP_SRV = await cds.connect.to("ZGMS_VALUE_HELP_SRV"); 
      srv.on('READ', 'Contract_TypeSet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'Dist_ChannelSet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'DivisionSet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'LocationSet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'MaterialSet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'PlantSet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'UOMSet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'TransportSet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'Storage_LocSet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'Sold_To_PartySet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'Ship_To_PartySet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'Sales_OrgSet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
      srv.on('READ', 'Sales_ContractSet', req => ZGMS_VALUE_HELP_SRV.run(req.query)); 
}