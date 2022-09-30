Blockly.JavaScript['start'] = function(block) {
  var value_start = Blockly.JavaScript.valueToCode(block, 'start', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_control = Blockly.JavaScript.statementToCode(block, 'control');
  // TODO: Assemble JavaScript into code variable.
  var code = 'alert("please");\n';
  return code;
};

Blockly.JavaScript['move'] = function(block) {
  var value_way = Blockly.JavaScript.valueToCode(block, 'way', Blockly.JavaScript.ORDER_ATOMIC);
  var value_step = Blockly.JavaScript.valueToCode(block, 'step', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};