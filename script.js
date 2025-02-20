var modelimport = new Ai1wm.Import();
	
var storage = Ai1wm.Util.random(12);
var options = Ai1wm.Util.form('#ai1wm-backups-form').concat({ name: 'storage', value: storage }).concat({ name: 'archive', value: 'REPLACE-WITH-ARCHIVE-NAME'});

// Set global params
modelimport.setParams(options);

// Start import
modelimport.start();
