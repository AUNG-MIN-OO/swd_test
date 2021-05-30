import java.util.Scanner;
public class MyQuizRobo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("名前を教えてください:");
        String name = sc.next();

        // 第一の問題です
        System.out.printf("\n%sさんは何人ですか。(番号だけ答えてください)\n1.中国人　2.ベトナム人　\n　3.ミャンマー人 4.タイ人　\n",name);
        int ans1 = sc.nextInt();
        String answer;
        int count=0;
        if (ans1 == 3) {
            answer = "ミャンマーはきれいですね。";
            count++;
        } else {
            answer = "違うでしょう。ミャンマー人だと私が知っています。";
        }
        System.out.printf("%sさん答えてくれてありがとう。%s",name,answer);

        System.out.printf("\n%sさん。ミャンマーの首都はどこですか(番号だけ答えてください)\n1.ヤンゴン　2.マンダレー　\n　3.バガン 4.タウンジー　\n",name);
        int ans2 = sc.nextInt();
        if (ans2 == 1) {
            answer = "正解です。上手ですね。";
            count++;
        } else {
            answer = "不正解です。頑張ってください。";
        }
        System.out.printf("%sさん答えてくれてありがとう。%s",name,answer);

        // 第二の問題です
        System.out.printf("\n%sさん、“i love you”を日本語でどう言いますか？\n",name);
        String ans3 = sc.next();
        if (ans3.equals("suki")||ans3.equals("好き")||ans3.equals("すき")) {
            System.out.printf("あってます。%sです。英語上手！！！",ans3);
            count++;
        } else {
            System.out.println("違います。答えは“好き”です");
        }

        // 点数を表示します
        System.out.println("\n点数の発表！！！\n");
        if (count==3) {
            System.out.printf("%sさんの点数は%d点です。よく頑張りました。",name,count);  
        } else {
            System.out.printf("%sさんの点数は%d点です。頑張ってください。",name,count);  
        }
        

        sc.close();
    }
}
