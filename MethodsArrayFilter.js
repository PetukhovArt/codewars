function countGrade(scores){
    const grades={S:0, A:0, B:0, C:0, D:0, X:0};
      grades.S=scores.filter(x=> x==100).length;
      grades.A=scores.filter(x=> x<100 && x>=90).length;
      grades.B=scores.filter(x=> x<90 && x>=80).length;
      grades.C=scores.filter(x=> x<80 && x>=60).length;
      grades.D=scores.filter(x=> x<60 && x>=0).length;
      grades.X=scores.filter(x=> x==-1).length;
    return grades;
  }

//7 kyu Training JS #27: methods of arrayObject---filter()
//https://www.codewars.com/kata/573023c81add650b84000429/train/javascript