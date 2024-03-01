/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

// Create a custom block called 'add_text' that adds
// text to the output div on the sample app.
// This is just an example and you should replace this with your
// own custom blocks.

const taskContext = {
  'type': 'task_context',
  'message0': 'Adds the task context: %1',
  'args0': [
    {
      'type': 'input_value',
      'name': 'TASK',
      'check': 'String',
    },
  ],
  'previousStatement': null,
  'nextStatement': null,
  'style': 'prompt_body',
  'tooltip': '',
  'helpUrl': '',
};

const toneContext = {
  'type': 'tone_context',
  'message0': 'Adds the tone context: %1',
  'args0': [
    {
      'type': 'input_value',
      'name': 'TONE',
      'check': 'String',
    },
  ],
  'previousStatement': null,
  'nextStatement': null,
  'style': 'prompt_body',
  'tooltip': '',
  'helpUrl': '',
};

const rule = {
  "type": "rules",
  "message0": "Rule for Claude: %1",
  "args0": [
    {
      "type": "input_value",
      "name": "RULE",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  'style': 'prompt_body',
  "tooltip": "",
  "helpUrl": ""
}

const example = {
  "type": "example",
  "message0": "Example for Claude: %1",
  "args0": [
    {
      "type": "input_value",
      "name": "EXAMPLE",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  'style': 'prompt_body',
  "tooltip": "",
  "helpUrl": ""
}

const humanAssistantConversationHistory = {
  'type': 'h_a_convo_history',
  'message0': 'Human input %1 with Assistant response %2',
  'args0': [
    {
      'type': 'input_value',
      'name': 'HUMAN',
      'check': 'String',
    },
    {
      'type': 'input_value',
      'name': 'ASSISTANT',
      'check': 'String',
    },
  ],
  'previousStatement': null,
  'nextStatement': null,
  'style': 'prompt_body',
  'tooltip': '',
  'helpUrl': '',
};

const lastHumanInput = {
  'type': 'last_human_input',
  'message0': 'Last Human input %1 in conversation history',
  'args0': [
    {
      'type': 'input_value',
      'name': 'HUMAN',
      'check': 'String',
    },
  ],
  'previousStatement': null,
  'nextStatement': null,
  'style': 'prompt_body',
  'tooltip': '',
  'helpUrl': '',
};

const taskRequest = {
  'type': 'task_request',
  'message0': 'Input Task Request for Claude: %1',
  'args0': [
    {
      'type': 'input_value',
      'name': 'TASKREQ',
      'check': 'String',
    },
  ],
  'previousStatement': null,
  'nextStatement': null,
  'style': 'prompt_body',
  'tooltip': '',
  'helpUrl': '',
};

const stepByStep = {
  'type': 'step_by_step',
  'message0': 'Think step by step',
  'previousStatement': null,
  'nextStatement': null,
  'style': 'prompt_body',
  'tooltip': '',
  'helpUrl': '',
};

const outputStyle = {
  'type': 'output',
  "message0": "Common output styles: %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "output_style",
      "options": [
        [
          "No specified output",
          "NONE"
        ],
        [
          "<thinking> tags before <answer> tags",
          "THINKING"
        ],
        [
          "<scratchpad> tags before <answer> tags",
          "SCRATCH"
        ]
      ]
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'style': 'prompt_body',
  'tooltip': '',
  'helpUrl': '',
};

const customOutput = {
  'type': 'custom_output',
  "message0": "Custom output style: %1",
  'args0': [
    {
      'type': 'input_value',
      'name': 'CUSTOUT',
      'check': 'String',
    },
  ],
  'previousStatement': null,
  'nextStatement': null,
  'style': 'prompt_body',
  'tooltip': '',
  'helpUrl': '',
};

const endOfPrompt = {
  'type': 'prompt_end',
  "message0": "End of prompt with option for putting words in Claude's mouth: %1",
  'args0': [
    {
      'type': 'input_value',
      'name': 'PROMPTEND',
      'check': 'String',
    },
  ],
  'previousStatement': null,
  'style': 'prompt_end',
  'tooltip': '',
  'helpUrl': '',
};

const beginOfPrompt = {
  'type': 'prompt_begin',
  "message0": "Beginning of prompt.",
  'nextStatement': null,
  'style': 'prompt_begin',
  'tooltip': '',
  'helpUrl': '',
};


// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
    [taskContext, toneContext, rule, example, humanAssistantConversationHistory, lastHumanInput, taskRequest, stepByStep, outputStyle, customOutput, endOfPrompt, beginOfPrompt]);
