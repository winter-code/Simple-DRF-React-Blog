import java.util.Scanner;

public class Solution {

    public static void main(String[] args) {
            Scanner sc=new Scanner(System.in);
            System.out.println("================================");
            for(int i=0;i<3;i++){
                String s1=sc.next();
                int x=sc.nextInt();
                String c = String.valueOf(x);
                String a = "0";
                String b = "00";
                String d=null;
                if (x<100)
                   if(x<10)
                     d=b+c;
                   else
                  d=a+c;
                
                 else
                   d = String.valueOf(x);
                 
                 
                System.out.printf("%-14s %s\n",s1,d);
            }
            System.out.println("================================");

    }
}
