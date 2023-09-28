import { Hocuspocus } from "@hocuspocus/server";

// Configure the server …
const server = new Hocuspocus({
  address: "127.0.0.1",
  port: 1234,
});

// … and run it!
server.listen();
