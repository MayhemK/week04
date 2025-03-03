// @ts-ignore
const triviaApi = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=15&type=boolean',
  timeout: 2500
})

class TriviaService {
  async getTrivia() {
    const response = await triviaApi.get('question')
    console.log('question is:', response);

  }
}

export const triviaService = new TriviaService