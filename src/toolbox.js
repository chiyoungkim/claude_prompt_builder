/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/*
This toolbox contains nearly every single built-in block that Blockly offers,
in addition to the custom block 'add_text' this sample app adds.
You probably don't need every single block, and should consider either rewriting
your toolbox from scratch, or carefully choosing whether you need each block
listed here.
*/

export const toolbox = {
  'kind': 'categoryToolbox',
  'contents': [
    {
      'kind': 'category',
      'name': 'Begin Prompt',
      'categorystyle': 'prompt_begin',
      'contents': [
        {
          'kind': 'block',
          'type': 'prompt_begin',
        },
      ],
    },
    {
      'kind': 'category',
      'name': 'Prompt Body',
      'categorystyle': 'prompt_body',
      'contents': [
        {
          'kind': 'block',
          'type': 'text',
        },
        {
          'kind': 'block',
          'type': 'text_multiline',
        },
        {
          'kind': 'block',
          'type': 'task_context',
          'inputs': {
            'TASK': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': 'Claude\'s role and task context',
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'tone_context',
          'inputs': {
            'TONE': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': 'Claude\'s tone context',
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'rules',
          'inputs': {
            'RULE': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': 'A rule for Claude',
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'example',
          'inputs': {
            'EXAMPLE': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': 'An example for Claude',
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'h_a_convo_history',
          'inputs': {
            'HUMAN': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': 'The Human\'s input',
                },
              },
            },
            'ASSISTANT': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': 'Claude\'s response',
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'last_human_input',
          'inputs': {
            'HUMAN': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': 'Last Human input in history',
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'task_request',
          'inputs': {
            'TASKREQ': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': 'Request for the task',
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'step_by_step',
        },
        {
          'kind': 'block',
          'type': 'output',
          'input': {
          }
        },
        {
          'kind': 'block',
          'type': 'custom_output',
          'inputs': {
            'CUSTOUT': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': 'Custom output',
                },
              },
            },
          },
        },
      ],
    },
    {
      'kind': 'category',
      'name': 'End Prompt',
      'categorystyle': 'prompt_end',
      'contents': [
        {
          'kind': 'block',
          'type': 'prompt_end',
          'inputs': {
            'PROMPTEND': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': '',
                },
              },
            },
          },
        },
      ],
    },
  ],
};
