#!/bin/bash
if [ -f "./src/blogs/$1" ];then
    echo "文件已存在"
  else
    touch ./src/blogs/$1
    echo '---' >> ./src/blogs/$1
    echo id: $(cat /proc/sys/kernel/random/uuid) >> ./src/blogs/$1
    echo author: vtran >> ./src/blogs/$1
    echo title: '' >> ./src/blogs/$1
    echo desc: '' >> ./src/blogs/$1
    echo createDate: $(date +%Y-%m-%d" "%H:%M:%S) >> ./src/blogs/$1
    echo draft: true >> ./src/blogs/$1
    echo tags:  >> ./src/blogs/$1
    echo    "    - 'tag'" >> ./src/blogs/$1
    echo '---' >> ./src/blogs/$1
fi

