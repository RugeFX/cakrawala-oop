#[derive(Debug)]
struct Student {
    id: String,
    name: String,
    gpa: f32,
}

impl Student {
    fn new(name: String) -> Self {
        Self {
            name,
            id: "id-test".to_string(),
            gpa: 0.0,
        }
    }

    fn set_gpa(&mut self, gpa: f32) {
        if gpa < 0.0 || gpa > 4.0 {
            println!("GPA must be below 4 and above 0!");
            return
        }
        self.gpa = gpa;
    }
}

fn main() {
    let mut student = Student::new("Zacky".to_string());

    println!("Student: {student:?}");
    
    student.set_gpa(5.0);
    student.set_gpa(4.0);

    println!("Student: {student:?}");
}
