/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const command = $root.command = (() => {

    /**
     * Namespace command.
     * @exports command
     * @namespace
     */
    const command = {};

    /**
     * Command enum.
     * @name command.Command
     * @enum {number}
     * @property {number} Add=0 Add value
     * @property {number} Edit=1 Edit value
     * @property {number} Get=2 Get value
     * @property {number} List=3 List value
     */
    command.Command = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Add"] = 0;
        values[valuesById[1] = "Edit"] = 1;
        values[valuesById[2] = "Get"] = 2;
        values[valuesById[3] = "List"] = 3;
        return values;
    })();

    return command;
})();

export { $root as default };
