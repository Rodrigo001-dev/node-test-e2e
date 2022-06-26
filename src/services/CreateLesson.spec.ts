import { InMemoryLessonsRepository } from "../../test/repositories/InMemoryLessonsRepository";
import { CreateLesson } from "./CreateLesson";

describe('CreateLesson service', () => {
  it('should be able to create a new lesson', async () => {
    // o CreateLesson espera um repositório mas eu não posso passar o
    // PrismaLessonsRepository porque esse é um teste unitário e eu não quero
    // que ele teste outras camadas, eu quero testar somente o serviço CreateLesson
    // desacoplado de qualquer dependência que ele tenha
    const inMemoryLessonsRepository = new InMemoryLessonsRepository();
    const createLesson = new CreateLesson(inMemoryLessonsRepository);

    // eu espero que a resolução da promise createLesson.execute não dispare
    // nenhum erro 
    await expect(createLesson.execute({ title: 'Nova aula' }))
      .resolves
      .not
      .toThrow()

    // dentro do inMemoryLessonsRepository dentro dos items salvos 
    expect(inMemoryLessonsRepository.items).toEqual(
      // procurando se o array de items contém um objeto 
      expect.arrayContaining([
        // que contém um title Nova aula
        expect.objectContaining({
          title: 'Nova aula'
        })
      ])
    )
  });

  it('should NOT be able to create a new lesson with invalid title', async () => {
    // o CreateLesson espera um repositório mas eu não posso passar o
    // PrismaLessonsRepository porque esse é um teste unitário e eu não quero
    // que ele teste outras camadas, eu quero testar somente o serviço CreateLesson
    // desacoplado de qualquer dependência que ele tenha
    const inMemoryLessonsRepository = new InMemoryLessonsRepository();
    const createLesson = new CreateLesson(inMemoryLessonsRepository);

    // eu espero que a resolução da promise createLesson.execute não dispare
    // nenhum erro 
    await expect(createLesson.execute({ title: '' }))
      .rejects
      .toThrow()

    
    expect(inMemoryLessonsRepository.items).toEqual([]);
  });
});