# 陈晓辰 - 传统学术主页

一个传统的单页学术主页，采用经典的学术风格设计。

## 🌟 特性

- **传统单页设计**: 所有内容在一个页面中，简洁明了
- **经典学术风格**: 采用传统期刊论文的排版风格
- **Times字体**: 使用Times New Roman字体，符合学术规范
- **打印友好**: 针对打印进行了优化，适合制作纸质简历
- **极简功能**: 只保留最基本的交互功能

## 📁 项目结构

```
├── index.html          # 主页面文件
├── styles.css          # 样式文件
├── script.js           # JavaScript交互文件
└── README.md          # 项目说明文档
```

## 🚀 快速开始

1. **克隆或下载项目文件**
2. **直接打开 `index.html` 文件**，或者通过Web服务器访问
3. **开始自定义内容**

## ✏️ 自定义指南

### 基本信息修改

在 `index.html` 文件中修改以下内容：

#### 1. 个人信息
```html
<!-- 修改姓名 -->
<h1>您的姓名 <span class="name-english">Your Name</span></h1>

<!-- 修改职位 -->
<h2>您的职位</h2>

<!-- 修改个人简介 -->
<p class="hero-description">
    您的个人简介...
</p>
```

#### 2. 联系方式
```html
<!-- 修改邮箱 -->
<p>your.email@domain.com</p>

<!-- 修改工作单位 -->
<p>您的工作单位</p>
```

#### 3. 社交媒体链接
```html
<a href="mailto:your.email@domain.com" title="邮箱">
<a href="您的Google Scholar链接" title="Google Scholar">
<a href="您的GitHub链接" title="GitHub">
<a href="您的LinkedIn链接" title="LinkedIn">
```

### 研究方向定制

在研究方向部分添加或修改您的研究领域：

```html
<div class="research-card">
    <div class="research-icon">
        <i class="fas fa-您选择的图标"></i>
    </div>
    <h3>研究方向名称</h3>
    <p>研究方向描述...</p>
</div>
```

### 论文列表更新

添加您的论文信息：

```html
<div class="publication-item">
    <div class="publication-year">年份</div>
    <div class="publication-content">
        <h3>论文标题</h3>
        <p class="authors">作者列表（用<strong>标记您的姓名</strong>）</p>
        <p class="venue">发表期刊/会议</p>
        <div class="publication-stats">
            <span class="citations"><i class="fas fa-quote-right"></i> X次引用</span>
            <a href="PDF链接" class="publication-link">PDF</a>
            <a href="代码链接" class="publication-link">代码</a>
        </div>
    </div>
</div>
```

### 个人照片替换

将个人照片上传到项目目录，然后修改：

```html
<img src="您的照片路径" alt="您的姓名">
```

### 统计数据更新

修改学术统计数据：

```html
<div class="stat-item">
    <h3>数字</h3>
    <p>统计项目名称</p>
</div>
```

## 🎨 样式定制

### 设计特点

该主页采用传统学术期刊的设计风格：

- **配色方案**: 纯黑白设计，简洁专业
- **字体**: Times New Roman，学术标准字体
- **布局**: 传统的左右分栏布局，照片在左，信息在右
- **排版**: 模仿学术期刊的排版风格
- **打印优化**: 完全针对打印进行了优化

### 内容结构

```
- 页面头部（个人信息 + 照片）
- 研究简介
- 教育背景
- 工作经历
- 研究兴趣
- 论文发表
```

## 📱 响应式设计

该主页已经包含完整的响应式设计：

- **桌面端**: 完整布局，所有功能
- **平板端**: 适配中等屏幕尺寸
- **手机端**: 移动端优化，汉堡菜单

## 🔧 高级功能

### 基本功能

- **邮箱复制**: 点击邮箱链接复制邮箱地址到剪贴板
- **打印优化**: 按Ctrl+P可以打印，样式已优化
- **响应式设计**: 在移动设备上自动调整布局

### 使用建议

1. **打印简历**: 该页面专门针对打印进行了优化，可以直接打印作为纸质简历
2. **在线展示**: 可以直接部署到GitHub Pages等平台作为在线简历
3. **PDF导出**: 通过浏览器的打印功能可以导出为PDF

## 🌐 部署指南

### GitHub Pages（推荐）

#### 快速部署步骤

1. **创建 GitHub 仓库**
   - 登录 GitHub，创建新仓库
   - 仓库名建议：`您的用户名.github.io`（这样可以直接通过 `https://您的用户名.github.io` 访问）
   - 设置为 Public（公开）

2. **上传文件到 GitHub**
   
   **方法 A：使用命令行**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 个人主页"
   git remote add origin https://github.com/您的用户名/仓库名.git
   git branch -M main
   git push -u origin main
   ```
   
   **方法 B：使用部署脚本（Windows）**
   - 双击运行 `deploy.bat` 脚本
   - 按照提示操作即可
   
   **方法 C：使用 GitHub Desktop**
   - 下载 GitHub Desktop：https://desktop.github.com/
   - 添加本地仓库并发布

3. **启用 GitHub Pages**
   - 进入仓库的 **Settings** → **Pages**
   - Source 选择：**Deploy from a branch**
   - Branch 选择：**main**，文件夹选择：**/ (root)**
   - 点击 **Save**

4. **访问您的网站**
   - 等待 1-5 分钟后访问：`https://您的用户名.github.io` 或 `https://您的用户名.github.io/仓库名`

#### 详细部署指南

查看 `GITHUB_PAGES_GUIDE.md` 获取完整的部署教程和常见问题解答。

### Netlify
1. 将文件拖拽到Netlify部署页面
2. 或连接GitHub仓库自动部署

### 其他服务器
直接将所有文件上传到Web服务器的根目录

## 📞 技术支持

如果您在使用过程中遇到任何问题：

1. 检查浏览器控制台是否有错误信息
2. 确保所有文件路径正确
3. 验证HTML标签是否正确闭合
4. 检查CSS选择器是否匹配

## 🔄 更新日志

- **v1.0.0**: 初始版本发布
  - 响应式设计
  - 现代化UI
  - 完整的学术内容结构
  - JavaScript交互功能

## 📄 许可证

本项目采用MIT许可证，您可以自由使用、修改和分发。

---

**祝您使用愉快！如有任何问题或建议，欢迎反馈。** 