import * as $protobuf from "protobufjs";
/** Namespace task. */
export namespace task {

    /** Properties of a Task. */
    interface ITask {

        /** Task name */
        name: string;

        /** Task id */
        id?: (string|null);

        /** Task description */
        description?: (string|null);

        /** Task subtasks */
        subtasks?: (string[]|null);

        /** Task tags */
        tags?: (string[]|null);
    }

    /** Represents a Task. */
    class Task implements ITask {

        /**
         * Constructs a new Task.
         * @param [properties] Properties to set
         */
        constructor(properties?: task.ITask);

        /** Task name. */
        public name: string;

        /** Task id. */
        public id: string;

        /** Task description. */
        public description: string;

        /** Task subtasks. */
        public subtasks: string[];

        /** Task tags. */
        public tags: string[];

        /**
         * Creates a new Task instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Task instance
         */
        public static create(properties?: task.ITask): task.Task;

        /**
         * Encodes the specified Task message. Does not implicitly {@link task.Task.verify|verify} messages.
         * @param message Task message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: task.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Task message, length delimited. Does not implicitly {@link task.Task.verify|verify} messages.
         * @param message Task message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: task.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Task message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): task.Task;

        /**
         * Decodes a Task message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): task.Task;

        /**
         * Verifies a Task message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Task message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Task
         */
        public static fromObject(object: { [k: string]: any }): task.Task;

        /**
         * Creates a plain object from a Task message. Also converts values to other types if specified.
         * @param message Task
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: task.Task, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Task to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
