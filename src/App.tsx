import React from "react";
import FS from "@isomorphic-git/lightning-fs";
import http from "isomorphic-git/http/web";
import { listRemotes } from "isomorphic-git";
const fs = new FS("fs");

function App() {
  return <div>Sample project</div>;
}

async function listAllRemotes() {
  try {
    return await listRemotes({ fs, dir: "/fs" });
  } catch (error) {
    return [];
  }
}

export default App;
