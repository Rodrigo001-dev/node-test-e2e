// nessa pasta(service) vou colocar os meus casos de uso(funcionalidades) da
// aplicação
// utilizando inversão de dependências

import { LessonsRepository } from "../repositories/LessonsRepository";

// quais os dados que o service vai receber
interface CreateLessonRequest {
  title: string;
  description?: string;
};

export class CreateLesson {
  constructor(
    private lessonsRepository: LessonsRepository,
  ) {}

  async execute({ title, description }: CreateLessonRequest) {
    // se o title não foi enviado
    if (!title) {
      throw new Error('Title is required.')
    };

    // fazendo a criação de uma lesson
    await this.lessonsRepository.create({
      title,
      description
    })
  };
};