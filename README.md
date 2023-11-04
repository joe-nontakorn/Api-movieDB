# Api-movieDB
In the project directory, you can run:
## npm run dev
URL api in postman </br>
ดึงข้อมูลหนังทั้งหมด
### http://localhost:3000/watch/list? </br>
---
 ดึงรายละเอียดของหนังที่ดูตามรหัส
### http://localhost:3000/watch/list/:movieId?movieId
key = movieId ,value = movieId    //value ใส่ id หนังที่ต้องการค้นหา </br>
----
 ค้นหารายการหนังจากชื่อ
### http://localhost:3000/search
key = query ,value = Avengers    // value ใส่ชื่อหนังที่ต้องการค้นหา
