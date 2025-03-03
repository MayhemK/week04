import { triviaService } from "../services/TriviaService.js";

export class TriviaController {
  constructor() {

    console.log('Trivia controller is ready');
    this.getTriviaQuestions()
  }
  async getTriviaQuestions() {
    try {
      triviaService.getTriviaQuestions()
    } catch (error) {
      console.error('could no get Trivia Questions from API', error);

    }
  }
}