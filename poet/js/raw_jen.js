Blockly.JavaScript['poet1'] = function(block) {
  var statements_sentences = Blockly.JavaScript.statementToCode(block, 'sentences');
  // TODO: Assemble JavaScript into code variable.
  var check = "1234";
  statements_sentences = statements_sentences.slice(2);
  if (statements_sentences == check)
    var code = "alert(\'WIN!!!\');";
  else
    var code = "alert(\'WRONG!!!\');";
  return code;
};

Blockly.JavaScript['sentence1'] = function(block) {
  var dropdown_sentences = block.getFieldValue('sentences');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_sentences;
  return code;
};

Blockly.JavaScript['poet2'] = function(block) {
  var statements_sentences = Blockly.JavaScript.statementToCode(block, 'sentences');
  // TODO: Assemble JavaScript into code variable.
  var check = "1234";
  statements_sentences = statements_sentences.slice(2);
  if (statements_sentences == check)
    var code = "alert(\'WIN!!!\');";
  else
    var code = "alert(\'WRONG!!!\');";
  return code;
};

Blockly.JavaScript['sentence2'] = function(block) {
  var dropdown_sentences = block.getFieldValue('sentences');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_sentences;
  return code;
};

Blockly.JavaScript['poet3'] = function(block) {
  var statements_sentences = Blockly.JavaScript.statementToCode(block, 'sentences');
  // TODO: Assemble JavaScript into code variable.
  var check = "1234";
  statements_sentences = statements_sentences.slice(2);
  if (statements_sentences == check)
    var code = "alert(\'WIN!!!\');";
  else
    var code = "alert(\'WRONG!!!\');";
  return code;
};

Blockly.JavaScript['sentence3'] = function(block) {
  var dropdown_sentences = block.getFieldValue('sentences');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_sentences;
  return code;
};