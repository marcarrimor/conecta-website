
exports.parse_recipient_type = function(recipient_list){
        console.log("****************HOLA");
        console.log(recipient_list);
  var return_vals = {
    'to': [],
    'cc': [],
    'bcc': []
  }
  for (var i = 0; i < recipient_list.length; ++i) {
    var parsed = recipient_list[i].split(':');
    (parsed.length > 1) ? return_vals[parsed[0]].push(parsed[1])
      : return_vals['to'].push(parsed[0]);
  }
  return return_vals;
}
