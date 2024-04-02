export default class TaskItem {
  constructor(
    public id: number,
    public label: string,
    public finished: boolean = false
  ) {}
}
