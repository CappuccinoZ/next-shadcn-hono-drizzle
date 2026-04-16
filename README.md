# Next.js + shadcn/ui + Hono + Drizzle Starter

## 快速开始
### 1. 环境依赖
- [Bun](https://bun.com/docs/installation)

### 2. 安装依赖
使用Bun安装依赖：
```bash
bun install
```

### 3. 启动开发服务器
运行以下命令启动开发服务器：
```bash
bun dev
```

启动成功后，您可以在浏览器中访问 http://localhost:3000 查看结果

## 项目配置
### 连接数据库
连接数据库使用Drizzle ORM，默认使用PostgreSQL数据库
- 编辑`.env`文件，设置连接变量`DATABASE_URL`
- 编辑`drizzle.config.ts`文件，配置Drizzle
- 编辑`store/schema.ts`文件，定义表的结构，运行以下命令推送更改：
```bash
bunx drizzle-kit push
```

### API接口
用Hono接管Next.js的API接口
- 编辑`server`文件夹
- 入口文件在`app/api/`文件夹下，默认导出GET和POST方法
