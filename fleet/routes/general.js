
/*
 * Routes of General/Home module
 */

exports.dashboard = function(req, res){
  res.render('general/dashboard', { title: 'Express' });
};