/*
  dentro desta pasta(prisma) vai ser feito a implementação desse
  repositório(LessonsRepository) com o banco de dados diretamente
*/

import { prisma } from '../../prisma';
import { CreateLessonData, LessonsRepository } from '../LessonsRepository';

export class PrismaLessonsRepository implements LessonsRepository {
  async create(data: CreateLessonData) {
    await prisma.lesson.create({
      data
    })
  };
};