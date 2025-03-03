import { triviaService } from "../services/TriviaService.js";
import { Pop } from "../utils/Pop.js";
export class TriviaController {
  constructor() {

    console.log('Trivia controller is ready');
    this.getTriviaQuestions()
  }
  async getTriviaQuestions() {
    try {
      await triviaService.getTrivia()
      Pop.success('Successful request to get Trivia Questions')
    } catch (error) {
      console.error('could no get Trivia Questions from API', error);
      Pop.error(error, "Could not get Questions!")
    }
  }
}