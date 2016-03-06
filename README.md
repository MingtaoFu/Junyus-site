# Junyun-s-site
The website of Junyu Huang

(git shell)git clone https://github.com/MingtaoFu/Junyus-site

(ruby shell)cd Junyus-site

(ruby shell)npm(或cnpm) install

(ruby shell)bower install

##开发/调试
(ruby shell)grunt serve   //保持运行，在编辑器中的更改，grunt会自动同步

项目完成一个更新之后，使用git提交：
(git shell)git add 修改的文件

(git shell)git commit -m "更新日志" //提交一个新版本

(git shell)git push //上传代码至github

##构建
(ruby shell)grunt build   

构建完毕后，成型作品放在 dist 目录中，将里面的内容复制进 EVERROCKET.github.io 的项目文件夹中，
同样使用上述“git三部曲”提交代码，网站内容将自动更新。

