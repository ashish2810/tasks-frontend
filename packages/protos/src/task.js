/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const task = $root.task = (() => {

    /**
     * Namespace task.
     * @exports task
     * @namespace
     */
    const task = {};

    task.Task = (function() {

        /**
         * Properties of a Task.
         * @memberof task
         * @interface ITask
         * @property {string} name Task name
         * @property {string|null} [id] Task id
         * @property {string|null} [description] Task description
         * @property {Array.<string>|null} [subtasks] Task subtasks
         * @property {Array.<string>|null} [tags] Task tags
         */

        /**
         * Constructs a new Task.
         * @memberof task
         * @classdesc Represents a Task.
         * @implements ITask
         * @constructor
         * @param {task.ITask=} [properties] Properties to set
         */
        function Task(properties) {
            this.subtasks = [];
            this.tags = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Task name.
         * @member {string} name
         * @memberof task.Task
         * @instance
         */
        Task.prototype.name = "";

        /**
         * Task id.
         * @member {string} id
         * @memberof task.Task
         * @instance
         */
        Task.prototype.id = "";

        /**
         * Task description.
         * @member {string} description
         * @memberof task.Task
         * @instance
         */
        Task.prototype.description = "";

        /**
         * Task subtasks.
         * @member {Array.<string>} subtasks
         * @memberof task.Task
         * @instance
         */
        Task.prototype.subtasks = $util.emptyArray;

        /**
         * Task tags.
         * @member {Array.<string>} tags
         * @memberof task.Task
         * @instance
         */
        Task.prototype.tags = $util.emptyArray;

        /**
         * Creates a new Task instance using the specified properties.
         * @function create
         * @memberof task.Task
         * @static
         * @param {task.ITask=} [properties] Properties to set
         * @returns {task.Task} Task instance
         */
        Task.create = function create(properties) {
            return new Task(properties);
        };

        /**
         * Encodes the specified Task message. Does not implicitly {@link task.Task.verify|verify} messages.
         * @function encode
         * @memberof task.Task
         * @static
         * @param {task.ITask} message Task message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Task.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.subtasks != null && message.subtasks.length)
                for (let i = 0; i < message.subtasks.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.subtasks[i]);
            if (message.tags != null && message.tags.length)
                for (let i = 0; i < message.tags.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.tags[i]);
            return writer;
        };

        /**
         * Encodes the specified Task message, length delimited. Does not implicitly {@link task.Task.verify|verify} messages.
         * @function encodeDelimited
         * @memberof task.Task
         * @static
         * @param {task.ITask} message Task message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Task.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Task message from the specified reader or buffer.
         * @function decode
         * @memberof task.Task
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {task.Task} Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Task.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.task.Task();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    if (!(message.subtasks && message.subtasks.length))
                        message.subtasks = [];
                    message.subtasks.push(reader.string());
                    break;
                case 5:
                    if (!(message.tags && message.tags.length))
                        message.tags = [];
                    message.tags.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        /**
         * Decodes a Task message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof task.Task
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {task.Task} Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Task.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Task message.
         * @function verify
         * @memberof task.Task
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Task.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.subtasks != null && message.hasOwnProperty("subtasks")) {
                if (!Array.isArray(message.subtasks))
                    return "subtasks: array expected";
                for (let i = 0; i < message.subtasks.length; ++i)
                    if (!$util.isString(message.subtasks[i]))
                        return "subtasks: string[] expected";
            }
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (let i = 0; i < message.tags.length; ++i)
                    if (!$util.isString(message.tags[i]))
                        return "tags: string[] expected";
            }
            return null;
        };

        /**
         * Creates a Task message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof task.Task
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {task.Task} Task
         */
        Task.fromObject = function fromObject(object) {
            if (object instanceof $root.task.Task)
                return object;
            let message = new $root.task.Task();
            if (object.name != null)
                message.name = String(object.name);
            if (object.id != null)
                message.id = String(object.id);
            if (object.description != null)
                message.description = String(object.description);
            if (object.subtasks) {
                if (!Array.isArray(object.subtasks))
                    throw TypeError(".task.Task.subtasks: array expected");
                message.subtasks = [];
                for (let i = 0; i < object.subtasks.length; ++i)
                    message.subtasks[i] = String(object.subtasks[i]);
            }
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".task.Task.tags: array expected");
                message.tags = [];
                for (let i = 0; i < object.tags.length; ++i)
                    message.tags[i] = String(object.tags[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a Task message. Also converts values to other types if specified.
         * @function toObject
         * @memberof task.Task
         * @static
         * @param {task.Task} message Task
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Task.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.subtasks = [];
                object.tags = [];
            }
            if (options.defaults) {
                object.name = "";
                object.id = "";
                object.description = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.subtasks && message.subtasks.length) {
                object.subtasks = [];
                for (let j = 0; j < message.subtasks.length; ++j)
                    object.subtasks[j] = message.subtasks[j];
            }
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (let j = 0; j < message.tags.length; ++j)
                    object.tags[j] = message.tags[j];
            }
            return object;
        };

        /**
         * Converts this Task to JSON.
         * @function toJSON
         * @memberof task.Task
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Task.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Task;
    })();

    return task;
})();

export { $root as default };
