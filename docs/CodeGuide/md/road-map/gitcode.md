---
title: Gitcode
lock: need
---

# Gitcode 使用

作者：小傅哥
<br/>博客：[https://bugstack.cn](https://bugstack.cn)

> 沉淀、分享、成长，让自己和他人都能有所收获！😄

## 一、前言

Gitcode 也是一个非常优秀的代码仓库管理工具，同时还他有很多其他功能。他是 CSDN 平台提供的仓库管理工具。也是非常不错的仓库。

- 仓库配置 SSH 参考：[https://bugstack.cn/md/road-map/git.html](https://bugstack.cn/md/road-map/git.html)

## 一、账号注册

- 官网：[https://gitcode.net](https://gitcode.net)
- 注册：[https://gitee.com/signup?redirect_to_url=%2F](https://gitee.com/signup?redirect_to_url=%2F)

<div align="center">
    <img src="https://bugstack.cn/images/roadmap/tutorial/roadmap-230708-01.png?raw=true" width="750px">
</div>

- 它的注册方式直接使用会跳转到 CSDN 直接使用即可。
- 注册后你就会有一个自己的 Gitee，如：[https://gitcode.com/fuzhengwei](https://gitcode.com/fuzhengwei)

## 二、仓库创建

### 1. 创建类型

<div align="center">
    <img src="https://bugstack.cn/images/roadmap/tutorial/roadmap-230708-02.png?raw=true" width="550px">
</div>

- 创建仓库，操作步骤与 Github 基本一致。
- 在新建项目的时候，同样也可以从其他仓库导入项目。

### 2. 创建操作

#### 2.1 创建项目

**创建选项**

<div align="center">
    <img src="https://bugstack.cn/images/roadmap/tutorial/roadmap-230708-03.png?raw=true" width="450px">
</div>

- 项目名称；也就是你最后的项目名称
- URL&标识：选择把项目创建到你的那个组织下，以及路径。一般路径和仓库名称最好保持一致。
- 项目介绍：描述这个项目的。
- 创建类型：你可以选择私有和公开。

**创建完成**

<div align="center">
    <img src="https://bugstack.cn/images/roadmap/tutorial/roadmap-230708-04.png?raw=true" width="550px">
</div>

- 示例：[https://gitcode.net/fuzhengwei/xfg-frame-ddd](https://gitcode.net/fuzhengwei/xfg-frame-ddd)

#### 2.2 创建组织

<div align="center">
    <img src="https://bugstack.cn/images/roadmap/tutorial/roadmap-230708-05.png?raw=true" width="450px">
</div>

- 组织相当于是一个额外的空间，而你是这个组织的管理者。它必须全局唯一。
- 之后你可以在创建项目的时候，选择到组织空间，这样项目就会创建到组织里了。
## 三、代码提交

代码提交到仓库，核心在于把本地代码和远程仓库关联起来。如果你是直接从远程仓库地址，检出到本地的，那么就不需要再次关联了。本场景适用于，你本地有代码库，需要首次提交到远程仓库中。

### 1. 创建本地仓库

<div align="center">
    <img src="https://bugstack.cn/images/roadmap/tutorial/roadmap-230708-06.png?raw=true" width="750px">
</div>

- 首先你需要打开 IntelliJ IDEA 工程，选择 VCS 创建一个本地仓库的Git仓库。Create Git Repository

### 2. 关联远程仓库

<div align="center">
    <img src="https://bugstack.cn/images/roadmap/tutorial/roadmap-230708-07.png?raw=true" width="750px">
</div>

- 打开你的 Gitee 仓库对应的项目，复制项目 HTTPS 地址，粘贴到 IntelliJ IDEA 项目的远程仓库配置中，点击 OK 即可。
- Manage Remotes 可以设置多个仓库，在push代码的时候，选择对应的地址提交即可。

### 3. 项目代码提交

#### 3.1 添加

<div align="center">
    <img src="https://bugstack.cn/images/roadmap/tutorial/roadmap-230708-08.png?raw=true" width="750px">
</div>

- 在工程上右键，把你需要提交的文件，选择 +Add 注意不要把一些不需要提交的文件，也提交上去。
- 你可以先创建一个 `Add to .gitignore` 它可以屏蔽掉一些不要的文件。—— 在 Github 创建工程的时候也有此文件。你也可以先更新 pull 拉取下来。

#### 3.2 提交

<div align="center">
    <img src="https://bugstack.cn/images/roadmap/tutorial/roadmap-230708-09.png?raw=true" width="750px">
</div>

- 提交代码快捷键：`Ctrl + K` - 提交到本地仓库

#### 3.3 推送

<div align="center">
    <img src="https://bugstack.cn/images/roadmap/tutorial/roadmap-230708-10.png?raw=true" width="750px">
</div>

- 推送代码快捷辑：`Ctrl + Shift + K` —— 提交到远程仓库

## 四、提交规范

**分支命名**：`日期_姓名首字母缩写_功能单词`，如：`230708_xfg_buildFramework`

**提交规范**：`作者，type: desc` 如：`小傅哥，fix：修复查询用户信息逻辑问题` *参考Commit message 规范*

```
# 主要type
feat:     增加新功能
fix:      修复bug

# 特殊type
docs:     只改动了文档相关的内容
style:    不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
build:    构造工具的或者外部依赖的改动，例如webpack，npm
refactor: 代码重构时使用
revert:   执行git revert打印的message

# 暂不使用type
test:     添加测试或者修改现有测试
perf:     提高性能的改动
ci:       与CI（持续集成服务）有关的改动
chore:    不修改src或者test的其余修改，例如构建过程或辅助工具的变动
```

---

**此外**，Github 是一个大宝藏，你可以通过检索，找到特别多的优质项目、代码、设计。如：[https://gitcode.net/fuzhengwei](https://gitcode.net/fuzhengwei)
