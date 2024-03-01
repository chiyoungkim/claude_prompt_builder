/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';
import {blocks} from './blocks/text';
import {forBlock} from './generators/javascript';
import {javascriptGenerator} from 'blockly/javascript';
import {save, load} from './serialization';
import {toolbox} from './toolbox';
import './index.css';

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);
Object.assign(javascriptGenerator.forBlock, forBlock);

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');

const copyPrompt = document.getElementById('copyPrompt');
const savePrompt = document.getElementById('savePrompt');
const loadPrompt = document.getElementById('submitPrompt');
const promptFile = document.getElementById('uploadPrompt');

Blockly.Themes.Claude = Blockly.Theme.defineTheme('claude', {
  'base': Blockly.Themes.Classic,
  'categoryStyles' : {
    'prompt_begin': {
       'colour': '#cc785c'
    },
    'prompt_body': {
       'colour': '#d4a27f',
    },
    'prompt_end': {
       'colour': '#ebdbbc',
   }
  },
  'blockStyles': {
    'prompt_begin': {
      'colourPrimary': '230'
   },
   'prompt_body': {
      'colourPrimary': '160'
   },
   'text_blocks': {
      //'colourPrimary': '#666663',
      //'colourSecondary': '#91918d',
      //'colourTertiary': '#bfbfba',
   },
   'prompt_end': {
      'colourPrimary': '310',
  }
  },
  'componentStyles': {
    //'workspaceBackgroundColour': '#fff',
    //'toolboxBackgroundColour': '#191919',
    //'toolboxForegroundColour': '#bfbfba',
    //'flyoutBackgroundColour': '#252526',
    //'flyoutForegroundColour': '#ccc',
    //'flyoutOpacity': 1,
    //'scrollbarColour': '#ff0000',
    //'insertionMarkerColour': '#fff',
    //'insertionMarkerOpacity': 0.3,
  }
})

const ws = Blockly.inject(blocklyDiv, {toolbox, theme: Blockly.Themes.Claude});

// This function resets the code and output divs, shows the
// generated code from the workspace, and evals the code.
// In a real application, you probably shouldn't use `eval`.
const runCode = () => {
  const code = javascriptGenerator.workspaceToCode(ws);
  
  codeDiv.innerText = code;

  outputDiv.innerHTML = '';

  eval(code);
};

// Load the initial state from storage and run the code.
load(ws);
runCode();

// Every time the workspace changes state, save the changes to storage.
ws.addChangeListener((e) => {
  // UI events are things like scrolling, zooming, etc.
  // No need to save after one of these.
  if (e.isUiEvent) return;
  save(ws);
});


// Whenever the workspace changes meaningfully, run the code again.
ws.addChangeListener((e) => {
  // Don't run the code when the workspace finishes loading; we're
  // already running it once when the application starts.
  // Don't run the code during drags; we might have invalid state.
  if (e.isUiEvent || e.type == Blockly.Events.FINISHED_LOADING ||
    ws.isDragging()) {
    return;
  }
  runCode();
});

copyPrompt.onclick = function() {
  navigator.clipboard.writeText(outputDiv.innerText);
  copyPrompt.innerText = "Copied!";
  setTimeout(function() {copyPrompt.innerText = "Copy to Clipboard";}, 1000);
}

savePrompt.onclick = function() {
  const saveState = Blockly.serialization.workspaces.save(ws);
  console.log(saveState);
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify(saveState)], {
    type: 'application/json'
  }));
  a.setAttribute("download", "prompt.json");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

loadPrompt.onclick = function() {
  console.log(promptFile);
  if (promptFile.length <= 0) {
    return false;
  }

  var fr = new FileReader();
  var formatted = null;

  fr.onload = function(e) { 
    formatted = JSON.parse(e.target.result);
    Blockly.serialization.workspaces.load(formatted, ws);
    loadPrompt.innerText = "Loaded!";
    setTimeout(function() {loadPrompt.innerText = "Load Prompt File";}, 1000);
  }

  fr.readAsText(promptFile.files[0]);
}