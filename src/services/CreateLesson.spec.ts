import { CreateLesson } from "./CreateLesson";

describe('create lesson', () => {
  it('should be able to create a lesson', async () => {
    // o CreateLesson espera um repositório mas eu não posso passar o
    // PrismaLessonsRepository porque esse é um teste unitário e eu não quero
    // que ele teste outras camadas, eu quero testar somente o serviço CreateLesson
    // desacoplado de qualquer dependência que ele tenha
    const createLesson = new CreateLesson({
      create: async (data) => {}
    });

    // eu espero que a resolução da promise createLesson.execute não dispare
    // nenhum erro 
    await expect(createLesson.execute({ title: 'Nova aula' }))
      .resolves
      .not
      .toThrow()
  });
});