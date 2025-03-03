import { AppState } from "../AppState.js";
import { triviaService } from "../services/TriviaService.js";
import { Pop } from "../utils/Pop.js";


export class TriviaController {
  constructor() {

    console.log('Trivia controller is ready');
    AppState.on('question', this.drawQuestions)
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

  drawQuestions() {
    const questions = AppState.questions
    let questionCardsContent = ''
    questions.forEach(question => questionCardsContent += question)
    const questionCardElem = document.getElementById('questionCard')
    questionCardElem.innerHTML = questionCardsContent
    console.log('question card', questionCardsContent);

  }
}