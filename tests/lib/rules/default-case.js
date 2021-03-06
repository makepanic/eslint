/**
 * @fileoverview require default case in switch statements
 * @author Aliaksei Shytkin
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslintTester = require("eslint-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

eslintTester.addRuleTest("lib/rules/default-case", {

    valid: [
        "switch (a) { case 1: break; default: break; }",
        "switch (a) { case 1: break; case 2: default: break; }",
        "switch (a) { case 1: break; default: break; \n //no default \n }",
        "switch (a) { \n    case 1: break; \n\n//oh-oh \n // no default\n }",
        "switch (a) { \n    case 1: \n\n// no default\n }",
        "switch (a) { \n    case 1: a = 4; \n\n// no default\n }",
        "switch (a) { \n    case 1: a = 4; \n\n/* no default */\n }",
        "switch (a) { \n    case 1: a = 4; break; break; \n\n// no default\n }",
        "switch (a) { // no default\n }",
        "switch (a) { }"
    ],

    invalid: [
        {
            code: "switch (a) { case 1: break; }",
            errors: [{
                message: "No default case.",
                type: "SwitchStatement"
            }]
        },
        {
            code: "switch (a) { \n // no default \n case 1: break;  }",
            errors: [{
                message: "No default case.",
                type: "SwitchStatement"
            }]
        },
        {
            code: "switch (a) { case 1: break; \n // no default \n // nope \n  }",
            errors: [{
                message: "No default case.",
                type: "SwitchStatement"
            }]
        }

    ]
});
