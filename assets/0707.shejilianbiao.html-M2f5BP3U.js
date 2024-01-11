import{_ as i,r as p,o as l,c as o,a as n,b as s,d as e,e as t}from"./app-3RcBQnkC.js";const c={},d=n("blockquote",null,[n("p",null,"听说这道题目把链表常见的五个操作都覆盖了？")],-1),u=n("h1",{id:"_707-设计链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_707-设计链表","aria-hidden":"true"},"#"),s(" 707.设计链表")],-1),r={href:"https://leetcode.cn/problems/design-linked-list/",target:"_blank",rel:"noopener noreferrer"},k=t('<p>题意：</p><p>在链表类中实现这些功能：</p><ul><li>get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。</li><li>addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。</li><li>addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。</li><li>addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。</li><li>deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。</li></ul><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20200814200558953.png" alt="707示例"></p><h2 id="算法公开课" tabindex="-1"><a class="header-anchor" href="#算法公开课" aria-hidden="true">#</a> 算法公开课</h2>',5),v={href:"https://programmercarl.com/other/gongkaike.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.bilibili.com/video/BV1FU4y1X7WD",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),s(" 思路")],-1),x={href:"https://programmercarl.com/%E9%93%BE%E8%A1%A8%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://programmercarl.com/0203.%E7%A7%BB%E9%99%A4%E9%93%BE%E8%A1%A8%E5%85%83%E7%B4%A0.html",target:"_blank",rel:"noopener noreferrer"},w=t(`<p>删除链表节点： <img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20200806195114541.png" alt="链表-删除节点"></p><p>添加链表节点： <img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20200806195134331.png" alt="链表-添加节点"></p><p>这道题目设计链表的五个接口：</p><ul><li>获取链表第index个节点的数值</li><li>在链表的最前面插入一个节点</li><li>在链表的最后面插入一个节点</li><li>在链表第index个节点前面插入一个节点</li><li>删除链表的第index个节点</li></ul><p>可以说这五个接口，已经覆盖了链表的常见操作，是练习链表操作非常好的一道题目</p><p><strong>链表操作的两种方式：</strong></p><ol><li>直接使用原来的链表来进行操作。</li><li>设置一个虚拟头结点在进行操作。</li></ol><p>下面采用的设置一个虚拟头结点（这样更方便一些，大家看代码就会感受出来）。</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class MyLinkedList {
public:
    // 定义链表节点结构体
    struct LinkedNode {
        int val;
        LinkedNode* next;
        LinkedNode(int val):val(val), next(nullptr){}
    };

    // 初始化链表
    MyLinkedList() {
        _dummyHead = new LinkedNode(0); // 这里定义的头结点 是一个虚拟头结点，而不是真正的链表头结点
        _size = 0;
    }

    // 获取到第index个节点数值，如果index是非法数值直接返回-1， 注意index是从0开始的，第0个节点就是头结点
    int get(int index) {
        if (index &gt; (_size - 1) || index &lt; 0) {
            return -1;
        }
        LinkedNode* cur = _dummyHead-&gt;next;
        while(index--){ // 如果--index 就会陷入死循环
            cur = cur-&gt;next;
        }
        return cur-&gt;val;
    }

    // 在链表最前面插入一个节点，插入完成后，新插入的节点为链表的新的头结点
    void addAtHead(int val) {
        LinkedNode* newNode = new LinkedNode(val);
        newNode-&gt;next = _dummyHead-&gt;next;
        _dummyHead-&gt;next = newNode;
        _size++;
    }

    // 在链表最后面添加一个节点
    void addAtTail(int val) {
        LinkedNode* newNode = new LinkedNode(val);
        LinkedNode* cur = _dummyHead;
        while(cur-&gt;next != nullptr){
            cur = cur-&gt;next;
        }
        cur-&gt;next = newNode;
        _size++;
    }

    // 在第index个节点之前插入一个新节点，例如index为0，那么新插入的节点为链表的新头节点。
    // 如果index 等于链表的长度，则说明是新插入的节点为链表的尾结点
    // 如果index大于链表的长度，则返回空
    // 如果index小于0，则在头部插入节点
    void addAtIndex(int index, int val) {

        if(index &gt; _size) return;
        if(index &lt; 0) index = 0;        
        LinkedNode* newNode = new LinkedNode(val);
        LinkedNode* cur = _dummyHead;
        while(index--) {
            cur = cur-&gt;next;
        }
        newNode-&gt;next = cur-&gt;next;
        cur-&gt;next = newNode;
        _size++;
    }

    // 删除第index个节点，如果index 大于等于链表的长度，直接return，注意index是从0开始的
    void deleteAtIndex(int index) {
        if (index &gt;= _size || index &lt; 0) {
            return;
        }
        LinkedNode* cur = _dummyHead;
        while(index--) {
            cur = cur -&gt;next;
        }
        LinkedNode* tmp = cur-&gt;next;
        cur-&gt;next = cur-&gt;next-&gt;next;
        delete tmp;
        //delete命令指示释放了tmp指针原本所指的那部分内存，
        //被delete后的指针tmp的值（地址）并非就是NULL，而是随机值。也就是被delete后，
        //如果不再加上一句tmp=nullptr,tmp会成为乱指的野指针
        //如果之后的程序不小心使用了tmp，会指向难以预想的内存空间
        tmp=nullptr;
        _size--;
    }

    // 打印链表
    void printLinkedList() {
        LinkedNode* cur = _dummyHead;
        while (cur-&gt;next != nullptr) {
            cout &lt;&lt; cur-&gt;next-&gt;val &lt;&lt; &quot; &quot;;
            cur = cur-&gt;next;
        }
        cout &lt;&lt; endl;
    }
private:
    int _size;
    LinkedNode* _dummyHead;

};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度: 涉及 <code>index</code> 的相关操作为 O(index), 其余为 O(1)</li><li>空间复杂度: O(n)</li></ul><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C:</h3><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>typedef struct MyLinkedList {
    int val;
    struct MyLinkedList* next;
}MyLinkedList;

/** Initialize your data structure here. */

MyLinkedList* myLinkedListCreate() {
    //这个题必须用虚拟头指针,参数都是一级指针,头节点确定后没法改指向了!!!
    MyLinkedList* head = (MyLinkedList *)malloc(sizeof (MyLinkedList));
    head-&gt;next = NULL;
    return head;
}

/** Get the value of the index-th node in the linked list. If the index is invalid, return -1. */
int myLinkedListGet(MyLinkedList* obj, int index) {
    MyLinkedList *cur = obj-&gt;next;
    for (int i = 0; cur != NULL; i++){
        if (i == index){
            return cur-&gt;val;
        }
        else{
            cur = cur-&gt;next;
        }
    }
    return -1;
}

/** Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. */
void myLinkedListAddAtHead(MyLinkedList* obj, int val) {
    MyLinkedList *nhead = (MyLinkedList *)malloc(sizeof (MyLinkedList));
    nhead-&gt;val = val;
    nhead-&gt;next = obj-&gt;next;
    obj-&gt;next = nhead;

}

/** Append a node of value val to the last element of the linked list. */
void myLinkedListAddAtTail(MyLinkedList* obj, int val) {
    MyLinkedList *cur = obj;
    while(cur-&gt;next != NULL){
        cur = cur-&gt;next;
    }
    MyLinkedList *ntail = (MyLinkedList *)malloc(sizeof (MyLinkedList));
    ntail-&gt;val = val;
    ntail-&gt;next = NULL;
    cur-&gt;next = ntail;
}

/** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
void myLinkedListAddAtIndex(MyLinkedList* obj, int index, int val) {
    if (index == 0){
        myLinkedListAddAtHead(obj, val);
        return;
    }
    MyLinkedList *cur = obj-&gt;next;
    for (int i = 1 ;cur != NULL; i++){
        if (i == index){
            MyLinkedList* newnode = (MyLinkedList *)malloc(sizeof (MyLinkedList));
            newnode-&gt;val = val;
            newnode-&gt;next = cur-&gt;next;
            cur-&gt;next = newnode;
            return;
        }
        else{
            cur = cur-&gt;next;
        }
    }
}

/** Delete the index-th node in the linked list, if the index is valid. */
void myLinkedListDeleteAtIndex(MyLinkedList* obj, int index) {
    if (index == 0){
        MyLinkedList *tmp = obj-&gt;next;
        if (tmp != NULL){
            obj-&gt;next = tmp-&gt;next;
            free(tmp);     
        }
        return;
    }
    MyLinkedList *cur = obj-&gt;next;
    for (int i = 1 ;cur != NULL &amp;&amp; cur-&gt;next != NULL; i++){
        if (i == index){
            MyLinkedList *tmp = cur-&gt;next;
            if (tmp != NULL) {
                cur-&gt;next = tmp-&gt;next;
                free(tmp);
            }
            return;
        }
        else{
            cur = cur-&gt;next;
        }
    }
    
}

void myLinkedListFree(MyLinkedList* obj) {
    while(obj != NULL){
        MyLinkedList *tmp = obj;
        obj = obj-&gt;next;
        free(tmp);
    }
}

/**
 * Your MyLinkedList struct will be instantiated and called as such:
 * MyLinkedList* obj = myLinkedListCreate();
 * int param_1 = myLinkedListGet(obj, index);
 
 * myLinkedListAddAtHead(obj, val);
 
 * myLinkedListAddAtTail(obj, val);
 
 * myLinkedListAddAtIndex(obj, index, val);
 
 * myLinkedListDeleteAtIndex(obj, index);
 
 * myLinkedListFree(obj);
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//单链表
class ListNode {
    int val;
    ListNode next;
    ListNode(){}
    ListNode(int val) {
        this.val=val;
    }
}
class MyLinkedList {
    //size存储链表元素的个数
    int size;
    //虚拟头结点
    ListNode head;

    //初始化链表
    public MyLinkedList() {
        size = 0;
        head = new ListNode(0);
    }

    //获取第index个节点的数值，注意index是从0开始的，第0个节点就是头结点
    public int get(int index) {
        //如果index非法，返回-1
        if (index &lt; 0 || index &gt;= size) {
            return -1;
        }
        ListNode currentNode = head;
        //包含一个虚拟头节点，所以查找第 index+1 个节点
        for (int i = 0; i &lt;= index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode.val;
    }

    //在链表最前面插入一个节点，等价于在第0个元素前添加
    public void addAtHead(int val) {
        addAtIndex(0, val);
    }

    //在链表的最后插入一个节点，等价于在(末尾+1)个元素前添加
    public void addAtTail(int val) {
        addAtIndex(size, val);
    }

    // 在第 index 个节点之前插入一个新节点，例如index为0，那么新插入的节点为链表的新头节点。
    // 如果 index 等于链表的长度，则说明是新插入的节点为链表的尾结点
    // 如果 index 大于链表的长度，则返回空
    public void addAtIndex(int index, int val) {
        if (index &gt; size) {
            return;
        }
        if (index &lt; 0) {
            index = 0;
        }
        size++;
        //找到要插入节点的前驱
        ListNode pred = head;
        for (int i = 0; i &lt; index; i++) {
            pred = pred.next;
        }
        ListNode toAdd = new ListNode(val);
        toAdd.next = pred.next;
        pred.next = toAdd;
    }

    //删除第index个节点
    public void deleteAtIndex(int index) {
        if (index &lt; 0 || index &gt;= size) {
            return;
        }
        size--;
        if (index == 0) {
            head = head.next;
	    return;
        }
        ListNode pred = head;
        for (int i = 0; i &lt; index ; i++) {
            pred = pred.next;
        }
        pred.next = pred.next.next;
    }
}

//双链表
class ListNode{
    int val;
    ListNode next,prev;
    ListNode() {};
    ListNode(int val){
        this.val = val;
    }
}


class MyLinkedList {  

    //记录链表中元素的数量
    int size;
    //记录链表的虚拟头结点和尾结点
    ListNode head,tail;
    
    public MyLinkedList() {
        //初始化操作
        this.size = 0;
        this.head = new ListNode(0);
        this.tail = new ListNode(0);
        //这一步非常关键，否则在加入头结点的操作中会出现null.next的错误！！！
        head.next=tail;
        tail.prev=head;
    }
    
    public int get(int index) {
        //判断index是否有效
        if(index&lt;0 || index&gt;=size){
            return -1;
        }
        ListNode cur = this.head;
        //判断是哪一边遍历时间更短
        if(index &gt;= size / 2){
            //tail开始
            cur = tail;
            for(int i=0; i&lt; size-index; i++){
                cur = cur.prev;
            }
        }else{
            for(int i=0; i&lt;= index; i++){
                cur = cur.next; 
            }
        }
        return cur.val;
    }
    
    public void addAtHead(int val) {
        //等价于在第0个元素前添加
        addAtIndex(0,val);
    }
    
    public void addAtTail(int val) {
        //等价于在最后一个元素(null)前添加
        addAtIndex(size,val);
    }
    
    public void addAtIndex(int index, int val) {
        //index大于链表长度
        if(index&gt;size){
            return;
        }
        //index小于0
        if(index&lt;0){
            index = 0;
        }
        size++;
        //找到前驱
        ListNode pre = this.head;
        for(int i=0; i&lt;index; i++){
            pre = pre.next;
        }
        //新建结点
        ListNode newNode = new ListNode(val);
        newNode.next = pre.next;
        pre.next.prev = newNode;
        newNode.prev = pre;
        pre.next = newNode;
        
    }
    
    public void deleteAtIndex(int index) {
        //判断索引是否有效
        if(index&lt;0 || index&gt;=size){
            return;
        }
        //删除操作
        size--;
        ListNode pre = this.head;
        for(int i=0; i&lt;index; i++){
            pre = pre.next;
        }
        pre.next.next.prev = pre;
        pre.next = pre.next.next;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python：</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>（版本一）单链表法
<span class="token keyword">class</span> <span class="token class-name">ListNode</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> val<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">next</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>val <span class="token operator">=</span> val
        self<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> <span class="token builtin">next</span>
        
<span class="token keyword">class</span> <span class="token class-name">MyLinkedList</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>dummy_head <span class="token operator">=</span> ListNode<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> index<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">or</span> index <span class="token operator">&gt;=</span> self<span class="token punctuation">.</span>size<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
        
        current <span class="token operator">=</span> self<span class="token punctuation">.</span>dummy_head<span class="token punctuation">.</span><span class="token builtin">next</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">:</span>
            current <span class="token operator">=</span> current<span class="token punctuation">.</span><span class="token builtin">next</span>
            
        <span class="token keyword">return</span> current<span class="token punctuation">.</span>val

    <span class="token keyword">def</span> <span class="token function">addAtHead</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> val<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>dummy_head<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> ListNode<span class="token punctuation">(</span>val<span class="token punctuation">,</span> self<span class="token punctuation">.</span>dummy_head<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>size <span class="token operator">+=</span> <span class="token number">1</span>

    <span class="token keyword">def</span> <span class="token function">addAtTail</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> val<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        current <span class="token operator">=</span> self<span class="token punctuation">.</span>dummy_head
        <span class="token keyword">while</span> current<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">:</span>
            current <span class="token operator">=</span> current<span class="token punctuation">.</span><span class="token builtin">next</span>
        current<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> ListNode<span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>size <span class="token operator">+=</span> <span class="token number">1</span>

    <span class="token keyword">def</span> <span class="token function">addAtIndex</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> index<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> val<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">or</span> index <span class="token operator">&gt;</span> self<span class="token punctuation">.</span>size<span class="token punctuation">:</span>
            <span class="token keyword">return</span>
        
        current <span class="token operator">=</span> self<span class="token punctuation">.</span>dummy_head
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">:</span>
            current <span class="token operator">=</span> current<span class="token punctuation">.</span><span class="token builtin">next</span>
        current<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> ListNode<span class="token punctuation">(</span>val<span class="token punctuation">,</span> current<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>size <span class="token operator">+=</span> <span class="token number">1</span>

    <span class="token keyword">def</span> <span class="token function">deleteAtIndex</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> index<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">or</span> index <span class="token operator">&gt;=</span> self<span class="token punctuation">.</span>size<span class="token punctuation">:</span>
            <span class="token keyword">return</span>
        
        current <span class="token operator">=</span> self<span class="token punctuation">.</span>dummy_head
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">:</span>
            current <span class="token operator">=</span> current<span class="token punctuation">.</span><span class="token builtin">next</span>
        current<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> current<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">.</span><span class="token builtin">next</span>
        self<span class="token punctuation">.</span>size <span class="token operator">-=</span> <span class="token number">1</span>


<span class="token comment"># Your MyLinkedList object will be instantiated and called as such:</span>
<span class="token comment"># obj = MyLinkedList()</span>
<span class="token comment"># param_1 = obj.get(index)</span>
<span class="token comment"># obj.addAtHead(val)</span>
<span class="token comment"># obj.addAtTail(val)</span>
<span class="token comment"># obj.addAtIndex(index,val)</span>
<span class="token comment"># obj.deleteAtIndex(index)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>（版本二）双链表法
<span class="token keyword">class</span> <span class="token class-name">ListNode</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> val<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> prev<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token builtin">next</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>val <span class="token operator">=</span> val
        self<span class="token punctuation">.</span>prev <span class="token operator">=</span> prev
        self<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> <span class="token builtin">next</span>

<span class="token keyword">class</span> <span class="token class-name">MyLinkedList</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token boolean">None</span>
        self<span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token boolean">None</span>
        self<span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> index<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">or</span> index <span class="token operator">&gt;=</span> self<span class="token punctuation">.</span>size<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
        
        <span class="token keyword">if</span> index <span class="token operator">&lt;</span> self<span class="token punctuation">.</span>size <span class="token operator">//</span> <span class="token number">2</span><span class="token punctuation">:</span>
            current <span class="token operator">=</span> self<span class="token punctuation">.</span>head
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">:</span>
                current <span class="token operator">=</span> current<span class="token punctuation">.</span><span class="token builtin">next</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            current <span class="token operator">=</span> self<span class="token punctuation">.</span>tail
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>size <span class="token operator">-</span> index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                current <span class="token operator">=</span> current<span class="token punctuation">.</span>prev
                
        <span class="token keyword">return</span> current<span class="token punctuation">.</span>val

    <span class="token keyword">def</span> <span class="token function">addAtHead</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> val<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        new_node <span class="token operator">=</span> ListNode<span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>head<span class="token punctuation">)</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>head<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>head<span class="token punctuation">.</span>prev <span class="token operator">=</span> new_node
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>tail <span class="token operator">=</span> new_node
        self<span class="token punctuation">.</span>head <span class="token operator">=</span> new_node
        self<span class="token punctuation">.</span>size <span class="token operator">+=</span> <span class="token number">1</span>

    <span class="token keyword">def</span> <span class="token function">addAtTail</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> val<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        new_node <span class="token operator">=</span> ListNode<span class="token punctuation">(</span>val<span class="token punctuation">,</span> self<span class="token punctuation">.</span>tail<span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>tail<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>tail<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> new_node
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>head <span class="token operator">=</span> new_node
        self<span class="token punctuation">.</span>tail <span class="token operator">=</span> new_node
        self<span class="token punctuation">.</span>size <span class="token operator">+=</span> <span class="token number">1</span>

    <span class="token keyword">def</span> <span class="token function">addAtIndex</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> index<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> val<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">or</span> index <span class="token operator">&gt;</span> self<span class="token punctuation">.</span>size<span class="token punctuation">:</span>
            <span class="token keyword">return</span>
        
        <span class="token keyword">if</span> index <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>addAtHead<span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        <span class="token keyword">elif</span> index <span class="token operator">==</span> self<span class="token punctuation">.</span>size<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>addAtTail<span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> index <span class="token operator">&lt;</span> self<span class="token punctuation">.</span>size <span class="token operator">//</span> <span class="token number">2</span><span class="token punctuation">:</span>
                current <span class="token operator">=</span> self<span class="token punctuation">.</span>head
                <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                    current <span class="token operator">=</span> current<span class="token punctuation">.</span><span class="token builtin">next</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                current <span class="token operator">=</span> self<span class="token punctuation">.</span>tail
                <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>size <span class="token operator">-</span> index<span class="token punctuation">)</span><span class="token punctuation">:</span>
                    current <span class="token operator">=</span> current<span class="token punctuation">.</span>prev
            new_node <span class="token operator">=</span> ListNode<span class="token punctuation">(</span>val<span class="token punctuation">,</span> current<span class="token punctuation">,</span> current<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">)</span>
            current<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> new_node
            current<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> new_node
            self<span class="token punctuation">.</span>size <span class="token operator">+=</span> <span class="token number">1</span>

    <span class="token keyword">def</span> <span class="token function">deleteAtIndex</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> index<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">or</span> index <span class="token operator">&gt;=</span> self<span class="token punctuation">.</span>size<span class="token punctuation">:</span>
            <span class="token keyword">return</span>
        
        <span class="token keyword">if</span> index <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>head <span class="token operator">=</span> self<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token builtin">next</span>
            <span class="token keyword">if</span> self<span class="token punctuation">.</span>head<span class="token punctuation">:</span>
                self<span class="token punctuation">.</span>head<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token boolean">None</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                self<span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token boolean">None</span>
        <span class="token keyword">elif</span> index <span class="token operator">==</span> self<span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>tail <span class="token operator">=</span> self<span class="token punctuation">.</span>tail<span class="token punctuation">.</span>prev
            <span class="token keyword">if</span> self<span class="token punctuation">.</span>tail<span class="token punctuation">:</span>
                self<span class="token punctuation">.</span>tail<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> <span class="token boolean">None</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                self<span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token boolean">None</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> index <span class="token operator">&lt;</span> self<span class="token punctuation">.</span>size <span class="token operator">//</span> <span class="token number">2</span><span class="token punctuation">:</span>
                current <span class="token operator">=</span> self<span class="token punctuation">.</span>head
                <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">:</span>
                    current <span class="token operator">=</span> current<span class="token punctuation">.</span><span class="token builtin">next</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                current <span class="token operator">=</span> self<span class="token punctuation">.</span>tail
                <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>size <span class="token operator">-</span> index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                    current <span class="token operator">=</span> current<span class="token punctuation">.</span>prev
            current<span class="token punctuation">.</span>prev<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> current<span class="token punctuation">.</span><span class="token builtin">next</span>
            current<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> current<span class="token punctuation">.</span>prev
        self<span class="token punctuation">.</span>size <span class="token operator">-=</span> <span class="token number">1</span>



<span class="token comment"># Your MyLinkedList object will be instantiated and called as such:</span>
<span class="token comment"># obj = MyLinkedList()</span>
<span class="token comment"># param_1 = obj.get(index)</span>
<span class="token comment"># obj.addAtHead(val)</span>
<span class="token comment"># obj.addAtTail(val)</span>
<span class="token comment"># obj.addAtIndex(index,val)</span>
<span class="token comment"># obj.deleteAtIndex(index)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go：</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//单链表实现</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> SingleNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Val  <span class="token builtin">int</span>         <span class="token comment">// 节点的值</span>
	Next <span class="token operator">*</span>SingleNode <span class="token comment">// 下一个节点的指针</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> MyLinkedList <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	dummyHead <span class="token operator">*</span>SingleNode <span class="token comment">// 虚拟头节点</span>
	Size      <span class="token builtin">int</span>         <span class="token comment">// 链表大小</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	list <span class="token operator">:=</span> <span class="token function">Constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">// 初始化链表</span>
	list<span class="token punctuation">.</span><span class="token function">AddAtHead</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>       <span class="token comment">// 在头部添加元素</span>
	list<span class="token punctuation">.</span><span class="token function">AddAtTail</span><span class="token punctuation">(</span><span class="token number">242</span><span class="token punctuation">)</span>       <span class="token comment">// 在尾部添加元素</span>
	list<span class="token punctuation">.</span><span class="token function">AddAtTail</span><span class="token punctuation">(</span><span class="token number">777</span><span class="token punctuation">)</span>       <span class="token comment">// 在尾部添加元素</span>
	list<span class="token punctuation">.</span><span class="token function">AddAtIndex</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">99999</span><span class="token punctuation">)</span> <span class="token comment">// 在指定位置添加元素</span>
	list<span class="token punctuation">.</span><span class="token function">printLinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">// 打印链表</span>
<span class="token punctuation">}</span>

<span class="token comment">/** Initialize your data structure here. */</span>
<span class="token keyword">func</span> <span class="token function">Constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> MyLinkedList <span class="token punctuation">{</span>
	newNode <span class="token operator">:=</span> <span class="token operator">&amp;</span>SingleNode<span class="token punctuation">{</span> <span class="token comment">// 创建新节点</span>
		<span class="token operator">-</span><span class="token number">999</span><span class="token punctuation">,</span>
		<span class="token boolean">nil</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> MyLinkedList<span class="token punctuation">{</span> <span class="token comment">// 返回链表</span>
		dummyHead<span class="token punctuation">:</span> newNode<span class="token punctuation">,</span>
		Size<span class="token punctuation">:</span>      <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">/** Get the value of the index-th node in the linked list. If the index is
  invalid, return -1. */</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>MyLinkedList<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span>index <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token comment">/*if this != nil || index &lt; 0 || index &gt; this.Size {
		return -1
	}*/</span>
	<span class="token keyword">if</span> this <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">||</span> index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> this<span class="token punctuation">.</span>Size <span class="token punctuation">{</span> <span class="token comment">// 如果索引无效则返回-1</span>
		<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 让cur等于真正头节点</span>
	cur <span class="token operator">:=</span> this<span class="token punctuation">.</span>dummyHead<span class="token punctuation">.</span>Next   <span class="token comment">// 设置当前节点为真实头节点</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span> <span class="token comment">// 遍历到索引所在的节点</span>
		cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> cur<span class="token punctuation">.</span>Val <span class="token comment">// 返回节点值</span>
<span class="token punctuation">}</span>

<span class="token comment">/** Add a node of value val before the first element of the linked list. After
  the insertion, the new node will be the first node of the linked list. */</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>MyLinkedList<span class="token punctuation">)</span> <span class="token function">AddAtHead</span><span class="token punctuation">(</span>val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 以下两行代码可用一行代替</span>
	<span class="token comment">// newNode := new(SingleNode)</span>
	<span class="token comment">// newNode.Val = val</span>
	newNode <span class="token operator">:=</span> <span class="token operator">&amp;</span>SingleNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> val<span class="token punctuation">}</span>   <span class="token comment">// 创建新节点</span>
	newNode<span class="token punctuation">.</span>Next <span class="token operator">=</span> this<span class="token punctuation">.</span>dummyHead<span class="token punctuation">.</span>Next <span class="token comment">// 新节点指向当前头节点</span>
	this<span class="token punctuation">.</span>dummyHead<span class="token punctuation">.</span>Next <span class="token operator">=</span> newNode      <span class="token comment">// 新节点变为头节点</span>
	this<span class="token punctuation">.</span>Size<span class="token operator">++</span>                        <span class="token comment">// 链表大小增加1</span>
<span class="token punctuation">}</span>

<span class="token comment">/** Append a node of value val to the last element of the linked list. */</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>MyLinkedList<span class="token punctuation">)</span> <span class="token function">AddAtTail</span><span class="token punctuation">(</span>val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	newNode <span class="token operator">:=</span> <span class="token operator">&amp;</span>SingleNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> val<span class="token punctuation">}</span> <span class="token comment">// 创建新节点</span>
	cur <span class="token operator">:=</span> this<span class="token punctuation">.</span>dummyHead            <span class="token comment">// 设置当前节点为虚拟头节点</span>
	<span class="token keyword">for</span> cur<span class="token punctuation">.</span>Next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>            <span class="token comment">// 遍历到最后一个节点</span>
		cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next
	<span class="token punctuation">}</span>
	cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> newNode <span class="token comment">// 在尾部添加新节点</span>
	this<span class="token punctuation">.</span>Size<span class="token operator">++</span>        <span class="token comment">// 链表大小增加1</span>
<span class="token punctuation">}</span>

<span class="token comment">/** Add a node of value val before the index-th node in the linked list. If
  index equals to the length of linked list, the node will be appended to the
  end of linked list. If index is greater than the length, the node will not be
  inserted. */</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>MyLinkedList<span class="token punctuation">)</span> <span class="token function">AddAtIndex</span><span class="token punctuation">(</span>index <span class="token builtin">int</span><span class="token punctuation">,</span> val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span> <span class="token comment">// 如果索引小于0，设置为0</span>
		index <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> index <span class="token operator">&gt;</span> this<span class="token punctuation">.</span>Size <span class="token punctuation">{</span> <span class="token comment">// 如果索引大于链表长度，直接返回</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	newNode <span class="token operator">:=</span> <span class="token operator">&amp;</span>SingleNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> val<span class="token punctuation">}</span> <span class="token comment">// 创建新节点</span>
	cur <span class="token operator">:=</span> this<span class="token punctuation">.</span>dummyHead            <span class="token comment">// 设置当前节点为虚拟头节点</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>     <span class="token comment">// 遍历到指定索引的前一个节点</span>
		cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next
	<span class="token punctuation">}</span>
	newNode<span class="token punctuation">.</span>Next <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next <span class="token comment">// 新节点指向原索引节点</span>
	cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> newNode      <span class="token comment">// 原索引的前一个节点指向新节点</span>
	this<span class="token punctuation">.</span>Size<span class="token operator">++</span>             <span class="token comment">// 链表大小增加1</span>
<span class="token punctuation">}</span>

<span class="token comment">/** Delete the index-th node in the linked list, if the index is valid. */</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>MyLinkedList<span class="token punctuation">)</span> <span class="token function">DeleteAtIndex</span><span class="token punctuation">(</span>index <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> this<span class="token punctuation">.</span>Size <span class="token punctuation">{</span> <span class="token comment">// 如果索引无效则直接返回</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	cur <span class="token operator">:=</span> this<span class="token punctuation">.</span>dummyHead        <span class="token comment">// 设置当前节点为虚拟头节点</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span> <span class="token comment">// 遍历到要删除节点的前一个节点</span>
		cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> cur<span class="token punctuation">.</span>Next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Next <span class="token comment">// 当前节点直接指向下下个节点，即删除了下一个节点</span>
	<span class="token punctuation">}</span>
	this<span class="token punctuation">.</span>Size<span class="token operator">--</span> <span class="token comment">// 注意删除节点后应将链表大小减一</span>
<span class="token punctuation">}</span>

<span class="token comment">// 打印链表</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>list <span class="token operator">*</span>MyLinkedList<span class="token punctuation">)</span> <span class="token function">printLinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cur <span class="token operator">:=</span> list<span class="token punctuation">.</span>dummyHead <span class="token comment">// 设置当前节点为虚拟头节点</span>
	<span class="token keyword">for</span> cur<span class="token punctuation">.</span>Next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span> <span class="token comment">// 遍历链表</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Val<span class="token punctuation">)</span> <span class="token comment">// 打印节点值</span>
		cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next            <span class="token comment">// 切换到下一个节点</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//循环双链表</span>
<span class="token keyword">type</span> MyLinkedList <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	dummy <span class="token operator">*</span>Node
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Node <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Val  <span class="token builtin">int</span>
	Next <span class="token operator">*</span>Node
	Pre  <span class="token operator">*</span>Node
<span class="token punctuation">}</span>

<span class="token comment">//仅保存哑节点，pre-&gt; rear, next-&gt; head</span>
<span class="token comment">/** Initialize your data structure here. */</span>
<span class="token keyword">func</span> <span class="token function">Constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> MyLinkedList <span class="token punctuation">{</span>
	rear <span class="token operator">:=</span> <span class="token operator">&amp;</span>Node<span class="token punctuation">{</span>
		Val<span class="token punctuation">:</span>  <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
		Next<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span>
		Pre<span class="token punctuation">:</span>  <span class="token boolean">nil</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	rear<span class="token punctuation">.</span>Next <span class="token operator">=</span> rear
	rear<span class="token punctuation">.</span>Pre <span class="token operator">=</span> rear
	<span class="token keyword">return</span> MyLinkedList<span class="token punctuation">{</span>rear<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/** Get the value of the index-th node in the linked list. If the index is invalid, return -1. */</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>MyLinkedList<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span>index <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	head <span class="token operator">:=</span> this<span class="token punctuation">.</span>dummy<span class="token punctuation">.</span>Next
	<span class="token comment">//head == this, 遍历完全</span>
	<span class="token keyword">for</span> head <span class="token operator">!=</span> this<span class="token punctuation">.</span>dummy <span class="token operator">&amp;&amp;</span> index <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		index<span class="token operator">--</span>
		head <span class="token operator">=</span> head<span class="token punctuation">.</span>Next
	<span class="token punctuation">}</span>
	<span class="token comment">//否则, head == this, 索引无效</span>
	<span class="token keyword">if</span> <span class="token number">0</span> <span class="token operator">!=</span> index <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> head<span class="token punctuation">.</span>Val
<span class="token punctuation">}</span>

<span class="token comment">/** Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. */</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>MyLinkedList<span class="token punctuation">)</span> <span class="token function">AddAtHead</span><span class="token punctuation">(</span>val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	dummy <span class="token operator">:=</span> this<span class="token punctuation">.</span>dummy
	node <span class="token operator">:=</span> <span class="token operator">&amp;</span>Node<span class="token punctuation">{</span>
		Val<span class="token punctuation">:</span> val<span class="token punctuation">,</span>
		<span class="token comment">//head.Next指向原头节点</span>
		Next<span class="token punctuation">:</span> dummy<span class="token punctuation">.</span>Next<span class="token punctuation">,</span>
		<span class="token comment">//head.Pre 指向哑节点</span>
		Pre<span class="token punctuation">:</span> dummy<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//更新原头节点</span>
	dummy<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Pre <span class="token operator">=</span> node
	<span class="token comment">//更新哑节点</span>
	dummy<span class="token punctuation">.</span>Next <span class="token operator">=</span> node
	<span class="token comment">//以上两步不能反</span>
<span class="token punctuation">}</span>

<span class="token comment">/** Append a node of value val to the last element of the linked list. */</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>MyLinkedList<span class="token punctuation">)</span> <span class="token function">AddAtTail</span><span class="token punctuation">(</span>val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	dummy <span class="token operator">:=</span> this<span class="token punctuation">.</span>dummy
	rear <span class="token operator">:=</span> <span class="token operator">&amp;</span>Node<span class="token punctuation">{</span>
		Val<span class="token punctuation">:</span> val<span class="token punctuation">,</span>
		<span class="token comment">//rear.Next = dummy(哑节点)</span>
		Next<span class="token punctuation">:</span> dummy<span class="token punctuation">,</span>
		<span class="token comment">//rear.Pre = ori_rear</span>
		Pre<span class="token punctuation">:</span> dummy<span class="token punctuation">.</span>Pre<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//ori_rear.Next = rear</span>
	dummy<span class="token punctuation">.</span>Pre<span class="token punctuation">.</span>Next <span class="token operator">=</span> rear
	<span class="token comment">//update dummy</span>
	dummy<span class="token punctuation">.</span>Pre <span class="token operator">=</span> rear
	<span class="token comment">//以上两步不能反</span>
<span class="token punctuation">}</span>

<span class="token comment">/** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>MyLinkedList<span class="token punctuation">)</span> <span class="token function">AddAtIndex</span><span class="token punctuation">(</span>index <span class="token builtin">int</span><span class="token punctuation">,</span> val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	head <span class="token operator">:=</span> this<span class="token punctuation">.</span>dummy<span class="token punctuation">.</span>Next
	<span class="token comment">//head = MyLinkedList[index]</span>
	<span class="token keyword">for</span> head <span class="token operator">!=</span> this<span class="token punctuation">.</span>dummy <span class="token operator">&amp;&amp;</span> index <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		head <span class="token operator">=</span> head<span class="token punctuation">.</span>Next
		index<span class="token operator">--</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> index <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	node <span class="token operator">:=</span> <span class="token operator">&amp;</span>Node<span class="token punctuation">{</span>
		Val<span class="token punctuation">:</span> val<span class="token punctuation">,</span>
		<span class="token comment">//node.Next = MyLinkedList[index]</span>
		Next<span class="token punctuation">:</span> head<span class="token punctuation">,</span>
		<span class="token comment">//node.Pre = MyLinkedList[index-1]</span>
		Pre<span class="token punctuation">:</span> head<span class="token punctuation">.</span>Pre<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//MyLinkedList[index-1].Next = node</span>
	head<span class="token punctuation">.</span>Pre<span class="token punctuation">.</span>Next <span class="token operator">=</span> node
	<span class="token comment">//MyLinkedList[index].Pre = node</span>
	head<span class="token punctuation">.</span>Pre <span class="token operator">=</span> node
	<span class="token comment">//以上两步不能反</span>
<span class="token punctuation">}</span>

<span class="token comment">/** Delete the index-th node in the linked list, if the index is valid. */</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>MyLinkedList<span class="token punctuation">)</span> <span class="token function">DeleteAtIndex</span><span class="token punctuation">(</span>index <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//链表为空</span>
	<span class="token keyword">if</span> this<span class="token punctuation">.</span>dummy<span class="token punctuation">.</span>Next <span class="token operator">==</span> this<span class="token punctuation">.</span>dummy <span class="token punctuation">{</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	head <span class="token operator">:=</span> this<span class="token punctuation">.</span>dummy<span class="token punctuation">.</span>Next
	<span class="token comment">//head = MyLinkedList[index]</span>
	<span class="token keyword">for</span> head<span class="token punctuation">.</span>Next <span class="token operator">!=</span> this<span class="token punctuation">.</span>dummy <span class="token operator">&amp;&amp;</span> index <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		head <span class="token operator">=</span> head<span class="token punctuation">.</span>Next
		index<span class="token operator">--</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//验证index有效</span>
	<span class="token keyword">if</span> index <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token comment">//MyLinkedList[index].Pre = index[index-2]</span>
		head<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Pre <span class="token operator">=</span> head<span class="token punctuation">.</span>Pre
		<span class="token comment">//MyLinedList[index-2].Next = index[index]</span>
		head<span class="token punctuation">.</span>Pre<span class="token punctuation">.</span>Next <span class="token operator">=</span> head<span class="token punctuation">.</span>Next
		<span class="token comment">//以上两步顺序无所谓</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript:</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">class</span> <span class="token class-name">LinkNode</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Initialize your data structure here.
 * 单链表 储存头尾节点 和 节点数量
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">MyLinkedList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_tail <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">index</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyLinkedList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getNode</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_size<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// 创建虚拟头节点</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 0 -&gt; head</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>index<span class="token operator">--</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cur<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">MyLinkedList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_size<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取当前节点</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getNode</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyLinkedList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">addAtHead</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkNode</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_head <span class="token operator">=</span> node<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_size<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>_tail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_tail <span class="token operator">=</span> node<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Append a node of value val to the last element of the linked list. 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyLinkedList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">addAtTail</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkNode</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_size<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_tail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_tail<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_tail <span class="token operator">=</span> node<span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_tail <span class="token operator">=</span> node<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_head <span class="token operator">=</span> node<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">index</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyLinkedList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">addAtIndex</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_size<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addAtHead</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addAtTail</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 获取目标节点的上一个的节点</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getNode</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    node<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkNode</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> node<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_size<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">index</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyLinkedList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">deleteAtIndex</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_size<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token comment">// 如果删除的这个节点同时是尾节点，要处理尾节点</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_tail <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_head
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_size<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 获取目标节点的上一个的节点</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getNode</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
    node<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token comment">// 处理尾节点</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_tail <span class="token operator">=</span> node<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_size<span class="token operator">--</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// MyLinkedList.prototype.out = function() {</span>
<span class="token comment">//     let cur = this._head;</span>
<span class="token comment">//     const res = [];</span>
<span class="token comment">//     while(cur) {</span>
<span class="token comment">//         res.push(cur.val);</span>
<span class="token comment">//         cur = cur.next;</span>
<span class="token comment">//     }</span>
<span class="token comment">// };</span>
<span class="token doc-comment comment">/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript:</h3><div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre class="language-TypeScript"><code>class ListNode {
    public val: number;
    public next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

class MyLinkedList {
    // 记录链表长度
    private size: number;
    private head: ListNode | null;
    private tail: ListNode | null;
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    // 获取链表中第 index个节点的值
    get(index: number): number {
        // 索引无效的情况
        if (index &lt; 0 || index &gt;= this.size) {
            return -1;
        }
        let curNode = this.getNode(index);
        // 这里在前置条件下，理论上不会出现 null的情况
        return curNode.val;
    }

    // 在链表的第一个元素之前添加一个值为 val的节点。插入后，新节点将成为链表的第一个节点。
    addAtHead(val: number): void {
        let node: ListNode = new ListNode(val, this.head);
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    }

    // 将值为 val 的节点追加到链表的最后一个元素。
    addAtTail(val: number): void {
        let node: ListNode = new ListNode(val, null);
        if (this.tail) {
            this.tail.next = node;
        } else {
            // 还没有尾节点，说明一个节点都还没有
            this.head = node;
        }
        this.tail = node;
        this.size++;
    }

    // 在链表中的第 index个节点之前添加值为 val的节点。
    // 如果 index等于链表的长度，则该节点将附加到链表的末尾。如果 index大于链表长度，则不会插入节点。如果 index小于0，则在头部插入节点。
    addAtIndex(index: number, val: number): void {
        if (index === this.size) {
            this.addAtTail(val);
            return;
        }
        if (index &gt; this.size) {
            return;
        }
        // &lt;= 0 的情况都是在头部插入
        if (index &lt;= 0) {
            this.addAtHead(val);
            return;
        }
        // 正常情况
        // 获取插入位置的前一个 node
        let curNode = this.getNode(index - 1);
        let node: ListNode = new ListNode(val, curNode.next);
        curNode.next = node;
        this.size++;
    }

    // 如果索引 index有效，则删除链表中的第 index个节点。
    deleteAtIndex(index: number): void {
        if (index &lt; 0 || index &gt;= this.size) {
            return;
        }
        // 处理头节点
        if (index === 0) {
            this.head = this.head!.next;
            // 如果链表中只有一个元素，删除头节点后，需要处理尾节点
            if (index === this.size - 1) {
                this.tail = null
            }
            this.size--;
            return;
        }
        // 索引有效
        let curNode: ListNode = this.getNode(index - 1);
        curNode.next = curNode.next!.next;
        // 处理尾节点
        if (index === this.size - 1) {
            this.tail = curNode;
        }
        this.size--;
    }

    // 获取指定 Node节点
    private getNode(index: number): ListNode {
        // 这里不存在没办法获取到节点的情况，都已经在前置方法做过判断
        // 创建虚拟头节点
        let curNode: ListNode = new ListNode(0, this.head);
        for (let i = 0; i &lt;= index; i++) {
            // 理论上不会出现 null
            curNode = curNode.next!;
        }
        return curNode;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kotlin" tabindex="-1"><a class="header-anchor" href="#kotlin" aria-hidden="true">#</a> Kotlin:</h3><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">class</span> MyLinkedList <span class="token punctuation">{</span>

    <span class="token keyword">var</span> next<span class="token operator">:</span> ListNode<span class="token operator">?</span> <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">var</span> size<span class="token operator">:</span> Int <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">fun</span> <span class="token keyword">get</span><span class="token punctuation">(</span>index<span class="token operator">:</span> Int<span class="token punctuation">)</span><span class="token operator">:</span> Int <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&gt;</span> size<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
        <span class="token keyword">var</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>next
        <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">0</span> until index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cur <span class="token operator">=</span> cur<span class="token operator">?</span><span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> cur<span class="token operator">?</span><span class="token punctuation">.</span>\`<span class="token keyword">val</span>\` <span class="token operator">?:</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">fun</span> <span class="token function">addAtHead</span><span class="token punctuation">(</span>\`<span class="token keyword">val</span>\`<span class="token operator">:</span> Int<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">val</span> head <span class="token operator">=</span> <span class="token function">ListNode</span><span class="token punctuation">(</span>\`<span class="token keyword">val</span>\`<span class="token punctuation">)</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>next
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> head
        size<span class="token operator">++</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">fun</span> <span class="token function">addAtTail</span><span class="token punctuation">(</span>\`<span class="token keyword">val</span>\`<span class="token operator">:</span> Int<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">val</span> pre <span class="token operator">=</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        pre<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>next
        <span class="token keyword">var</span> cur<span class="token operator">:</span> ListNode<span class="token operator">?</span> <span class="token operator">=</span> pre
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token operator">?</span><span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>
        cur<span class="token operator">?</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">ListNode</span><span class="token punctuation">(</span>\`<span class="token keyword">val</span>\`<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">.</span>next
        size<span class="token operator">++</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">fun</span> <span class="token function">addAtIndex</span><span class="token punctuation">(</span>index<span class="token operator">:</span> Int<span class="token punctuation">,</span> \`<span class="token keyword">val</span>\`<span class="token operator">:</span> Int<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> size<span class="token punctuation">)</span> <span class="token keyword">return</span>
        <span class="token keyword">val</span> pre <span class="token operator">=</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        pre<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>next
        <span class="token keyword">var</span> cur<span class="token operator">:</span>ListNode<span class="token operator">?</span> <span class="token operator">=</span> pre
        <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">0</span> until index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cur <span class="token operator">=</span> cur<span class="token operator">?</span><span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>
        <span class="token keyword">val</span> temp <span class="token operator">=</span> cur<span class="token operator">?</span><span class="token punctuation">.</span>next
        cur<span class="token operator">?</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">ListNode</span><span class="token punctuation">(</span>\`<span class="token keyword">val</span>\`<span class="token punctuation">)</span>
        cur<span class="token operator">?</span><span class="token punctuation">.</span>next<span class="token operator">?</span><span class="token punctuation">.</span>next <span class="token operator">=</span> temp
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">.</span>next
        size<span class="token operator">++</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">fun</span> <span class="token function">deleteAtIndex</span><span class="token punctuation">(</span>index<span class="token operator">:</span> Int<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&gt;</span> size<span class="token punctuation">)</span> <span class="token keyword">return</span>
        <span class="token keyword">val</span> pre <span class="token operator">=</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        pre<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>next
        <span class="token keyword">var</span> cur<span class="token operator">:</span> ListNode<span class="token operator">?</span> <span class="token operator">=</span> pre
        <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">0</span> until index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cur <span class="token operator">=</span> cur<span class="token operator">?</span><span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>
        <span class="token keyword">val</span> temp <span class="token operator">=</span> cur<span class="token operator">?</span><span class="token punctuation">.</span>next<span class="token operator">?</span><span class="token punctuation">.</span>next
        cur<span class="token operator">?</span><span class="token punctuation">.</span>next<span class="token operator">?</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
        cur<span class="token operator">?</span><span class="token punctuation">.</span>next <span class="token operator">=</span> temp
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">.</span>next
        size<span class="token operator">--</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift:</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">MyLinkedList</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> dummyHead<span class="token punctuation">:</span> <span class="token class-name">ListNode</span><span class="token operator">&lt;</span><span class="token class-name">Int</span><span class="token operator">&gt;?</span>
    <span class="token keyword">var</span> size<span class="token punctuation">:</span> <span class="token class-name">Int</span>
    
    <span class="token keyword">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dummyHead <span class="token operator">=</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        size <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">func</span> <span class="token function-definition function">get</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> index<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> index <span class="token operator">&gt;=</span> size <span class="token operator">||</span> index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">var</span> curNode <span class="token operator">=</span> dummyHead<span class="token operator">?</span><span class="token punctuation">.</span>next
        <span class="token keyword">var</span> curIndex <span class="token operator">=</span> index
        
        <span class="token keyword">while</span> curIndex <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            curNode <span class="token operator">=</span> curNode<span class="token operator">?</span><span class="token punctuation">.</span>next
            curIndex <span class="token operator">-=</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">return</span> curNode<span class="token operator">?</span><span class="token punctuation">.</span>value <span class="token operator">??</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">func</span> <span class="token function-definition function">addAtHead</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> val<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> newHead <span class="token operator">=</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        newHead<span class="token punctuation">.</span>next <span class="token operator">=</span> dummyHead<span class="token operator">?</span><span class="token punctuation">.</span>next
        dummyHead<span class="token operator">?</span><span class="token punctuation">.</span>next <span class="token operator">=</span> newHead
        size <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">func</span> <span class="token function-definition function">addAtTail</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> val<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> newNode <span class="token operator">=</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        <span class="token keyword">var</span> curNode <span class="token operator">=</span> dummyHead
        <span class="token keyword">while</span> curNode<span class="token operator">?</span><span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token nil constant">nil</span> <span class="token punctuation">{</span>
            curNode <span class="token operator">=</span> curNode<span class="token operator">?</span><span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>
        
        curNode<span class="token operator">?</span><span class="token punctuation">.</span>next <span class="token operator">=</span> newNode
        size <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">func</span> <span class="token function-definition function">addAtIndex</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> index<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> <span class="token omit keyword">_</span> val<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> index <span class="token operator">&gt;</span> size <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">let</span> newNode <span class="token operator">=</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        <span class="token keyword">var</span> curNode <span class="token operator">=</span> dummyHead
        <span class="token keyword">var</span> curIndex <span class="token operator">=</span> index
      
        <span class="token keyword">while</span> curIndex <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            curNode <span class="token operator">=</span> curNode<span class="token operator">?</span><span class="token punctuation">.</span>next
            curIndex <span class="token operator">-=</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      
        newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> curNode<span class="token operator">?</span><span class="token punctuation">.</span>next
        curNode<span class="token operator">?</span><span class="token punctuation">.</span>next <span class="token operator">=</span> newNode
        size <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">func</span> <span class="token function-definition function">deleteAtIndex</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> index<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> index <span class="token operator">&gt;=</span> size <span class="token operator">||</span> index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">var</span> curNode <span class="token operator">=</span> dummyHead
        <span class="token keyword">for</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span> <span class="token number">0</span><span class="token operator">..&lt;</span>index <span class="token punctuation">{</span>
            curNode <span class="token operator">=</span> curNode<span class="token operator">?</span><span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>
        
        curNode<span class="token operator">?</span><span class="token punctuation">.</span>next <span class="token operator">=</span> curNode<span class="token operator">?</span><span class="token punctuation">.</span>next<span class="token operator">?</span><span class="token punctuation">.</span>next
        size <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala:</h3><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code><span class="token keyword">class</span> ListNode<span class="token punctuation">(</span>_x<span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> _next<span class="token operator">:</span> ListNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> next<span class="token operator">:</span> ListNode <span class="token operator">=</span> _next
  <span class="token keyword">var</span> x<span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> _x
<span class="token punctuation">}</span>

<span class="token keyword">class</span> MyLinkedList<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">var</span> size <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 链表尺寸</span>
  <span class="token keyword">var</span> dummy<span class="token operator">:</span> ListNode <span class="token operator">=</span> <span class="token keyword">new</span> ListNode<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 虚拟头节点</span>
  
  <span class="token comment">// 获取第index个节点的值</span>
  <span class="token keyword">def</span> get<span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> cur <span class="token operator">=</span> dummy
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> to <span class="token namespace">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    cur<span class="token punctuation">.</span>x <span class="token comment">// 返回cur的值</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 在链表最前面插入一个节点</span>
  <span class="token keyword">def</span> addAtHead<span class="token punctuation">(</span>\`<span class="token keyword">val</span>\`<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    addAtIndex<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> \`<span class="token keyword">val</span>\`<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 在链表最后面插入一个节点</span>
  <span class="token keyword">def</span> addAtTail<span class="token punctuation">(</span>\`<span class="token keyword">val</span>\`<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    addAtIndex<span class="token punctuation">(</span>size<span class="token punctuation">,</span> \`<span class="token keyword">val</span>\`<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 在第index个节点之前插入一个新节点</span>
  <span class="token comment">// 如果index等于链表长度，则说明新插入的节点是尾巴</span>
  <span class="token comment">// 如果index等于0，则说明新插入的节点是头</span>
  <span class="token comment">// 如果index&gt;链表长度，则说明为空</span>
  <span class="token keyword">def</span> addAtIndex<span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">,</span> \`<span class="token keyword">val</span>\`<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> loc <span class="token operator">=</span> index <span class="token comment">// 因为参数index是val不可变类型，所以需要赋值给一个可变类型</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      loc <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    size <span class="token operator">+=</span> <span class="token number">1</span> <span class="token comment">//链表尺寸+1</span>
    <span class="token keyword">var</span> pre <span class="token operator">=</span> dummy
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until loc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">val</span> node<span class="token operator">:</span> ListNode <span class="token operator">=</span> <span class="token keyword">new</span> ListNode<span class="token punctuation">(</span>\`<span class="token keyword">val</span>\`<span class="token punctuation">,</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
    pre<span class="token punctuation">.</span>next <span class="token operator">=</span> node
  <span class="token punctuation">}</span>
  <span class="token comment">// 删除第index个节点</span>
  <span class="token keyword">def</span> deleteAtIndex<span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    size <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token keyword">var</span> pre <span class="token operator">=</span> dummy
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    pre<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust:</h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#[derive(Debug)]</span>
<span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">MyLinkedList</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> val<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> next<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">MyLinkedList</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">impl</span> <span class="token class-name">MyLinkedList</span> <span class="token punctuation">{</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">Self</span> <span class="token punctuation">{</span>
        <span class="token comment">// 增加头节点</span>
        <span class="token class-name">MyLinkedList</span> <span class="token punctuation">{</span> val<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> next<span class="token punctuation">:</span> <span class="token class-name">None</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">fn</span> <span class="token function-definition function">get</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">,</span> index<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> cur <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token operator">=</span> cur <span class="token punctuation">{</span>
            <span class="token keyword">if</span> i <span class="token operator">==</span> index <span class="token punctuation">{</span>
                <span class="token keyword">return</span> node<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            cur <span class="token operator">=</span> <span class="token operator">&amp;</span>node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">fn</span> <span class="token function-definition function">add_at_head</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> val<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> new_node <span class="token operator">=</span> <span class="token class-name">Box</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">MyLinkedList</span> <span class="token punctuation">{</span>
            val<span class="token punctuation">,</span>
            next<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">.</span>next<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>new_node<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">fn</span> <span class="token function-definition function">add_at_tail</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> val<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> new_node <span class="token operator">=</span> <span class="token class-name">Box</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">MyLinkedList</span> <span class="token punctuation">{</span> val<span class="token punctuation">,</span> next<span class="token punctuation">:</span> <span class="token class-name">None</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> last_node <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token operator">=</span> last_node <span class="token punctuation">{</span>
            last_node <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token operator">*</span>last_node <span class="token operator">=</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>new_node<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">fn</span> <span class="token function-definition function">add_at_index</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> index<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span> val<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> index <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">add_at_head</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> <span class="token keyword">mut</span> cur <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token operator">=</span> cur <span class="token punctuation">{</span>
                <span class="token keyword">if</span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">==</span> index <span class="token punctuation">{</span>
                    <span class="token keyword">let</span> new_node <span class="token operator">=</span> <span class="token class-name">Box</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">MyLinkedList</span> <span class="token punctuation">{</span>
                        val<span class="token punctuation">,</span>
                        next<span class="token punctuation">:</span> node<span class="token punctuation">.</span>next<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    node<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>new_node<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                cur <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">fn</span> <span class="token function-definition function">delete_at_index</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> index<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> <span class="token keyword">mut</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> cur <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> i <span class="token operator">==</span> index <span class="token punctuation">{</span>
                cur<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span><span class="token function">as_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-1" tabindex="-1"><a class="header-anchor" href="#c-1" aria-hidden="true">#</a> C#</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>class ListNode
{
    public int val;
    public ListNode next;
    public ListNode(int val) { this.val = val; }
}
public class MyLinkedList
{
    ListNode dummyHead;
    int count;

    public MyLinkedList()
    {
        dummyHead = new ListNode(0);
        count = 0;
    }

    public int Get(int index)
    {
        if (index &lt; 0 || count &lt;= index) return -1;
        ListNode current = dummyHead;
        for (int i = 0; i &lt;= index; i++)
        {
            current = current.next;
        }
        return current.val;
    }

    public void AddAtHead(int val)
    {
        AddAtIndex(0, val);
    }

    public void AddAtTail(int val)
    {
        AddAtIndex(count, val);
    }

    public void AddAtIndex(int index, int val)
    {
        if (index &gt; count) return;
        index = Math.Max(0, index);
        count++;
        ListNode tmp1 = dummyHead;
        for (int i = 0; i &lt; index; i++)
        {
            tmp1 = tmp1.next;
        }
        ListNode tmp2 = new ListNode(val);
        tmp2.next = tmp1.next;
        tmp1.next = tmp2;
    }

    public void DeleteAtIndex(int index)
    {

        if (index &gt;= count || index &lt; 0) return;
        var tmp1 = dummyHead;
        for (int i = 0; i &lt; index; i++)
        {
            tmp1 = tmp1.next;
        }
        tmp1.next = tmp1.next.next;
        count--;

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35);function f(h,L){const a=p("ExternalLinkIcon");return l(),o("div",null,[d,u,n("p",null,[n("a",r,[s("力扣题目链接"),e(a)])]),k,n("p",null,[n("strong",null,[n("a",v,[s("《代码随想录》算法视频公开课"),e(a)]),s("："),n("a",m,[s("帮你把链表操作学个通透！LeetCode：707.设计链表"),e(a)]),s("，相信结合视频再看本篇题解，更有助于大家对本题的理解")]),s("。")]),b,n("p",null,[s("如果对链表的基础知识还不太懂，可以看这篇文章："),n("a",x,[s("关于链表，你该了解这些！"),e(a)])]),n("p",null,[s("如果对链表的虚拟头结点不清楚，可以看这篇文章："),n("a",y,[s("链表：听说用虚拟头节点会方便很多？"),e(a)])]),w])}const g=i(c,[["render",f],["__file","0707.shejilianbiao.html.vue"]]);export{g as default};
