# mysql-restful-api 的使用示例|example

## 步骤 | steps

### 迁出项目，安装依赖 | git clone && npm install

```
git clone https://github.com/postor/mysql-restful-api-example.git
cd mysql-restful-api-example
npm install
```

### 创建mysql表 | create mysql tables

```
mysql -uroot test < db.sql

```

### 生成文件 | generate code

```
node node_modules/mysql-restful-api/cli.js
prompt: path for generated restful files (restful):  (restful)
prompt: where your mysql hosts? (localhost):  (localhost)
prompt: on port? (3306):  (3306)
prompt: user? (root):  (root)
prompt: password? (empty):
prompt: database? (test):  (test)
prompt: charset? (utf8):  (utf8)
done! files generated in E:\study\mysql-restful-api-example\restful
```

### 应用文件 | use code

app.js

```
app.use('/restful',require('./restful/default-router'))
```

### 启动服务 | start service
```
npm run start
```

### 查看效果 | check result

打开 http://localhost:4000/restful/admin/

open http://localhost:4000/restful/admin/