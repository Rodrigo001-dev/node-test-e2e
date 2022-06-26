// utilizando o Repository Pattern / Data Mapper Pattern => abstrair a
// comunicação da aplicação com o banco de dados em repositórios e não fazer a
// comunicação direta através dos serviços ou casos de uso da aplicação

export interface CreateLessonData {
  title: string;
  description?: string;
};

export interface LessonsRepository {
  create(data: CreateLessonData): Promise<void>
};