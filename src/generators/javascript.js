/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Order} from 'blockly/javascript';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock['task_context'] = function (block, generator) {
  const task = generator.valueToCode(block, 'TASK', Order.NONE) || "''";

  const addTaskContext = generator.provideFunction_(
      'addTaskContext',
      `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(task) {

  // Add text to the output area.
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = task;
  outputDiv.appendChild(textEl);
}`
  );
  // Generate the function call for this block.
  const code = `${addTaskContext}(${task});\n`;
  return code;
};

forBlock['tone_context'] = function (block, generator) {
  const tone = generator.valueToCode(block, 'TONE', Order.NONE) || "''";
  
  const addToneContext = generator.provideFunction_(
      'addToneContext',
      `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(tone) {

  // Add text to the output area.
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = tone;
  outputDiv.appendChild(textEl);
}`
  );
  // Generate the function call for this block.
  const code = `${addToneContext}(${tone});\n`;
  return code;
};

forBlock['rules'] = function (block, generator) {
  const rule = generator.valueToCode(block, 'RULE', Order.NONE) || "''";
  const tag = 'rules'
  const message = 'Here are some rules for this interaction:'
  var prev = null;
  var next = null;
  try {
    prev = block.getPreviousBlock().type;
  } catch(error) {}
  try {
    next = block.getNextBlock().type;
  } catch(error) {}
  const addRule = generator.provideFunction_(
      'addRule',
      `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(rule, prev, next, tag, message) {

  // Add text to the output area.
  const outputDiv = document.getElementById('output');
  if (prev != 'rules') {
    const startXML = document.createElement('p');
    startXML.innerText = '<'+tag+'>'+message;
    outputDiv.appendChild(startXML);
  }
  const textEl = document.createElement('p');
  textEl.innerText = rule;
  outputDiv.appendChild(textEl);

  if (next != 'rules') {
    const endXML = document.createElement('p');
    endXML.innerText = '</'+tag+'>';
    outputDiv.appendChild(endXML);
  }
}`
  );
  // Generate the function call for this block.
  const code = `${addRule}('- '+${rule}, '${prev}', '${next}','${tag}','${message}');\n`;
  return code;
};

forBlock['example'] = function (block, generator) {
  const example = generator.valueToCode(block, 'EXAMPLE', Order.NONE) || "''";
  const tag = 'examples'
  const message = 'Here are some examples:'
  var prev = null;
  var next = null;
  try {
    prev = block.getPreviousBlock().type;
  } catch(error) {}
  try {
    next = block.getNextBlock().type;
  } catch(error) {}
  const addExample = generator.provideFunction_(
      'addExample',
      `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(example, prev, next, tag, message) {

  // Add text to the output area.
  const outputDiv = document.getElementById('output');

  if (prev != 'example') {
    const startXML = document.createElement('p');
    startXML.innerText = '<'+tag+'>'+message;
    outputDiv.appendChild(startXML);
  }

  const exampleOpen = document.createElement('p');
  exampleOpen.innerText = '<example>';
  outputDiv.appendChild(exampleOpen);

  const textEl = document.createElement('p');
  textEl.innerText = example;
  outputDiv.appendChild(textEl);

  const exampleClose = document.createElement('p');
  exampleClose.innerText = '</example>';
  outputDiv.appendChild(exampleClose);

  if (next != 'example') {
    const endXML = document.createElement('p');
    endXML.innerText = '</'+tag+'>';
    outputDiv.appendChild(endXML);
  }
}`
  );
  // Generate the function call for this block.
  const code = `${addExample}(${example}, '${prev}', '${next}','${tag}','${message}');\n`;
  return code;
};

forBlock['h_a_convo_history'] = function (block, generator) {
  const human = generator.valueToCode(block, 'HUMAN', Order.NONE) || "''";
  const assistant = generator.valueToCode(block, 'ASSISTANT', Order.NONE) || "''";

  const tag = 'history'
  const message = 'Here is a brief history of the interaction. It may be empty if there is no history:'
  var prev = null;
  var next = null;
  try {
    prev = block.getPreviousBlock().type;
  } catch(error) {}
  try {
    next = block.getNextBlock().type;
  } catch(error) {}
  const addHistory = generator.provideFunction_(
      'addHistory',
      `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(history, prev, next, tag, message) {

  // Add text to the output area.
  const outputDiv = document.getElementById('output');

  if (prev != 'h_a_convo_history' && prev != 'history') {
    const startXML = document.createElement('p');
    startXML.innerText = '<'+tag+'>'+message;
    outputDiv.appendChild(startXML);
  }

  const textEl = document.createElement('p');
  textEl.innerText = history;
  outputDiv.appendChild(textEl);

  if (next != 'h_a_convo_history' && next != 'last_human_input' && next != 'history') {
    const endXML = document.createElement('p');
    endXML.innerText = '</'+tag+'>';
    outputDiv.appendChild(endXML);
  }
}`
  );
  // Generate the function call for this block.
  // Hard-coded history since we run this twice, and we don't want to unnecessarily make XML tags.
  var code = `${addHistory}('H: '+${human}, '${prev}', 'history','${tag}','${message}');\n`;
  code += `${addHistory}('A: '+${assistant}, 'history', '${next}','${tag}','${message}');\n`;
  return code;
};

