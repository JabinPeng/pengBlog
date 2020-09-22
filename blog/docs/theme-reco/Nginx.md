---
title: CentOS7安装Nginx
date: 2020-09-21
---

## 1.下载Nginx安装包
1. 官网下载安装包
```
直接下载.tar.gz安装包，地址：https://nginx.org/en/download.html
```
<img :src="$withBase('/assets/image/nginx01.png')" alt="下载安装包">

2. 命令行下载安装包
```
  wget -c https://nginx.org/download/nginx-1.18.0.tar.gz
```

## 2.解压
```
// 解压
tar -zxvf nginx-1.18.0.tar.gz  
// 切换到nginx目录
cd nginx-1.18.0
```

## 3.配置
1.使用默认配置（推荐）
```
./configure
```
2.自定义配置（不推荐）

```
./configure \
--prefix=/usr/local/nginx \
--conf-path=/usr/local/nginx/conf/nginx.conf \
--pid-path=/usr/local/nginx/conf/nginx.pid \
--lock-path=/var/lock/nginx.lock \
--error-log-path=/var/log/nginx/error.log \
--http-log-path=/var/log/nginx/access.log \
--with-http_gzip_static_module \
--http-client-body-temp-path=/var/temp/nginx/client \
--http-proxy-temp-path=/var/temp/nginx/proxy \
--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \
--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \
--http-scgi-temp-path=/var/temp/nginx/scgi
注：将临时文件目录指定为/var/temp/nginx，需要在/var下创建temp及nginx目录
```

## 4.编译安装
```
make
make install
```
查找安装路径

```
whereis nginx
```
启动、停止nginx

```
cd /usr/local/nginx/sbin/
./nginx 
./nginx -s stop
./nginx -s quit
./nginx -s reload
./nginx -s quit:此方式停止步骤是待nginx进程处理任务完毕进行停止。
./nginx -s stop:此方式相当于先查出nginx进程id再使用kill命令强制杀掉进程。
```


