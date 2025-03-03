import { Questions } from "./models/Trivia.js";
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  /**@type {Questions[]} */
  questions = []
}

export const AppState = createObservableProxy(new ObservableAppState())