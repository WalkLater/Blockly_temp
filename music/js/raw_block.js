Blockly.Blocks['instrument'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("选择乐器")
        .appendField(new Blockly.FieldDropdown([["钢琴","piano"], ["小提琴","violin"], ["吉他","guitar"]]), "choice");
    this.appendDummyInput()
        .appendField("选择倍速")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["0.5","0.5"], ["2","2"]]), "speed");
    this.appendStatementInput("tune")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['tune'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["A4","A4"], ["G4","G4"], ["F4","F4"], ["D4","D4"], ["C4","C4"], ["B3","B3"], ["A3","A3"], ["G3","G3"], ["F3","F3"], ["E3","E3"], ["D3","D3"], ["C3","C3"]]), "tune_choice");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['music'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("选择模式")
        .appendField(new Blockly.FieldDropdown([["自主创作","self"], [{"src":"https://s3.bmp.ovh/imgs/2021/11/2ce30f276dfe5b93.png","width":500,"height":300,"alt":"star"},"star"], [{"src":"https://s3.bmp.ovh/imgs/2021/11/dde78fb50d92b59e.png","width":500,"height":300,"alt":"song"},"song"]]), "mode");
    this.appendStatementInput("tune")
        .setCheck(null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['silence'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("休止符");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['musicstar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("小星星封装曲谱");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['musicsong'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("欢乐颂封装曲谱");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['repeat'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("重复播放")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "times");
    this.appendStatementInput("pitch")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['silence'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("休止符");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};