Blockly.Blocks['start'] = {
  init: function() {
    this.appendValueInput("start")
        .setCheck("Boolean")
        .appendField("Game_Maze");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(160);
 this.setTooltip("迷宫游戏");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['moveright'] = {
  init: function() {
    this.appendValueInput("step")
        .setCheck("Number")
        .appendField("右移");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['moveup'] = {
  init: function() {
    this.appendValueInput("step")
        .setCheck("Number")
        .appendField("上移");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['movedown'] = {
  init: function() {
    this.appendValueInput("step")
        .setCheck("Number")
        .appendField("下移");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['movleft'] = {
  init: function() {
    this.appendValueInput("step")
        .setCheck("Number")
        .appendField("左移");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['judge'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("让我康康");
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};