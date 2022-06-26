/*
  dentro desta pasta(prisma) vai ser feito a implementação desse
  repositório(LessonsRepository) com o banco de dados diretamente
*/

import { CreateLessonData, LessonsRepository } from '../LessonsRepository';

export class PrismaLessonsRepository implements LessonsRepository {
  async create(data: CreateLessonData) {
    await
  };
};