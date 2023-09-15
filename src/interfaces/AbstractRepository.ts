export interface AbstractRepository<D> {
  create(data: D): Promise<D>;
  findAll(): Promise<D[]>;
  findOne(id: number): Promise<D>;
  update(id: number, data: D): Promise<D>;
  delete(id: number): Promise<D>;
}
