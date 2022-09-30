Blockly.JavaScript['instrument'] = function(block) {
  var dropdown_choice = block.getFieldValue('choice');
  var dropdown_speed = block.getFieldValue('speed');
  var statements_tune = Blockly.JavaScript.statementToCode(block, 'tune');
  // TODO: Assemble JavaScript into code variable.
  statements_tune = statements_tune.slice(2);               //删去前空符
  var modeCode = mode_code(dropdown_choice);
  var code = "playAll(\"" + modeCode + "\",\""+statements_tune + "\"," + dropdown_speed + ");";
  return code;
};

Blockly.JavaScript['tune'] = function(block) {
  var dropdown_tune_choice = block.getFieldValue('tune_choice');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_tune_choice;
  return dropdown_tune_choice;
};

Blockly.JavaScript['music'] = function(block) {
  var dropdown_mode = block.getFieldValue('mode');
  var statements_tune = Blockly.JavaScript.statementToCode(block, 'tune');
  // TODO: Assemble JavaScript into code variable.
  switch(dropdown_mode)
  {
    case "self":
        var code = statements_tune;                 //自主创作
        break;
    case "star":
        var sentence = "check(\"B\"," +"\'" + statements_tune +"\'" + ");\n";   //小星星
        var code = sentence;
        break;
    case "song":
        var sentence = "check(\"C\"," +"\'" + statements_tune +"\'" + ");\n";   //欢乐颂
        var code = sentence;
        break;
  }
  return code;
};

Blockly.JavaScript['silence'] = function(block) {
  var code = 'RE';                                      //休止符
  return code;
};

Blockly.JavaScript['musicstar'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'C3D3E3F3';                                //封装小星星乐谱
  return code;
};

Blockly.JavaScript['musicsong'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'A4G4F4D4';                                //封装欢乐颂乐谱
  return code;
};

Blockly.JavaScript['repeat'] = function(block) {
  var dropdown_times = block.getFieldValue('times');
  var statements_pitch = Blockly.JavaScript.statementToCode(block, 'pitch');
  // TODO: Assemble JavaScript into code variable.
  var times = dropdown_times;
  var code = statements_pitch.slice(2);
  for (var i=1; i<times; i++) {
    code = code + statements_pitch.slice(2);                //循环
  }
  return code;
};