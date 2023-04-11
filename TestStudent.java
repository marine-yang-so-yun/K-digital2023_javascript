package htmlcss;
class Student {
	 static int countStudents;//객체수
	 int sid;//학번
	 String sname; //학생 이름
	 String city; //주소 도시
	 void showStudent() {
		 System.out.print("객체: ");
		 this.toString();
		 System.out.println();
	 }

	 
	 public Student()	{
		 this.sid = 0;
		 this.sname = null;
		 this.city = null;
		 countStudents++;
	 }
	 
	 public Student(int sid)	{
		 this.sid = sid;
		 this.sname = null;
		 this.city = null;
		 countStudents++;
	 }
	 public Student(int sid, String sname)	{
		 this.sid = sid;
		 this.sname = sname;
		 this.city = null;
		 countStudents++;
	 }
	 public Student(int sid, String sname, String city)	{
		 this.sid = sid;
		 this.sname = sname;
		 this.city = null;
		 countStudents++;
	 }
	public static void showNumberObjects() {
		System.out.println(countStudents);
		
	}
	 
	 
}

public class TestStudent {

public static void main()
	 {
		 int [] a = new int [5];
		 Student arry[] = new Student[5];
		 Student.showNumberObjects();
		 arry[0] = new Student();
		 arry[1] = new Student(202301);
		 arry[2] = new Student(202302, "Hong");
		 arry[3] = new Student(202303, "Lee", "Busan");
		 arry[4] = new Student(202304, "Na", "jeju");
		 Student.showNumberObjects();
		 
		 for (int i = 0; i < 5; i++) {
			 arry[i].showStudent();//생성된 객체 모두를 출력한다.
		 }
	 }
	 
}


