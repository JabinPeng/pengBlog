---
title: CentOS7安装Nginx
date: 2020-09-21
---

## 1.下载Nginx安装包
1. 官网下载安装包
```
直接下载.tar.gz安装包，地址：https://nginx.org/en/download.html
```
<img src="https://www.zpzpup.com/assets/image/nginx/nginx01.png" alt="下载安装包">

2. 命令行下载安装包
```
  wget -c https://nginx.org/download/nginx-1.18.0.tar.gz // 可切换至 /usr 目录下载
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
<img src="https://www.zpzpup.com/assets/image/nginx/nginx02.png" alt="使用默认配置">

错误为：./configure: error: the HTTP rewrite module requires the PCRE library.

<img src="https://www.zpzpup.com/assets/image/nginx/nginx-err01.png" alt="错误">

安装pcre-devel解决问题

```
yum -y install pcre-devel
```
还有可能出现：

错误提示：
```
./configure: error: the HTTP cache module requires md5 functions
from OpenSSL library.   You can either disable the module by using
--without-http-cache option, or install the OpenSSL library into the system,
or build the OpenSSL library statically from the source with nginx by using
--with-http_ssl_module --with-openssl=<path> options.
```

解决办法：

```
yum -y install openssl openssl-devel
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
<img src="https://www.zpzpup.com/assets/image/nginx/nginx03.png">

<img src="https://www.zpzpup.com/assets/image/nginx/nginx04.png">

查找安装路径

```
whereis nginx
```
<img src="https://www.zpzpup.com/assets/image/nginx/nginx05.png">

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
<img src="https://www.zpzpup.com/assets/image/nginx/nginx06.png">

查询nginx进程：

```
ps aux|grep nginx
```

重启 nginx

1.先停止再启动（推荐）：
对 nginx 进行重启相当于先停止再启动，即先执行停止命令再执行启动命令。如下：

```
./nginx -s 
./nginx
```

<img src="https://www.zpzpup.com/assets/image/nginx/nginx09.png">

2.重新加载配置文件：
当 nginx的配置文件 nginx.conf 修改后，要想让配置生效需要重启 nginx，使用-s reload不用先停止 ngin x再启动 nginx 即可将配置信息在 nginx 中生效，如下：
./nginx -s reload

启动成功可以看到



## 5.开机自动启动
即在rc.local增加启动代码就可以了。

1.vi /etc/rc.local

2.i 进行修改

3.增加一行 /usr/local/nginx/sbin/nginx

4.Esc 退出编辑

5.:wq 报存退出

<img src="https://www.zpzpup.com/assets/image/nginx/nginx10.png">

6.设置执行权限：
chmod 755 rc.local