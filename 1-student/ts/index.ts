class Student {
  private id: string;
  private name: string;
  private gpa: number = 0;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  public setGPA(gpa: number): void {
    if (gpa > 4 || gpa < 0) return console.error("GPA Cannot be below 0 or over 4!");

    this.gpa = gpa;
  }

  public getGPA(): number {
    return this.gpa;
  }

  public getId(): string {
    return this.id;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

function main() {
  const student = new Student("MHS1", "Ahmad Zacky");

  // should error here
  student.setGPA(50);

  // should properly set GPA here
  student.setGPA(3);

  console.log(student.getGPA());
}

main();
