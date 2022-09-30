Blockly.Blocks['start'] = {
  init: function() {
    this.appendValueInput("start")
        .setCheck("Boolean")
        .appendField("游戏开始");
    this.appendStatementInput("control")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(160);
 this.setTooltip("游戏开始");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move'] = {
  init: function() {
    this.appendValueInput("way")
        .setCheck("String")
        .appendField("方向");
    this.appendValueInput("step")
        .setCheck("Number")
        .appendField("步数");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("移动");
 this.setHelpUrl("");
  }
};