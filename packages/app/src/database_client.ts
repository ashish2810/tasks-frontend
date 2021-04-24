import * as net from "net";
import { Command, Task } from "@tasks/protos";

class DatabaseClient {
  _tasks_client: net.Socket;

  constructor() {
    //handle connection failure
    this._tasks_client = net.connect("/tmp/tasks_app.sock");
  }

  //TODO might have to change all methof ot some to write and read
  public async add_task(task: Task) {
    await this.write_to_socket(
      this.concat_command_and_message(Command.ADD, task.serializeBinary())
    );
  }

  public async update_task(task: Task) {
    await this.write_to_socket(
      this.concat_command_and_message(Command.EDIT, task.serializeBinary())
    );
  }

  public async get_task(id: string) {
    await this.write_to_socket(this.concat_command_and_message(Command.GET, Buffer.from(id, "utf-8")));
  }

  public async get_tasks() {
    let ab = new ArrayBuffer(4);
    this.writeI32toBytes(Command.LIST, ab);
    await this.write_to_socket(new Uint8Array(ab));
  }

  private concat_command_and_message(
    cmd: number,
    message: Uint8Array
  ): Uint8Array {
    let ab = new ArrayBuffer(4 + message.length);
    this.writeI32toBytes(cmd, ab.slice(0, 4));
    let ret = new Uint8Array(ab);
    ret.set(message, 4);
    return ret;
  }

  //TODO: might move to a utils class
  private writeI32toBytes(num: number, ab: ArrayBuffer) {
    new DataView(ab).setUint32(0, num, true);
  }

  async write_to_socket(buf: Uint8Array) {
    //to wait somehow for writeable
		const waitTillReady = (res: (value: string) => void, rej: (err: any) => void) => {
			if(this._tasks_client.readable) res("ready")
			else setTimeout((res,rej) => waitTillReady(res,rej), 5);
		};
    new Promise(waitTillReady).then((_) => this._tasks_client.write(buf));
  }
}

let dc = new DatabaseClient();
