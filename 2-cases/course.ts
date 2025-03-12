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
        ) { }

        public getName() {
                return this.name;
        }

        public getEnrolledStudents() {
                return this.enrolledStudents;
        }

        public enroll(student: Student) {
                if (!this.checkAvailability())
                        return console.error("Course is full!")

                if (this.checkStudentEnrolled(student.getID())) {
                        return console.error("This student is already enrolled!")
                }

                this.enrolledStudents.push(student);
        }

        public drop(student: Student) {
                this.enrolledStudents = this.enrolledStudents.filter((s) => s.getID() !== student.getID());
        }

        private checkAvailability() {
                return this.enrolledStudents.length < this.maximumStudents;
        }

        private checkStudentEnrolled(studentId: string) {
                return this.enrolledStudents.find((student) => student.getID() === studentId) !== undefined;
        }
}

function main() {
        const course = new Course("HTML Course", 1);

        const zacky = new Student("Zacky");
        const rafael = new Student("Rafael");

        // CASE 1: maximum students limit reached
        console.log("============== CASE 1 ==============")
        // first enrollment, should succeed
        course.enroll(zacky);
        console.log(course.getEnrolledStudents());

        // second enrollment, should fail
        course.enroll(rafael);
        console.log(course.getEnrolledStudents());

        // CASE 2: student enrolling on a course they are already in 
        console.log("============== CASE 2 ==============")
        const course2 = new Course("Javascript Course", 3);

        // first enrollments, should succeed
        // this also means that students can enroll to multiple different courses
        course2.enroll(zacky);
        course2.enroll(rafael);
        console.log(course2.getEnrolledStudents());

        // second enrollment of same student, should fail
        course2.enroll(zacky);
        console.log(course2.getEnrolledStudents());

        // CASE 3: dropping students from courses
        console.log("============== CASE 3 ==============")
        course2.drop(zacky);
        course.drop(zacky);

        // courses should not have zacky registered as it's student
        console.log("Course 1: ", course.getEnrolledStudents());
        console.log("Course 2: ", course2.getEnrolledStudents());
}

main();
