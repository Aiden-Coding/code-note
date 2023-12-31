# 深入理解 Java 变量

* [深入理解 Java 变量](#深入理解-java-变量)
   * [变量汇总](#变量汇总)
      * [实例变量](#实例变量)
         * [如何识别实例变量](#如何识别实例变量)
         * [实例变量的特点](#实例变量的特点)
      * [全局变量](#全局变量)
      * [静态变量](#静态变量)
         * [静态变量的特点](#静态变量的特点)
      * [类变量](#类变量)
      * [局部变量](#局部变量)
      * [成员变量](#成员变量)
      * [常量](#常量)
   * [验证过程](#验证过程)
   * [bilibili](#bilibili)

网上罗列了很多关于变量的理解，良莠不齐，不知道哪些是对的，哪些是错的，所以笔者就这些博客和自己的理解写出这篇文章，如果有不对的地方，希望读者能够指正，感谢。

变量是我们经常用到的一种，我在刚学 Java 的时候，也经常被各种变量的概念折磨，当时并没有细抠，但是我在写一篇类似的文章中，想把变量作为一种小标题来简述一下，但是发现，变量这个概念还是比较繁琐的，本篇文章就来深入认识一下 Java 中这些变量的概念

## 变量汇总

所以，到底有哪些变量的概念呢？距今为止，目前已知的变量主要有

* 实例变量
* 全局变量
* 静态变量
* 类变量
* 局部变量
* 成员变量
* 常量

下面我们就采用各个击破的方式来认识每个概念

### 实例变量

实例变量又被称为`Instance variables`。不使用 `static` 关键字定义，并且在任何方法、构造方法、块之外的变量都是`实例变量`。实例变量都是基于特定实例的，实例变量不会在实例之间共享，也就是说，每一个对象的实例都有自己的一个实例变量。下面是实例变量的一个例子

```java
class Fruits {
  
  public String fruitName; // 具有公共访问权限的 fruitName;
  private int fruitNum;		 // 具有私有访问权限的 fruitNum;
  
}
```

你可以使用下面这种方式进行实例变量的调用

```java
public class Fruits {

    public String fruitName;
    private int fruitNum;

    public static void main(String[] args) {
        Fruits fruits = new Fruits();
        fruits.fruitName = "strawberry";
        fruits.fruitNum = 100;
    }
}
```

#### 如何识别实例变量

那么我如何知道一个变量它是实例变量呢？下面是一些关于实例变量的定义规则

* 实例变量可以使用四种访问修饰符进行修饰：**public、protected、default、private**
* 实例变量可以使用 `transient、final` 关键字进行修饰
* 实例变量不可以使用 `abstract、synchronized、strictfp、native、static`关键字进行修饰

实例变量带有默认值，也就是说，实例变量不用初始化就能使用。下面是常用实例变量的初始值

![](http://www.cxuan.vip/image-20230203221726151.png)

#### 实例变量的特点

上面我们了解了实例变量的基本特征和如何区分实例变量，下面我们来讲一下实例变量的特点。

* 实例变量的只能在类中声明，但是在方法、构造函数或任何块之外。
* 当在为堆中对象分配空间时，将为每个实例变量分配一块区域。
* 实例变量只能通过创建对象来使用，当使用 `new` 关键字进行创建对象时，实例变量同时也被创建，当垃圾回收器回收对象时，实例变量也会被销毁。
* 实例变量可以使用访问`修饰符`来修饰
* 实例变量不用强制初始化，它有自己的默认值。

* 每个对象都有自己的一个实例变量的副本，因此在一个对象中修改变量不会对其他对象中的实例变量造成影响
* 实例变量只能通过创建对象引用来使用。

### 全局变量

全局变量又被称为`Global variables`。如果你有其他语言的编程经验，比如 C、C++ 的话，你会接触到全局变量这个概念，你可以使用下面代码来创建全局变量

```c
#include<stdio.h>

	// 全局变量
	int A;
	int B;

	int Add()
	{
		return A + B;
	}
```

但是在 Java 中，**是不存在全局变量的**。因为 Java 是一门面向对象的编程语言，所有的内容都是属于类的一部分。Java 这么做的原因是为了防止数据和类成员被其他程序的其他部分有意或者无意的修改。所以在 Java 中，使用 `静态变量` 来起到全局访问的目的。

### 静态变量

静态变量又被称为`Static variables`。静态变量的定义比较简单，静态变量是属于该`类`的变量，它是由 `static` 关键字来修饰的。static 修饰的变量属于静态变量，它只能定义在类的内部、方法的外部。

#### 静态变量的特点

* 静态变量只能使用 static 关键字进行修饰，它不能在方法中进行声明，不论是静态方法还是非静态方法。

![](http://www.cxuan.vip/image-20230203221739006.png)

* 静态变量会在程序运行前进行初始化，并且只初始化一次。**静态变量会有一个初始化顺序，我们后面说**。
* 静态变量的所有实例共享同一个副本。也就是说，静态变量只有一个，它不会随着对象实例的创建而进行副本拷贝
* 静态变量可以通过`类名.变量名` 进行访问，并且不需要创建任何对象就能访问。

```java
public class Fruits {

    public String fruitName;
    private int fruitNum;
    static String fruitType;

    public static void main(String[] args) {
        Fruits.fruitType = "apple"; // 类名.变量名
        System.out.println(fruitType);
    }
}
```

* 可以在`非静态方法` 中使用静态变量

### 类变量

类变量又被称为 `Class variables`在 Java 中，类变量就是静态变量，它们都用 `static` 关键字进行修饰，所以，如果你再听到说静态变量的时候，它也就是类变量。

### 局部变量

还有一种说法，说 Java 中只有类变量、实例变量和局部变量。这么分也没有问题，可能有人会问到，你把成员变量和常量放在哪了？别着急我们后面会说

先来说一下什么是`局部变量`

局部变量又称为 `Local variables`。它指的是在方法中、构造器中或者块代码中定义的变量。局部变量的生命周期随方法、构造器、代码块的执行完毕而销毁。

不管上面的一些变量概念如何变换、局部变量都**站如松，坐如钟，行如风，卧如弓**，从容应对各种不同文章的比较。真是一个省事的变量。

<img src="http://www.cxuan.vip/image-20230203221751569.png" style="zoom:50%;" />

那么这么好的东西我们可要仔细研究一下其特点是啥

* 根据定义可知，局部变量定义在方法、构造器或者代码块中；
* 然后局部变量的生命周期随方法、构造器、代码块的执行完毕而销毁；
* 局部变量不能使用访问修饰符，例如如下代码

![](http://www.cxuan.vip/image-20230203221804721.png)

* 局部变量仅在方法的声明、构造函数或者块内可见，局部变量只能在调用这些方法、构造函数或者块的内部使用

* 局部变量没有默认值，所以局部变量应该在第一次使用或者声明的时候就应该初始化完成

![](http://www.cxuan.vip/image-20230203221817843.png)

### 成员变量

什么？成员变量在 Java 中就是实例变量？这个结论对吗？

### 常量

![](http://www.cxuan.vip/image-20230203222055606.png)

## 验证过程

为了验证这个结论，我们求助于了 `stackoverflow` 网站

![](http://www.cxuan.vip/image-20230203221841339.png)

我们搜索 **java member variable and instance variable** 就帮我们定为到了这个标题

大致意思是：什么是成员变量？成员变量和实例变量是否相同呢？我们下面有个回答

![](http://www.cxuan.vip/image-20230203221849479.png)

第一句就给出，**实例变量和类变量都称为成员变量**，然后给出了 JDK 官网手册对变量的定义。意思是在 Java 中，只有三中类型的变量

* 定义在类中的成员变量 --- 被称为属性
* 定义在方法（包含构造方法）或者块代码中的变量 --- 被称为局部变量
* 定义在方法定义中的变量 --- 被称为参数

嗯。。。或许还不是很好解决我们的问题，我带着问题再次求助 JDK 官网手册，又看到了关于 `Variables` 的定义

![](http://www.cxuan.vip/image-20230203221859082.png)

意思是在 Java 中，只有下面几种类型的变量（别扯别的了，莫非你比官网还靠谱？）

* `实例变量(非静态属性)` ：大致意思就是说

![](http://www.cxuan.vip/image-20230203221907891.png)

非静态属性也就被称为`实例变量`，因为它们的值是相对于每个实例来说的。换句话说，对于每个对象来讲，实例变量的值都是唯一的；

* `类变量(静态属性)`：类变量就是使用 static 修饰符声明的字段，这就会告诉编译器：无论该类被实例化了多少次，该变量只存在一个副本。另外，可以添加关键字 final 来表示`常量`。
* `局部变量`：没有特殊的关键字将制定的变量声明为局部变量、确定其声明的完全取决于声明变量的位置。

* `参数`：想一下我们平常用到最多的方法是什么方法？当然是 `main` 方法啊，main 方法是怎么定义的？

```java
public static void main(String[] args) {}
```

其中的 args 是不是就是 String 的数组的变量，我们也称其为`参数`，所以参数也没有关键字进行声明，标识其为参数也只是取决于其声明位置。

## bilibili

所以

![](http://www.cxuan.vip/image-20230203221923113.png)

我写了一篇文章为了给你讲清楚，现在你应该知道 Java 中到底有哪些变量了吧。

如果你用 static 来定义变量，只能是类变量、或者说静态变量、而且其定义位置只能在类中，方法或代码块外，变量的副本只有一个。

如果你不用 static 来声明变量，那么就会有三种变量的叫法

* 定义在构造方法、代码块、方法`外`的变量被称为实例变量，实例变量的副本数量和实例的数量一样。
* 定义在方法、构造方法、代码块`内`的变量被称为局部变量；
* 定义在方法参数`中`的变量被称为参数。

也就是下面代码所描述的这样

```java
public class VariablesInJava {

	int instanceVariable; // 实例变量

	static String staticVariable; // 类变量

	public void method() {
    
		String localVariable = "localVariable"; // 局部变量
		System.out.println(localVariable);
	}

	public static void main(String args[]) {} //参数
}
```

如果你在阅读文章的过程中发现错误和问题，请及时与我联系！

如果文章对你有帮助，希望小伙伴们三连走起！
