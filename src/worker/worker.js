/* eslint import/no-webpack-loader-syntax: off */
import worker from "workerize-loader!./handleFiles.js";
// import  * as worker from "./handleFiles.js";

export default worker;
