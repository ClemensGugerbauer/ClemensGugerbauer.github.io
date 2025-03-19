import {Component, signal} from '@angular/core';

interface QuestionModel {
  question: string;
  answers: { option: string; correct: boolean }[];
}

@Component({
  selector: 'app-quiz',
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  questions = signal<QuestionModel[] | null>(null);

    constructor() { }

    ngOnInit(): void {
      this.setupQuestions();
    }

  private setupQuestions() {
    this.questions.set([
      {
        question: 'What is the capital of France?',
        answers: [
          { option: 'New York', correct: false },
          { option: 'London', correct: false },
          { option: 'Paris', correct: true },
          { option: 'Dublin', correct: false }
        ]
      },
      {
        question: 'Who is CEO of Tesla?',
        answers: [
          { option: 'Jeff Bezos', correct: false },
          { option: 'Elon Musk', correct: true },
          { option: 'Bill Gates', correct: false },
          { option: 'Tony Stark', correct: false }
        ]
      },
      {
        question: 'The iPhone was created by which company?',
        answers: [
          { option: 'Apple', correct: true },
          { option: 'Intel', correct: false },
          { option: 'Amazon', correct: false },
          { option: 'Microsoft', correct: false }
        ]
      },
      {
        question: 'How many Harry Potter books are there?',
        answers: [
          { option: '1', correct: false },
          { option: '4', correct: false },
          { option: '6', correct: false },
          { option: '7', correct: true }
        ]
      }
    ]);
  }
}
