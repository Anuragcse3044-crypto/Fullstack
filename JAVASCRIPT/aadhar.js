class Student{
    #aadhar_no
    constructor(r_no, name,course){
        this.r_no=r_no;
        
        this.name=course

        this.name=name;
    }

    getAadhar(){
        return this.#aadhar_no;
    }

    setAadharNo(num){
        this.#aadhar_no=num;
    }
}

let s=new Student(1,"ANURAG","B.tech-aiml");

s.setAadharNo(123456789012);
console.log(s.getAadhar());