forBlock['last_human_input'] = function (block, generator) {
  const human = generator.valueToCode(block, 'HUMAN', Order.NONE) || "''";
  
  const tag = 'history'
  const message = 'Here is a brief history of the interaction. It may be empty if there is no history:'
  var prev = null;
  var next = null;
  try {
    prev = block.getPreviousBlock().type;
  } catch(error) {}
  try {
    next = block.getNextBlock().type;
  } catch(error) {}
  const addHistory = generator.provideFunction_(
      'addHistory',
      `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(history, prev, next, tag, message) {

  // Add text to the output area.
  const outputDiv = document.getElementById('output');

  if (prev != 'h_a_convo_history' && prev != 'history') {
    const startXML = document.createElement('p');
    startXML.innerText = '<'+tag+'>'+message;
    outputDiv.appendChild(startXML);
  }

  const textEl = document.createElement('p');
  textEl.innerText = history;
  outputDiv.appendChild(textEl);

  if (next != 'h_a_convo_history' && next != 'last_human_input' && next != 'history') {
    const endXML = document.createElement('p');
    endXML.innerText = '</'+tag+'>';
    outputDiv.appendChild(endXML);
  }
}`
  );
  // Generate the function call for this block.
  // Hard-coded history since we run this twice, and we don't want to unnecessarily make XML tags.
  var code = `${addHistory}('H: '+${human}, '${prev}', '${next}','${tag}','${message}');\n`;
  return code;
};

forBlock['task_request'] = function (block, generator) {
  const task = generator.valueToCode(block, 'TASKREQ', Order.NONE) || "''";
  
  const addText = generator.provideFunction_(
      'addText',
      `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(task) {

  // Add text to the output area.
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = task;
  outputDiv.appendChild(textEl);
}`
  );
  // Generate the function call for this block.
  const code = `${addText}(${task});\n`;
  return code;
};

forBlock['step_by_step'] = function (block, generator) {
  const addText = generator.provideFunction_(
      'addText',
      `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(message) {

  // Add text to the output area.
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = message;
  outputDiv.appendChild(textEl);
}`
  );
  // Generate the function call for this block.
  const code = `${addText}('Think step by step.');\n`;
  return code;
};

forBlock['output'] = function (block, generator) {
  const choice = block.getFieldValue('output_style')

  const selectOutput = generator.provideFunction_(
      'selectOutput',
      `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(choice) {

  // Add text to the output area.
  switch(choice) {
    case 'NONE':
      break;
    default:
      const outputDiv = document.getElementById('output');
      const textEl = document.createElement('p');
      var message = ''
      switch(choice) {
        case 'THINKING':
          message = 'Before answering, please think about the question within <thinking></thinking> XML tags. Then, answer the question within <answer></answer> XML tags.'
          break;
        case 'SCRATCH':
          message = 'Before answering, please show your work within <scratchpad></scratchpad> XML tags. Then, answer the question within <answer></answer> XML tags.'
          break;
      }
      textEl.innerText = message;
      outputDiv.appendChild(textEl);
  }
  
}`
  );
  // Generate the function call for this block.
  const code = `${selectOutput}('${choice}');\n`;
  return code;
};

forBlock['custom_output'] = function (block, generator) {
  const style = generator.valueToCode(block, 'CUSTOUT', Order.NONE) || "''";

  const addText = generator.provideFunction_(
      'addText',
      `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(style) {

  // Add text to the output area.
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = style;
  outputDiv.appendChild(textEl);
}`
  );
  // Generate the function call for this block.
  const code = `${addText}(${style});\n`;
  return code;
};

forBlock['prompt_end'] = function (block, generator) {
  const decorator = generator.valueToCode(block, 'PROMPTEND', Order.NONE) || "''";

  const endPrompt = generator.provideFunction_(
      'endPrompt',
      `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(decorator) {

  // Add text to the output area.
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = decorator;
  outputDiv.appendChild(document.createElement('br'));
  outputDiv.appendChild(document.createElement('br'));
  outputDiv.appendChild(textEl);
}`
  );
  // Generate the function call for this block.
  const code = `${endPrompt}('Assistant:' + ${decorator});`;
  return code;
};

forBlock['prompt_begin'] = function (block, generator) {
  const beginPrompt = generator.provideFunction_(
      'beginPrompt',
      `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(decorator) {

  // Add text to the output area.
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = decorator;
  outputDiv.appendChild(document.createElement('br'));
  outputDiv.appendChild(document.createElement('br'));
  outputDiv.appendChild(textEl);
}`
  );
  // Generate the function call for this block.
  const code = `${beginPrompt}('Human:');\n`;
  return code;
};