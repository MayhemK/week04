export class Questions {
  constructor(data) {
    this.question = data.question
    this.correct_answer = data.correct_answer
    this.incorrect_answer = data.incorrect_answer
  }

  get card() {
    return `
    <div class="card-title">
    <div class="fs-3 text-center">Question goes here</div>
    </div>
    <div class="card-body">
    <div class="container">
    <div class="row justify-content-around text-center">
    <div class="col-6">
    <div class="btn btn-secondary">Answer</div>
    </div>
    <div class="col-6">
    <div class="btn btn-secondary">Answer</div>
    </div>
    </div>
    </div>
    </div>
    `
  }

}