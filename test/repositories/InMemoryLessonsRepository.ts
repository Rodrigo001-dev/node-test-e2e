// utilizando o Pattern chamado In Memory database
// que é nada mais do que um banco de dados que vai rodar na memória sem tocar no
// disco, é criado no processo de start da aplicação e vai rodar durante os testes
// e depois ele é destruído quando o processo finaliza

import { Lesson } from "@prisma/client";
import crypto from 'node:crypto';
import { CreateLessonData, LessonsRepository } from "../../src/repositories/LessonsRepository";

export class InMemoryLessonsRepository implements LessonsRepository {
  public items: Lesson[] = [];
  
  async create(data: CreateLessonData) {
    // quando eu cadastrar uma novo aula é inserir essa aula para dentro da lista(items)
    this.items.push({
      id: crypto.randomUUID(),
      title: data.title,
      description: data.description ?? null,
    });
  };
};