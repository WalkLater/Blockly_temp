Blockly.JavaScript['start'] = function(block) {
  var value_start = Blockly.JavaScript.valueToCode(block, 'start', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var flag = value_start;

  if (flag == false)
  {
    var code = 'check_start();\n';
    return code;
  }
  else
  {
    var code = statements_name;
    return code;
  }
};

Blockly.JavaScript['moveright'] = function(block) {
  var value_step = Blockly.JavaScript.valueToCode(block, 'step', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'move("右",' + value_step +');\n';
  return code;
};

Blockly.JavaScript['moveup'] = function(block) {
  var value_step = Blockly.JavaScript.valueToCode(block, 'step', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'move("上",' + value_step +');\n';
  return code;
};

Blockly.JavaScript['movedown'] = function(block) {
  var value_step = Blockly.JavaScript.valueToCode(block, 'step', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'move("下",' + value_step +');\n';
  return code;
};

Blockly.JavaScript['movleft'] = function(block) {
  var value_step = Blockly.JavaScript.valueToCode(block, 'step', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'move("左",' + value_step +');\n';
  return code;
};

Blockly.JavaScript['judge'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'check_end();\n';
  return code;
};