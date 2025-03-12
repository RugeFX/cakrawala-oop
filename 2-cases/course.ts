class Student {
	private id: string;

	constructor(
		private name: string,
	) {
		this.id = crypto.randomUUID();
	}

	public getID() {
		return this.id;
	}

	public getName() {
		return this.name;
	}

	public setName(name: string) {
		this.name = name;
	}
}

class Course {
	private enrolledStudents: Student[] = [];

	constructor(
		private name: string,
		private maximumStudents: number,
	) {}

	public enroll(student: Student) {
		if (!this.checkAvailability())
			return console.error("Course is full!")
		
		if (this.checkStudentEnrolled(student.getID())) {
			return console.error("This student is already enrolled!")
		}

		this.enrolledStudents.push(student);
	}

	public drop(studentId: string) {
		this.enrolledStudents = this.enrolledStudents.filter((student) => student.id !== studentId); 
	}

	public getEnrolledStudents() {
		return this.enrolledStudents;
	}

	private checkAvailability() {
		return this.enrolledStudents.length < this.maximumStudents;
	}

	private checkStudentEnrolled(studentId: string) {
		return this.enrolledStudents.find((student) => student.id === studentId) !== undefined;
	}
}

function main() {
	const course = new Course("HTML Course", 1);

	const zacky = new Student("Zacky");
	const rafael = new Student("Rafael");

	// CASE 1: maximum students limit reached
	// first enrollment, should succeed
	course.enroll(zacky);
	console.log(course.getEnrolledStudents());

	// second enrollment, should fail
	course.enroll(rafael);
	console.log(course.getEnrolledStudents());

	// CASE 2: student enrolling on a course they are already in 
	const course2 = new Course("Javascript Course", 3);

	// first enrollments, should succeed
	course2.enroll(zacky);
	course2.enroll(rafael);
	console.log(course2.getEnrolledStudents());

	// second enrollment of same student, should fail
	course2.enroll(zacky);
	console.log(course2.getEnrolledStudents());
}

main();
