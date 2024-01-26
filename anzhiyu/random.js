var posts=["2024/01/26/hello-world/","2024/01/26/大数据应用与服务-阶段一-教程文档/","2024/01/26/MarkDown写法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };