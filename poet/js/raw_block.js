Blockly.Blocks['poet1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("题图陶为浤先生画作《洞庭月色》");
    this.appendStatementInput("sentences")
        .setCheck(null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sentence1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["西风吹老洞庭波","1"], ["一夜湘君白发多","2"], ["醉后不知天在水","3"], ["满船清梦压星河","4"]]), "sentences");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['poet2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("《舟夜书所见》");
    this.appendStatementInput("sentences")
        .setCheck(null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sentence2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["月黑见渔灯","1"], ["孤光一点萤","2"], ["微微风簇浪","3"], ["散作满河星","4"]]), "sentences");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['poet3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("《菩萨蛮·李师中》");
    this.appendStatementInput("sentences")
        .setCheck(null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sentence3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["子规啼破城楼月","1"], ["画船晓载笙歌发","2"], ["两岸荔枝红","3"], ["万家烟雨中","4"]]), "sentences");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};