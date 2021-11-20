--- 
  title: '关于 Vue 项目打包部署知识点总结'
  date: 2021-11-16
--- 
::: tip
使用Vue做前后端分离项目时，通常前端是单独部署，用户访问的也是前端项目地址，因此前端开发人员很有必要熟悉一下项目部署的流程与各类问题的解决办法了。
Vue项目打包部署本身不复杂，不过一些前端同学可能对服务器接触不多，部署过程中还是会遇到这样那样的问题。本文介绍一下使用nginx服务器代理前端项目的方法以及项目部署的相关问题，内容概览：
:::

<img src="https://www.zpzpup.com/assets/image/nginx/nginx01.png" alt="下载安装包">

# 一、准备工作——服务器和nginx使用
## 1. 准备一台服务器
我的是ubuntu系统，linux系统的操作都差不多。没有服务器怎么破？
如果你只是想体验一下，可以尝试各大厂的云服务器免费试用套餐，比如华为云免费试用，本文相关操作即是在华为云上完成的。
不过如果想时常练练手，我觉得可以购买一台云服务器，比如上面的华为云或者阿里云都还挺可靠。

## 2. nginx安装和启动
轻装简行，这部分不作过多赘述（毕竟网上相关教程一大堆），正常情况下仅需下面两个指令：

```
# 安装，安装完成后使用nginx -v检查，如果输出nginx的版本信息表明安装成功
sudo apt-get install nginx
# 启动
sudo service nginx start
```

启动后，正常情况下，直接访问 http://服务器ip 或 http://域名 （本文测试用的服务器没有配置域名，所以用ip，就本文而言，域名和ip没有太大区别）应该就能看到nginx服务器的默认页面了——如果访问不到，有可能是你的云服务器默认的http服务端口（80端口）没有对外开放，在服务器安全组配置一下即可。

## 3、 了解nginx: 修改nginx配置，让nginx服务器代理我们创建的文件

查看nginx的配置，linux系统下的配置文件通常会存放在/etc目录下，nginx的配置文件就在/etc/nginx文件夹，打开文件/etc/nginx/sites-available/default（nginx可以有多个配置文件，通常我们配置nginx也是修改这个文件）：

<img src="https://www.zpzpup.com/assets/image/nginx/nginx01.png" alt="下载安装包">

可以看到默认情况下，nginx代理的根目录是/var/www/html，输入 http://服务器ip会访问这个文件夹下的文件，会根据index的配置值来找默认访问的文件，比如index.html、index.htm之类。

我们可以更改root的值来修改nginx服务代理的文件夹：

### 1、创建文件夹/www，并创建index.html，写入"Hello world"字符串

```
mkdir /www
echo 'Hello world' > /www/index.html
```

### 2、修改root值为 /www
<img src="https://www.zpzpup.com/assets/image/nginx/nginx01.png" alt="下载安装包">


### 3、sudo nginx -t 检查nginx配置是否正确
<img src="https://www.zpzpup.com/assets/image/nginx/nginx01.png" alt="下载安装包">

### 4、加载nginx配置：sudo nginx -s reload
再次访问页面，发现页面内容已经变成了我们创建的index.html:
<img src="https://www.zpzpup.com/assets/image/nginx/nginx01.png" alt="下载安装包">
