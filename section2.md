# Basics & Core Concepts - DOM Interaction with Vue

1. Module Introduction (0:48)
   Vue のコアコンセプト、テンプレートや動的出力・ユーザーからの入力への対応

w
methods の導入
少し動的なアプリをはじめて作る

6. Working with Data inside of a Vue App (3:23)
   mtdhods 内で data プロパティにアクセスする

7. Outputting Raw HTML Content with v-html (3:31)
   v-html は html エスケープを回避する

8. A First Summary (4:12)
   まとめ
   declerative approach とは、開発者が宣言すると

9. Time to Practice: Data Binding - Problem (2:55)
   実践　そんなにむずかしくない

10. Time to Practice: Data Binding - Solution (11:34)
    解説

11. Understanding Event Binding (7:17)
    v-on の導入

12. Events & Methods (6:12)
    v-on の中で、js そのままより、js 内のメソッド書いた方が良い

13. Working with Event Arguments (2:59)
    メソッドに引数を渡すのに、html の中に直接書く（click="add(10)"）こともできる

14. Using the Native Event Object (8:59)
    JS のブラウザの機能を使う
    $event でイベントオブジェクト明示的に取れる

15. Exploring Event Modifiers (9:53)
    ブラウザが自動で送るのを防ぐ方法
    modifiers を使うと、enter を押した時のみや右クリックときのみなど発火するパターンを絞ることができる

16. Locking Content with v-once (2:07)
    v-once 最初の 1 回だけ保存してくれる

17. Time to Practice: Event Binding - Problem (1:47)
    keydown と keyup と input があってややこしいんじゃ

18. Time to Practice: Event Binding - Solution (8:54)
    ういすういす

19. Data Binding + Event Binding = Two-Way Binding (6:32)
    v-model の導入 two-way binding

20. Methods used for Data Binding: How It Works (6:46)
    一々打ってると時間が間に合わなさそうなので、板書うつさないで理解に集中するスタイルにする
    {{ メソッド }} のスタイルだと、値が変更されるたびに更新走ってしまう

21. Introducing Computed Properties (5:58)
    ↑ を受けて、Computed Properties の導入

22. Working with Watchers (10:49)
    watchers の導入
    値の変更を検知したいだけなら computed properties で ok

23. Methods vs Computed Properties vs Watchers (2:27)
    methods method is ececuted for 'every re-render' cycle
    computed deta binding only
    watchers not used directly in template
    data にない値を update するなら使ってよいかも

24. v-bind and v-on Shorthands (1:53)
    v-on は,@click などのように短縮系で書ける
    v-bind は、:value="..." のように書ける colon

25. Time to Practice: Reactivity - Problem (1:57)
    computed か watch か悩む

26. Time to Practice: Reactivity - Solution (9:00)
    computed は値、watch は return しない

27. Dynamic Styling with Inline Styles (7:19)
    CSS をインラインで書いてみる

28. Adding CSS Classes Dynamically (6:31)
    CSS を class で書いてみる

29. Classes & Computed Properties (1:57)
    :class に書いてたのを、computed に書くこともできる

30. Dynamic Classes: Array Syntax (1:22)
    配列を渡すこともできる

31. Time to Practice: Dynamic Styling - Problem (2:32)
    v-model べんり

32. Time to Practice: Dynamic Styling - Solution (8:24)
    computed に css まとめてた

33. Module Summary (4:14)
    やっと終わった・・・　長かった・・・　丸 2 日かかった？

34. Module Resources
